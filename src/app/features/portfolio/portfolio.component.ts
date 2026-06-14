import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

import { ScrollService } from '../../core/services/scroll.service';
import { ContactComponent } from '../home/components/contact/contact.component';
import { CybersecurityComponent } from '../home/components/cybersecurity/cybersecurity.component';
import { HeroComponent } from '../home/components/hero/hero.component';
import { ServicesComponent } from '../home/components/services/services.component';
import { TechStackComponent } from '../home/components/tech-stack/tech-stack.component';
import { WorksComponent } from '../home/components/works/works.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { BackToTopComponent } from '../../shared/components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    WorksComponent,
    ServicesComponent,
    CybersecurityComponent,
    TechStackComponent,
    ContactComponent,
    BackToTopComponent,
    FooterComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {
  @ViewChild('siteCursor') private readonly siteCursor?: ElementRef<HTMLElement>;

  private readonly hashChangeHandler = () => this.scheduleHashScroll(true);
  private readonly anchorClickHandler = (event: MouseEvent) =>
    this.scrollService.handleSamePageAnchorClick(event);
  private readonly pointerMoveHandler = (event: PointerEvent) => this.onPointerMove(event);
  private readonly pointerLeaveHandler = () => this.onPointerLeave();
  private readonly pointerDownHandler = () =>
    this.siteCursor?.nativeElement.classList.add('pressed');
  private readonly pointerUpHandler = () =>
    this.siteCursor?.nativeElement.classList.remove('pressed');

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly scrollService: ScrollService,
    private readonly ngZone: NgZone,
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.scheduleHashScroll();
    this.scrollService.startTracking();
    window.addEventListener('hashchange', this.hashChangeHandler);
    window.addEventListener('click', this.anchorClickHandler, { capture: true });
    this.setupSiteCursor();
  }

  ngOnDestroy() {
    if (!isPlatformBrowser(this.platformId)) return;

    window.removeEventListener('hashchange', this.hashChangeHandler);
    window.removeEventListener('click', this.anchorClickHandler, true);
    window.removeEventListener('pointermove', this.pointerMoveHandler);
    window.removeEventListener('pointerleave', this.pointerLeaveHandler);
    window.removeEventListener('pointerdown', this.pointerDownHandler);
    window.removeEventListener('pointerup', this.pointerUpHandler);
    this.scrollService.stopTracking();
  }

  private setupSiteCursor() {
    if (!window.matchMedia('(pointer: fine)').matches || !this.siteCursor) return;

    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('pointermove', this.pointerMoveHandler, { passive: true });
      window.addEventListener('pointerleave', this.pointerLeaveHandler);
      window.addEventListener('pointerdown', this.pointerDownHandler);
      window.addEventListener('pointerup', this.pointerUpHandler);
    });
  }

  private onPointerMove(event: PointerEvent) {
    const cursor = this.siteCursor?.nativeElement;
    if (!cursor) return;

    this.applyCursorPosition(event.clientX, event.clientY);
    cursor.classList.add('visible');
    cursor.classList.toggle('interactive', this.isInteractiveTarget(event.target));
  }

  private onPointerLeave() {
    this.siteCursor?.nativeElement.classList.remove('visible', 'interactive', 'pressed');
  }

  private applyCursorPosition(x: number, y: number) {
    const cursor = this.siteCursor?.nativeElement;
    if (!cursor) return;

    cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  }

  private isInteractiveTarget(target: EventTarget | null) {
    return (
      target instanceof Element &&
      !!target.closest('a, button, input, select, textarea, [role="button"]')
    );
  }

  private scheduleHashScroll(animate = false) {
    this.scrollService.scheduleHashScroll(animate);
  }
}
