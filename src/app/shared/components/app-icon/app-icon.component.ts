import { Component, Input } from '@angular/core';

export type AppIconName =
  | 'analytics'
  | 'arrow'
  | 'briefcase'
  | 'check'
  | 'clock'
  | 'code'
  | 'compass'
  | 'cyber'
  | 'design'
  | 'filter'
  | 'growth'
  | 'handoff'
  | 'layers'
  | 'launch'
  | 'location'
  | 'mail'
  | 'phone'
  | 'quote'
  | 'rocket'
  | 'shield'
  | 'spark'
  | 'strategy'
  | 'target'
  | 'user'
  | 'wrench';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      @switch (name) {
        @case ('analytics') {
          <path d="M4 19V5"></path>
          <path d="M4 19h16"></path>
          <path d="M8 15v-4"></path>
          <path d="M12 15V8"></path>
          <path d="M16 15v-6"></path>
        }
        @case ('arrow') {
          <path d="M5 12h14"></path>
          <path d="m13 6 6 6-6 6"></path>
        }
        @case ('briefcase') {
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
          <path d="M4 7h16v12H4z"></path>
          <path d="M4 12h16"></path>
        }
        @case ('check') {
          <path d="m5 12 4 4L19 6"></path>
        }
        @case ('clock') {
          <circle cx="12" cy="12" r="8"></circle>
          <path d="M12 8v4l3 2"></path>
        }
        @case ('code') {
          <path d="m8 9-4 3 4 3"></path>
          <path d="m16 9 4 3-4 3"></path>
          <path d="m14 5-4 14"></path>
        }
        @case ('compass') {
          <circle cx="12" cy="12" r="8"></circle>
          <path d="m15 9-2 5-5 2 2-5 5-2Z"></path>
        }
        @case ('cyber') {
          <path d="M12 3 20 7v5c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V7l8-4Z"></path>
          <path d="M9 12h6"></path>
          <path d="M12 9v6"></path>
        }
        @case ('design') {
          <path d="M4 20 15.5 8.5"></path>
          <path d="m14 4 6 6"></path>
          <path d="M13 5 5 13l-1 4 4-1 8-8"></path>
        }
        @case ('filter') {
          <path d="M4 6h16"></path>
          <path d="M7 12h10"></path>
          <path d="M10 18h4"></path>
        }
        @case ('growth') {
          <path d="M4 17 9 12l4 4 7-9"></path>
          <path d="M15 7h5v5"></path>
        }
        @case ('handoff') {
          <path d="M7 12h10"></path>
          <path d="m13 8 4 4-4 4"></path>
          <path d="M4 6v12"></path>
          <path d="M20 6v12"></path>
        }
        @case ('layers') {
          <path d="m12 3 8 4-8 4-8-4 8-4Z"></path>
          <path d="m4 12 8 4 8-4"></path>
          <path d="m4 17 8 4 8-4"></path>
        }
        @case ('launch') {
          <path d="M5 19c1.5-4.5 5-8 9.5-9.5"></path>
          <path d="M14 4h6v6"></path>
          <path d="m13 11 7-7"></path>
          <path d="M5 14l5 5"></path>
        }
        @case ('location') {
          <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z"></path>
          <circle cx="12" cy="10" r="2.5"></circle>
        }
        @case ('mail') {
          <path d="M4 6h16v12H4z"></path>
          <path d="m4 7 8 6 8-6"></path>
        }
        @case ('phone') {
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"></path>
        }
        @case ('quote') {
          <path d="M9 7H5v5h4v5H4"></path>
          <path d="M20 7h-4v5h4v5h-5"></path>
        }
        @case ('rocket') {
          <path d="M5 15c-1 1-1.5 3.5-1.5 3.5S6 18 7 17"></path>
          <path d="M9 15 4 20"></path>
          <path d="M14 4c3.5 0 6 0 6 0s0 2.5 0 6c0 4-4 8-8 8l-6-6c0-4 4-8 8-8Z"></path>
          <circle cx="15" cy="9" r="2"></circle>
        }
        @case ('shield') {
          <path d="M12 3 20 7v5c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V7l8-4Z"></path>
        }
        @case ('spark') {
          <path d="M12 3v5"></path>
          <path d="M12 16v5"></path>
          <path d="M3 12h5"></path>
          <path d="M16 12h5"></path>
          <path d="m6 6 3 3"></path>
          <path d="m15 15 3 3"></path>
          <path d="m18 6-3 3"></path>
          <path d="m9 15-3 3"></path>
        }
        @case ('strategy') {
          <path d="M4 18 18 4"></path>
          <path d="M14 4h4v4"></path>
          <path d="M7 14h4v4H7z"></path>
        }
        @case ('target') {
          <circle cx="12" cy="12" r="8"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <circle cx="12" cy="12" r="1"></circle>
        }
        @case ('user') {
          <circle cx="12" cy="8" r="4"></circle>
          <path d="M4 21a8 8 0 0 1 16 0"></path>
        }
        @case ('wrench') {
          <path d="M14.5 5.5a4 4 0 0 0 4.8 5.1L11 19a3 3 0 0 1-4-4l8.4-8.3a4 4 0 0 0-.9-1.2Z"></path>
        }
      }
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        width: 1em;
        height: 1em;
        flex: 0 0 auto;
        color: currentColor;
      }

      svg {
        width: 100%;
        height: 100%;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
      }
    `,
  ],
})
export class AppIconComponent {
  @Input({ required: true }) name!: AppIconName;
}
