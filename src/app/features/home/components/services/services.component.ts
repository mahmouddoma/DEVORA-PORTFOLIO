import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewChildren,
  effect,
} from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { AppIconComponent, type AppIconName } from '../../../../shared/components/app-icon/app-icon.component';

interface Service {
  index: string;
  titleKey: string;
  bodyKey: string;
  outcomeKey: string;
  icon: AppIconName;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('serviceCard') private readonly cards!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('carousel', { static: false }) private readonly carouselRef!: ElementRef<HTMLElement>;
  @ViewChild('progressBar', { static: false }) private readonly progressBarRef!: ElementRef<HTMLElement>;
  @ViewChild('progressDot', { static: false }) private readonly progressDotRef!: ElementRef<HTMLElement>;

  readonly services: Service[] = [
    {
      index: '01',
      titleKey: 'services.launch.title',
      bodyKey: 'services.launch.body',
      outcomeKey: 'services.launch.outcome',
      icon: 'rocket',
    },
    {
      index: '02',
      titleKey: 'services.mvp.title',
      bodyKey: 'services.mvp.body',
      outcomeKey: 'services.mvp.outcome',
      icon: 'target',
    },
    {
      index: '03',
      titleKey: 'services.modernize.title',
      bodyKey: 'services.modernize.body',
      outcomeKey: 'services.modernize.outcome',
      icon: 'wrench',
    },
    {
      index: '04',
      titleKey: 'services.internal.title',
      bodyKey: 'services.internal.body',
      outcomeKey: 'services.internal.outcome',
      icon: 'briefcase',
    },
    {
      index: '05',
      titleKey: 'services.conversion.title',
      bodyKey: 'services.conversion.body',
      outcomeKey: 'services.conversion.outcome',
      icon: 'growth',
    },
    {
      index: '06',
      titleKey: 'services.scale.title',
      bodyKey: 'services.scale.body',
      outcomeKey: 'services.scale.outcome',
      icon: 'layers',
    },
    {
      index: '07',
      titleKey: 'services.brand.title',
      bodyKey: 'services.brand.body',
      outcomeKey: 'services.brand.outcome',
      icon: 'spark',
    },
    {
      index: '08',
      titleKey: 'services.commerce.title',
      bodyKey: 'services.commerce.body',
      outcomeKey: 'services.commerce.outcome',
      icon: 'analytics',
    },
    {
      index: '09',
      titleKey: 'services.integrations.title',
      bodyKey: 'services.integrations.body',
      outcomeKey: 'services.integrations.outcome',
      icon: 'code',
    },
    {
      index: '10',
      titleKey: 'services.support.title',
      bodyKey: 'services.support.body',
      outcomeKey: 'services.support.outcome',
      icon: 'shield',
    },
    {
      index: '11',
      titleKey: 'services.cyber.title',
      bodyKey: 'services.cyber.body',
      outcomeKey: 'services.cyber.outcome',
      icon: 'cyber',
    },
  ];

  readonly stats = [
    { valueKey: 'services.stat1.value', labelKey: 'services.stat1.label' },
    { valueKey: 'services.stat2.value', labelKey: 'services.stat2.label' },
    { valueKey: 'services.stat3.value', labelKey: 'services.stat3.label' },
  ];

  readonly deliverySteps = [
    { labelKey: 'services.step1.label', titleKey: 'services.step1.title', icon: 'target' },
    { labelKey: 'services.step2.label', titleKey: 'services.step2.title', icon: 'design' },
    { labelKey: 'services.step3.label', titleKey: 'services.step3.title', icon: 'launch' },
  ] satisfies Array<{ labelKey: string; titleKey: string; icon: AppIconName }>;

  private animationContext?: { revert: () => void };

  // Drag scroll variables
  private isDown = false;
  private startX = 0;
  private scrollLeftStart = 0;
  private dragListeners: Array<{ target: EventTarget; type: string; handler: EventListener }> = [];

  constructor(
    private readonly gsapService: GsapService,
    private readonly elementRef: ElementRef<HTMLElement>,
    public readonly i18n: I18nService,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {
    effect(() => {
      this.i18n.language();

      if (isPlatformBrowser(this.platformId)) {
        window.requestAnimationFrame(() => {
          this.resetCarouselToStart();
          this.updateProgressBar();
        });
      }
    });
  }

  ngAfterViewInit() {
    this.animationContext = this.gsapService.context(this.elementRef.nativeElement, () => {
      const gsap = this.gsapService.gsap;
      const q = gsap.utils.selector(this.elementRef.nativeElement);

      this.gsapService.sectionReveal(this.elementRef.nativeElement);

      this.cards.forEach((card) => {
        const element = card.nativeElement;

        element.addEventListener('pointermove', (event) => {
          const rect = element.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          element.style.setProperty('--mx', `${x}px`);
          element.style.setProperty('--my', `${y}px`);
        });
      });

      gsap.from(q('.services-carousel-wrapper'), {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: this.elementRef.nativeElement,
          start: 'top 74%',
        },
      });

      gsap.from(q('.delivery-step'), {
        opacity: 0,
        y: 30,
        scale: 0.985,
        duration: 0.95,
        stagger: 0.09,
        ease: 'power4.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: q('.services-carousel-wrapper')[0] || this.elementRef.nativeElement,
          start: 'top 70%',
        },
      });
    });

    if (isPlatformBrowser(this.platformId)) {
      this.initDragToScroll();
      window.requestAnimationFrame(() => {
        this.resetCarouselToStart();
        this.updateProgressBar();
      });
    }
  }

  ngOnDestroy() {
    this.animationContext?.revert();
    this.removeDragListeners();
  }

  scrollNext() {
    const carousel = this.carouselRef.nativeElement;
    carousel.scrollBy({ left: this.getDirectionalScrollStep(carousel), behavior: 'smooth' });
  }

  scrollPrev() {
    const carousel = this.carouselRef.nativeElement;
    carousel.scrollBy({ left: -this.getDirectionalScrollStep(carousel), behavior: 'smooth' });
  }

  private getScrollStep(carousel: HTMLElement) {
    const firstCard = carousel.querySelector<HTMLElement>('.service-card');
    if (!firstCard) return 0;

    const styles = window.getComputedStyle(carousel);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0');

    return firstCard.offsetWidth + (Number.isFinite(gap) ? gap : 0);
  }

  private getDirectionalScrollStep(carousel: HTMLElement) {
    return this.isRtl() ? -this.getScrollStep(carousel) : this.getScrollStep(carousel);
  }

  private isRtl() {
    return this.i18n.language() === 'ar';
  }

  private getScrollProgress(carousel: HTMLElement, maxScroll: number) {
    if (maxScroll <= 0) return 0;

    const scrollLeft = carousel.scrollLeft;
    if (!this.isRtl()) return scrollLeft / maxScroll;

    if (scrollLeft <= 0) return Math.abs(scrollLeft) / maxScroll;

    return (maxScroll - scrollLeft) / maxScroll;
  }

  private resetCarouselToStart() {
    const carousel = this.carouselRef?.nativeElement;
    if (!carousel) return;

    carousel.scrollLeft = 0;
  }

  private updateProgressBar() {
    const carousel = this.carouselRef?.nativeElement;
    const progressFill = this.progressBarRef?.nativeElement;
    const progressDot = this.progressDotRef?.nativeElement;
    if (!carousel || !progressFill || !progressDot) return;

    const trackWidth = progressFill.parentElement?.clientWidth ?? 0;
    if (trackWidth <= 0) return;

    const scrollWidth = carousel.scrollWidth;
    const clientWidth = carousel.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) {
      progressFill.style.width = '0px';
      progressFill.style.left = this.isRtl() ? 'auto' : '0px';
      progressFill.style.right = this.isRtl() ? '0px' : 'auto';
      progressDot.style.left = this.isRtl() ? 'auto' : '0px';
      progressDot.style.right = this.isRtl() ? '0px' : 'auto';
      return;
    }

    const pct = Math.max(0, Math.min(1, this.getScrollProgress(carousel, maxScroll)));
    const fillWidth = `${pct * trackWidth}px`;
    const dotOffset = `${pct * trackWidth}px`;

    progressFill.style.width = fillWidth;
    progressFill.style.left = this.isRtl() ? 'auto' : '0px';
    progressFill.style.right = this.isRtl() ? '0px' : 'auto';
    progressDot.style.left = this.isRtl() ? 'auto' : dotOffset;
    progressDot.style.right = this.isRtl() ? dotOffset : 'auto';
  }

  private initDragToScroll() {
    const carousel = this.carouselRef.nativeElement;

    const onMouseDown = (e: MouseEvent) => {
      this.isDown = true;
      carousel.classList.add('grabbing');
      this.startX = e.pageX - carousel.offsetLeft;
      this.scrollLeftStart = carousel.scrollLeft;
    };

    const onMouseLeave = () => {
      this.isDown = false;
      carousel.classList.remove('grabbing');
    };

    const onMouseUp = () => {
      this.isDown = false;
      carousel.classList.remove('grabbing');
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - this.startX) * 1.5;
      carousel.scrollLeft = this.isRtl() ? this.scrollLeftStart + walk : this.scrollLeftStart - walk;
    };

    const updateProgress = () => this.updateProgressBar();

    carousel.addEventListener('mousedown', onMouseDown as EventListener);
    carousel.addEventListener('mouseleave', onMouseLeave as EventListener);
    carousel.addEventListener('mouseup', onMouseUp as EventListener);
    carousel.addEventListener('mousemove', onMouseMove as EventListener);
    carousel.addEventListener('scroll', updateProgress as EventListener);
    window.addEventListener('resize', updateProgress as EventListener);

    // Save for cleanup
    this.dragListeners = [
      { target: carousel, type: 'mousedown', handler: onMouseDown as EventListener },
      { target: carousel, type: 'mouseleave', handler: onMouseLeave as EventListener },
      { target: carousel, type: 'mouseup', handler: onMouseUp as EventListener },
      { target: carousel, type: 'mousemove', handler: onMouseMove as EventListener },
      { target: carousel, type: 'scroll', handler: updateProgress as EventListener },
      { target: window, type: 'resize', handler: updateProgress as EventListener },
    ];

    // Initial progress update
    window.requestAnimationFrame(updateProgress);
  }

  private removeDragListeners() {
    this.dragListeners.forEach(listener => {
      listener.target.removeEventListener(listener.type, listener.handler);
    });
    this.dragListeners = [];
  }
}
