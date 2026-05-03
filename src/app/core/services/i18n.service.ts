import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type LanguageCode = 'en' | 'ar';

const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: {
    'nav.about': 'Why DEVORA',
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.stack': 'Stack',
    'nav.contact': 'Start a Project',
    'nav.login': 'Login',
    'nav.dashboard': 'Dashboard',
    'nav.theme': 'Toggle theme',
    'nav.language': 'Arabic',
    'nav.home': 'DEVORA home',

    'hero.kicker': 'Software engineering studio',
    'hero.title.line1': 'Digital Products',
    'hero.title.line2': 'Built to Scale',
    'hero.title.line3': 'By DEVORA',
    'hero.subtitle':
      'We design and engineer web, SaaS, and AI products from idea to launch.',
    'hero.primaryCta': 'Explore Work',
    'hero.secondaryCta': 'Contact DEVORA',
    'hero.proof': 'Strategy, UI, engineering, and launch in one focused team.',
    'hero.map.eyebrow': 'Delivery system',
    'hero.map.title': 'From product signal to shipped software',
    'hero.map.status': 'Live Method',
    'hero.map.handoff': 'Strategy, engineering, interface, and launch moving as one system.',
    'hero.stage1.label': 'Discover',
    'hero.stage1.title': 'Clarify the product',
    'hero.stage1.body': 'We map users, business goals, and the smallest launch that can prove value.',
    'hero.stage2.label': 'Architect',
    'hero.stage2.title': 'Shape the system',
    'hero.stage2.body': 'We define frontend, APIs, data flows, and the decisions that keep delivery clean.',
    'hero.stage3.label': 'Build',
    'hero.stage3.title': 'Engineer the experience',
    'hero.stage3.body': 'We turn the plan into polished Angular interfaces with motion and performance built in.',
    'hero.stage4.label': 'Launch',
    'hero.stage4.title': 'Ship and improve',
    'hero.stage4.body': 'We release, observe, measure, and tune the product so it keeps getting stronger.',
    'hero.console.title': 'Launch Pipeline',
    'hero.console.line1': 'strategy.scan()',
    'hero.console.line2': 'prototype.render()',
    'hero.console.line3': 'scale.deploy()',
    'hero.metric1.value': '42',
    'hero.metric1.label': 'Launches',
    'hero.metric2.value': '7x',
    'hero.metric2.label': 'Faster builds',
    'hero.metric3.value': '99.9%',
    'hero.metric3.label': 'Uptime',
    'hero.scroll': 'Scroll',

    'about.kicker': 'Why DEVORA',
    'about.title': 'A focused team for serious digital launches',
    'about.body':
      'Clients choose us when the product has to look premium, work reliably, and move from idea to launch without scattered vendors.',
    'about.panel.label': 'Built for clients',
    'about.panel.title': 'Less confusion, faster decisions, stronger launch quality.',
    'about.panel.body':
      'We keep strategy, UX, engineering, and launch decisions in one delivery loop so your product moves with clarity.',
    'about.proof1.value': '01',
    'about.proof1.label': 'Team from plan to launch',
    'about.proof2.value': '3x',
    'about.proof2.label': 'Cleaner decision cycles',
    'about.proof3.value': '100%',
    'about.proof3.label': 'Custom execution',
    'about.value1.title': 'We make the offer clear',
    'about.value1.body': 'Your product message, structure, and user journey are shaped around what helps clients trust and act.',
    'about.value2.title': 'We build with real business use in mind',
    'about.value2.body': 'Every screen, flow, and technical choice supports daily operations, future growth, and easier ownership.',
    'about.value3.title': 'We polish the experience before launch',
    'about.value3.body': 'Performance, responsiveness, motion, and content are tuned so the product feels finished, not rushed.',
    'about.blueprint.title': 'Delivery Blueprint',
    'about.blueprint.step1': 'Clarify the goal',
    'about.blueprint.step2': 'Build the product',
    'about.blueprint.step3': 'Launch and improve',

    'services.kicker': 'What We Do',
    'services.title': 'Build the product your market can trust',
    'services.body':
      'Clear strategy, sharp interfaces, and reliable engineering for businesses that need a serious digital product, not another generic website.',
    'services.offer.label': 'Client outcome',
    'services.offer.title': 'From first idea to a polished launch people can use and remember.',
    'services.offer.body':
      'We shape the product, design the experience, build the system, and prepare it for real users with a focused delivery path.',
    'services.primaryCta': 'Start a project',
    'services.secondaryCta': 'See proof',
    'services.stat1.value': '01',
    'services.stat1.label': 'Focused product team',
    'services.stat2.value': '3x',
    'services.stat2.label': 'Faster launch cycles',
    'services.stat3.value': '100%',
    'services.stat3.label': 'Custom build',
    'services.strategy.title': 'Product Strategy',
    'services.strategy.body':
      'We clarify the offer, user journey, core screens, and launch scope before a single sprint is wasted.',
    'services.strategy.outcome': 'Clear roadmap',
    'services.web.title': 'Web Development',
    'services.web.body':
      'Modern websites and landing experiences built to communicate trust, load fast, and convert visitors into serious leads.',
    'services.web.outcome': 'More qualified leads',
    'services.saas.title': 'SaaS Architecture',
    'services.saas.body':
      'Dashboards, portals, admin systems, APIs, and workflows designed for daily use and future growth.',
    'services.saas.outcome': 'Scalable platform',
    'services.perf.title': 'Optimization & Growth',
    'services.perf.body':
      'We improve speed, UX friction, technical quality, and release readiness so the product feels premium under pressure.',
    'services.perf.outcome': 'Stronger experience',
    'services.step1.label': 'Step 01',
    'services.step1.title': 'Map the business goal',
    'services.step2.label': 'Step 02',
    'services.step2.title': 'Design and build the product',
    'services.step3.label': 'Step 03',
    'services.step3.title': 'Launch, measure, improve',

    'work.kicker': 'Case Studies',
    'work.title': 'Selected Work',
    'work.body':
      'A handpicked collection of our most impactful projects. Hover or click on each image to preview the experience.',
    'work.contactCta': 'Contact us',
    'work.viewAll': 'View All Projects',
    'work.projectsNav': 'Selected work projects',
    'work.showProject': 'Show project',
    'work.filters': 'Work filters',
    'work.filter.all': 'All Projects',
    'work.filter.realEstate': 'Real Estate',
    'work.filter.education': 'Education',
    'work.filter.agriculture': 'Agriculture',
    'work.category.realEstate': 'Real Estate Platform',
    'work.category.education': 'Education Platform',
    'work.category.agriculture': 'Agriculture Website',
    'work.projectBuild': 'Live digital product',
    'work.live': 'Live Project',
    'work.visit': 'Visit',
    'work.osos.title': 'Osos Al-Riadah',
    'work.osos.description':
      'A comprehensive real estate services platform built with Angular, featuring property listings, search, and dynamic content management.',
    'work.ajyal.title': 'Ajyal Al-Quran School',
    'work.ajyal.description':
      'An educational platform for a Quran school, providing course information, registration, and student resources. Built with Angular.',
    'work.zaytona.title': 'Zaytona Agriculture',
    'work.zaytona.description':
      'An agricultural solutions website showcasing products and services with a clean, responsive Angular UI.',

    'tech.kicker': 'Infrastructure',
    'tech.title': 'Powering the Future',
    'tech.caption': 'A practical stack for secure, animated, and scalable software delivery.',

    'testimonials.kicker': 'Testimonials',
    'testimonials.title': 'Trusted by Visionaries',
    'testimonials.quote1':
      'DEVORA transformed our legacy architecture into a high-performance system that handled our growth without drama.',
    'testimonials.quote2':
      'The level of craftsmanship DEVORA brings to every pixel and every line of code is world-class.',
    'testimonials.quote3':
      'They engineer experiences, not only screens. Our engagement metrics doubled after the new platform launch.',
    'testimonials.name1': 'Sarah Jenkins',
    'testimonials.role1': 'CTO',
    'testimonials.company1': 'FutureScale',
    'testimonials.name2': 'Michael Chen',
    'testimonials.role2': 'Product Lead',
    'testimonials.company2': 'Aether AI',
    'testimonials.name3': 'Elena Rodriguez',
    'testimonials.role3': 'Founder',
    'testimonials.company3': 'Lumina Digital',
    'testimonials.previous': 'Previous testimonial',
    'testimonials.next': 'Next testimonial',

    'contact.kicker': 'Contact',
    'contact.title': 'Start the Future Today',
    'contact.body':
      'Tell us what you are building. We will map the fastest route from idea to polished launch.',
    'contact.name': 'Full Name',
    'contact.namePlaceholder': 'John Doe',
    'contact.email': 'Email Address',
    'contact.emailPlaceholder': 'john@example.com',
    'contact.service': 'Service',
    'contact.chooseService': 'Choose a service',
    'contact.details': 'Project Details',
    'contact.detailsPlaceholder': 'Tell us about your project...',
    'contact.submit': 'Send Message',
    'contact.success': 'Thanks. DEVORA will contact you shortly.',
    'contact.location': 'Cairo, Egypt',

    'footer.rights': 'All rights reserved.',
  },
  ar: {
    'nav.about': 'لماذا DEVORA',
    'nav.services': 'الخدمات',
    'nav.work': 'الأعمال',
    'nav.stack': 'التقنيات',
    'nav.contact': 'ابدأ مشروعك',
    'nav.login': 'دخول',
    'nav.dashboard': 'لوحة التحكم',
    'nav.theme': 'تغيير الوضع',
    'nav.language': 'English',
    'nav.home': 'العودة إلى الرئيسية',

    'hero.kicker': 'استوديو هندسة برمجيات',
    'hero.title.line1': 'منتجات رقمية',
    'hero.title.line2': 'قابلة للنمو',
    'hero.title.line3': 'من DEVORA',
    'hero.subtitle':
      'نصمم ونبني مواقع ومنصات SaaS ومنتجات AI من الفكرة إلى الإطلاق.',
    'hero.primaryCta': 'استكشف الأعمال',
    'hero.secondaryCta': 'تواصل معنا',
    'hero.proof': 'استراتيجية، واجهة، هندسة، وإطلاق داخل فريق واحد.',
    'hero.map.eyebrow': 'نظام التسليم',
    'hero.map.title': 'من إشارة المنتج إلى برنامج جاهز للإطلاق',
    'hero.map.status': 'منهج مباشر',
    'hero.map.handoff': 'الاستراتيجية والهندسة والواجهة والإطلاق تتحرك كنظام واحد.',
    'hero.stage1.label': 'اكتشاف',
    'hero.stage1.title': 'توضيح المنتج',
    'hero.stage1.body': 'نرسم المستخدمين، وأهداف العمل، وأصغر إطلاق يثبت القيمة.',
    'hero.stage2.label': 'معمارية',
    'hero.stage2.title': 'تشكيل النظام',
    'hero.stage2.body': 'نحدد الواجهة، وواجهات API، وتدفقات البيانات، والقرارات التي تنظف التسليم.',
    'hero.stage3.label': 'بناء',
    'hero.stage3.title': 'هندسة التجربة',
    'hero.stage3.body': 'نحوّل الخطة إلى واجهات Angular مصقولة بحركة وأداء مدمجين.',
    'hero.stage4.label': 'إطلاق',
    'hero.stage4.title': 'إطلاق وتحسين',
    'hero.stage4.body': 'نطلق المنتج، نراقبه، نقيسه، ونحسّنه حتى يصبح أقوى باستمرار.',
    'hero.console.title': 'مسار الإطلاق',
    'hero.console.line1': 'strategy.scan()',
    'hero.console.line2': 'prototype.render()',
    'hero.console.line3': 'scale.deploy()',
    'hero.metric1.value': '42',
    'hero.metric1.label': 'إطلاقات',
    'hero.metric2.value': '7x',
    'hero.metric2.label': 'بناء أسرع',
    'hero.metric3.value': '99.9%',
    'hero.metric3.label': 'جاهزية',
    'hero.scroll': 'مرر',

    'about.kicker': 'لماذا DEVORA',
    'about.title': 'فريق مركز لإطلاق منتجات رقمية جادة',
    'about.body':
      'يختارنا العملاء عندما يحتاج المنتج إلى شكل احترافي، أداء موثوق، وانتقال واضح من الفكرة إلى الإطلاق دون تشتت بين أكثر من جهة.',
    'about.panel.label': 'مصمم للعميل',
    'about.panel.title': 'وضوح أكثر، قرارات أسرع، وجودة إطلاق أقوى.',
    'about.panel.body':
      'نجمع الاستراتيجية وتجربة المستخدم والهندسة وقرارات الإطلاق في مسار واحد حتى يتحرك المنتج بوضوح.',
    'about.proof1.value': '01',
    'about.proof1.label': 'فريق من الخطة للإطلاق',
    'about.proof2.value': '3x',
    'about.proof2.label': 'قرارات أوضح وأسرع',
    'about.proof3.value': '100%',
    'about.proof3.label': 'تنفيذ مخصص',
    'about.value1.title': 'نوضح عرضك للعميل',
    'about.value1.body': 'نرتب رسالة المنتج وهيكله ورحلة المستخدم حول ما يجعل العميل يثق ويتخذ خطوة.',
    'about.value2.title': 'نبني لاستخدام العمل الحقيقي',
    'about.value2.body': 'كل شاشة وتدفق وقرار تقني يخدم التشغيل اليومي والنمو المستقبلي وسهولة إدارة المنتج.',
    'about.value3.title': 'نصقل التجربة قبل الإطلاق',
    'about.value3.body': 'نضبط الأداء والتجاوب والحركة والمحتوى حتى يظهر المنتج مكتمل الجودة وليس متعجلا.',
    'about.blueprint.title': 'خطة التسليم',
    'about.blueprint.step1': 'توضيح الهدف',
    'about.blueprint.step2': 'بناء المنتج',
    'about.blueprint.step3': 'إطلاق وتحسين',

    'services.kicker': 'ماذا نقدم',
    'services.title': 'نبني المنتج الذي يثق به عملاؤك',
    'services.body':
      'استراتيجية واضحة، واجهات قوية، وهندسة يعتمد عليها للشركات التي تحتاج منتجا رقميا جادا وليس موقعا عاديا.',
    'services.offer.label': 'نتيجة العميل',
    'services.offer.title': 'من الفكرة الأولى إلى إطلاق مصقول يستخدمه الناس ويتذكرونه.',
    'services.offer.body':
      'نصمم شكل المنتج، نبني التجربة، ننفذ النظام، ونجهزه للمستخدمين الحقيقيين بخطة تسليم مركزة.',
    'services.primaryCta': 'ابدأ مشروعك',
    'services.secondaryCta': 'شاهد الأعمال',
    'services.stat1.value': '01',
    'services.stat1.label': 'فريق منتج مركز',
    'services.stat2.value': '3x',
    'services.stat2.label': 'دورات إطلاق أسرع',
    'services.stat3.value': '100%',
    'services.stat3.label': 'تنفيذ مخصص',
    'services.strategy.title': 'استراتيجية المنتج',
    'services.strategy.body':
      'نوضح العرض، رحلة المستخدم، الشاشات الأساسية، ونطاق الإطلاق قبل إهدار أي وقت في التنفيذ.',
    'services.strategy.outcome': 'خريطة طريق واضحة',
    'services.web.title': 'مواقع تقنع العميل',
    'services.web.body':
      'مواقع وتجارب هبوط حديثة تعرض الثقة بسرعة وتحول الزائر إلى عميل جاد.',
    'services.web.outcome': 'عملاء محتملون أفضل',
    'services.saas.title': 'منصات وتطبيقات ويب',
    'services.saas.body':
      'لوحات تحكم، بوابات عملاء، أنظمة إدارة، واجهات API، وسير عمل مصمم للاستخدام اليومي والنمو.',
    'services.saas.outcome': 'منصة قابلة للنمو',
    'services.perf.title': 'تحسين ونمو',
    'services.perf.body':
      'نحسن السرعة، سهولة الاستخدام، جودة الكود، وجاهزية الإطلاق ليظهر المنتج بمستوى احترافي تحت الضغط.',
    'services.perf.outcome': 'تجربة أقوى',
    'services.step1.label': 'خطوة 01',
    'services.step1.title': 'تحديد هدف العمل',
    'services.step2.label': 'خطوة 02',
    'services.step2.title': 'تصميم وبناء المنتج',
    'services.step3.label': 'خطوة 03',
    'services.step3.title': 'إطلاق وقياس وتحسين',

    'work.kicker': 'دراسات حالة',
    'work.title': 'أعمال مختارة',
    'work.body':
      'مجموعة مختارة من أهم مشاريعنا. مرر على أي صورة أو اضغط لمعاينة التجربة.',
    'work.contactCta': 'تواصل معنا',
    'work.viewAll': 'عرض كل المشاريع',
    'work.projectsNav': 'مشاريع الأعمال المختارة',
    'work.showProject': 'عرض مشروع',
    'work.filters': 'فلاتر الأعمال',
    'work.filter.all': 'كل المشاريع',
    'work.filter.realEstate': 'عقارات',
    'work.filter.education': 'تعليم',
    'work.filter.agriculture': 'زراعة',
    'work.category.realEstate': 'منصة عقارية',
    'work.category.education': 'منصة تعليمية',
    'work.category.agriculture': 'موقع زراعي',
    'work.projectBuild': 'منتج رقمي مباشر',
    'work.live': 'مشروع مباشر',
    'work.visit': 'زيارة',
    'work.osos.title': 'أسس الريادة',
    'work.osos.description':
      'منصة خدمات عقارية شاملة مبنية بـ Angular، تضم قوائم عقارات، وبحثًا متقدمًا، وإدارة محتوى ديناميكية.',
    'work.ajyal.title': 'مدرسة أجيال القرآن',
    'work.ajyal.description':
      'منصة تعليمية لمدرسة قرآن تعرض معلومات الدورات، والتسجيل، وموارد الطلاب، ومبنية بـ Angular.',
    'work.zaytona.title': 'زيتونة للزراعة',
    'work.zaytona.description':
      'موقع حلول زراعية يعرض المنتجات والخدمات بواجهة Angular نظيفة ومتجاوبة.',

    'tech.kicker': 'البنية التقنية',
    'tech.title': 'تقنيات تدفع المستقبل',
    'tech.caption': 'مجموعة عملية لبناء برمجيات آمنة، متحركة، وقابلة للتوسع.',

    'testimonials.kicker': 'آراء العملاء',
    'testimonials.title': 'يثق بنا أصحاب الرؤية',
    'testimonials.quote1':
      'حوّلت DEVORA معماريتنا القديمة إلى نظام عالي الأداء تعامل مع نموّنا دون تعقيد.',
    'testimonials.quote2':
      'مستوى الحرفية في كل بكسل وكل سطر كود كان استثنائيًا.',
    'testimonials.quote3':
      'هم لا يبنون شاشات فقط، بل يصممون تجارب. تضاعفت مؤشرات التفاعل بعد إطلاق المنصة.',
    'testimonials.name1': 'سارة جينكنز',
    'testimonials.role1': 'مديرة تقنية',
    'testimonials.company1': 'FutureScale',
    'testimonials.name2': 'مايكل تشين',
    'testimonials.role2': 'قائد المنتج',
    'testimonials.company2': 'Aether AI',
    'testimonials.name3': 'إيلينا رودريغيز',
    'testimonials.role3': 'مؤسسة',
    'testimonials.company3': 'Lumina Digital',
    'testimonials.previous': 'الرأي السابق',
    'testimonials.next': 'الرأي التالي',

    'contact.kicker': 'تواصل',
    'contact.title': 'ابدأ المستقبل اليوم',
    'contact.body':
      'احكِ لنا ما الذي تبنيه، وسنرسم أسرع طريق من الفكرة إلى إطلاق مصقول.',
    'contact.name': 'الاسم الكامل',
    'contact.namePlaceholder': 'محمد علي',
    'contact.email': 'البريد الإلكتروني',
    'contact.emailPlaceholder': 'hello@example.com',
    'contact.service': 'الخدمة',
    'contact.chooseService': 'اختر خدمة',
    'contact.details': 'تفاصيل المشروع',
    'contact.detailsPlaceholder': 'اكتب نبذة عن مشروعك...',
    'contact.submit': 'إرسال الرسالة',
    'contact.success': 'شكرًا لك. سيتواصل فريق DEVORA معك قريبًا.',
    'contact.location': 'القاهرة، مصر',

    'footer.rights': 'جميع الحقوق محفوظة.',
  },
};

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly storageKey = 'devora-language';
  private readonly overridesStorageKey = 'devora-content-overrides';
  readonly language = signal<LanguageCode>('en');
  readonly contentOverrides = signal<Partial<Record<LanguageCode, Record<string, string>>>>({});

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.contentOverrides.set(this.readStoredOverrides());
    const storedLanguage = this.readStoredLanguage();
    this.setLanguage(storedLanguage ?? 'en', false);
  }

  t(key: string): string {
    const override = this.contentOverrides()[this.language()]?.[key];
    if (override !== undefined) {
      return override;
    }

    return TRANSLATIONS[this.language()][key] ?? TRANSLATIONS.en[key] ?? key;
  }

  setTranslation(key: string, value: string, language = this.language()) {
    const currentOverrides = this.contentOverrides();
    const languageOverrides = { ...(currentOverrides[language] ?? {}) };
    const fallback = this.defaultText(key, language);

    if (value === fallback) {
      delete languageOverrides[key];
    } else {
      languageOverrides[key] = value;
    }

    const nextOverrides = {
      ...currentOverrides,
      [language]: languageOverrides,
    };

    this.contentOverrides.set(nextOverrides);
    this.persistOverrides(nextOverrides);
  }

  resetTranslation(key: string, language = this.language()) {
    this.setTranslation(key, this.defaultText(key, language), language);
  }

  resetAllTranslations(language = this.language()) {
    const currentOverrides = this.contentOverrides();
    const nextOverrides = { ...currentOverrides };
    delete nextOverrides[language];
    this.contentOverrides.set(nextOverrides);
    this.persistOverrides(nextOverrides);
  }

  defaultText(key: string, language = this.language()) {
    return TRANSLATIONS[language][key] ?? TRANSLATIONS.en[key] ?? key;
  }

  toggleLanguage() {
    this.setLanguage(this.language() === 'en' ? 'ar' : 'en');
  }

  setLanguage(language: LanguageCode, persist = true) {
    this.language.set(language);

    const root = this.document.documentElement;
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    root.classList.toggle('lang-ar', language === 'ar');

    if (persist && isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, language);
    }
  }

  private readStoredLanguage(): LanguageCode | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    const stored = localStorage.getItem(this.storageKey);
    return stored === 'en' || stored === 'ar' ? stored : null;
  }

  private readStoredOverrides(): Partial<Record<LanguageCode, Record<string, string>>> {
    if (!isPlatformBrowser(this.platformId)) {
      return {};
    }

    try {
      const stored = localStorage.getItem(this.overridesStorageKey);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  }

  private persistOverrides(overrides: Partial<Record<LanguageCode, Record<string, string>>>) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(this.overridesStorageKey, JSON.stringify(overrides));
  }
}
