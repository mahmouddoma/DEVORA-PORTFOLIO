import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { GsapService } from '../../../../core/services/gsap.service';
import { I18nService } from '../../../../core/services/i18n.service';
import { AppIconComponent, type AppIconName } from '../../../../shared/components/app-icon/app-icon.component';

type WorkFilter = 'all' | 'realEstate' | 'education' | 'agriculture';
type ScreenshotExtension = 'png' | 'jpg' | 'jpeg' | 'webp' | 'avif';

interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  categoryKey: string;
  categoryInitial: string;
  filter: Exclude<WorkFilter, 'all'>;
  image: string;
  previewVideo?: ProjectVideo;
  screenshotPrefix?: string;
  screenshotExtension?: ScreenshotExtension;
  screenshotFrames?: string[];
  screenshotDuration?: string;
  link: string;
  accent: string;
}

interface ProjectVideo {
  src: string;
  type: 'video/mp4' | 'video/webm';
}

function getScreenshotDuration(frameCount: number) {
  return `${Math.max(10, frameCount * 2.6)}s`;
}

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css',
})
export class WorksComponent implements AfterViewInit, OnDestroy {
  @ViewChild('showcaseTrack') private readonly showcaseTrack?: ElementRef<HTMLElement>;

  activeFilter: WorkFilter = 'all';
  activeProjectIndex = 0;

  private readonly cardRevealVars = {
    opacity: 0,
    x: 40,
    duration: 0.85,
    stagger: 0.15,
    ease: 'back.out(1.2)',
    overwrite: true,
  };

  readonly filters: { id: WorkFilter; labelKey: string; icon: AppIconName }[] = [
    { id: 'all', labelKey: 'work.filter.all', icon: 'filter' },
    { id: 'realEstate', labelKey: 'work.filter.realEstate', icon: 'briefcase' },
    { id: 'education', labelKey: 'work.filter.education', icon: 'layers' },
    { id: 'agriculture', labelKey: 'work.filter.agriculture', icon: 'growth' },
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
      screenshotPrefix: 'osos',
      screenshotExtension: 'png',
      screenshotFrames: [],
      screenshotDuration: getScreenshotDuration(0),
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
      screenshotPrefix: 'ajyal',
      screenshotExtension: 'png',
      screenshotFrames: [],
      screenshotDuration: getScreenshotDuration(0),
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
      screenshotPrefix: 'zaytona',
      screenshotExtension: 'png',
      screenshotFrames: [],
      screenshotDuration: getScreenshotDuration(0),
      link: 'https://zaytona.info/',
      accent: '#73d13d',
    },
  ];

  readonly missingImages = new Set<string>();

  private animationContext?: { revert: () => void };
  private scrollSyncTimer?: number;
  private readonly scrollSnapTolerance = 2;

  constructor(
    private readonly gsapService: GsapService,
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly changeDetectorRef: ChangeDetectorRef,
    public readonly i18n: I18nService,
  ) {}

  get filteredProjects() {
    if (this.activeFilter === 'all') {
      return this.projects;
    }

    return this.projects.filter((project) => project.filter === this.activeFilter);
  }

  ngAfterViewInit() {
    this.discoverScreenshotPreviews();

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

  hasScreenshotPreview(project: Project) {
    return this.screenshotFrames(project).some((screenshot) => !this.isImageMissing(screenshot));
  }

  screenshotFrames(project: Project) {
    return project.screenshotFrames ?? [];
  }

  shouldShowImage(project: Project) {
    if (this.hasScreenshotPreview(project)) {
      return !this.isImageMissing(project.image);
    }

    const previewMissing = project.previewVideo
      ? this.isImageMissing(project.previewVideo.src)
      : true;
    return (!project.previewVideo || previewMissing) && !this.isImageMissing(project.image);
  }

  isProjectMediaMissing(project: Project) {
    const screenshotsMissing = project.screenshotFrames
      ? !this.hasScreenshotPreview(project)
      : true;
    const previewMissing = project.previewVideo
      ? this.isImageMissing(project.previewVideo.src)
      : true;
    return !this.shouldShowImage(project) && screenshotsMissing && previewMissing;
  }

  activateProject(index: number) {
    if (this.isMobileShowcase()) return;

    this.activeProjectIndex = index;
  }

  scrollToProject(index: number, behavior: ScrollBehavior = 'smooth') {
    this.activeProjectIndex = index;

    if (!this.gsapService.isBrowser) return;

    const track = this.showcaseTrack?.nativeElement;
    const cards = track?.querySelectorAll<HTMLElement>('.project-card');
    const card = cards?.[index];
    if (!track || !card) return;

    track.scrollTo({
      left: this.getProjectScrollLeft(track, card),
      behavior,
    });
  }

  onShowcaseScroll() {
    if (!this.gsapService.isBrowser || !this.isMobileShowcase()) return;

    if (this.scrollSyncTimer) {
      window.clearTimeout(this.scrollSyncTimer);
    }

    this.scrollSyncTimer = window.setTimeout(() => {
      const track = this.showcaseTrack?.nativeElement;
      if (!track) return;

      const cards = Array.from(track.querySelectorAll<HTMLElement>('.project-card'));
      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(trackCenter - cardCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      this.activeProjectIndex = closestIndex;
      this.changeDetectorRef.detectChanges();

      const closestCard = cards[closestIndex];
      if (!closestCard) return;

      const targetLeft = this.getProjectScrollLeft(track, closestCard);
      if (Math.abs(track.scrollLeft - targetLeft) > this.scrollSnapTolerance) {
        track.scrollTo({ left: targetLeft, behavior: 'smooth' });
      }
    }, 80);
  }

  startPreview(event: MouseEvent, project: Project) {
    if (this.isMobileShowcase()) return;

    const card = event.currentTarget as HTMLElement;
    if (this.hasScreenshotPreview(project)) {
      card.classList.add('screenshot-playing');
      return;
    }

    const video = card.querySelector('video');
    if (!video) return;

    card.classList.add('preview-playing');
    video.currentTime = 0;
    video.play().catch(() => card.classList.remove('preview-playing'));
  }

  stopPreview(event: MouseEvent) {
    if (this.isMobileShowcase()) return;

    const card = event.currentTarget as HTMLElement;
    const video = card.querySelector('video');

    card.classList.remove('screenshot-playing');
    card.classList.remove('preview-playing');
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  }

  trackProject(_: number, project: Project) {
    return project.id;
  }

  trackScreenshot(_: number, screenshot: string) {
    return screenshot;
  }

  private getProjectScrollLeft(track: HTMLElement, card: HTMLElement) {
    const targetLeft = card.offsetLeft - track.offsetLeft;

    if (!this.shouldUseRtlShowcaseScroll(track)) {
      return targetLeft;
    }

    const maxScroll = track.scrollWidth - track.clientWidth;
    return -(maxScroll - targetLeft);
  }

  private shouldUseRtlShowcaseScroll(track: HTMLElement) {
    return (
      this.i18n.language() === 'ar' &&
      !this.isMobileShowcase() &&
      getComputedStyle(track).direction === 'rtl'
    );
  }

  private discoverScreenshotPreviews() {
    if (!this.gsapService.isBrowser) return;

    this.projects
      .filter((project) => project.screenshotPrefix)
      .forEach((project) => {
        void this.discoverScreenshotFrames(
          project.screenshotPrefix ?? '',
          project.screenshotExtension ?? 'png',
        ).then((frames) => {
          project.screenshotFrames = [...frames];
          project.screenshotDuration = getScreenshotDuration(frames.length);
          this.changeDetectorRef.detectChanges();
        });
      });
  }

  private discoverScreenshotFrames(prefix: string, extension: ScreenshotExtension) {
    return new Promise<readonly string[]>((resolve) => {
      const frames: string[] = [];

      const loadNext = (index: number) => {
        const src = `assets/Projects/${prefix}${index}.${extension}`;
        const image = new Image();

        image.onload = () => {
          frames.push(src);
          loadNext(index + 1);
        };

        image.onerror = () => resolve(frames);
        image.src = src;
      };

      loadNext(1);
    });
  }

  private animateCards() {
    if (!this.gsapService.isBrowser) return;

    const cards = this.elementRef.nativeElement.querySelectorAll('.project-card');
    this.gsapService.gsap.from(cards, this.cardRevealVars);
  }

  private isMobileShowcase() {
    return this.gsapService.isBrowser && window.matchMedia('(max-width: 991.98px)').matches;
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
    
    // Animate section heading with clip-path
    this.gsapService.gsap.fromTo(q('.works-heading .section-title'),
      { clipPath: 'inset(100% 0 0 0)', y: 40 },
      { clipPath: 'inset(0% 0 0 0)', y: 0, duration: 1, ease: 'power4.out',
        scrollTrigger: {
          trigger: this.elementRef.nativeElement,
          start: 'top 80%',
        }
      }
    );

    this.gsapService.gsap.from(q('.project-browser, .project-copy > *'), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: showcase,
        start: 'top 75%',
      },
    });
    
    this.gsapService.gsap.from(q('.filter-controls'), {
      opacity: 0,
      y: 14,
      duration: 0.45,
      ease: 'power2.out',
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: q('.filter-controls'),
        start: 'top 90%',
      }
    });
  }
}
