import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';

import { GsapService } from '../../core/services/gsap.service';

@Directive({
  selector: '[devMagnetic]',
  standalone: true,
})
export class MagneticDirective {
  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly gsapService: GsapService,
  ) {}

  @HostListener('mousemove', ['$event'])
  onMove(event: MouseEvent) {
    if (!this.canAnimate()) return;

    const element = this.elementRef.nativeElement;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    this.gsapService.gsap.to(element, {
      x: x * 0.24,
      y: y * 0.24,
      duration: 0.35,
      ease: 'power2.out',
      overwrite: true,
    });
  }

  @HostListener('mouseleave')
  onLeave() {
    if (!this.canAnimate()) return;

    this.gsapService.gsap.to(this.elementRef.nativeElement, {
      x: 0,
      y: 0,
      duration: 0.55,
      ease: 'elastic.out(1, 0.45)',
      overwrite: true,
    });
  }

  private canAnimate() {
    return (
      isPlatformBrowser(this.platformId) &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
