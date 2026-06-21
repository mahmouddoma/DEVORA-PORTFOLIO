import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID, signal } from '@angular/core';

import { GsapService } from './gsap.service';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly scrollY = signal(0);
  readonly direction = signal<'up' | 'down'>('down');
  readonly isPastViewport = signal(false);

  private readonly hashScrollDelays = [0, 80, 260];
  private readonly sectionScrollGap = 24;
  private readonly scrollRestoreDelays = [0, 80, 260];
  private hashScrollTimers: number[] = [];
  private scrollRestoreTimers: number[] = [];
  private previousScrollY = 0;
  private tracking = false;
  private restoredScrollOnLoad = false;
  private pendingPersistScrollY = 0;
  private persistScrollFrame?: number;
  private activeScrollAnimation?: { kill: () => void };
  private readonly scrollHandler = () => this.updateScrollState();
  private readonly pageHideHandler = () => this.persistCurrentScrollPosition();

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly gsapService: GsapService,
    private readonly ngZone: NgZone,
  ) {}

  startTracking() {
    if (!this.isBrowser() || this.tracking) return;

    this.tracking = true;
    window.history.scrollRestoration = 'manual';

    const scroller = this.getScroller();
    this.restoreScrollPositionAfterReload(scroller);
    this.updateScrollState();

    this.ngZone.runOutsideAngular(() => {
      scroller.addEventListener('scroll', this.scrollHandler, { passive: true });
      window.addEventListener('resize', this.scrollHandler, { passive: true });
      window.addEventListener('pagehide', this.pageHideHandler, { passive: true });
    });
  }

  stopTracking() {
    if (!this.isBrowser() || !this.tracking) return;

    this.tracking = false;
    this.persistCurrentScrollPosition();

    const scroller = this.getScroller();
    scroller.removeEventListener('scroll', this.scrollHandler);
    window.removeEventListener('resize', this.scrollHandler);
    window.removeEventListener('pagehide', this.pageHideHandler);
    this.hashScrollTimers.forEach((timer) => window.clearTimeout(timer));
    this.scrollRestoreTimers.forEach((timer) => window.clearTimeout(timer));
    this.hashScrollTimers = [];
    this.scrollRestoreTimers = [];

    if (this.persistScrollFrame !== undefined) {
      window.cancelAnimationFrame(this.persistScrollFrame);
      this.persistScrollFrame = undefined;
    }
  }

  scheduleHashScroll(animate = false) {
    if (!this.isBrowser()) return;

    if (!animate && this.restoredScrollOnLoad) {
      this.restoredScrollOnLoad = false;
      this.gsapService.refreshScrollTriggers();
      return;
    }

    this.hashScrollTimers.forEach((timer) => window.clearTimeout(timer));
    const delays = animate ? [0] : this.hashScrollDelays;
    this.hashScrollTimers = delays.map((delay) =>
      window.setTimeout(() => {
        this.scrollToCurrentHash(animate);
        this.gsapService.refreshScrollTriggers();
      }, delay),
    );
  }

  handleSamePageAnchorClick(event: MouseEvent) {
    if (!this.shouldHandleClick(event)) return false;

    const link =
      event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
    if (!link || link.target) return false;

    const targetId = this.getSamePageHashId(link.href);
    if (!targetId) return false;

    const target = this.document.getElementById(targetId);
    if (!target) return false;

    event.preventDefault();
    return this.scrollToSection(targetId, true);
  }

  scrollToSection(sectionId: string, animate = true) {
    if (!this.isBrowser()) return false;

    const targetId = sectionId || 'top';
    const target = this.document.getElementById(targetId);
    if (!target) return false;

    this.pushHash(targetId);
    this.scrollToElement(target, animate);
    return true;
  }

  scrollToCurrentHash(animate: boolean) {
    if (!this.isBrowser()) return;

    const targetId = decodeURIComponent(window.location.hash.slice(1));
    if (!targetId) return;

    this.scrollToSection(targetId, animate);
  }

  scrollToTop() {
    if (!this.isBrowser()) return;

    if (this.scrollToSection('top', true)) return;

    this.pushHash('top');
    this.scrollToPosition(this.getScroller(), 0, true);
  }

  scrollToElement(target: HTMLElement, animate: boolean) {
    if (!this.isBrowser()) return;

    const scroller = this.document.querySelector<HTMLElement>('.snap-container');
    const navbar = this.document.querySelector<HTMLElement>('app-navbar .navbar');
    const topOffset = navbar?.getBoundingClientRect().height ?? 0;

    if (scroller) {
      this.scrollToPosition(scroller, target.offsetTop, animate);
      return;
    }

    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - topOffset - this.sectionScrollGap;
    this.scrollToPosition(window, targetTop, animate);
  }

  getHomeSectionUrl(sectionId: string) {
    return `/${sectionId ? `#${sectionId}` : ''}`;
  }

  private updateScrollState() {
    if (!this.isBrowser()) return;

    const nextScrollY = this.getCurrentScrollTop();

    this.direction.set(nextScrollY >= this.previousScrollY ? 'down' : 'up');
    this.previousScrollY = nextScrollY;
    this.scrollY.set(nextScrollY);
    this.isPastViewport.set(nextScrollY >= window.innerHeight);
    this.scheduleScrollPositionPersist(nextScrollY);
  }

  private scrollToPosition(scroller: HTMLElement | Window, top: number, animate: boolean) {
    const nextTop = Math.max(top, 0);
    this.activeScrollAnimation?.kill();
    this.activeScrollAnimation = undefined;

    if (!animate) {
      scroller.scrollTo({ top: nextTop, behavior: 'auto' });
      this.updateScrollState();
      return;
    }

    this.activeScrollAnimation = this.gsapService.gsap.to(scroller, {
      duration: 0.9,
      ease: 'power3.inOut',
      overwrite: true,
      scrollTo: {
        y: nextTop,
        autoKill: false,
      },
      onComplete: () => {
        this.activeScrollAnimation = undefined;
        this.updateScrollState();
      },
      onInterrupt: () => {
        this.activeScrollAnimation = undefined;
      },
    });
  }

  private restoreScrollPositionAfterReload(scroller: HTMLElement | Window) {
    if (!this.isReloadNavigation()) return;

    const savedScrollTop = this.readStoredScrollTop();
    if (savedScrollTop === null) return;

    this.restoredScrollOnLoad = true;
    this.scrollRestoreTimers.forEach((timer) => window.clearTimeout(timer));
    this.scrollRestoreTimers = this.scrollRestoreDelays.map((delay) =>
      window.setTimeout(() => {
        this.scrollToPosition(scroller, savedScrollTop, false);
        this.gsapService.refreshScrollTriggers();
      }, delay),
    );
  }

  private scheduleScrollPositionPersist(scrollTop: number) {
    this.pendingPersistScrollY = Math.max(scrollTop, 0);

    if (this.persistScrollFrame !== undefined) return;

    this.persistScrollFrame = window.requestAnimationFrame(() => {
      this.persistScrollFrame = undefined;
      this.persistScrollPosition(this.pendingPersistScrollY);
    });
  }

  private persistCurrentScrollPosition() {
    if (!this.isBrowser()) return;

    this.persistScrollPosition(this.getCurrentScrollTop());
  }

  private persistScrollPosition(scrollTop: number) {
    if (!this.isBrowser()) return;

    try {
      window.sessionStorage.setItem(this.getScrollStorageKey(), String(Math.max(scrollTop, 0)));
    } catch {
      // Ignore storage restrictions; scroll restoration is an enhancement.
    }
  }

  private readStoredScrollTop() {
    let storedValue: string | null;

    try {
      storedValue = window.sessionStorage.getItem(this.getScrollStorageKey());
    } catch {
      return null;
    }

    if (storedValue === null) return null;

    const scrollTop = Number(storedValue);
    return Number.isFinite(scrollTop) ? scrollTop : null;
  }

  private getCurrentScrollTop() {
    const scroller = this.document.querySelector<HTMLElement>('.snap-container');
    return scroller ? scroller.scrollTop : window.scrollY;
  }

  private getScroller(): HTMLElement | Window {
    return this.document.querySelector<HTMLElement>('.snap-container') ?? window;
  }

  private getScrollStorageKey() {
    return `devora-scroll:${window.location.pathname}${window.location.search}`;
  }

  private isReloadNavigation() {
    const [navigationEntry] = performance.getEntriesByType(
      'navigation',
    ) as PerformanceNavigationTiming[];

    return navigationEntry?.type === 'reload';
  }

  private shouldHandleClick(event: MouseEvent) {
    return (
      this.isBrowser() &&
      !event.defaultPrevented &&
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey
    );
  }

  private getSamePageHashId(href: string) {
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return '';

    return decodeURIComponent(url.hash.slice(1));
  }

  private pushHash(sectionId: string) {
    const hash = `#${sectionId}`;
    if (window.location.hash === hash) return;

    window.history.pushState(null, '', `${window.location.pathname}${window.location.search}${hash}`);
  }

  private isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}