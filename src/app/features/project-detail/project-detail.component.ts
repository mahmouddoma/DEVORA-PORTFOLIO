import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  summary: string;
  liveUrl: string;
  accent: string;
  outcomes: readonly string[];
  stack: readonly string[];
}

const PROJECTS: readonly ProjectDetail[] = [
  {
    slug: 'osos-al-riadah',
    title: 'Osos Al-Riadah',
    category: 'Real Estate Platform',
    summary:
      'A real estate services platform focused on search, property discovery, and a trusted digital presence for buyers and operators.',
    liveUrl: 'https://osos-alriadah.com/',
    accent: '#00e5ff',
    outcomes: ['Structured discovery flows', 'Responsive Angular interface', 'Dynamic content foundation'],
    stack: ['Angular', 'TypeScript', 'Responsive UI', 'Content Architecture'],
  },
  {
    slug: 'ajyal-al-quran',
    title: 'Ajyal Al-Quran School',
    category: 'Education Platform',
    summary:
      'A learning-focused web experience for course information, registration, and student-facing school communication.',
    liveUrl: 'https://ajyal-alquran.com/',
    accent: '#35d39d',
    outcomes: ['Clear course presentation', 'Fast registration path', 'Mobile-first information architecture'],
    stack: ['Angular', 'TypeScript', 'Education UX', 'Performance'],
  },
  {
    slug: 'zaytona-agriculture',
    title: 'Zaytona Agriculture',
    category: 'Agriculture Website',
    summary:
      'A polished product and service showcase for an agriculture brand that needs clarity, speed, and reliable presentation.',
    liveUrl: 'https://zaytona.info/',
    accent: '#73d13d',
    outcomes: ['Product-led content system', 'Responsive visual showcase', 'Clean service discovery'],
    stack: ['Angular', 'TypeScript', 'Brand UI', 'Responsive Layout'],
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

  readonly project = computed(
    () => PROJECTS.find((item) => item.slug === this.slug) ?? PROJECTS[0],
  );
}
