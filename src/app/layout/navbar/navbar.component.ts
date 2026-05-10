import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';
import { GsapService } from '../../core/services/gsap.service';
import { I18nService } from '../../core/services/i18n.service';
import { ThemeService } from '../../core/services/theme.service';
import { BrandLogoComponent } from '../../shared/components/brand-logo/brand-logo.component';

interface NavItem {
  href: string;
  labelKey: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BrandLogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  isHeaderCompact = false;
  isMenuOpen = false;
  activeSection = 'top';

  readonly navItems: NavItem[] = [
    { href: '#work', labelKey: 'nav.work' },
    { href: '#services', labelKey: 'nav.services' },
    { href: '#stack', labelKey: 'nav.stack' },
  ];

  private animationContext?: { revert: () => void };
  private readonly sectionIds = ['top', 'work', 'services', 'stack', 'contact'];

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
      });

      this.gsapService.gsap.from(q('.nav-link, .nav-actions button, .nav-actions a'), {
        opacity: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: 'power3.out',
        delay: 0.35,
        clearProps: 'opacity',
      });

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

  navigateTo(event: MouseEvent, href: string) {
    if (!this.gsapService.isBrowser) return;

    event.preventDefault();
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);

    if (!target) return;

    this.activeSection = targetId;
    this.closeMenu();

    window.requestAnimationFrame(() => {
      const navbar = this.elementRef.nativeElement.querySelector<HTMLElement>('.navbar');
      const topOffset = navbar?.getBoundingClientRect().height ?? 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - topOffset;

      if (window.location.hash !== href) {
        window.history.pushState(null, '', href);
      }

      this.gsapService.scrollToY(targetTop, {
        duration: 1.08,
        ease: 'power4.inOut',
        onUpdate: () => this.updateActiveSection(),
        onComplete: () => {
          this.updateHeaderState();
          this.updateActiveSection();
          this.gsapService.refreshScrollTriggers();
        },
      });

      window.setTimeout(() => {
        this.updateHeaderState();
        this.updateActiveSection();
        this.gsapService.refreshScrollTriggers();
      }, 1120);
    });
  }

  updateHeaderState(scrollY = window.scrollY) {
    this.isHeaderCompact = scrollY >= 80;
  }

  updateActiveSection(scrollY = window.scrollY, viewportHeight = window.innerHeight) {
    if (!this.gsapService.isBrowser) return;

    const navbar = this.elementRef.nativeElement.querySelector<HTMLElement>('.navbar');
    const topOffset = navbar?.getBoundingClientRect().height ?? 0;
    const activationLine = scrollY + topOffset + viewportHeight * 0.28;
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
