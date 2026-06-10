import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ScrollService } from '../../../core/services/scroll.service';
import { I18nService } from '../../../core/services/i18n.service';

@Component({
  selector: 'app-floating-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="floating-cta" [class.visible]="isVisible" [class.hidden]="isHidden">
      <div class="cta-content glass">
        <div class="status-indicator">
          <span class="dot"></span>
        </div>
        <div class="cta-text">
          <span class="cta-message">{{ i18n.t(currentMessageKey) }}</span>
        </div>
        <a href="#contact" class="cta-button" (click)="scrollToContact($event)">
          <span>{{ i18n.t('floating.cta.button') }}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  `,
  styles: [`
    .floating-cta {
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: var(--floating-cta-z);
      transform: translateY(120%);
      opacity: 0;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;
      pointer-events: none;
    }
    :host-context([dir="rtl"]) .floating-cta {
      right: auto;
      left: 30px;
    }
    .floating-cta.visible {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    }
    .floating-cta.hidden {
      transform: translateY(120%);
      opacity: 0;
      pointer-events: none;
    }
    .cta-content {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 10px 10px 10px 20px;
      border-radius: 100px;
      background: rgba(10, 15, 26, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
    :host-context([dir="rtl"]) .cta-content {
      padding: 10px 20px 10px 10px;
    }
    .status-indicator {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .dot {
      width: 8px;
      height: 8px;
      background-color: var(--accent-green);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--accent-green);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(53, 211, 157, 0.7); }
      70% { box-shadow: 0 0 0 6px rgba(53, 211, 157, 0); }
      100% { box-shadow: 0 0 0 0 rgba(53, 211, 157, 0); }
    }
    .cta-text {
      font-size: 0.85rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.9);
      white-space: nowrap;
    }
    .cta-button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 100px;
      background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
      color: #031018;
      font-size: 0.85rem;
      font-weight: 800;
      text-decoration: none;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    :host-context([dir="rtl"]) .cta-button svg {
      transform: rotate(180deg);
    }
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 229, 255, 0.3);
    }
    
    @media (max-width: 768px) {
      .floating-cta {
        bottom: max(16px, env(safe-area-inset-bottom));
        left: clamp(14px, 5vw, 20px);
        right: clamp(14px, 5vw, 20px);
      }
      .cta-content {
        justify-content: space-between;
        padding: 8px 8px 8px 16px;
        width: 100%;
      }
      :host-context([dir="rtl"]) .cta-content {
        padding: 8px 16px 8px 8px;
      }
      .cta-text {
        display: none;
      }
      .cta-button {
        flex: 1;
        justify-content: center;
        min-height: 42px;
        text-align: center;
      }
    }

    @media (max-width: 374px) {
      .cta-content {
        padding: 7px;
      }

      :host-context([dir="rtl"]) .cta-content {
        padding: 7px;
      }

      .cta-button {
        padding: 8px 12px;
        font-size: 0.8rem;
      }
    }
  `]
})
export class FloatingCtaComponent implements OnInit, OnDestroy {
  isVisible = false;
  isHidden = false;
  currentMessageKey = 'floating.cta.message.default';

  // We could update this based on scroll position if needed
  private readonly sectionMessages: Record<string, string> = {
    'work': 'floating.cta.message.work',
    'services': 'floating.cta.message.services',
    'process': 'floating.cta.message.process',
    'stack': 'floating.cta.message.stack'
  };

  constructor(
    private readonly scrollService: ScrollService,
    public readonly i18n: I18nService
  ) {}

  ngOnInit() {
    // In a real implementation we would subscribe to scroll changes
    // to update isVisible, isHidden, and currentMessageKey
    // For simplicity, we just use a basic listener or effect
  }

  ngOnDestroy() {}

  scrollToContact(event: Event) {
    event.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      this.scrollService.scrollToElement(target, true);
    }
  }
}
