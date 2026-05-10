# DEVORA Portfolio Backend Requirements

هذا الملف يحدد ما يحتاجه الباك إند لدعم البورتفوليو والداشبورد بشكل كامل بدل الداتا الثابتة و`localStorage` الموجودة حاليا.

## 1. الهدف

البورتفوليو الحالي يعرض:

- Hero section.
- Work / Case Studies مع مشاريع وصور وفيديوهات وفلاتر.
- What We Do / Services.
- Tech Stack.
- Contact form.
- Footer.
- Login للداشبورد باستخدام Email + OTP.
- Dashboard لتعديل النصوص وVisual Edit.

المطلوب من الباك إند:

- تخزين كل محتوى الموقع في Database.
- توفير API للبورتفوليو العام.
- توفير API للداشبورد لإدارة كل سكشن وكل عنصر.
- إدارة ملفات الصور والفيديوهات.
- إرسال OTP حقيقي على البريد.
- حماية الداشبورد بصلاحيات.
- استقبال رسائل العملاء من Contact form.
- دعم لغتين على الأقل: `en`, `ar`.

## 2. ملاحظات على الوضع الحالي في الفرونت

الداتا الحالية موجودة داخل Angular components و`I18nService`:

- النصوص موجودة في `src/app/core/services/i18n.service.ts`.
- تعديلات الداشبورد محفوظة مؤقتا في `localStorage`.
- المشاريع ثابتة في `works.component.ts`.
- الخدمات ثابتة في `services.component.ts`.
- التقنيات ثابتة في `tech-stack.component.ts`.
- Contact form لا يرسل للباك إند حاليا، فقط يغير `submitted = true`.
- Login/OTP محلي Mock داخل `AuthService` وليس إرسال إيميل حقيقي.

الباك إند يجب أن يستبدل هذه الأجزاء كلها ببيانات حقيقية.

## 3. الـ Core Entities المطلوبة

### 3.1 Users

للدخول إلى الداشبورد.

Fields:

```ts
type User = {
  id: string;
  email: string;
  name?: string;
  role: 'owner' | 'admin' | 'editor' | 'viewer';
  isActive: boolean;
  lastLoginAt?: string;
  createdAt: string;
  updatedAt: string;
};
```

ملاحظات:

- أقل صلاحية مطلوبة للتعديل: `editor`.
- `viewer` يشاهد الداشبورد فقط بدون حفظ.
- البريد يجب أن يكون unique.

### 3.2 OTP Login

Fields:

```ts
type LoginOtp = {
  id: string;
  email: string;
  codeHash: string;
  expiresAt: string;
  consumedAt?: string;
  attempts: number;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
};
```

Rules:

- OTP مكون من 6 أرقام.
- مدة الصلاحية: 10 دقائق.
- Max attempts: 5.
- لا يتم تخزين الكود Plain Text، يتم تخزين hash.
- Rate limit على إرسال OTP حسب email وIP.

### 3.3 Site Settings

إعدادات عامة للموقع.

```ts
type SiteSettings = {
  id: string;
  siteName: string;
  defaultLanguage: 'en' | 'ar';
  supportedLanguages: Array<'en' | 'ar'>;
  contactEmail: string;
  location: {
    en: string;
    ar: string;
  };
  socialLinks: SocialLink[];
  seo: SeoMeta;
  theme?: Record<string, string>;
  updatedAt: string;
};

type SocialLink = {
  id: string;
  label: string;
  url: string;
  icon?: string;
  isVisible: boolean;
  order: number;
};

type SeoMeta = {
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  ogImageAssetId?: string;
};
```

### 3.4 Sections

كل سكشن في الموقع يجب أن يكون له record قابل للإدارة.

```ts
type PortfolioSection = {
  id: string;
  slug: 'hero' | 'work' | 'services' | 'stack' | 'contact' | 'footer';
  title: LocalizedString;
  kicker?: LocalizedString;
  body?: LocalizedString;
  isVisible: boolean;
  order: number;
  layoutVariant?: string;
  animationVariant?: string;
  settings?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

type LocalizedString = {
  en: string;
  ar: string;
};
```

### 3.5 Hero

```ts
type HeroContent = {
  sectionId: string;
  titleLines: LocalizedString[];
  subtitle: LocalizedString;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  proofText: LocalizedString;
  metrics: Metric[];
  visual: {
    type: 'logo-animation' | 'image' | 'video' | 'three-scene';
    assetId?: string;
    settings?: Record<string, unknown>;
  };
};

type CtaLink = {
  label: LocalizedString;
  href: string;
  target?: '_self' | '_blank';
  isVisible: boolean;
};

type Metric = {
  id: string;
  value: LocalizedString;
  label: LocalizedString;
  order: number;
  isVisible: boolean;
};
```

Current Hero fields:

- `hero.kicker`
- `hero.title.line1`
- `hero.title.line2`
- `hero.title.line3`
- `hero.subtitle`
- `hero.primaryCta`
- `hero.secondaryCta`
- `hero.proof`
- `hero.metric1.value`
- `hero.metric1.label`
- `hero.metric2.value`
- `hero.metric2.label`
- `hero.metric3.value`
- `hero.metric3.label`

### 3.6 Work / Projects

```ts
type ProjectCategory = {
  id: string;
  slug: string;
  label: LocalizedString;
  initial: string;
  color: string;
  isVisible: boolean;
  order: number;
};

type Project = {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  categoryId: string;
  sector: 'realEstate' | 'education' | 'agriculture' | string;
  imageAssetId: string;
  previewVideoAssetId?: string;
  liveUrl: string;
  accentColor: string;
  status: 'draft' | 'published' | 'archived';
  isFeatured: boolean;
  order: number;
  seo?: SeoMeta;
  createdAt: string;
  updatedAt: string;
};
```

Current projects:

```ts
[
  {
    slug: 'osos-al-riadah',
    sector: 'realEstate',
    image: 'Images/osos.png',
    previewVideo: 'assets/Projects/osos.mp4',
    liveUrl: 'https://osos-alriadah.com/',
    accentColor: '#00e5ff',
  },
  {
    slug: 'ajyal-al-quran-school',
    sector: 'education',
    image: 'Images/ajyal.png',
    previewVideo: 'assets/Projects/ajyal.webm',
    liveUrl: 'https://ajyal-alquran.com/',
    accentColor: '#35d39d',
  },
  {
    slug: 'zaytona-agriculture',
    sector: 'agriculture',
    image: 'Images/zaytona.png',
    previewVideo: 'assets/Projects/zaytona.webm',
    liveUrl: 'https://zaytona.info/',
    accentColor: '#73d13d',
  },
];
```

Work section content:

```ts
type WorkSectionContent = {
  sectionId: string;
  title: LocalizedString;
  kicker: LocalizedString;
  body: LocalizedString;
  contactCta: CtaLink;
  viewAllCta: CtaLink;
  liveLabel: LocalizedString;
  visitLabel: LocalizedString;
  projectBuildLabel: LocalizedString;
  filters: ProjectCategory[];
};
```

### 3.7 Services / What We Do

```ts
type Service = {
  id: string;
  slug: string;
  index: string;
  title: LocalizedString;
  body: LocalizedString;
  outcome: LocalizedString;
  icon?: string;
  isVisible: boolean;
  order: number;
};

type ServicesSectionContent = {
  sectionId: string;
  kicker: LocalizedString;
  title: LocalizedString;
  body: LocalizedString;
  offer: {
    label: LocalizedString;
    title: LocalizedString;
    body: LocalizedString;
  };
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  stats: Metric[];
  services: Service[];
  deliverySteps: DeliveryStep[];
};

type DeliveryStep = {
  id: string;
  label: LocalizedString;
  title: LocalizedString;
  order: number;
  isVisible: boolean;
};
```

Current services:

- Product Strategy.
- Web Development.
- SaaS Architecture.
- Optimization & Growth.

### 3.8 Tech Stack

```ts
type TechStackSectionContent = {
  sectionId: string;
  kicker: LocalizedString;
  title: LocalizedString;
  caption: LocalizedString;
  boardCells: TechBoardCell[];
  marqueeRows: TechMarqueeRow[];
};

type TechBoardCell = {
  id: string;
  label: string;
  order: number;
  isVisible: boolean;
};

type TechMarqueeRow = {
  id: string;
  direction: 'left' | 'right';
  speedSeconds: number;
  items: Technology[];
  order: number;
};

type Technology = {
  id: string;
  name: string;
  category?: 'frontend' | 'backend' | 'ai' | 'database' | 'devops' | 'cloud' | 'design';
  iconAssetId?: string;
  url?: string;
  order: number;
  isVisible: boolean;
};
```

Current board cells:

```ts
['API', 'AI', 'UX', 'DB', 'CI', 'SEC'];
```

Current marquee items:

```ts
[
  'Angular',
  'TypeScript',
  'Node.js',
  'GSAP',
  'Three.js',
  'PostgreSQL',
  'Docker',
  'Kubernetes',
  'Azure',
  'AWS',
][
  ('Python',
  'PyTorch',
  'TensorFlow',
  'OpenAI',
  'LangChain',
  'Redis',
  'GraphQL',
  'Next.js',
  'WebGPU',
  'Rust')
];
```

### 3.9 Contact

```ts
type ContactSectionContent = {
  sectionId: string;
  kicker: LocalizedString;
  title: LocalizedString;
  body: LocalizedString;
  email: string;
  location: LocalizedString;
  formLabels: {
    name: LocalizedString;
    namePlaceholder: LocalizedString;
    email: LocalizedString;
    emailPlaceholder: LocalizedString;
    service: LocalizedString;
    chooseService: LocalizedString;
    details: LocalizedString;
    detailsPlaceholder: LocalizedString;
    submit: LocalizedString;
    success: LocalizedString;
  };
  serviceOptionsSource: 'services' | 'custom';
  customServiceOptions?: Array<{
    id: string;
    label: LocalizedString;
    order: number;
    isVisible: boolean;
  }>;
};
```

Contact lead submission:

```ts
type ContactLead = {
  id: string;
  name: string;
  email: string;
  serviceId?: string;
  serviceLabel?: string;
  message: string;
  source: 'portfolio';
  language: 'en' | 'ar';
  status: 'new' | 'read' | 'replied' | 'archived';
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
  updatedAt: string;
};
```

Validation:

- `name`: required, min 2, max 120.
- `email`: required, valid email, max 180.
- `serviceId`: optional but recommended.
- `message`: required, min 10, max 5000.
- Anti-spam: honeypot or captcha optional.
- Rate limit by IP.

### 3.10 Footer

```ts
type FooterContent = {
  sectionId: string;
  copyrightYear: number;
  rightsText: LocalizedString;
  socialLinks: SocialLink[];
};
```

Current footer social links:

```ts
['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'];
```

Need real URLs from dashboard.

### 3.11 Media Assets

كل صورة أو فيديو لازم يبقى asset record.

```ts
type MediaAsset = {
  id: string;
  type: 'image' | 'video' | 'svg' | 'document';
  fileName: string;
  originalName: string;
  mimeType: string;
  sizeBytes: number;
  width?: number;
  height?: number;
  durationSeconds?: number;
  url: string;
  thumbnailUrl?: string;
  alt: LocalizedString;
  storageProvider: 'local' | 's3' | 'cloudinary' | 'r2';
  folder: string;
  createdByUserId: string;
  createdAt: string;
};
```

Media requirements:

- Upload images: `png`, `jpg`, `webp`, `svg`.
- Upload videos: `mp4`, `webm`.
- Max image size suggested: 8 MB.
- Max video size suggested: 80 MB.
- Generate thumbnails for videos.
- Return public CDN URL.
- Keep `alt` text localized.

### 3.12 Content Revisions

مهم للداشبورد حتى يمكن الرجوع لنسخة قديمة.

```ts
type ContentRevision = {
  id: string;
  entityType: 'section' | 'project' | 'service' | 'technology' | 'settings';
  entityId: string;
  snapshot: Record<string, unknown>;
  changedByUserId: string;
  changeSummary?: string;
  createdAt: string;
};
```

## 4. Database Structure مقترحة

يمكن تنفيذها PostgreSQL.

### Tables

```sql
users
- id uuid pk
- email varchar unique not null
- name varchar null
- role varchar not null
- is_active boolean not null default true
- last_login_at timestamptz null
- created_at timestamptz not null
- updated_at timestamptz not null

login_otps
- id uuid pk
- email varchar not null
- code_hash varchar not null
- expires_at timestamptz not null
- consumed_at timestamptz null
- attempts int not null default 0
- ip_address varchar null
- user_agent text null
- created_at timestamptz not null

site_settings
- id uuid pk
- data jsonb not null
- updated_by uuid fk users(id) null
- updated_at timestamptz not null

portfolio_sections
- id uuid pk
- slug varchar unique not null
- title jsonb not null
- kicker jsonb null
- body jsonb null
- is_visible boolean not null default true
- sort_order int not null
- layout_variant varchar null
- animation_variant varchar null
- settings jsonb null
- created_at timestamptz not null
- updated_at timestamptz not null

hero_content
- id uuid pk
- section_id uuid fk portfolio_sections(id)
- data jsonb not null
- updated_at timestamptz not null

project_categories
- id uuid pk
- slug varchar unique not null
- label jsonb not null
- initial varchar not null
- color varchar not null
- is_visible boolean not null default true
- sort_order int not null

projects
- id uuid pk
- slug varchar unique not null
- title jsonb not null
- description jsonb not null
- category_id uuid fk project_categories(id)
- sector varchar not null
- image_asset_id uuid fk media_assets(id)
- preview_video_asset_id uuid fk media_assets(id) null
- live_url text not null
- accent_color varchar not null
- status varchar not null
- is_featured boolean not null default false
- sort_order int not null
- seo jsonb null
- created_at timestamptz not null
- updated_at timestamptz not null

services
- id uuid pk
- slug varchar unique not null
- index_label varchar not null
- title jsonb not null
- body jsonb not null
- outcome jsonb not null
- icon varchar null
- is_visible boolean not null default true
- sort_order int not null
- created_at timestamptz not null
- updated_at timestamptz not null

services_section_content
- id uuid pk
- section_id uuid fk portfolio_sections(id)
- data jsonb not null
- updated_at timestamptz not null

delivery_steps
- id uuid pk
- label jsonb not null
- title jsonb not null
- is_visible boolean not null default true
- sort_order int not null

technologies
- id uuid pk
- name varchar not null
- category varchar null
- icon_asset_id uuid fk media_assets(id) null
- url text null
- row_key varchar not null
- is_visible boolean not null default true
- sort_order int not null

tech_board_cells
- id uuid pk
- label varchar not null
- is_visible boolean not null default true
- sort_order int not null

contact_section_content
- id uuid pk
- section_id uuid fk portfolio_sections(id)
- data jsonb not null
- updated_at timestamptz not null

contact_leads
- id uuid pk
- name varchar not null
- email varchar not null
- service_id uuid null
- service_label varchar null
- message text not null
- source varchar not null
- language varchar not null
- status varchar not null default 'new'
- ip_address varchar null
- user_agent text null
- created_at timestamptz not null
- updated_at timestamptz not null

media_assets
- id uuid pk
- type varchar not null
- file_name varchar not null
- original_name varchar not null
- mime_type varchar not null
- size_bytes bigint not null
- width int null
- height int null
- duration_seconds numeric null
- url text not null
- thumbnail_url text null
- alt jsonb not null
- storage_provider varchar not null
- folder varchar not null
- created_by_user_id uuid fk users(id)
- created_at timestamptz not null

content_revisions
- id uuid pk
- entity_type varchar not null
- entity_id uuid not null
- snapshot jsonb not null
- changed_by_user_id uuid fk users(id)
- change_summary text null
- created_at timestamptz not null
```

Indexes:

```sql
create index idx_projects_status_order on projects(status, sort_order);
create index idx_projects_sector on projects(sector);
create index idx_contact_leads_status_created on contact_leads(status, created_at desc);
create index idx_content_revisions_entity on content_revisions(entity_type, entity_id, created_at desc);
create index idx_media_assets_type on media_assets(type);
create index idx_login_otps_email_created on login_otps(email, created_at desc);
```

## 5. Public API Endpoints

Base URL suggested:

```txt
/api/v1
```

### 5.1 Get Full Portfolio Content

```http
GET /api/v1/portfolio?lang=en
GET /api/v1/portfolio?lang=ar
```

Response:

```ts
type PortfolioResponse = {
  settings: SiteSettings;
  sections: {
    hero: HeroContent;
    work: WorkSectionContent & {
      projects: Project[];
      categories: ProjectCategory[];
    };
    services: ServicesSectionContent;
    stack: TechStackSectionContent;
    contact: ContactSectionContent;
    footer: FooterContent;
  };
  meta: {
    language: 'en' | 'ar';
    version: string;
    generatedAt: string;
  };
};
```

مهم:

- يرجع فقط العناصر `isVisible = true`.
- يرجع المشاريع `status = published`.
- يرتب كل العناصر حسب `order`.
- يدعم caching عبر `ETag` أو `Cache-Control`.

### 5.2 Get Projects

```http
GET /api/v1/projects?sector=realEstate&status=published&lang=en
GET /api/v1/projects/{slug}?lang=en
```

Use cases:

- Work filters.
- Project details page لو اتضافت لاحقا.

### 5.3 Submit Contact Form

```http
POST /api/v1/contact/leads
```

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "serviceId": "uuid",
  "serviceLabel": "Web Development",
  "message": "I need a portfolio and dashboard...",
  "language": "en"
}
```

Response:

```json
{
  "ok": true,
  "leadId": "uuid",
  "message": "Thanks. DEVORA will contact you shortly."
}
```

Backend actions:

- Save lead in DB.
- Send notification email to `site_settings.contactEmail`.
- Optional: send confirmation email to client.
- Apply spam/rate limit.

## 6. Auth API Endpoints

### 6.1 Request OTP

```http
POST /api/v1/auth/request-otp
```

Request:

```json
{
  "email": "admin@devora.studio"
}
```

Response:

```json
{
  "ok": true,
  "expiresInSeconds": 600
}
```

Rules:

- لو البريد غير موجود أو غير active، يفضل إرجاع نفس response العام بدون كشف أن البريد غير موجود.
- إرسال OTP عبر email provider.
- تخزين hash فقط.

### 6.2 Verify OTP

```http
POST /api/v1/auth/verify-otp
```

Request:

```json
{
  "email": "admin@devora.studio",
  "otp": "123456"
}
```

Response:

```json
{
  "accessToken": "jwt",
  "refreshToken": "jwt-or-random-token",
  "user": {
    "id": "uuid",
    "email": "admin@devora.studio",
    "role": "admin"
  }
}
```

### 6.3 Current User

```http
GET /api/v1/auth/me
Authorization: Bearer <accessToken>
```

### 6.4 Refresh Token

```http
POST /api/v1/auth/refresh
```

### 6.5 Logout

```http
POST /api/v1/auth/logout
```

## 7. Dashboard API Endpoints

كل Dashboard endpoints تحتاج auth.

### 7.1 Read Dashboard State

```http
GET /api/v1/admin/dashboard
Authorization: Bearer <token>
```

Response:

```ts
type DashboardStateResponse = {
  portfolio: PortfolioResponse;
  editableMap: EditableFieldDefinition[];
  permissions: {
    canEditContent: boolean;
    canPublish: boolean;
    canUploadMedia: boolean;
    canManageUsers: boolean;
  };
};

type EditableFieldDefinition = {
  key: string;
  entityType: string;
  entityId: string;
  path: string;
  label: string;
  inputType:
    | 'text'
    | 'textarea'
    | 'url'
    | 'color'
    | 'select'
    | 'image'
    | 'video'
    | 'number'
    | 'boolean';
  languageAware: boolean;
  sectionSlug: string;
};
```

### 7.2 Update One Text Field

مهم للـ Visual Edit.

```http
PATCH /api/v1/admin/content-field
Authorization: Bearer <token>
```

Request:

```json
{
  "entityType": "section",
  "entityId": "uuid",
  "path": "title.en",
  "value": "Selected Work"
}
```

Response:

```json
{
  "ok": true,
  "updatedAt": "2026-05-03T11:00:00.000Z"
}
```

Notes:

- `path` يجب أن يكون من allowlist وليس أي JSON path مفتوح.
- يتم إنشاء `content_revision` قبل الحفظ.

### 7.3 Bulk Update Section

```http
PUT /api/v1/admin/sections/{sectionSlug}
Authorization: Bearer <token>
```

Request:

```json
{
  "title": { "en": "Selected Work", "ar": "أعمال مختارة" },
  "kicker": { "en": "Case Studies", "ar": "دراسات حالة" },
  "body": { "en": "...", "ar": "..." },
  "isVisible": true,
  "order": 2,
  "settings": {}
}
```

### 7.4 Reorder Sections

```http
PATCH /api/v1/admin/sections/reorder
```

Request:

```json
{
  "items": [
    { "slug": "hero", "order": 1 },
    { "slug": "work", "order": 2 },
    { "slug": "services", "order": 3 },
    { "slug": "stack", "order": 4 },
    { "slug": "contact", "order": 5 }
  ]
}
```

### 7.5 Projects CRUD

```http
GET    /api/v1/admin/projects
POST   /api/v1/admin/projects
GET    /api/v1/admin/projects/{id}
PUT    /api/v1/admin/projects/{id}
PATCH  /api/v1/admin/projects/{id}/status
DELETE /api/v1/admin/projects/{id}
PATCH  /api/v1/admin/projects/reorder
```

Create/Update project request:

```json
{
  "slug": "new-project",
  "title": {
    "en": "New Project",
    "ar": "مشروع جديد"
  },
  "description": {
    "en": "Short project summary.",
    "ar": "وصف مختصر للمشروع."
  },
  "categoryId": "uuid",
  "sector": "saas",
  "imageAssetId": "uuid",
  "previewVideoAssetId": "uuid",
  "liveUrl": "https://example.com",
  "accentColor": "#00e5ff",
  "status": "published",
  "isFeatured": true,
  "order": 1
}
```

### 7.6 Project Categories / Filters CRUD

```http
GET    /api/v1/admin/project-categories
POST   /api/v1/admin/project-categories
PUT    /api/v1/admin/project-categories/{id}
DELETE /api/v1/admin/project-categories/{id}
PATCH  /api/v1/admin/project-categories/reorder
```

### 7.7 Services CRUD

```http
GET    /api/v1/admin/services
POST   /api/v1/admin/services
PUT    /api/v1/admin/services/{id}
DELETE /api/v1/admin/services/{id}
PATCH  /api/v1/admin/services/reorder
```

### 7.8 Services Section Content

```http
GET /api/v1/admin/services-section
PUT /api/v1/admin/services-section
```

يشمل:

- offer.
- stats.
- delivery steps.
- CTAs.

### 7.9 Tech Stack CRUD

```http
GET    /api/v1/admin/technologies
POST   /api/v1/admin/technologies
PUT    /api/v1/admin/technologies/{id}
DELETE /api/v1/admin/technologies/{id}
PATCH  /api/v1/admin/technologies/reorder
```

Board cells:

```http
GET /api/v1/admin/tech-board-cells
PUT /api/v1/admin/tech-board-cells
```

### 7.10 Contact Content

```http
GET /api/v1/admin/contact-section
PUT /api/v1/admin/contact-section
```

### 7.11 Leads Management

```http
GET   /api/v1/admin/leads?status=new&page=1&pageSize=20
GET   /api/v1/admin/leads/{id}
PATCH /api/v1/admin/leads/{id}/status
DELETE /api/v1/admin/leads/{id}
```

Patch status request:

```json
{
  "status": "read"
}
```

### 7.12 Media Upload

```http
POST /api/v1/admin/media
Content-Type: multipart/form-data
```

Fields:

```txt
file: binary
type: image | video | svg | document
folder: projects | hero | seo | stack | general
alt.en: string
alt.ar: string
```

Response:

```json
{
  "id": "uuid",
  "type": "image",
  "url": "https://cdn.devora.studio/projects/osos.png",
  "thumbnailUrl": null,
  "mimeType": "image/png",
  "sizeBytes": 123456,
  "width": 1440,
  "height": 900
}
```

Other media endpoints:

```http
GET    /api/v1/admin/media
GET    /api/v1/admin/media/{id}
PUT    /api/v1/admin/media/{id}
DELETE /api/v1/admin/media/{id}
```

### 7.13 Site Settings

```http
GET /api/v1/admin/settings
PUT /api/v1/admin/settings
```

### 7.14 Content Revisions

```http
GET  /api/v1/admin/revisions?entityType=project&entityId=uuid
POST /api/v1/admin/revisions/{id}/restore
```

## 8. Visual Edit Requirements

الداشبورد الحالي يستخدم `data-edit-key` ويعدل النصوص مباشرة.

الباك إند يحتاج توفير `editableMap` يربط كل عنصر مرئي بمكانه الحقيقي في الداتا.

Example:

```json
[
  {
    "key": "hero.title.line1",
    "entityType": "hero_content",
    "entityId": "uuid",
    "path": "titleLines.0.en",
    "label": "Hero title line 1",
    "inputType": "text",
    "languageAware": true,
    "sectionSlug": "hero"
  },
  {
    "key": "project.osos-al-riadah.title",
    "entityType": "project",
    "entityId": "uuid",
    "path": "title.en",
    "label": "Project title",
    "inputType": "text",
    "languageAware": true,
    "sectionSlug": "work"
  }
]
```

Frontend flow:

1. User clicks text in preview.
2. Frontend reads `data-edit-key`.
3. Looks up key in `editableMap`.
4. Sends `PATCH /admin/content-field`.
5. Updates preview locally after success.

Required:

- `key` must be stable.
- `path` must be controlled by backend allowlist.
- Save revisions.
- Return validation errors clearly.

## 9. Translation Strategy

Recommended:

- Store localized fields as JSON:

```json
{
  "en": "Start the Future Today",
  "ar": "ابدأ المستقبل اليوم"
}
```

Important:

- Database encoding must be UTF-8.
- Arabic text in current frontend has encoding corruption in some keys; backend seed data must use valid Arabic UTF-8.
- API should always return both languages in dashboard endpoints.
- Public endpoint can return all languages or only requested language. Recommended for frontend simplicity: dashboard returns all, public can return all or selected.

## 10. Error Format

Use a consistent error response:

```json
{
  "ok": false,
  "code": "VALIDATION_ERROR",
  "message": "Invalid input.",
  "fields": {
    "email": "Email is required."
  }
}
```

Common codes:

- `UNAUTHORIZED`
- `FORBIDDEN`
- `VALIDATION_ERROR`
- `NOT_FOUND`
- `RATE_LIMITED`
- `OTP_EXPIRED`
- `OTP_INVALID`
- `UPLOAD_TOO_LARGE`
- `UNSUPPORTED_FILE_TYPE`

## 11. Permissions

```ts
type Permission =
  | 'content:read'
  | 'content:update'
  | 'content:publish'
  | 'projects:manage'
  | 'services:manage'
  | 'stack:manage'
  | 'media:upload'
  | 'media:delete'
  | 'leads:read'
  | 'leads:update'
  | 'users:manage'
  | 'settings:manage';
```

Suggested roles:

```ts
owner: all permissions
admin: all except deleting owner
editor: content update, projects manage, services manage, stack manage, media upload, leads read
viewer: content read, leads read
```

## 12. Seed Data Needed

Backend should seed:

- One owner/admin user.
- Site settings.
- Sections:
  - `hero`
  - `work`
  - `services`
  - `stack`
  - `contact`
  - `footer`
- Hero content.
- 3 current projects:
  - Osos Al-Riadah
  - Ajyal Al-Quran School
  - Zaytona Agriculture
- 3 project categories:
  - Real Estate
  - Education
  - Agriculture
- 4 services:
  - Product Strategy
  - Web Development
  - SaaS Architecture
  - Optimization & Growth
- 3 service stats.
- 3 delivery steps.
- Tech board cells.
- Tech marquee items.
- Footer social links.
- Media asset records for:
  - `osos.png`
  - `ajyal.png`
  - `zaytona.png`
  - `osos.mp4`
  - `ajyal.webm`
  - `zaytona.webm`
  - `devora-logo.svg`

## 13. Frontend Integration Plan

After backend is ready, frontend should add:

1. `ApiClientService`
   - Handles base URL, token, refresh token, errors.

2. `PortfolioDataService`
   - `getPortfolio(lang)`
   - exposes signals for sections/projects/services/stack/contact.

3. `DashboardApiService`
   - dashboard state.
   - update field.
   - CRUD calls.

4. Replace static arrays:
   - `WorksComponent.projects`
   - `WorksComponent.filters`
   - `ServicesComponent.services`
   - `ServicesComponent.stats`
   - `ServicesComponent.deliverySteps`
   - `TechStackComponent.technologies`
   - `TechStackComponent.boardCells`
   - `FooterComponent.socialLinks`

5. Replace `I18nService` static translations:
   - Keep language switch.
   - Source text from API.
   - Keep fallback only for loading/error states.

6. Replace `AuthService` mock:
   - `requestOtp()` calls backend.
   - `verifyOtp()` stores access/refresh tokens.
   - `me()` checks session.

7. Replace Contact mock:
   - `ContactComponent.onSubmit()` sends `POST /contact/leads`.

8. Dashboard:
   - Load `GET /admin/dashboard`.
   - Use `editableMap`.
   - Save via `PATCH /admin/content-field`.
   - Add media/project/service CRUD screens.

## 14. Environment Variables Needed

Backend:

```txt
DATABASE_URL=
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
OTP_SECRET=
EMAIL_PROVIDER=
EMAIL_FROM=
EMAIL_API_KEY=
STORAGE_PROVIDER=
STORAGE_BUCKET=
STORAGE_REGION=
STORAGE_ACCESS_KEY=
STORAGE_SECRET_KEY=
CDN_BASE_URL=
FRONTEND_URL=
ADMIN_ALLOWED_EMAILS=
```

Frontend:

```txt
NG_APP_API_BASE_URL=https://api.devora.studio/api/v1
```

## 15. Security Requirements

- HTTPS only in production.
- HttpOnly refresh token cookie preferred.
- Access token short lifetime: 15 minutes.
- Refresh token lifetime: 7 to 30 days.
- Rate limit:
  - OTP request.
  - OTP verification.
  - Contact form.
  - Login endpoints.
- Sanitize HTML if rich text is added later.
- Validate URLs for project links and social links.
- Validate color format for `accentColor`.
- Media upload MIME validation server-side, not only extension.
- Audit log for dashboard changes.

## 16. Minimum Backend MVP

لو التنفيذ هيتم على مراحل، الأولوية:

1. Auth OTP real email.
2. Public `GET /portfolio`.
3. Admin `GET /dashboard`.
4. Admin `PATCH /content-field`.
5. Contact lead submission.
6. Media upload.
7. Projects CRUD.
8. Services/Stack/Footer CRUD.
9. Revisions and restore.

## 17. Acceptance Criteria

Backend يعتبر جاهز لما:

- الداشبورد يدخل بـ OTP حقيقي.
- فتح `/dashboard` يرجع بيانات من API وليس `localStorage`.
- تعديل أي نص من Visual Edit يحفظ في DB ويظهر بعد refresh.
- إضافة/تعديل/حذف مشروع ينعكس في Work section.
- رفع صورة وفيديو مشروع يعمل ويظهر في البورتفوليو.
- Contact form يحفظ lead ويرسل email notification.
- اللغتين `en/ar` يرجعوا من API بدون مشاكل encoding.
- كل endpoint محمي حسب الصلاحيات.
- يوجد seed data مطابق للموقع الحالي.
