import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';

interface Testimonial {
  nameKey: string;
  roleKey: string;
  companyKey: string;
  contentKey: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  activeIndex = 0;

  readonly testimonials: Testimonial[] = [
    {
      nameKey: 'testimonials.name1',
      roleKey: 'testimonials.role1',
      companyKey: 'testimonials.company1',
      contentKey: 'testimonials.quote1',
    },
    {
      nameKey: 'testimonials.name2',
      roleKey: 'testimonials.role2',
      companyKey: 'testimonials.company2',
      contentKey: 'testimonials.quote2',
    },
    {
      nameKey: 'testimonials.name3',
      roleKey: 'testimonials.role3',
      companyKey: 'testimonials.company3',
      contentKey: 'testimonials.quote3',
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
      this.gsapService.sectionReveal(this.elementRef.nativeElement);
      this.animateActiveCard();
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
    this.animateActiveCard();
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.animateActiveCard();
  }

  private animateActiveCard() {
    if (!this.gsapService.isBrowser) return;

    window.setTimeout(() => {
      const activeCard = this.elementRef.nativeElement.querySelector('.testimonial-card.active');
      if (!activeCard) return;

      this.gsapService.gsap.from(activeCard, {
        opacity: 0,
        y: 24,
        scale: 0.98,
        duration: 0.55,
        ease: 'power3.out',
        overwrite: true,
      });
    }, 0);
  }
}
