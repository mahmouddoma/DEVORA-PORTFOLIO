import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

import { GsapService } from '../../core/services/gsap.service';
import { I18nService } from '../../core/services/i18n.service';
import { PortfolioLogoIconComponent } from '../../shared/components/portfolio-logo-icon/portfolio-logo-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, PortfolioLogoIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements AfterViewInit, OnDestroy {
  readonly socialLinks = ['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'];
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
