import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';

import { GsapService } from '../../core/services/gsap.service';
import { ScrollService } from '../../core/services/scroll.service';
import { FooterComponent } from '../../layout/footer/footer.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { BackToTopComponent } from '../../shared/components/back-to-top/back-to-top.component';
import { CursorComponent } from '../../shared/components/cursor/cursor.component';
import { FloatingCtaComponent } from '../../shared/components/floating-cta/floating-cta.component';
import { NoiseOverlayComponent } from '../../shared/components/noise-overlay/noise-overlay.component';
import { PulseGridComponent } from '../../shared/components/pulse-grid/pulse-grid.component';
import { SectionNavComponent } from '../../shared/components/section-nav/section-nav.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProcessComponent } from './components/process/process.component';
import { ServicesComponent } from './components/services/services.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { WorksComponent } from './components/works/works.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    WorksComponent,
    ServicesComponent,
    ProcessComponent,
    TechStackComponent,
    ContactComponent,
    FooterComponent,
    SectionNavComponent,
    FloatingCtaComponent,
    CursorComponent,

    PulseGridComponent,
    NoiseOverlayComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private readonly hashChangeHandler = () => this.scrollService.scheduleHashScroll(true);
  private readonly anchorClickHandler = (event: MouseEvent) =>
    this.scrollService.handleSamePageAnchorClick(event);

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly scrollService: ScrollService,
    private readonly gsapService: GsapService,
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.gsapService.scrollTrigger.defaults({
      scroller: '.snap-container',
    });

    this.scrollService.startTracking();
    this.scrollService.scheduleHashScroll();
    window.addEventListener('hashchange', this.hashChangeHandler);
    window.addEventListener('click', this.anchorClickHandler);
  }

  ngOnDestroy() {
    if (!isPlatformBrowser(this.platformId)) return;

    window.removeEventListener('hashchange', this.hashChangeHandler);
    window.removeEventListener('click', this.anchorClickHandler);
    this.scrollService.stopTracking();
  }
}
