import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';

interface Service {
  index: string;
  titleKey: string;
  bodyKey: string;
  outcomeKey: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('serviceCard') private readonly cards!: QueryList<ElementRef<HTMLElement>>;

  readonly services: Service[] = [
    {
      index: '01',
      titleKey: 'services.strategy.title',
      bodyKey: 'services.strategy.body',
      outcomeKey: 'services.strategy.outcome',
    },
    {
      index: '02',
      titleKey: 'services.web.title',
      bodyKey: 'services.web.body',
      outcomeKey: 'services.web.outcome',
    },
    {
      index: '03',
      titleKey: 'services.saas.title',
      bodyKey: 'services.saas.body',
      outcomeKey: 'services.saas.outcome',
    },
    {
      index: '04',
      titleKey: 'services.perf.title',
      bodyKey: 'services.perf.body',
      outcomeKey: 'services.perf.outcome',
    },
  ];

  readonly stats = [
    { valueKey: 'services.stat1.value', labelKey: 'services.stat1.label' },
    { valueKey: 'services.stat2.value', labelKey: 'services.stat2.label' },
    { valueKey: 'services.stat3.value', labelKey: 'services.stat3.label' },
  ];

  readonly deliverySteps = [
    { labelKey: 'services.step1.label', titleKey: 'services.step1.title' },
    { labelKey: 'services.step2.label', titleKey: 'services.step2.title' },
    { labelKey: 'services.step3.label', titleKey: 'services.step3.title' },
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

      this.cards.forEach((card) => {
        const element = card.nativeElement;
        this.gsapService.tilt(element);

        element.addEventListener('pointermove', (event) => {
          const rect = element.getBoundingClientRect();
          element.style.setProperty('--mx', `${event.clientX - rect.left}px`);
          element.style.setProperty('--my', `${event.clientY - rect.top}px`);
        });
      });

      gsap.from(q('.service-card'), {
        opacity: 0,
        y: 28,
        duration: 0.78,
        stagger: {
          each: 0.08,
          from: 'start',
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: q('.services-grid')[0],
          start: 'top 78%',
          once: true,
        },
      });

      gsap.from(q('.services-offer, .delivery-step'), {
        opacity: 0,
        y: 24,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: q('.services-shell')[0],
          start: 'top 76%',
          once: true,
        },
      });
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }
}
