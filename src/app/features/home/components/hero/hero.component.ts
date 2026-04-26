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
      // Logo Animation Timeline
      const logoTl = gsap.timeline({ delay: 0.4 });

      // 1. Arrow enters from left with a "light trail" feel
      logoTl.fromTo(
        q('.logo-arrow'),
        { x: -180, opacity: 0, strokeDashoffset: 600 },
        { x: 0, opacity: 1, strokeDashoffset: 0, duration: 0.9, ease: 'power3.out' },
      );

      // 2. Underscore appears like a typing cursor
      logoTl.to(
        q('.logo-underscore'),
        {
          opacity: 1,
          strokeDashoffset: 0,
          duration: 0.2,
        },
        '+=0.2',
      );

      // Cursor blink effect
      logoTl.to(q('.logo-underscore'), {
        opacity: 0,
        duration: 0.15,
        repeat: 3,
        yoyo: true,
        ease: 'none',
      });
      logoTl.set(q('.logo-underscore'), { opacity: 1 });

      // 3. Letters reveal one-by-one (D-E-V-O-R-A)
      const letters = q('.letter');
      letters.forEach((letter, i) => {
        logoTl.to(
          letter,
          {
            opacity: 1,
            strokeDashoffset: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onStart: () => {
              gsap.to(letter, { filter: 'blur(0px)', duration: 0.4 });
            },
          },
          i === 0 ? '+=0.1' : '-=0.4',
        );
      });

      // 4. Final Horizontal Light Sweep
      logoTl.set(q('.light-sweep'), { opacity: 0.8, x: -200 });
      logoTl.to(
        q('.light-sweep'),
        {
          x: 900,
          opacity: 0,
          duration: 1.4,
          ease: 'power2.inOut',
        },
        '+=0.4',
      );

      // 5. Global Glow Pulse
      logoTl.to(
        q('.reveal-svg'),
        {
          filter: 'drop-shadow(0 0 25px rgba(0, 240, 255, 0.7))',
          duration: 0.8,
          yoyo: true,
          repeat: 1,
          ease: 'sine.inOut',
        },
        '-=1.2',
      );

      // Existing content entrance
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
          q('.hero-subtitle, .hero-actions, .hero-metric, .hero-proof'),
          {
            opacity: 0,
            y: 24,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.35',
        );
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }
}
