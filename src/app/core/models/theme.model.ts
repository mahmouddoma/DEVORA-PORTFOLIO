export type ThemeMode = 'dark' | 'light' | 'soft-lavender' | 'violet-pulse';

export interface ThemeOption {
  readonly value: ThemeMode;
  readonly label: string;
}

export const DEFAULT_THEME: ThemeMode = 'dark';

export const THEME_OPTIONS: readonly ThemeOption[] = [
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
  { value: 'soft-lavender', label: 'Soft Lavender' },
  { value: 'violet-pulse', label: 'Violet Pulse' },
];

export const PALETTE_THEME_MODES: readonly ThemeMode[] = ['soft-lavender', 'violet-pulse'];

export const THEME_CLASS_NAMES: readonly string[] = THEME_OPTIONS.map(
  (option) => `theme-${option.value}`,
);

export function isThemeMode(value: string | null): value is ThemeMode {
  return THEME_OPTIONS.some((option) => option.value === value);
}
