import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { GravityGridDirective } from '../../../../shared/directives/gravity-grid.directive';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, GravityGridDirective],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css',
})
export class TechStackComponent implements AfterViewInit, OnDestroy {
  readonly technologies = [
    'Angular',
    'TypeScript',
    'Node.js',
    'GSAP',
    'Three.js',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
    'Azure',
    'AWS',
  ];

  readonly technologiesReverse = [
    'Python',
    'PyTorch',
    'TensorFlow',
    'OpenAI',
    'LangChain',
    'Redis',
    'GraphQL',
    'Next.js',
    'WebGPU',
    'Rust',
  ];

  readonly boardCells = ['API', 'AI', 'UX', 'DB', 'CI', 'SEC'];
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

      gsap.to(q('.marquee-track.primary'), {
        xPercent: -50,
        repeat: -1,
        duration: 22,
        ease: 'none',
      });

      gsap.to(q('.marquee-track.secondary'), {
        xPercent: 0,
        repeat: -1,
        duration: 26,
        ease: 'none',
        startAt: { xPercent: -50 },
      });

      gsap.from(q('.board-cell'), {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: q('.stack-board')[0],
          start: 'top 78%',
        },
      });

      gsap.to(q('.board-scan'), {
        xPercent: 120,
        repeat: -1,
        duration: 3.4,
        ease: 'none',
      });
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }
}
