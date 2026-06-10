import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';

import { GsapService } from '../../core/services/gsap.service';

type RevealVariant = 'fade-up' | 'clip-left' | 'scale';

@Directive({
  selector: '[devReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() devReveal: RevealVariant = 'fade-up';

  private animationContext?: { revert: () => void };

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly gsapService: GsapService,
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId) || this.prefersReducedMotion()) return;

    this.animationContext = this.gsapService.context(this.elementRef.nativeElement, () => {
      this.gsapService.gsap.from(this.elementRef.nativeElement, {
        ...this.getVariantConfig(),
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'clipPath,opacity,transform',
        scrollTrigger: {
          trigger: this.elementRef.nativeElement,
          start: 'top 85%',
          once: true,
        },
      });
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }

  private getVariantConfig() {
    const variants: Record<
      RevealVariant,
      { opacity?: number; y?: number; clipPath?: string; scale?: number }
    > = {
      'fade-up': { opacity: 0, y: 40 },
      'clip-left': { clipPath: 'inset(0 100% 0 0)' },
      scale: { opacity: 0, scale: 0.92 },
    };

    return variants[this.devReveal];
  }

  private prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
