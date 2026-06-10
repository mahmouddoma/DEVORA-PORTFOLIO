import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { AppIconComponent, type AppIconName } from '../../../../shared/components/app-icon/app-icon.component';
import { ThreeSceneComponent } from '../../../../shared/components/three-scene/three-scene.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ThreeSceneComponent, AppIconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  readonly i18n = inject(I18nService);
  readonly isPageTourActive = signal(false);
  readonly metrics = [
    { valueKey: 'hero.metric1.value', labelKey: 'hero.metric1.label', icon: 'launch' },
    { valueKey: 'hero.metric2.value', labelKey: 'hero.metric2.label', icon: 'growth' },
    { valueKey: 'hero.metric3.value', labelKey: 'hero.metric3.label', icon: 'shield' },
  ] satisfies Array<{ valueKey: string; labelKey: string; icon: AppIconName }>;

  private readonly gsapService = inject(GsapService);
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly ngZone = inject(NgZone);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private animationContext?: { revert: () => void };
  private activeTourScroller?: HTMLElement;
  private activeTourSnapType = '';
  private activeTourScrollBehavior = '';
  private tourFrame = 0;
  private tourPauseTimer = 0;

  ngAfterViewInit() {
    this.animationContext = this.gsapService.context(this.elementRef.nativeElement, () => {
      const gsap = this.gsapService.gsap;
      const q = gsap.utils.selector(this.elementRef.nativeElement);
      /* 
      // Logo Animation Timeline - Disabled to use new CSS animation
      const logoTl = gsap.timeline({ delay: 0.4 });

      // 1. Arrow enters from left with a "light trail" feel
      logoTl.fromTo(
        q('.logo-arrow'),
        { x: -180, opacity: 0, strokeDashoffset: 600 },
        { x: 0, opacity: 1, strokeDashoffset: 0, duration: 0.9, ease: 'power3.out' },
      );

      // 2. Underscore appears like a typing cursor
      logoTl.to(
        q('.logo-underscore'),
        {
          opacity: 1,
          strokeDashoffset: 0,
          duration: 0.2,
        },
        '+=0.2',
      );

      // Cursor blink effect
      logoTl.to(q('.logo-underscore'), {
        opacity: 0,
        duration: 0.15,
        repeat: 3,
        yoyo: true,
        ease: 'none',
      });
      logoTl.set(q('.logo-underscore'), { opacity: 1 });

      // 3. Letters reveal one-by-one (D-E-V-O-R-A)
      const letters = q('.letter');
      letters.forEach((letter, i) => {
        logoTl.to(
          letter,
          {
            opacity: 1,
            strokeDashoffset: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onStart: () => {
              gsap.to(letter, { filter: 'blur(0px)', duration: 0.4 });
            },
          },
          i === 0 ? '+=0.1' : '-=0.4',
        );
      });

      // 4. Final Horizontal Light Sweep
      logoTl.set(q('.light-sweep'), { opacity: 0.8, x: -200 });
      logoTl.to(
        q('.light-sweep'),
        {
          x: 900,
          opacity: 0,
          duration: 1.4,
          ease: 'power2.inOut',
        },
        '+=0.4',
      );

      // 5. Global Glow Pulse
      logoTl.to(
        q('.reveal-svg'),
        {
          filter: 'drop-shadow(0 0 25px rgba(0, 240, 255, 0.7))',
          duration: 0.8,
          yoyo: true,
          repeat: 1,
          ease: 'sine.inOut',
        },
        '-=1.2',
      );
      */

      // Existing content entrance
      const timeline = gsap.timeline({ delay: 0.1 });
      timeline
        .fromTo(q('.hero-kicker'), 
          { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
          { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 0.8, ease: 'power4.out' }
        )
        .from(
          q('.hero-title span'),
          {
            opacity: 0,
            y: 110,
            duration: 1,
            stagger: 0.15,
            ease: 'power4.out',
          },
          '-=0.4',
        )
        .from(
          q('.hero-subtitle'),
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.6',
        )
        .from(
          q('.hero-actions a'),
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
          },
          '-=0.4',
        )
        .from(
          q('.hero-metric, .hero-proof'),
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.2',
        );
    });
  }

  playPageScrollTour() {
    if (!this.isBrowser() || this.isPageTourActive()) return;

    const scroller = this.getScroller();
    const maxScrollTop = this.getMaxScrollTop(scroller);
    if (maxScrollTop <= 0) return;

    const heroTop = this.getHeroTop(scroller);

    this.isPageTourActive.set(true);
    this.activeTourScroller = scroller;
    this.activeTourSnapType = scroller.style.scrollSnapType;
    this.activeTourScrollBehavior = scroller.style.scrollBehavior;
    scroller.style.scrollSnapType = 'none';
    scroller.style.scrollBehavior = 'auto';

    this.ngZone.runOutsideAngular(() => {
      const downDuration = this.getTourDuration(Math.abs(maxScrollTop - scroller.scrollTop), 'down');
      const upDuration = this.getTourDuration(Math.abs(maxScrollTop - heroTop), 'up');

      this.animateScroller(scroller, maxScrollTop, downDuration, () => {
        this.tourPauseTimer = window.setTimeout(() => {
          this.animateScroller(scroller, heroTop, upDuration, () => {
            this.restoreScrollSnap();
            this.ngZone.run(() => this.isPageTourActive.set(false));
          });
        }, 80);
      });
    });
  }

  ngOnDestroy() {
    if (this.isBrowser() && this.tourFrame) {
      window.cancelAnimationFrame(this.tourFrame);
    }

    if (this.isBrowser() && this.tourPauseTimer) {
      window.clearTimeout(this.tourPauseTimer);
    }

    this.restoreScrollSnap();
    this.animationContext?.revert();
  }

  private animateScroller(
    scroller: HTMLElement,
    targetTop: number,
    duration: number,
    onComplete: () => void,
  ) {
    const startTop = scroller.scrollTop;
    const distance = targetTop - startTop;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      scroller.scrollTop = startTop + distance * this.easeOutCubic(progress);

      if (progress < 1) {
        this.tourFrame = window.requestAnimationFrame(step);
        return;
      }

      this.tourFrame = 0;
      scroller.scrollTop = targetTop;
      onComplete();
    };

    step(startTime + 16);
  }

  private easeOutCubic(progress: number) {
    return 1 - Math.pow(1 - progress, 3);
  }

  private getScroller() {
    const scroller = this.document.querySelector<HTMLElement>('.snap-container');
    return scroller ?? this.document.documentElement;
  }

  private getMaxScrollTop(scroller: HTMLElement) {
    return Math.max(scroller.scrollHeight - scroller.clientHeight, 0);
  }

  private getHeroTop(scroller: HTMLElement) {
    return Math.max(this.elementRef.nativeElement.offsetTop - scroller.offsetTop, 0);
  }

  private getTourDuration(distance: number, direction: 'down' | 'up') {
    const speedFactor = direction === 'down' ? 0.32 : 0.24;
    const minDuration = direction === 'down' ? 720 : 560;
    const maxDuration = direction === 'down' ? 1900 : 1450;

    return Math.min(Math.max(distance * speedFactor, minDuration), maxDuration);
  }

  private restoreScrollSnap() {
    if (!this.activeTourScroller) return;

    this.activeTourScroller.style.scrollSnapType = this.activeTourSnapType;
    this.activeTourScroller.style.scrollBehavior = this.activeTourScrollBehavior;
    this.activeTourScroller = undefined;
    this.activeTourSnapType = '';
    this.activeTourScrollBehavior = '';
  }

  private isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
