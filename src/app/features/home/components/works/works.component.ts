import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { GravityGridDirective } from '../../../../shared/directives/gravity-grid.directive';

type WorkFilter = 'all' | 'realEstate' | 'education' | 'agriculture';

interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  categoryKey: string;
  categoryInitial: string;
  filter: Exclude<WorkFilter, 'all'>;
  image: string;
  previewVideo?: ProjectVideo;
  link: string;
  accent: string;
}

interface ProjectVideo {
  src: string;
  type: 'video/mp4' | 'video/webm';
}

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, GravityGridDirective],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css',
})
export class WorksComponent implements AfterViewInit, OnDestroy {
  @ViewChild('showcaseTrack') private readonly showcaseTrack?: ElementRef<HTMLElement>;

  activeFilter: WorkFilter = 'all';
  activeProjectIndex = 0;

  private readonly cardRevealVars = {
    opacity: 0,
    y: 54,
    scale: 0.96,
    duration: 0.72,
    stagger: 0.1,
    ease: 'power3.out',
    overwrite: true,
  };

  readonly filters: { id: WorkFilter; labelKey: string }[] = [
    { id: 'all', labelKey: 'work.filter.all' },
    { id: 'realEstate', labelKey: 'work.filter.realEstate' },
    { id: 'education', labelKey: 'work.filter.education' },
    { id: 'agriculture', labelKey: 'work.filter.agriculture' },
  ];

  readonly projects: Project[] = [
    {
      id: 101,
      titleKey: 'work.osos.title',
      descriptionKey: 'work.osos.description',
      categoryKey: 'work.category.realEstate',
      categoryInitial: 'R',
      filter: 'realEstate',
      image: 'Images/osos.png',
      previewVideo: {
        src: 'assets/Projects/osos.mp4',
        type: 'video/mp4',
      },
      link: 'https://osos-alriadah.com/',
      accent: '#00e5ff',
    },
    {
      id: 102,
      titleKey: 'work.ajyal.title',
      descriptionKey: 'work.ajyal.description',
      categoryKey: 'work.category.education',
      categoryInitial: 'E',
      filter: 'education',
      image: 'Images/ajyal.png',
      previewVideo: {
        src: 'assets/Projects/ajyal.webm',
        type: 'video/webm',
      },
      link: 'https://ajyal-alquran.com/',
      accent: '#35d39d',
    },
    {
      id: 103,
      titleKey: 'work.zaytona.title',
      descriptionKey: 'work.zaytona.description',
      categoryKey: 'work.category.agriculture',
      categoryInitial: 'A',
      filter: 'agriculture',
      image: 'Images/zaytona.png',
      previewVideo: {
        src: 'assets/Projects/zaytona.webm',
        type: 'video/webm',
      },
      link: 'https://zaytona.info/',
      accent: '#73d13d',
    },
  ];

  readonly missingImages = new Set<string>();

  private animationContext?: { revert: () => void };
  private scrollSyncTimer?: number;

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
      this.setupAnimations();
    });
  }

  ngOnDestroy() {
    this.animationContext?.revert();

    if (this.scrollSyncTimer && this.gsapService.isBrowser) {
      window.clearTimeout(this.scrollSyncTimer);
    }
  }

  setFilter(filter: WorkFilter) {
    this.activeFilter = filter;
    this.activeProjectIndex = 0;

    if (this.gsapService.isBrowser) {
      window.setTimeout(() => {
        this.animateCards();
        this.scrollToProject(0, 'auto');
      }, 0);
    }
  }

  markImageMissing(image: string) {
    this.missingImages.add(image);
  }

  isImageMissing(image: string) {
    return this.missingImages.has(image);
  }

  shouldShowImage(project: Project) {
    const previewMissing = project.previewVideo
      ? this.isImageMissing(project.previewVideo.src)
      : true;
    return (!project.previewVideo || previewMissing) && !this.isImageMissing(project.image);
  }

  isProjectMediaMissing(project: Project) {
    const previewMissing = project.previewVideo
      ? this.isImageMissing(project.previewVideo.src)
      : true;
    return !this.shouldShowImage(project) && previewMissing;
  }

  activateProject(index: number) {
    this.activeProjectIndex = index;
  }

  scrollToProject(index: number, behavior: ScrollBehavior = 'smooth') {
    this.activeProjectIndex = index;

    if (!this.gsapService.isBrowser) return;

    const track = this.showcaseTrack?.nativeElement;
    const card = track?.querySelectorAll<HTMLElement>('.project-card')[index];
    if (!track || !card) return;

    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior,
    });
  }

  onShowcaseScroll() {
    if (!this.gsapService.isBrowser) return;

    if (this.scrollSyncTimer) {
      window.clearTimeout(this.scrollSyncTimer);
    }

    this.scrollSyncTimer = window.setTimeout(() => {
      const track = this.showcaseTrack?.nativeElement;
      if (!track) return;

      const cards = Array.from(track.querySelectorAll<HTMLElement>('.project-card'));
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft - track.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(trackCenter - cardCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      this.activeProjectIndex = closestIndex;
    }, 80);
  }

  playPreview(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const video = card.querySelector('video');
    if (!video) return;

    card.classList.add('preview-playing');
    video.currentTime = 0;
    video.play().catch(() => card.classList.remove('preview-playing'));
  }

  stopPreview(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const video = card.querySelector('video');
    if (!video) return;

    card.classList.remove('preview-playing');
    video.pause();
    video.currentTime = 0;
  }

  trackProject(_: number, project: Project) {
    return project.id;
  }

  private animateCards() {
    if (!this.gsapService.isBrowser) return;

    const cards = this.elementRef.nativeElement.querySelectorAll('.project-card');
    this.gsapService.gsap.from(cards, this.cardRevealVars);
  }

  private setupAnimations() {
    this.gsapService.sectionReveal(this.elementRef.nativeElement);
    this.animateCards();
    this.animateProjectContent();
  }

  private animateProjectContent() {
    const showcase = this.elementRef.nativeElement.querySelector('.project-showcase');
    if (!showcase) return;

    const q = this.gsapService.gsap.utils.selector(this.elementRef.nativeElement);
    this.gsapService.gsap.from(q('.project-browser, .project-copy > *'), {
      opacity: 0,
      y: 22,
      duration: 0.72,
      stagger: 0.045,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: showcase,
        start: 'top 72%',
      },
    });
  }
}
