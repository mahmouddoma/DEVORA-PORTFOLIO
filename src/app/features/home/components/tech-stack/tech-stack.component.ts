import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { AppIconComponent } from '../../../../shared/components/app-icon/app-icon.component';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css',
})
export class TechStackComponent implements AfterViewInit, OnDestroy {
  readonly technologyKeys = [
    'tech.item.angular',
    'tech.item.typescript',
    'tech.item.signals',
    'tech.item.standaloneUi',
    'tech.item.forms',
    'tech.item.gsap',
    'tech.item.apiIntegration',
    'tech.item.seo',
    'tech.item.performance',
    'tech.item.deployment',
  ];

  readonly capabilityKeys = [
    'tech.item.productStrategy',
    'tech.item.uxArchitecture',
    'tech.item.designSystems',
    'tech.item.dashboards',
    'tech.item.saas',
    'tech.item.adminPanels',
    'tech.item.leadFlow',
    'tech.item.analytics',
    'tech.item.handover',
    'tech.item.growth',
  ];

  readonly boardCellKeys = [
    'tech.board.strategy',
    'tech.board.ux',
    'tech.board.angular',
    'tech.board.systems',
    'tech.board.launch',
    'tech.board.growth',
  ];
  readonly marqueeCopies = [0, 1, 2] as const;
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

      const createMarqueeLoop = (
        track: HTMLElement | undefined,
        direction: 'left' | 'right',
        duration: number,
      ) => {
        const firstSet = track?.querySelector<HTMLElement>('.marquee-set');
        if (!track || !firstSet) return;

        const styles = window.getComputedStyle(track);
        const gap = Number.parseFloat(styles.columnGap || styles.gap || '0');
        const distance = firstSet.offsetWidth + (Number.isFinite(gap) ? gap : 0);

        gsap.set(track, { x: direction === 'left' ? 0 : -distance });
        gsap.to(track, {
          x: direction === 'left' ? -distance : 0,
          repeat: -1,
          duration,
          ease: 'none',
        });
      };

      createMarqueeLoop(q('.marquee-track.primary')[0] as HTMLElement | undefined, 'left', 34);
      createMarqueeLoop(q('.marquee-track.secondary')[0] as HTMLElement | undefined, 'right', 38);

      gsap.from(q('.board-cell'), {
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.5)',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: q('.stack-board')[0],
          start: 'top 85%',
        },
      });

      gsap.to(q('.board-scan'), {
        xPercent: 330,
        repeat: -1,
        duration: 4.8,
        ease: 'none',
      });
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }
}
