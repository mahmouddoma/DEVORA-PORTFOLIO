import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { GravityGridDirective } from '../../../../shared/directives/gravity-grid.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, GravityGridDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  submitted = false;

  readonly serviceKeys = [
    'services.strategy.title',
    'services.web.title',
    'services.saas.title',
    'services.perf.title',
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

      gsap.from(q('.form-field'), {
        opacity: 0,
        y: 20,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: q('.contact-card')[0],
          start: 'top 74%',
        },
      });

      gsap.to(q('.contact-track span'), {
        xPercent: 110,
        repeat: -1,
        duration: 2.6,
        ease: 'none',
      });
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }

  onSubmit() {
    this.submitted = true;
  }
}
