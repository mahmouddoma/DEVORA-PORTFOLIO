import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';

interface StudioValue {
  index: string;
  titleKey: string;
  bodyKey: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  readonly values: StudioValue[] = [
    { index: '01', titleKey: 'about.value1.title', bodyKey: 'about.value1.body' },
    { index: '02', titleKey: 'about.value2.title', bodyKey: 'about.value2.body' },
    { index: '03', titleKey: 'about.value3.title', bodyKey: 'about.value3.body' },
  ];

  readonly steps = [
    'about.blueprint.step1',
    'about.blueprint.step2',
    'about.blueprint.step3',
    'about.blueprint.step4',
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

      this.gsapService.sectionReveal(this.elementRef.nativeElement);

      gsap.from(q('.blueprint-card'), {
        opacity: 0,
        x: -56,
        rotateY: 12,
        duration: 0.95,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: this.elementRef.nativeElement,
          start: 'top 72%',
          once: true,
        },
      });

      gsap.from(q('.blueprint-node'), {
        opacity: 0,
        scale: 0.8,
        stagger: 0.12,
        duration: 0.55,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: q('.blueprint-card')[0],
          start: 'top 72%',
          once: true,
        },
      });

      gsap.to(q('.blueprint-grid'), {
        backgroundPosition: '48px 48px',
        repeat: -1,
        duration: 8,
        ease: 'none',
      });
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }
}
