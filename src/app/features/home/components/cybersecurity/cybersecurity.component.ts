import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { I18nService } from '../../../../core/services/i18n.service';
import { AppIconComponent, type AppIconName } from '../../../../shared/components/app-icon/app-icon.component';

interface CyberCapability {
  titleKey: string;
  bodyKey: string;
  icon: AppIconName;
}

interface CyberSignal {
  labelKey: string;
  valueKey: string;
  icon: AppIconName;
}

@Component({
  selector: 'app-cybersecurity',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './cybersecurity.component.html',
  styleUrl: './cybersecurity.component.css',
})
export class CybersecurityComponent {
  readonly capabilities: CyberCapability[] = [
    {
      titleKey: 'cyber.capability.pt.title',
      bodyKey: 'cyber.capability.pt.body',
      icon: 'target',
    },
    {
      titleKey: 'cyber.capability.api.title',
      bodyKey: 'cyber.capability.api.body',
      icon: 'code',
    },
    {
      titleKey: 'cyber.capability.vuln.title',
      bodyKey: 'cyber.capability.vuln.body',
      icon: 'shield',
    },
    {
      titleKey: 'cyber.capability.hardening.title',
      bodyKey: 'cyber.capability.hardening.body',
      icon: 'wrench',
    },
  ];

  readonly signals: CyberSignal[] = [
    {
      labelKey: 'cyber.signal1.label',
      valueKey: 'cyber.signal1.value',
      icon: 'cyber',
    },
    {
      labelKey: 'cyber.signal2.label',
      valueKey: 'cyber.signal2.value',
      icon: 'analytics',
    },
    {
      labelKey: 'cyber.signal3.label',
      valueKey: 'cyber.signal3.value',
      icon: 'check',
    },
  ];

  constructor(public readonly i18n: I18nService) {}
}
