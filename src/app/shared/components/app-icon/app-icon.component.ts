import { Component, input } from '@angular/core';

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
  host: {
    '[attr.data-icon]': 'name()',
  },
  template: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      @switch (name()) {
        @case ('analytics') {
          <path d="M4.5 19.5h15"></path>
          <path d="M5 19.5V5.5"></path>
          <path d="M8 16.5v-5"></path>
          <path d="M12 16.5V8"></path>
          <path d="M16 16.5v-7"></path>
          <path d="M8 11.5 12 8l4 1.5 3-4"></path>
          <circle class="icon-dot" cx="19" cy="5.5" r="1.25"></circle>
        }
        @case ('arrow') {
          <path d="M4.5 12h14"></path>
          <path d="m13 6.5 5.5 5.5-5.5 5.5"></path>
          <path class="icon-soft" d="M4.5 16h5"></path>
        }
        @case ('briefcase') {
          <path d="M8.5 7V5.8c0-1 .8-1.8 1.8-1.8h3.4c1 0 1.8.8 1.8 1.8V7"></path>
          <path d="M5.5 7h13a1.8 1.8 0 0 1 1.8 1.8v8.4a1.8 1.8 0 0 1-1.8 1.8h-13a1.8 1.8 0 0 1-1.8-1.8V8.8A1.8 1.8 0 0 1 5.5 7Z"></path>
          <path d="M3.7 12.2h16.6"></path>
          <path d="M10 12.2v1.2h4v-1.2"></path>
        }
        @case ('check') {
          <circle cx="12" cy="12" r="8.2"></circle>
          <path d="m8.2 12.4 2.4 2.4 5.4-6"></path>
        }
        @case ('clock') {
          <circle cx="12" cy="12" r="8.2"></circle>
          <path d="M12 7.8v4.5l3.2 1.9"></path>
          <path class="icon-soft" d="M18.7 7.4A8.2 8.2 0 0 0 12 3.8"></path>
        }
        @case ('code') {
          <path d="M5 6.5h14a1.7 1.7 0 0 1 1.7 1.7v7.6a1.7 1.7 0 0 1-1.7 1.7H5a1.7 1.7 0 0 1-1.7-1.7V8.2A1.7 1.7 0 0 1 5 6.5Z"></path>
          <path d="m9 10-2.2 2L9 14"></path>
          <path d="m15 10 2.2 2L15 14"></path>
          <path d="m13.2 9.3-2.4 5.4"></path>
        }
        @case ('compass') {
          <circle cx="12" cy="12" r="8.3"></circle>
          <path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4 5.4-2.2Z"></path>
          <circle class="icon-dot" cx="12" cy="12" r="1"></circle>
        }
        @case ('cyber') {
          <path d="M12 3.4 19.5 7v4.9c0 4.8-3.1 7.8-7.5 8.7-4.4-.9-7.5-3.9-7.5-8.7V7L12 3.4Z"></path>
          <path d="M8.5 11h7"></path>
          <path d="M12 8.2v7.6"></path>
          <circle class="icon-dot" cx="8.5" cy="11" r="1"></circle>
          <circle class="icon-dot" cx="15.5" cy="11" r="1"></circle>
        }
        @case ('design') {
          <path d="M4.8 19.2 6 14.6 15.8 4.8a2.1 2.1 0 0 1 3 3L9 17.6l-4.2 1.6Z"></path>
          <path d="m14.3 6.3 3.4 3.4"></path>
          <path d="M5.9 14.8 9 17.9"></path>
        }
        @case ('filter') {
          <path d="M5 7h8.5"></path>
          <path d="M17 7h2"></path>
          <circle cx="15" cy="7" r="1.6"></circle>
          <path d="M5 12h2"></path>
          <path d="M10.5 12H19"></path>
          <circle cx="9" cy="12" r="1.6"></circle>
          <path d="M5 17h9.5"></path>
          <path d="M18 17h1"></path>
          <circle cx="16" cy="17" r="1.6"></circle>
        }
        @case ('growth') {
          <path d="M4.5 17.5 9 13l3.4 3.1 6.9-8.3"></path>
          <path d="M15 7.8h4.3v4.3"></path>
          <circle class="icon-dot" cx="9" cy="13" r="1"></circle>
          <circle class="icon-dot" cx="12.4" cy="16.1" r="1"></circle>
        }
        @case ('handoff') {
          <path d="M4.5 7.5h6.8v9H4.5z"></path>
          <path d="M12.7 7.5h6.8v9h-6.8z"></path>
          <path d="M9.2 12h5.6"></path>
          <path d="m12.8 9.8 2.2 2.2-2.2 2.2"></path>
        }
        @case ('layers') {
          <path d="m12 3.8 8 4-8 4-8-4 8-4Z"></path>
          <path d="m4 12 8 4 8-4"></path>
          <path d="m4 16.2 8 4 8-4"></path>
          <path class="icon-soft" d="M12 7.8v4"></path>
        }
        @case ('launch') {
          <path d="M5 18.8c1.3-4.6 4.9-8.2 9.5-9.5"></path>
          <path d="M13.8 4.2h6v6"></path>
          <path d="m12.7 11.3 7.1-7.1"></path>
          <path d="M5.3 14.2 9.8 18.7"></path>
          <circle class="icon-dot" cx="6" cy="18" r="1.1"></circle>
        }
        @case ('location') {
          <path d="M12 21s6.8-5 6.8-10.8a6.8 6.8 0 1 0-13.6 0C5.2 16 12 21 12 21Z"></path>
          <circle cx="12" cy="10.2" r="2.35"></circle>
          <path class="icon-soft" d="M8.7 21h6.6"></path>
        }
        @case ('mail') {
          <path d="M5.2 6.5h13.6a1.8 1.8 0 0 1 1.8 1.8v7.4a1.8 1.8 0 0 1-1.8 1.8H5.2a1.8 1.8 0 0 1-1.8-1.8V8.3a1.8 1.8 0 0 1 1.8-1.8Z"></path>
          <path d="m4.2 8 7.8 5.5L19.8 8"></path>
          <path class="icon-soft" d="m8.2 16 2.4-2"></path>
          <path class="icon-soft" d="m15.8 16-2.4-2"></path>
        }
        @case ('phone') {
          <path d="M7.4 4.2 9.1 8c.3.7.1 1.5-.5 2l-1.1 1a13.2 13.2 0 0 0 5.5 5.5l1-1.1c.5-.6 1.3-.8 2-.5l3.8 1.7c.7.3 1.1 1 1 1.8l-.3 2a1.8 1.8 0 0 1-1.9 1.5A18.4 18.4 0 0 1 2.1 5.4a1.8 1.8 0 0 1 1.5-1.9l2-.3c.8-.1 1.5.3 1.8 1Z"></path>
        }
        @case ('quote') {
          <path d="M9.5 7.2H5.7c-1.2 0-2 .9-2 2.2v6.2h5.4v-5.2H6.8c0-1.3.9-2.4 2.7-3.2Z"></path>
          <path d="M20.3 7.2h-3.8c-1.2 0-2 .9-2 2.2v6.2h5.4v-5.2h-2.3c0-1.3.9-2.4 2.7-3.2Z"></path>
        }
        @case ('rocket') {
          <path d="M6 15.5 4.5 20l4.5-1.5"></path>
          <path d="m8.5 15.5-4 4"></path>
          <path d="M13.8 4.2c3.3-.5 5.8.1 5.8.1s.6 2.5.1 5.8c-.6 3.8-3.8 6.9-7.9 7.4l-5.3-5.3c.5-4.1 3.5-7.3 7.3-8Z"></path>
          <circle cx="14.8" cy="9.2" r="1.9"></circle>
        }
        @case ('shield') {
          <path d="M12 3.4 19.5 7v4.9c0 4.8-3.1 7.8-7.5 8.7-4.4-.9-7.5-3.9-7.5-8.7V7L12 3.4Z"></path>
          <path d="m8.8 12 2.1 2.1 4.4-5"></path>
        }
        @case ('spark') {
          <path d="M12 3.5 13.8 9l5.7 3-5.7 3L12 20.5 10.2 15l-5.7-3 5.7-3L12 3.5Z"></path>
          <path class="icon-soft" d="M19 5.5v3"></path>
          <path class="icon-soft" d="M20.5 7h-3"></path>
        }
        @case ('strategy') {
          <circle cx="6" cy="17.5" r="2"></circle>
          <circle cx="12" cy="11.5" r="2"></circle>
          <circle cx="18" cy="6.5" r="2"></circle>
          <path d="m7.4 16.1 3.2-3.2"></path>
          <path d="m13.5 10.2 3-2.5"></path>
          <path class="icon-soft" d="M18 4.5v4"></path>
        }
        @case ('target') {
          <circle cx="12" cy="12" r="8.2"></circle>
          <circle cx="12" cy="12" r="4.4"></circle>
          <path d="M12 3.8v3"></path>
          <path d="M12 17.2v3"></path>
          <path d="M3.8 12h3"></path>
          <path d="M17.2 12h3"></path>
          <circle class="icon-dot" cx="12" cy="12" r="1.1"></circle>
        }
        @case ('user') {
          <path d="M6.2 20.2c.7-3.4 3-5.3 5.8-5.3s5.1 1.9 5.8 5.3"></path>
          <circle cx="12" cy="8.2" r="3.3"></circle>
          <path class="icon-soft" d="M5.5 4.5h13v15"></path>
        }
        @case ('wrench') {
          <path d="M14.8 5.2a4 4 0 0 0 4.6 5.4l-8.3 8.3a3 3 0 0 1-4.2-4.2l8.3-8.3a4 4 0 0 0-.4-1.2Z"></path>
          <circle class="icon-dot" cx="8.8" cy="16.8" r="1"></circle>
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
        overflow: visible;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 1.85;
        vector-effect: non-scaling-stroke;
      }

      .icon-soft {
        opacity: 0.58;
      }

      .icon-dot {
        fill: currentColor;
        stroke: none;
      }
    `,
  ],
})
export class AppIconComponent {
  readonly name = input.required<AppIconName>();
}
