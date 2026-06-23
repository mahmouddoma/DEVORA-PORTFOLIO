import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';
import { GsapService } from '../../core/services/gsap.service';
import { I18nService } from '../../core/services/i18n.service';
import { ScrollService } from '../../core/services/scroll.service';
import { ThemeService } from '../../core/services/theme.service';
import { BrandLogoComponent } from '../../shared/components/brand-logo/brand-logo.component';

interface NavItem {
  fragment: string;
  labelKey: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, BrandLogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  isHeaderCompact = false;
  isMenuOpen = false;
  activeSection = 'top';

  readonly navItems: NavItem[] = [
    { fragment: 'work', labelKey: 'nav.work' },
    { fragment: 'services', labelKey: 'nav.services' },
    { fragment: 'cybersecurity', labelKey: 'nav.cybersecurity' },
    { fragment: 'stack', labelKey: 'nav.stack' },
  ];

  private animationContext?: { revert: () => void };
  private readonly sectionIds = ['top', 'work', 'services', 'cybersecurity', 'stack', 'contact'];
  private readonly sectionScrollGap = 24;

  private readonly scrollHandler = () => {
    this.updateHeaderState();
    this.updateActiveSection();
  };
  private readonly delayedScrollHandler = () => {
    window.requestAnimationFrame(() => {
      this.updateHeaderState();
      this.updateActiveSection();
    });
  };

  constructor(
    private readonly gsapService: GsapService,
    private readonly elementRef: ElementRef<HTMLElement>,
    public readonly themeService: ThemeService,
    public readonly i18n: I18nService,
    public readonly authService: AuthService,
    public readonly scrollService: ScrollService,
  ) {}

  ngOnInit() {
    if (!this.gsapService.isBrowser) return;

    // Initial check
    this.updateHeaderState();
    this.updateActiveSection();

    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    window.addEventListener('resize', this.scrollHandler, { passive: true });
    window.addEventListener('hashchange', this.delayedScrollHandler);

    // Re-check after a short delay to handle browser scroll restoration
    window.setTimeout(() => {
      this.updateHeaderState();
      this.updateActiveSection();
    }, 150);
  }

  ngAfterViewInit() {
    this.animationContext = this.gsapService.context(this.elementRef.nativeElement, () => {
      const q = this.gsapService.gsap.utils.selector(this.elementRef.nativeElement);

      this.gsapService.gsap.from(q('.navbar-shell'), {
        y: -36,
        opacity: 0,
        duration: 0.9,
        ease: 'power4.out',
        delay: 0.15,
        clearProps: 'transform,opacity',
      });

      this.gsapService.gsap.from(
        q('.nav-link, .nav-actions button, .nav-actions a, .theme-select-wrapper'),
        {
          opacity: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: 'power3.out',
          delay: 0.35,
          clearProps: 'opacity',
        },
      );

      this.updateHeaderState();
      this.updateActiveSection();
    });
  }

  ngOnDestroy() {
    if (this.gsapService.isBrowser) {
      window.removeEventListener('scroll', this.scrollHandler);
      window.removeEventListener('resize', this.scrollHandler);
      window.removeEventListener('hashchange', this.delayedScrollHandler);
    }

    this.animationContext?.revert();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  onThemeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.themeService.setThemeFromValue(input.value);
  }

  navigateToSection(event: MouseEvent, sectionId: string) {
    this.closeMenu();

    if (this.scrollService.scrollToSection(sectionId, true)) {
      event.preventDefault();
    }
  }

  updateHeaderState(scrollY = window.scrollY) {
    this.isHeaderCompact = scrollY >= 80;
  }

  updateActiveSection(scrollY = window.scrollY, viewportHeight = window.innerHeight) {
    if (!this.gsapService.isBrowser) return;

    const navbar = this.elementRef.nativeElement.querySelector<HTMLElement>('.navbar');
    const topOffset = navbar?.getBoundingClientRect().height ?? 0;
    const activationLine = scrollY + topOffset + this.sectionScrollGap + viewportHeight * 0.24;
    let activeSection = 'top';

    for (const sectionId of this.sectionIds) {
      const section = document.getElementById(sectionId);
      if (!section) continue;

      const sectionTop = section.getBoundingClientRect().top + scrollY;
      if (sectionTop <= activationLine) {
        activeSection = sectionId;
      }
    }

    this.activeSection = activeSection;
  }

  isActive(href: string) {
    return this.activeSection === href.replace('#', '');
  }
}
