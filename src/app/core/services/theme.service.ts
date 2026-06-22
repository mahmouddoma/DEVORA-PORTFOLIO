import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

import {
  DEFAULT_THEME,
  PALETTE_THEME_MODES,
  THEME_CLASS_NAMES,
  THEME_OPTIONS,
  isThemeMode,
} from '../models/theme.model';
import type { ThemeMode } from '../models/theme.model';

export type { ThemeMode, ThemeOption } from '../models/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'devora-theme';
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  readonly theme = signal<ThemeMode>(DEFAULT_THEME);
  readonly themeOptions = THEME_OPTIONS;

  constructor() {
    const savedTheme = this.readStoredTheme();
    this.setTheme(savedTheme ?? DEFAULT_THEME, false);
  }

  toggleTheme() {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setThemeFromValue(value: string) {
    if (isThemeMode(value)) {
      this.setTheme(value);
    }
  }

  selectedThemeLabel() {
    return this.themeOptions.find((option) => option.value === this.theme())?.label ?? 'Dark';
  }

  setTheme(theme: ThemeMode, persist = true) {
    this.theme.set(theme);

    const root = this.document.documentElement;
    root.dataset['theme'] = theme;
    root.classList.remove(...THEME_CLASS_NAMES);
    root.classList.add(`theme-${theme}`);
    root.classList.toggle('theme-palette', PALETTE_THEME_MODES.includes(theme));

    const body = this.document.body;
    body?.classList.remove(...THEME_CLASS_NAMES);
    body?.classList.add(`theme-${theme}`);
    body?.classList.toggle('theme-palette', PALETTE_THEME_MODES.includes(theme));

    if (persist && isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, theme);
    }
  }

  private readStoredTheme(): ThemeMode | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    const stored = localStorage.getItem(this.storageKey);
    return isThemeMode(stored) ? stored : null;
  }
}
