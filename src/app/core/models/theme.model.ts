export type ThemeMode =
  | 'dark'
  | 'light'
  | 'soft-lavender'
  | 'refreshing-summer-fun'
  | 'fiery-seas';

export interface ThemeOption {
  readonly value: ThemeMode;
  readonly label: string;
}

export const DEFAULT_THEME: ThemeMode = 'dark';

export const THEME_OPTIONS: readonly ThemeOption[] = [
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
  { value: 'soft-lavender', label: 'Soft Lavender' },
  { value: 'refreshing-summer-fun', label: 'Refreshing Summer Fun' },
  { value: 'fiery-seas', label: 'Fiery Seas' },
];

export const PALETTE_THEME_MODES: readonly ThemeMode[] = [
  'soft-lavender',
  'refreshing-summer-fun',
  'fiery-seas',
];

export const THEME_CLASS_NAMES: readonly string[] = THEME_OPTIONS.map(
  (option) => `theme-${option.value}`,
);

export function isThemeMode(value: string | null): value is ThemeMode {
  return THEME_OPTIONS.some((option) => option.value === value);
}
