import { isPlatformBrowser } from '@angular/common';
import { Injectable, NgZone, PLATFORM_ID, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CursorService {
  readonly x = signal(0);
  readonly y = signal(0);
  readonly visible = signal(false);
  readonly interactive = signal(false);
  readonly pressed = signal(false);

  private readonly platformId = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);
  private isTracking = false;
  private animationFrameId = 0;
  private pendingPointer?: {
    x: number;
    y: number;
    interactive: boolean;
  };
  private readonly pointerMoveHandler = (event: PointerEvent) => this.onPointerMove(event);
  private readonly pointerLeaveHandler = () => this.runSignalUpdate(() => this.visible.set(false));
  private readonly pointerDownHandler = () => this.runSignalUpdate(() => this.pressed.set(true));
  private readonly pointerUpHandler = () => this.runSignalUpdate(() => this.pressed.set(false));

  startTracking() {
    if (!this.isBrowser() || this.isTracking || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    this.isTracking = true;
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('pointermove', this.pointerMoveHandler, { passive: true });
      window.addEventListener('pointerleave', this.pointerLeaveHandler);
      window.addEventListener('pointerdown', this.pointerDownHandler);
      window.addEventListener('pointerup', this.pointerUpHandler);
    });
  }

  stopTracking() {
    if (!this.isBrowser() || !this.isTracking) return;

    this.isTracking = false;
    window.removeEventListener('pointermove', this.pointerMoveHandler);
    window.removeEventListener('pointerleave', this.pointerLeaveHandler);
    window.removeEventListener('pointerdown', this.pointerDownHandler);
    window.removeEventListener('pointerup', this.pointerUpHandler);
    window.cancelAnimationFrame(this.animationFrameId);
    this.animationFrameId = 0;
  }

  private onPointerMove(event: PointerEvent) {
    this.pendingPointer = {
      x: event.clientX,
      y: event.clientY,
      interactive: this.isInteractiveTarget(event.target),
    };

    if (this.animationFrameId) return;

    this.animationFrameId = window.requestAnimationFrame(() => {
      const pointer = this.pendingPointer;
      this.pendingPointer = undefined;
      this.animationFrameId = 0;

      if (!pointer) return;

      this.runSignalUpdate(() => {
        this.x.set(pointer.x);
        this.y.set(pointer.y);
        this.visible.set(true);
        this.interactive.set(pointer.interactive);
      });
    });
  }

  private isInteractiveTarget(target: EventTarget | null) {
    return target instanceof Element && !!target.closest('a, button, input, select, textarea, [role="button"]');
  }

  private isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  private runSignalUpdate(update: () => void) {
    this.ngZone.run(update);
  }
}
