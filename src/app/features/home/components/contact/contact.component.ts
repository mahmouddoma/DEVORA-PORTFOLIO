import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  submitted = false;

  readonly serviceKeys = [
    'contact.option.launch',
    'contact.option.mvp',
    'contact.option.platform',
    'contact.option.dashboard',
    'contact.option.optimization',
  ];

  readonly budgetKeys = [
    'contact.budget.option1',
    'contact.budget.option2',
    'contact.budget.option3',
    'contact.budget.option4',
  ];

  readonly timelineKeys = [
    'contact.timeline.option1',
    'contact.timeline.option2',
    'contact.timeline.option3',
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
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: q('.contact-card')[0],
          start: 'top 80%',
        },
      });

      gsap.from(q('.contact-info'), {
        opacity: 0,
        filter: 'blur(20px)',
        scale: 0.9,
        duration: 1.2,
        ease: 'power2.out',
        clearProps: 'filter,transform,opacity',
        scrollTrigger: {
          trigger: q('.contact-card')[0],
          start: 'top 80%',
        },
      });

      gsap.to(q('.contact-track span'), {
        xPercent: 110,
        repeat: -1,
        duration: 4.2,
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
