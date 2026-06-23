import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { I18nService } from '../../core/services/i18n.service';

interface ProjectDetail {
  slug: string;
  titleKey: string;
  categoryKey: string;
  summaryKey: string;
  liveUrl: string;
  accent: string;
  outcomeKeys: readonly string[];
  stackKeys: readonly string[];
}

const PROJECTS: readonly ProjectDetail[] = [
  {
    slug: 'osos-al-riadah',
    titleKey: 'work.osos.title',
    categoryKey: 'work.category.realEstate',
    summaryKey: 'project.osos.summary',
    liveUrl: 'https://osos-alriadah.com/',
    accent: '#00e5ff',
    outcomeKeys: ['project.osos.outcome1', 'project.osos.outcome2', 'project.osos.outcome3'],
    stackKeys: [
      'tech.item.angular',
      'tech.item.typescript',
      'project.stack.responsiveUi',
      'project.stack.contentArchitecture',
    ],
  },
  {
    slug: 'ajyal-al-quran',
    titleKey: 'work.ajyal.title',
    categoryKey: 'work.category.education',
    summaryKey: 'project.ajyal.summary',
    liveUrl: 'https://ajyal-alquran.com/',
    accent: '#35d39d',
    outcomeKeys: ['project.ajyal.outcome1', 'project.ajyal.outcome2', 'project.ajyal.outcome3'],
    stackKeys: [
      'tech.item.angular',
      'tech.item.typescript',
      'project.stack.educationUx',
      'tech.item.performance',
    ],
  },
  {
    slug: 'zaytona-agriculture',
    titleKey: 'work.zaytona.title',
    categoryKey: 'work.category.agriculture',
    summaryKey: 'project.zaytona.summary',
    liveUrl: 'https://zaytona.info/',
    accent: '#73d13d',
    outcomeKeys: ['project.zaytona.outcome1', 'project.zaytona.outcome2', 'project.zaytona.outcome3'],
    stackKeys: [
      'tech.item.angular',
      'tech.item.typescript',
      'project.stack.brandUi',
      'project.stack.responsiveLayout',
    ],
  },
];

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly slug = this.route.snapshot.paramMap.get('slug') ?? '';
  readonly i18n = inject(I18nService);

  readonly project = computed(
    () => PROJECTS.find((item) => item.slug === this.slug) ?? PROJECTS[0],
  );
}
