import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { AppIconComponent, type AppIconName } from '../../../../shared/components/app-icon/app-icon.component';
import { TiltDirective } from '../../../../shared/directives/tilt.directive';

interface ProcessStep {
  marker: string;
  titleKey: string;
  icon: AppIconName;
  bodyKeys: readonly string[];
}

interface EngagementModel {
  labelKey: string;
  titleKey: string;
  bodyKey: string;
  metaKey: string;
  icon: AppIconName;
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, TiltDirective, AppIconComponent],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css',
})
export class ProcessComponent implements AfterViewInit, OnDestroy {
  readonly steps: readonly ProcessStep[] = [
    {
      marker: '01',
      titleKey: 'process.step1.title',
      icon: 'target',
      bodyKeys: ['process.step1.point1', 'process.step1.point2', 'process.step1.point3'],
    },
    {
      marker: '02',
      titleKey: 'process.step2.title',
      icon: 'compass',
      bodyKeys: ['process.step2.point1', 'process.step2.point2', 'process.step2.point3'],
    },
    {
      marker: '03',
      titleKey: 'process.step3.title',
      icon: 'design',
      bodyKeys: ['process.step3.point1', 'process.step3.point2', 'process.step3.point3'],
    },
    {
      marker: '04',
      titleKey: 'process.step4.title',
      icon: 'code',
      bodyKeys: ['process.step4.point1', 'process.step4.point2', 'process.step4.point3'],
    },
    {
      marker: '05',
      titleKey: 'process.step5.title',
      icon: 'launch',
      bodyKeys: ['process.step5.point1', 'process.step5.point2', 'process.step5.point3'],
    },
    {
      marker: '06',
      titleKey: 'process.step6.title',
      icon: 'growth',
      bodyKeys: ['process.step6.point1', 'process.step6.point2', 'process.step6.point3'],
    },
  ];

  readonly models: readonly EngagementModel[] = [
    {
      labelKey: 'process.model1.label',
      titleKey: 'process.model1.title',
      bodyKey: 'process.model1.body',
      metaKey: 'process.model1.meta',
      icon: 'compass',
    },
    {
      labelKey: 'process.model2.label',
      titleKey: 'process.model2.title',
      bodyKey: 'process.model2.body',
      metaKey: 'process.model2.meta',
      icon: 'rocket',
    },
    {
      labelKey: 'process.model3.label',
      titleKey: 'process.model3.title',
      bodyKey: 'process.model3.body',
      metaKey: 'process.model3.meta',
      icon: 'growth',
    },
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

      gsap.from(q('.process-step'), {
        opacity: 0,
        y: 40,
        rotationX: 45,
        transformPerspective: 1000,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: q('.process-timeline')[0],
          start: 'top 80%',
        },
      });

      gsap.from(q('.model-card'), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: q('.engagement-models')[0],
          start: 'top 80%',
        },
      });
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }
}
