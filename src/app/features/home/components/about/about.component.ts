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

  readonly proofPoints = [
    { valueKey: 'about.proof1.value', labelKey: 'about.proof1.label' },
    { valueKey: 'about.proof2.value', labelKey: 'about.proof2.label' },
    { valueKey: 'about.proof3.value', labelKey: 'about.proof3.label' },
  ];

  readonly steps = [
    { index: '01', titleKey: 'about.blueprint.step1' },
    { index: '02', titleKey: 'about.blueprint.step2' },
    { index: '03', titleKey: 'about.blueprint.step3' },
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
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }
}
