import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'devora-theme';
  readonly theme = signal<ThemeMode>('dark');

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    const savedTheme = this.readStoredTheme();
    this.setTheme(savedTheme ?? 'dark', false);
  }

  toggleTheme() {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: ThemeMode, persist = true) {
    this.theme.set(theme);

    const root = this.document.documentElement;
    root.dataset['theme'] = theme;
    root.classList.toggle('theme-dark', theme === 'dark');
    root.classList.toggle('theme-light', theme === 'light');

    if (persist && isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, theme);
    }
  }

  private readStoredTheme(): ThemeMode | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    const stored = localStorage.getItem(this.storageKey);
    return stored === 'dark' || stored === 'light' ? stored : null;
  }
}
