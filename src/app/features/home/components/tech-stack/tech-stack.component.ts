import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css',
})
export class TechStackComponent implements AfterViewInit, OnDestroy {
  readonly technologies = [
    'Angular',
    'TypeScript',
    'Signals',
    'Standalone UI',
    'Forms',
    'GSAP',
    'API Integration',
    'SEO',
    'Performance',
    'Deployment',
  ];

  readonly technologiesReverse = [
    'Product Strategy',
    'UX Architecture',
    'Design Systems',
    'Dashboards',
    'SaaS',
    'Admin Panels',
    'Lead Flow',
    'Analytics',
    'Handover',
    'Growth',
  ];

  readonly boardCells = ['STRATEGY', 'UX', 'ANGULAR', 'SYSTEMS', 'LAUNCH', 'GROWTH'];
  readonly marqueeCopies = [0, 1] as const;
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
