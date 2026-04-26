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
  icon: string;
  layout: string;
  visual: string;
  titleKey: string;
  bodyKey: string;
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
      icon: 'web',
      layout: 'wide',
      visual: 'browser',
      titleKey: 'services.web.title',
      bodyKey: 'services.web.body',
    },
    {
      index: '02',
      icon: 'saas',
      layout: 'tall',
      visual: 'system',
      titleKey: 'services.saas.title',
      bodyKey: 'services.saas.body',
    },
    {
      index: '03',
      icon: 'ai',
      layout: 'standard',
      visual: 'code',
      titleKey: 'services.ai.title',
      bodyKey: 'services.ai.body',
    },
    {
      index: '04',
      icon: 'ux',
      layout: 'standard',
      visual: 'interface',
      titleKey: 'services.ux.title',
      bodyKey: 'services.ux.body',
    },
    {
      index: '05',
      icon: 'perf',
      layout: 'wide',
      visual: 'mobile',
      titleKey: 'services.perf.title',
      bodyKey: 'services.perf.body',
    },
    {
      index: '06',
      icon: 'security',
      layout: 'standard',
      visual: 'shield',
      titleKey: 'services.security.title',
      bodyKey: 'services.security.body',
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
        y: 34,
        rotate: (index) => [-2.5, 1.5, -1, 2, -1.8, 1][index] ?? 0,
        clipPath: 'inset(18% 18% 18% 18% round 8px)',
        duration: 1,
        stagger: {
          each: 0.08,
          from: 'center',
        },
        ease: 'expo.out',
        scrollTrigger: {
          trigger: q('.services-bento')[0],
          start: 'top 78%',
          once: true,
        },
      });

      gsap.to(q('.service-visual'), {
        y: (index) => (index % 2 === 0 ? -8 : 8),
        repeat: -1,
        yoyo: true,
        duration: 2.8,
        ease: 'sine.inOut',
        stagger: 0.16,
      });
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }
}
