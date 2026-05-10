import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

@Injectable({
  providedIn: 'root',
})
export class GsapService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    }
  }

  public get gsap() {
    return gsap;
  }

  public get scrollTrigger() {
    return ScrollTrigger;
  }

  public get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  public context(scope: Element, setup: () => void) {
    if (!this.isBrowser) return undefined;

    const context = gsap.context(setup, scope);
    window.requestAnimationFrame(() => ScrollTrigger.refresh());

    return context;
  }

  public refreshScrollTriggers() {
    if (!this.isBrowser) return;

    ScrollTrigger.refresh();
  }

  public scrollToY(y: number, config: gsap.TweenVars = {}) {
    if (!this.isBrowser) return undefined;

    return gsap.to(window, {
      duration: 1.05,
      ease: 'power3.inOut',
      overwrite: 'auto',
      scrollTo: {
        y: Math.max(y, 0),
        autoKill: true,
      },
      ...config,
    });
  }

  public reveal(element: any, config: gsap.TweenVars = {}) {
    if (!this.isBrowser) return;

    return gsap.from(element, {
      opacity: 0,
      y: 28,
      filter: 'blur(8px)',
      duration: 0.82,
      ease: 'power2.out',
      clearProps: 'filter,transform,opacity',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        once: true,
      },
      ...config,
    });
  }

  public sectionReveal(scope: Element, selector = '.motion-item') {
    if (!this.isBrowser) return;

    const items = scope.querySelectorAll(selector);
    if (!items.length) return;

    return gsap.from(items, {
      opacity: 0,
      y: 28,
      filter: 'blur(8px)',
      duration: 0.78,
      stagger: 0.08,
      ease: 'power2.out',
      clearProps: 'filter,transform,opacity',
      scrollTrigger: {
        trigger: scope,
        start: 'top 82%',
        once: true,
      },
    });
  }

  public tilt(element: any) {
    if (!this.isBrowser) return;

    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;

    el.addEventListener('mousemove', (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      gsap.to(el, {
        rotationY: x * 15,
        rotationX: -y * 15,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: 0.5,
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        rotationY: 0,
        rotationX: 0,
        ease: 'power2.out',
        duration: 0.5,
      });
    });
  }
}
