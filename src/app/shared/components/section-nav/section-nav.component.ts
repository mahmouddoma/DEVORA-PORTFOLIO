import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

import { ScrollService } from '../../../core/services/scroll.service';
import { I18nService } from '../../../core/services/i18n.service';

interface NavSection {
  id: string;
  labelKey: string;
}

@Component({
  selector: 'app-section-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="section-nav" aria-label="Page Sections">
      <ul class="nav-dots">
        <li *ngFor="let section of sections; let i = index">
          <button 
            type="button" 
            class="nav-dot" 
            [class.active]="activeSection === section.id"
            [attr.aria-label]="i18n.t(section.labelKey)"
            (click)="scrollToSection(section.id)">
            <span class="dot-label">{{ i18n.t(section.labelKey) }}</span>
            <span class="dot-indicator"></span>
          </button>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    .section-nav {
      position: fixed;
      right: 40px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 900;
    }
    :host-context([dir="rtl"]) .section-nav {
      right: auto;
      left: 40px;
    }
    .nav-dots {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .nav-dot {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      background: none;
      border: none;
      padding: 8px 0;
      cursor: pointer;
      group: dot-group;
    }
    :host-context([dir="rtl"]) .nav-dot {
      flex-direction: row-reverse;
    }
    .dot-label {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--text-secondary);
      opacity: 0;
      transform: translateX(10px);
      transition: all 0.3s ease;
      background: rgba(10, 15, 26, 0.8);
      padding: 4px 10px;
      border-radius: 4px;
      backdrop-filter: blur(4px);
    }
    :host-context([dir="rtl"]) .dot-label {
      transform: translateX(-10px);
    }
    .nav-dot:hover .dot-label,
    .nav-dot.active .dot-label {
      opacity: 1;
      transform: translateX(0);
    }
    .nav-dot.active .dot-label {
      color: var(--accent-cyan);
    }
    .dot-indicator {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
      position: relative;
    }
    .nav-dot:hover .dot-indicator {
      background-color: rgba(255, 255, 255, 0.8);
      transform: scale(1.5);
    }
    .nav-dot.active .dot-indicator {
      background-color: var(--accent-cyan);
      transform: scale(1.5);
      box-shadow: 0 0 10px rgba(0, 229, 255, 0.6);
    }
    .nav-dot.active .dot-indicator::after {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border-radius: 50%;
      border: 1px solid rgba(0, 229, 255, 0.4);
    }
    
    @media (max-width: 992px) {
      .section-nav {
        display: none;
      }
    }
  `]
})
export class SectionNavComponent implements OnInit, OnDestroy {
  activeSection = 'top';
  
  readonly sections: NavSection[] = [
    { id: 'top', labelKey: 'nav.home' },
    { id: 'work', labelKey: 'nav.work' },
    { id: 'services', labelKey: 'nav.services' },
    { id: 'cybersecurity', labelKey: 'nav.cybersecurity' },
    { id: 'process', labelKey: 'nav.process' },
    { id: 'stack', labelKey: 'nav.tech' },
    { id: 'contact', labelKey: 'nav.contact' }
  ];

  private observer?: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private readonly scrollService: ScrollService,
    public readonly i18n: I18nService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  scrollToSection(id: string) {
    this.activeSection = id;
    this.scrollService.scrollToSection(id, true);
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    this.sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) this.observer?.observe(el);
    });
  }
}
