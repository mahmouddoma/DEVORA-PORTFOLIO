import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';
import { I18nService } from '../../core/services/i18n.service';
import { ContactComponent } from '../home/components/contact/contact.component';
import { HeroComponent } from '../home/components/hero/hero.component';
import { ServicesComponent } from '../home/components/services/services.component';
import { TechStackComponent } from '../home/components/tech-stack/tech-stack.component';
import { WorksComponent } from '../home/components/works/works.component';

interface EditableField {
  key: string;
  label: string;
  multiline?: boolean;
}

interface EditableSection {
  id: string;
  title: string;
  description: string;
  fields: EditableField[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeroComponent,
    WorksComponent,
    ServicesComponent,
    TechStackComponent,
    ContactComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  readonly sections: EditableSection[] = [
    {
      id: 'hero',
      title: 'Hero',
      description: 'Main promise, CTAs, and proof metrics.',
      fields: [
        { key: 'hero.kicker', label: 'Kicker' },
        { key: 'hero.title.line1', label: 'Title line 1' },
        { key: 'hero.title.line2', label: 'Title line 2' },
        { key: 'hero.title.line3', label: 'Title line 3' },
        { key: 'hero.subtitle', label: 'Subtitle', multiline: true },
        { key: 'hero.primaryCta', label: 'Primary CTA' },
        { key: 'hero.secondaryCta', label: 'Secondary CTA' },
        { key: 'hero.proof', label: 'Proof line', multiline: true },
        { key: 'hero.metric1.value', label: 'Metric 1 value' },
        { key: 'hero.metric1.label', label: 'Metric 1 label' },
        { key: 'hero.metric2.value', label: 'Metric 2 value' },
        { key: 'hero.metric2.label', label: 'Metric 2 label' },
        { key: 'hero.metric3.value', label: 'Metric 3 value' },
        { key: 'hero.metric3.label', label: 'Metric 3 label' },
      ],
    },
    {
      id: 'work',
      title: 'Work',
      description: 'Case studies, project cards, filters, and labels.',
      fields: [
        { key: 'work.kicker', label: 'Kicker' },
        { key: 'work.title', label: 'Title' },
        { key: 'work.body', label: 'Description', multiline: true },
        { key: 'work.contactCta', label: 'Contact CTA' },
        { key: 'work.viewAll', label: 'View all CTA' },
        { key: 'work.filter.all', label: 'Filter: all' },
        { key: 'work.filter.realEstate', label: 'Filter: real estate' },
        { key: 'work.filter.education', label: 'Filter: education' },
        { key: 'work.filter.agriculture', label: 'Filter: agriculture' },
        { key: 'work.osos.title', label: 'Osos title' },
        { key: 'work.osos.description', label: 'Osos description', multiline: true },
        { key: 'work.ajyal.title', label: 'Ajyal title' },
        { key: 'work.ajyal.description', label: 'Ajyal description', multiline: true },
        { key: 'work.zaytona.title', label: 'Zaytona title' },
        { key: 'work.zaytona.description', label: 'Zaytona description', multiline: true },
        { key: 'work.live', label: 'Live pill' },
        { key: 'work.visit', label: 'Visit label' },
      ],
    },
    {
      id: 'services',
      title: 'What We Do',
      description: 'Service offer, outcomes, and delivery process.',
      fields: [
        { key: 'services.kicker', label: 'Kicker' },
        { key: 'services.title', label: 'Title' },
        { key: 'services.body', label: 'Description', multiline: true },
        { key: 'services.offer.label', label: 'Offer label' },
        { key: 'services.offer.title', label: 'Offer title', multiline: true },
        { key: 'services.offer.body', label: 'Offer body', multiline: true },
        { key: 'services.primaryCta', label: 'Primary CTA' },
        { key: 'services.secondaryCta', label: 'Secondary CTA' },
        { key: 'services.strategy.title', label: 'Strategy title' },
        { key: 'services.strategy.body', label: 'Strategy body', multiline: true },
        { key: 'services.strategy.outcome', label: 'Strategy outcome' },
        { key: 'services.web.title', label: 'Web title' },
        { key: 'services.web.body', label: 'Web body', multiline: true },
        { key: 'services.web.outcome', label: 'Web outcome' },
        { key: 'services.saas.title', label: 'SaaS title' },
        { key: 'services.saas.body', label: 'SaaS body', multiline: true },
        { key: 'services.saas.outcome', label: 'SaaS outcome' },
        { key: 'services.perf.title', label: 'Growth title' },
        { key: 'services.perf.body', label: 'Growth body', multiline: true },
        { key: 'services.perf.outcome', label: 'Growth outcome' },
        { key: 'services.brand.title', label: 'Brand title' },
        { key: 'services.brand.body', label: 'Brand body', multiline: true },
        { key: 'services.brand.outcome', label: 'Brand outcome' },
        { key: 'services.commerce.title', label: 'Commerce title' },
        { key: 'services.commerce.body', label: 'Commerce body', multiline: true },
        { key: 'services.commerce.outcome', label: 'Commerce outcome' },
        { key: 'services.integrations.title', label: 'Integrations title' },
        { key: 'services.integrations.body', label: 'Integrations body', multiline: true },
        { key: 'services.integrations.outcome', label: 'Integrations outcome' },
        { key: 'services.support.title', label: 'Support title' },
        { key: 'services.support.body', label: 'Support body', multiline: true },
        { key: 'services.support.outcome', label: 'Support outcome' },
      ],
    },
    {
      id: 'stack',
      title: 'Stack',
      description: 'Technology section headline and caption.',
      fields: [
        { key: 'tech.kicker', label: 'Kicker' },
        { key: 'tech.title', label: 'Title' },
        { key: 'tech.caption', label: 'Caption', multiline: true },
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Lead form copy, labels, placeholders, and success text.',
      fields: [
        { key: 'contact.kicker', label: 'Kicker' },
        { key: 'contact.title', label: 'Title' },
        { key: 'contact.body', label: 'Body', multiline: true },
        { key: 'contact.name', label: 'Name label' },
        { key: 'contact.namePlaceholder', label: 'Name placeholder' },
        { key: 'contact.email', label: 'Email label' },
        { key: 'contact.emailPlaceholder', label: 'Email placeholder' },
        { key: 'contact.service', label: 'Service label' },
        { key: 'contact.chooseService', label: 'Choose service' },
        { key: 'contact.details', label: 'Details label' },
        { key: 'contact.detailsPlaceholder', label: 'Details placeholder', multiline: true },
        { key: 'contact.submit', label: 'Submit button' },
        { key: 'contact.success', label: 'Success message', multiline: true },
        { key: 'contact.location', label: 'Location' },
      ],
    },
  ];

  activeSectionId = 'hero';
  selectedKey = 'hero.title.line1';
  selectedLabel = 'Title line 1';
  selectedValue = '';
  private highlightedElement?: HTMLElement;

  constructor(
    public readonly i18n: I18nService,
    public readonly authService: AuthService,
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly router: Router,
  ) {
    this.selectedValue = this.i18n.t(this.selectedKey);
  }

  get activeSection() {
    return this.sections.find((section) => section.id === this.activeSectionId) ?? this.sections[0];
  }

  setActiveSection(sectionId: string) {
    this.activeSectionId = sectionId;
    const firstField = this.activeSection.fields[0];
    this.selectField(firstField);
  }

  selectField(field: EditableField) {
    this.selectedKey = field.key;
    this.selectedLabel = field.label;
    this.selectedValue = this.i18n.t(field.key);
  }

  updateField(key: string, value: string) {
    this.i18n.setTranslation(key, value);
    if (this.selectedKey === key) {
      this.selectedValue = value;
    }
  }

  updateSelectedValue(value: string) {
    this.selectedValue = value;
    this.i18n.setTranslation(this.selectedKey, value);
  }

  resetSelected() {
    this.i18n.resetTranslation(this.selectedKey);
    this.selectedValue = this.i18n.t(this.selectedKey);
  }

  resetActiveSection() {
    this.activeSection.fields.forEach((field) => this.i18n.resetTranslation(field.key));
    this.selectedValue = this.i18n.t(this.selectedKey);
  }

  resetAll() {
    this.i18n.resetAllTranslations();
    this.selectedValue = this.i18n.t(this.selectedKey);
  }

  onPreviewClick(event: MouseEvent) {
    const target = event.target as HTMLElement | null;
    const editable = target?.closest<HTMLElement>('[data-edit-key]');
    if (!editable) return;

    event.preventDefault();
    event.stopPropagation();

    const key = editable.dataset['editKey'];
    if (!key) return;

    const field = this.findField(key);
    this.selectedKey = key;
    this.selectedLabel = field?.label ?? key;
    this.selectedValue = this.i18n.t(key);
    this.activeSectionId = this.findSectionId(key) ?? this.activeSectionId;
    this.highlightElement(editable);
  }

  openPortfolio() {
    window.open(this.router.serializeUrl(this.router.createUrlTree(['/'])), '_blank', 'noopener,noreferrer');
  }

  logout() {
    this.authService.logout();
    void this.router.navigate(['/login']);
  }

  private findField(key: string) {
    return this.sections.flatMap((section) => section.fields).find((field) => field.key === key);
  }

  private findSectionId(key: string) {
    return this.sections.find((section) => section.fields.some((field) => field.key === key))?.id;
  }

  private highlightElement(element: HTMLElement) {
    if (this.highlightedElement) {
      this.highlightedElement.style.outline = '';
      this.highlightedElement.style.outlineOffset = '';
    }

    this.highlightedElement = element;
    element.style.outline = '2px solid #00e5ff';
    element.style.outlineOffset = '4px';
    this.elementRef.nativeElement.querySelector('.selected-editor')?.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    });
  }
}
