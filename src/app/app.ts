import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
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
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './features/home/components/hero/hero.component';
import { ServicesComponent } from './features/home/components/services/services.component';
import { WorksComponent } from './features/home/components/works/works.component';
import { TechStackComponent } from './features/home/components/tech-stack/tech-stack.component';
import { ContactComponent } from './features/home/components/contact/contact.component';
import { GsapService } from './core/services/gsap.service';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login.component';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ServicesComponent,
    WorksComponent,
    TechStackComponent,
    ContactComponent,
    DashboardComponent,
    LoginComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('siteCursor') private readonly siteCursor?: ElementRef<HTMLElement>;

  title = 'DEVORA';
  isDashboard = false;
  isLogin = false;

  private readonly hashScrollDelays = [0, 80, 260];
  private hashScrollTimers: number[] = [];
  private readonly hashChangeHandler = () => this.scheduleHashScroll();
  private cursorAnimationFrame?: number;
  private cursorX = 0;
  private cursorY = 0;
  private targetCursorX = 0;
  private targetCursorY = 0;
  private readonly pointerMoveHandler = (event: PointerEvent) => this.onPointerMove(event);
  private readonly pointerLeaveHandler = () => this.onPointerLeave();
  private readonly pointerDownHandler = () => this.siteCursor?.nativeElement.classList.add('pressed');
  private readonly pointerUpHandler = () => this.siteCursor?.nativeElement.classList.remove('pressed');

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly gsapService: GsapService,
    private readonly ngZone: NgZone,
    public readonly authService: AuthService,
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isDashboard = window.location.pathname.includes('dashboard');
      this.isLogin = window.location.pathname.includes('login');
    }
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.isDashboard || this.isLogin) return;

    this.scheduleHashScroll();
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

    if (this.cursorAnimationFrame) {
      window.cancelAnimationFrame(this.cursorAnimationFrame);
    }
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

    this.targetCursorX = event.clientX;
    this.targetCursorY = event.clientY;
    cursor.classList.add('visible');
    cursor.classList.toggle('interactive', this.isInteractiveTarget(event.target));
    this.scheduleCursorFrame();
  }

  private onPointerLeave() {
    this.siteCursor?.nativeElement.classList.remove('visible', 'interactive', 'pressed');
  }

  private scheduleCursorFrame() {
    if (this.cursorAnimationFrame) return;

    this.cursorAnimationFrame = window.requestAnimationFrame(() => {
      this.cursorAnimationFrame = undefined;
      this.updateCursorPosition();
    });
  }

  private updateCursorPosition() {
    const cursor = this.siteCursor?.nativeElement;
    if (!cursor) return;

    this.cursorX += (this.targetCursorX - this.cursorX) * 0.34;
    this.cursorY += (this.targetCursorY - this.cursorY) * 0.34;
    cursor.style.transform = `translate3d(${this.cursorX}px, ${this.cursorY}px, 0) translate(-50%, -50%)`;

    const distance = Math.hypot(this.targetCursorX - this.cursorX, this.targetCursorY - this.cursorY);
    if (distance > 0.25) {
      this.scheduleCursorFrame();
    }
  }

  private isInteractiveTarget(target: EventTarget | null) {
    return target instanceof Element && !!target.closest('a, button, input, select, textarea, [role="button"]');
  }

  private scheduleHashScroll() {
    this.hashScrollTimers.forEach((timer) => window.clearTimeout(timer));
    this.hashScrollTimers = this.hashScrollDelays.map((delay) =>
      window.setTimeout(() => {
        this.scrollToCurrentHash();
        this.gsapService.refreshScrollTriggers();
      }, delay),
    );
  }

  private scrollToCurrentHash() {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    const navbar = document.querySelector<HTMLElement>('app-navbar .navbar');
    const topOffset = navbar?.getBoundingClientRect().height ?? 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - topOffset;

    window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'auto' });
  }
}
