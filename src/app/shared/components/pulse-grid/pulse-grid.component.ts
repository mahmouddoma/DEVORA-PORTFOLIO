import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-pulse-grid',
  standalone: true,
  templateUrl: './pulse-grid.component.html',
  styleUrl: './pulse-grid.component.css',
})
export class PulseGridComponent implements OnInit, OnDestroy {
  private readonly pointerHandler = (event: PointerEvent) => this.onPointerMove(event);

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly elementRef: ElementRef<HTMLElement>,
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    window.addEventListener('pointermove', this.pointerHandler, { passive: true });
  }

  ngOnDestroy() {
    if (!isPlatformBrowser(this.platformId)) return;

    window.removeEventListener('pointermove', this.pointerHandler);
  }

  private onPointerMove(event: PointerEvent) {
    const element = this.elementRef.nativeElement;
    element.style.setProperty('--pulse-x', `${event.clientX}px`);
    element.style.setProperty('--pulse-y', `${event.clientY}px`);
  }
}
