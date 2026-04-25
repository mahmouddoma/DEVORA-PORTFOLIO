import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';

type WorkFilter = 'all' | 'angular';

interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  categoryKey: string;
  icon: string;
  filter: Exclude<WorkFilter, 'all'>;
  image: string;
  link: string;
  accent: string;
}

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css',
})
export class WorksComponent implements AfterViewInit, OnDestroy {
  activeFilter: WorkFilter = 'all';

  readonly filters: { id: WorkFilter; labelKey: string }[] = [
    { id: 'all', labelKey: 'work.filter.all' },
    { id: 'angular', labelKey: 'work.filter.angular' },
  ];

  readonly projects: Project[] = [
    {
      id: 101,
      titleKey: 'work.osos.title',
      descriptionKey: 'work.osos.description',
      categoryKey: 'work.category.angular',
      icon: 'angular',
      filter: 'angular',
      image: 'Images/osos.png',
      link: 'https://osos-alriadah.com/',
      accent: '#dd0031',
    },
    {
      id: 102,
      titleKey: 'work.ajyal.title',
      descriptionKey: 'work.ajyal.description',
      categoryKey: 'work.category.angular',
      icon: 'angular',
      filter: 'angular',
      image: 'Images/ajyal.png',
      link: 'https://ajyal-alquran.com/',
      accent: '#35d39d',
    },
    {
      id: 103,
      titleKey: 'work.zaytona.title',
      descriptionKey: 'work.zaytona.description',
      categoryKey: 'work.category.angular',
      icon: 'angular',
      filter: 'angular',
      image: 'Images/zaytona.png',
      link: 'https://zaytona.info/',
      accent: '#73d13d',
    },
  ];

  readonly missingImages = new Set<string>();

  private animationContext?: { revert: () => void };

  constructor(
    private readonly gsapService: GsapService,
    private readonly elementRef: ElementRef<HTMLElement>,
    public readonly i18n: I18nService,
  ) {}

  get filteredProjects() {
    if (this.activeFilter === 'all') {
      return this.projects;
    }

    return this.projects.filter((project) => project.filter === this.activeFilter);
  }

  ngAfterViewInit() {
    this.animationContext = this.gsapService.context(this.elementRef.nativeElement, () => {
      this.gsapService.sectionReveal(this.elementRef.nativeElement);
      this.animateCards();

      const gsap = this.gsapService.gsap;
      const q = gsap.utils.selector(this.elementRef.nativeElement);
      gsap.from(q('.project-browser, .project-copy > *'), {
        opacity: 0,
        y: 22,
        duration: 0.72,
        stagger: 0.045,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.elementRef.nativeElement.querySelector('.project-grid'),
          start: 'top 72%',
        },
      });

      gsap.to(q('.project-visual img'), {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: this.elementRef.nativeElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();
  }

  setFilter(filter: WorkFilter) {
    this.activeFilter = filter;

    if (this.gsapService.isBrowser) {
      window.setTimeout(() => this.animateCards(), 0);
    }
  }

  markImageMissing(image: string) {
    this.missingImages.add(image);
  }

  isImageMissing(image: string) {
    return this.missingImages.has(image);
  }

  trackProject(_: number, project: Project) {
    return project.id;
  }

  private animateCards() {
    if (!this.gsapService.isBrowser) return;

    const cards = this.elementRef.nativeElement.querySelectorAll('.project-card');
    this.gsapService.gsap.from(cards, {
      opacity: 0,
      y: 54,
      scale: 0.96,
      duration: 0.72,
      stagger: 0.1,
      ease: 'power3.out',
      overwrite: true,
    });
  }
}
