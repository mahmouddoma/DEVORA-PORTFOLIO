import { Component, input } from '@angular/core';

import { PortfolioLogoIconComponent } from '../portfolio-logo-icon/portfolio-logo-icon.component';

@Component({
  selector: 'app-brand-logo',
  standalone: true,
  imports: [PortfolioLogoIconComponent],
  templateUrl: './brand-logo.component.html',
  styleUrl: './brand-logo.component.css',
})
export class BrandLogoComponent {
  readonly compact = input(false);
}
