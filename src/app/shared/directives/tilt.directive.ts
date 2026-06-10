import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[devTilt]',
  standalone: true,
})
export class TiltDirective {
  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly elementRef: ElementRef<HTMLElement>,
  ) {}

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent) {
    if (!this.canAnimate()) return;

    const element = this.elementRef.nativeElement;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    element.style.setProperty('--tilt-x', `${(-y * 7).toFixed(2)}deg`);
    element.style.setProperty('--tilt-y', `${(x * 9).toFixed(2)}deg`);
    element.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    element.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }

  @HostListener('pointerleave')
  onPointerLeave() {
    const element = this.elementRef.nativeElement;
    element.style.setProperty('--tilt-x', '0deg');
    element.style.setProperty('--tilt-y', '0deg');
  }

  private canAnimate() {
    return (
      isPlatformBrowser(this.platformId) &&
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
