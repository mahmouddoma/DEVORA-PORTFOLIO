import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { AppIconComponent, type AppIconName } from '../../../../shared/components/app-icon/app-icon.component';

type CardDirection = 'left' | 'right' | 'top' | 'bottom';

interface CyberCapability {
  step: string;
  titleKey: string;
  bodyKey: string;
  metaKey: string;
  icon: AppIconName;
  enterFrom: CardDirection;
}

interface CyberSignal {
  labelKey: string;
  valueKey: string;
  icon: AppIconName;
}

@Component({
  selector: 'app-cybersecurity',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './cybersecurity.component.html',
  styleUrl: './cybersecurity.component.css',
})
export class CybersecurityComponent implements AfterViewInit, OnDestroy {
  readonly capabilities: readonly CyberCapability[] = [
    {
      step: '01',
      titleKey: 'cyber.capability.pt.title',
      bodyKey: 'cyber.capability.pt.body',
      metaKey: 'cyber.capability.pt.meta',
      icon: 'target',
      enterFrom: 'left',
    },
    {
      step: '02',
      titleKey: 'cyber.capability.api.title',
      bodyKey: 'cyber.capability.api.body',
      metaKey: 'cyber.capability.api.meta',
      icon: 'code',
      enterFrom: 'top',
    },
    {
      step: '03',
      titleKey: 'cyber.capability.vuln.title',
      bodyKey: 'cyber.capability.vuln.body',
      metaKey: 'cyber.capability.vuln.meta',
      icon: 'shield',
      enterFrom: 'right',
    },
    {
      step: '04',
      titleKey: 'cyber.capability.hardening.title',
      bodyKey: 'cyber.capability.hardening.body',
      metaKey: 'cyber.capability.hardening.meta',
      icon: 'wrench',
      enterFrom: 'bottom',
    },
  ];

  readonly signals: readonly CyberSignal[] = [
    {
      labelKey: 'cyber.signal1.label',
      valueKey: 'cyber.signal1.value',
      icon: 'cyber',
    },
    {
      labelKey: 'cyber.signal2.label',
      valueKey: 'cyber.signal2.value',
      icon: 'analytics',
    },
    {
      labelKey: 'cyber.signal3.label',
      valueKey: 'cyber.signal3.value',
      icon: 'check',
    },
  ];

  private animationContext?: { revert: () => void };
  private revealObserver?: IntersectionObserver;

  constructor(
    private readonly gsapService: GsapService,
    private readonly elementRef: ElementRef<HTMLElement>,
    public readonly i18n: I18nService,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupCardReveal();
    }

    this.animationContext = this.gsapService.context(this.elementRef.nativeElement, () => {
      const gsap = this.gsapService.gsap;
      const q = gsap.utils.selector(this.elementRef.nativeElement);

      this.gsapService.sectionReveal(
        this.elementRef.nativeElement,
        '.cyber-intro .motion-item, .cyber-actions, .cyber-panel, .cyber-deliverables',
      );

      gsap.from(q('.cyber-signal'), {
        opacity: 0,
        x: 18,
        filter: 'blur(8px)',
        duration: 0.62,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'opacity,transform,filter',
        scrollTrigger: {
          trigger: q('.cyber-panel')[0],
          start: 'top 78%',
          once: true,
        },
      });
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
    this.revealObserver?.disconnect();
  }

  private setupCardReveal() {
    const section = this.elementRef.nativeElement.querySelector<HTMLElement>('.cyber-section');
    const grid = this.elementRef.nativeElement.querySelector<HTMLElement>('.cyber-grid');

    if (!section || !grid) return;

    section.classList.add('is-animation-ready');

    this.revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        section.classList.add('is-cyber-visible');
        this.revealObserver?.disconnect();
      },
      { threshold: 0.24, rootMargin: '0px 0px -12% 0px' },
    );

    this.revealObserver.observe(grid);

    window.requestAnimationFrame(() => this.revealCardsIfVisible(section, grid));
    window.setTimeout(() => this.revealCardsIfVisible(section, grid), 450);
  }

  private revealCardsIfVisible(section: HTMLElement, grid: HTMLElement) {
    if (section.classList.contains('is-cyber-visible')) return;

    const bounds = grid.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const isVisible = bounds.top < viewportHeight * 0.88 && bounds.bottom > viewportHeight * 0.12;

    if (!isVisible) return;

    section.classList.add('is-cyber-visible');
    this.revealObserver?.disconnect();
  }
}
