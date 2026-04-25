import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { ThreeSceneComponent } from '../../../../shared/components/three-scene/three-scene.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ThreeSceneComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  readonly metrics = [
    { valueKey: 'hero.metric1.value', labelKey: 'hero.metric1.label' },
    { valueKey: 'hero.metric2.value', labelKey: 'hero.metric2.label' },
    { valueKey: 'hero.metric3.value', labelKey: 'hero.metric3.label' },
  ];

  readonly consoleLines = ['hero.console.line1', 'hero.console.line2', 'hero.console.line3'];
  private animationContext?: { revert: () => void };

  constructor(
    private readonly gsapService: GsapService,
    private readonly elementRef: ElementRef<HTMLElement>,
    public readonly i18n: I18nService,
  ) {}

  ngAfterViewInit() {
    this.animationContext = this.gsapService.context(this.elementRef.nativeElement, () => {
      const gsap = this.gsapService.gsap;
      const q = gsap.utils.selector(this.elementRef.nativeElement);
      const timeline = gsap.timeline({ delay: 0.25 });

      timeline
        .from(q('.hero-kicker'), {
          opacity: 0,
          y: 18,
          duration: 0.55,
          ease: 'power3.out',
        })
        .from(
          q('.hero-title span'),
          {
            opacity: 0,
            y: 76,
            duration: 0.95,
            stagger: 0.12,
            ease: 'power4.out',
          },
          '-=0.15',
        )
        .from(
          q('.hero-subtitle, .hero-actions, .hero-metric'),
          {
            opacity: 0,
            y: 24,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.35',
        )
        .from(
          q('.hero-console'),
          {
            opacity: 0,
            x: 54,
            rotateY: -14,
            duration: 1,
            ease: 'power4.out',
          },
          '-=0.65',
        );

      gsap.to(q('.scan-line'), {
        yPercent: 220,
        repeat: -1,
        duration: 3.2,
        ease: 'none',
      });

      gsap.to(q('.pipeline-fill'), {
        scaleX: 1,
        repeat: -1,
        yoyo: true,
        duration: 2.4,
        ease: 'power2.inOut',
        transformOrigin: 'left center',
      });

      gsap.to(q('.signal-bar'), {
        scaleY: 0.35,
        repeat: -1,
        yoyo: true,
        stagger: 0.12,
        duration: 0.75,
        ease: 'sine.inOut',
        transformOrigin: 'bottom center',
      });
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }
}
