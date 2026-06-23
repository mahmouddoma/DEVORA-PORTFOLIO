import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { AppIconComponent } from '../../../../shared/components/app-icon/app-icon.component';
import { PortfolioLogoIconComponent } from '../../../../shared/components/portfolio-logo-icon/portfolio-logo-icon.component';

type CardDirection = 'left' | 'right' | 'top' | 'bottom';

const directionOffsets: Record<CardDirection, { readonly x: number; readonly y: number }> = {
  left: { x: -180, y: 0 },
  right: { x: 180, y: 0 },
  top: { x: 0, y: -150 },
  bottom: { x: 0, y: 150 },
};

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, AppIconComponent, PortfolioLogoIconComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements AfterViewInit, OnDestroy {
  private animationContext?: { revert: () => void };

  constructor(
    private readonly gsapService: GsapService,
    private readonly elementRef: ElementRef<HTMLElement>,
    public readonly i18n: I18nService,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.animationContext = this.gsapService.context(this.elementRef.nativeElement, () => {
      const gsap = this.gsapService.gsap;
      const grid = this.elementRef.nativeElement.querySelector<HTMLElement>('.bento-grid') ?? this.elementRef.nativeElement;
      const cards = Array.from(this.elementRef.nativeElement.querySelectorAll<HTMLElement>('.bento-card'));

      this.gsapService.sectionReveal(this.elementRef.nativeElement);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: grid,
          start: 'top 76%',
          once: true,
        },
      });

      cards.forEach((card, index) => {
        const direction = this.resolveCardDirection(card.dataset['enterFrom']);
        const offset = directionOffsets[direction];

        timeline.from(
          card,
          {
            opacity: 0,
            x: offset.x,
            y: offset.y,
            scale: 0.86,
            filter: 'blur(14px)',
            duration: 1.05,
            ease: 'power4.out',
            clearProps: 'transform,opacity,filter',
          },
          index === 0 ? 0 : '<0.08',
        );
      });
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }

  private resolveCardDirection(value: string | undefined): CardDirection {
    if (value === 'left' || value === 'right' || value === 'top' || value === 'bottom') {
      return value;
    }

    return 'bottom';
  }
}
