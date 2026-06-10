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

import { GsapService } from '../../core/services/gsap.service';
import { ScrollService } from '../../core/services/scroll.service';
import { ContactComponent } from '../home/components/contact/contact.component';
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

  private readonly hashScrollDelays = [0, 80, 260, 700, 1400, 2400];
  private readonly sectionScrollGap = 24;
  private hashScrollTimers: number[] = [];
  private readonly hashChangeHandler = () => this.scheduleHashScroll(true);
  private readonly pointerMoveHandler = (event: PointerEvent) => this.onPointerMove(event);
  private readonly pointerLeaveHandler = () => this.onPointerLeave();
  private readonly pointerDownHandler = () =>
    this.siteCursor?.nativeElement.classList.add('pressed');
  private readonly pointerUpHandler = () =>
    this.siteCursor?.nativeElement.classList.remove('pressed');

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly gsapService: GsapService,
    private readonly scrollService: ScrollService,
    private readonly ngZone: NgZone,
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.scheduleHashScroll();
    this.scrollService.startTracking();
    window.addEventListener('hashchange', this.hashChangeHandler);
    this.setupSiteCursor();
  }

  ngOnDestroy() {
    if (!isPlatformBrowser(this.platformId)) return;

    window.removeEventListener('hashchange', this.hashChangeHandler);
    window.removeEventListener('pointermove', this.pointerMoveHandler);
    window.removeEventListener('pointerleave', this.pointerLeaveHandler);
    window.removeEventListener('pointerdown', this.pointerDownHandler);
    window.removeEventListener('pointerup', this.pointerUpHandler);
    this.hashScrollTimers.forEach((timer) => window.clearTimeout(timer));
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
    this.hashScrollTimers.forEach((timer) => window.clearTimeout(timer));
    this.hashScrollTimers = this.hashScrollDelays.map((delay, index) =>
      window.setTimeout(() => {
        this.scrollToCurrentHash(animate && index === 0);
        this.gsapService.refreshScrollTriggers();
      }, delay),
    );
  }

  private scrollToCurrentHash(animateFirstScroll: boolean) {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    const navbar = document.querySelector<HTMLElement>('app-navbar .navbar');
    const topOffset = navbar?.getBoundingClientRect().height ?? 0;
    const targetViewportTop = topOffset + this.sectionScrollGap;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - targetViewportTop;
    const distanceFromExpectedTop = Math.abs(
      target.getBoundingClientRect().top - targetViewportTop,
    );

    if (distanceFromExpectedTop <= 8) return;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: animateFirstScroll ? 'smooth' : 'auto',
    });
  }
}
