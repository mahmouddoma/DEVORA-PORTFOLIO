import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID, signal } from '@angular/core';

import { GsapService } from './gsap.service';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly scrollY = signal(0);
  readonly direction = signal<'up' | 'down'>('down');
  readonly isPastViewport = signal(false);

  private readonly hashScrollDelays = [0, 80, 260];
  private hashScrollTimers: number[] = [];
  private previousScrollY = 0;
  private tracking = false;
  private readonly scrollHandler = () => this.updateScrollState();

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly gsapService: GsapService,
    private readonly ngZone: NgZone,
  ) {}

  startTracking() {
    if (!this.isBrowser() || this.tracking) return;

    this.tracking = true;
    this.updateScrollState();
    this.ngZone.runOutsideAngular(() => {
      const scroller = this.document.querySelector('.snap-container') || window;
      scroller.addEventListener('scroll', this.scrollHandler, { passive: true });
      window.addEventListener('resize', this.scrollHandler, { passive: true });
    });
  }

  stopTracking() {
    if (!this.isBrowser() || !this.tracking) return;

    this.tracking = false;
    const scroller = this.document.querySelector('.snap-container') || window;
    scroller.removeEventListener('scroll', this.scrollHandler);
    window.removeEventListener('resize', this.scrollHandler);
    this.hashScrollTimers.forEach((timer) => window.clearTimeout(timer));
    this.hashScrollTimers = [];
  }

  scheduleHashScroll(animate = false) {
    if (!this.isBrowser()) return;

    this.hashScrollTimers.forEach((timer) => window.clearTimeout(timer));
    this.hashScrollTimers = this.hashScrollDelays.map((delay) =>
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
    this.pushHash(targetId);
    this.scrollToElement(target, true);
    return true;
  }

  scrollToCurrentHash(animate: boolean) {
    if (!this.isBrowser()) return;

    const targetId = decodeURIComponent(window.location.hash.slice(1));
    if (!targetId) return;

    const target = this.document.getElementById(targetId);
    if (!target) return;

    this.scrollToElement(target, animate);
  }

  scrollToTop() {
    if (!this.isBrowser()) return;

    this.pushHash('top');
    const scroller = this.document.querySelector('.snap-container') || window;
    scroller.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToElement(target: HTMLElement, animate: boolean) {
    if (!this.isBrowser()) return;

    const scroller = this.document.querySelector('.snap-container');
    const navbar = this.document.querySelector<HTMLElement>('app-navbar .navbar');
    const topOffset = navbar?.getBoundingClientRect().height ?? 0;
    
    let targetTop = 0;
    if (scroller) {
      targetTop = target.offsetTop - topOffset;
      scroller.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: animate ? 'smooth' : 'auto',
      });
    } else {
      targetTop = target.getBoundingClientRect().top + window.scrollY - topOffset;
      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: animate ? 'smooth' : 'auto',
      });
    }
  }

  getHomeSectionUrl(sectionId: string) {
    return `/${sectionId ? `#${sectionId}` : ''}`;
  }

  private updateScrollState() {
    if (!this.isBrowser()) return;

    const scroller = this.document.querySelector('.snap-container');
    const nextScrollY = scroller ? scroller.scrollTop : window.scrollY;
    
    this.direction.set(nextScrollY >= this.previousScrollY ? 'down' : 'up');
    this.previousScrollY = nextScrollY;
    this.scrollY.set(nextScrollY);
    this.isPastViewport.set(nextScrollY >= window.innerHeight);
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
