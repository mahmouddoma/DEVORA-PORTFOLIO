import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { AppIconComponent, type AppIconName } from '../../../../shared/components/app-icon/app-icon.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-manifesto',
  standalone: true,
  imports: [CommonModule, RevealDirective, AppIconComponent],
  templateUrl: './manifesto.component.html',
  styleUrl: './manifesto.component.css',
})
export class ManifestoComponent implements AfterViewInit, OnDestroy {
  readonly principles = [
    { key: 'manifesto.item1', icon: 'target' },
    { key: 'manifesto.item2', icon: 'shield' },
    { key: 'manifesto.item3', icon: 'growth' },
  ] satisfies Array<{ key: string; icon: AppIconName }>;
  private animationContext?: { revert: () => void };

  constructor(
    private readonly gsapService: GsapService,
    private readonly elementRef: ElementRef<HTMLElement>,
    public readonly i18n: I18nService,
  ) {}

  ngAfterViewInit() {
    this.animationContext = this.gsapService.context(this.elementRef.nativeElement, () => {
      const q = this.gsapService.gsap.utils.selector(this.elementRef.nativeElement);

      this.gsapService.gsap.from(q('.manifesto-line'), {
        clipPath: 'inset(0 100% 0 0)',
        duration: 0.9,
        stagger: 0.16,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: this.elementRef.nativeElement,
          start: 'top 68%',
          once: true,
        },
      });

      this.gsapService.gsap.from(q('.principle-item'), {
        opacity: 0,
        x: -24,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      });
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }
}
