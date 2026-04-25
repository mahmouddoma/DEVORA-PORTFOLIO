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
    { index: '01', icon: 'web', titleKey: 'services.web.title', bodyKey: 'services.web.body' },
    { index: '02', icon: 'saas', titleKey: 'services.saas.title', bodyKey: 'services.saas.body' },
    { index: '03', icon: 'ai', titleKey: 'services.ai.title', bodyKey: 'services.ai.body' },
    { index: '04', icon: 'ux', titleKey: 'services.ux.title', bodyKey: 'services.ux.body' },
    { index: '05', icon: 'perf', titleKey: 'services.perf.title', bodyKey: 'services.perf.body' },
    {
      index: '06',
      icon: 'security',
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

      this.cards.forEach((card) => this.gsapService.tilt(card.nativeElement));

      gsap.from(q('.service-card'), {
        opacity: 0,
        y: 58,
        rotateX: -8,
        duration: 0.85,
        stagger: 0.09,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: q('.services-grid')[0],
          start: 'top 78%',
          once: true,
        },
      });

      gsap.to(q('.service-rail span'), {
        xPercent: 105,
        repeat: -1,
        duration: 2.7,
        ease: 'none',
        stagger: 0.18,
      });
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }
}
