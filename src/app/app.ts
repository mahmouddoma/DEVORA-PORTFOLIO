import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './features/home/components/hero/hero.component';
import { AboutComponent } from './features/home/components/about/about.component';
import { ServicesComponent } from './features/home/components/services/services.component';
import { WorksComponent } from './features/home/components/works/works.component';
import { TechStackComponent } from './features/home/components/tech-stack/tech-stack.component';
import { TestimonialsComponent } from './features/home/components/testimonials/testimonials.component';
import { ContactComponent } from './features/home/components/contact/contact.component';
import { GsapService } from './core/services/gsap.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    WorksComponent,
    TechStackComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit, OnDestroy {
  title = 'DEVORA';

  private readonly hashScrollDelays = [0, 80, 260];
  private hashScrollTimers: number[] = [];
  private readonly hashChangeHandler = () => this.scheduleHashScroll();

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly gsapService: GsapService,
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.scheduleHashScroll();
    window.addEventListener('hashchange', this.hashChangeHandler);
  }

  ngOnDestroy() {
    if (!isPlatformBrowser(this.platformId)) return;

    window.removeEventListener('hashchange', this.hashChangeHandler);
    this.hashScrollTimers.forEach((timer) => window.clearTimeout(timer));
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
