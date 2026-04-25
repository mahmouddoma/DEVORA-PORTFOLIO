import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type LanguageCode = 'en' | 'ar';

const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.stack': 'Stack',
    'nav.contact': 'Start a Project',
    'nav.theme': 'Toggle theme',
    'nav.language': 'Arabic',
    'nav.home': 'DEVORA home',

    'hero.kicker': 'Software engineering studio',
    'hero.title.line1': 'Engineering Digital',
    'hero.title.line2': 'Systems That Scale',
    'hero.title.line3': 'The Future',
    'hero.subtitle':
      'DEVORA builds AI-ready products, resilient SaaS platforms, and immersive interfaces for teams that need speed without losing craft.',
    'hero.primaryCta': 'Explore Work',
    'hero.secondaryCta': 'Contact DEVORA',
    'hero.console.title': 'Launch Pipeline',
    'hero.console.line1': 'strategy.scan()',
    'hero.console.line2': 'prototype.render()',
    'hero.console.line3': 'scale.deploy()',
    'hero.metric1.value': '42',
    'hero.metric1.label': 'Product launches',
    'hero.metric2.value': '7x',
    'hero.metric2.label': 'Faster iteration',
    'hero.metric3.value': '99.9%',
    'hero.metric3.label': 'Uptime targets',
    'hero.scroll': 'Scroll',

    'about.kicker': 'The Studio',
    'about.title': 'Pioneering the Digital Frontier',
    'about.body':
      'We combine product strategy, software architecture, and polished interface motion to turn ambitious ideas into dependable digital systems.',
    'about.value1.title': 'Architecture That Holds',
    'about.value1.body': 'Cloud-native foundations shaped for growth, observability, and clean ownership.',
    'about.value2.title': 'AI With Purpose',
    'about.value2.body': 'Intelligent workflows that solve real business problems instead of adding noise.',
    'about.value3.title': 'Motion-Led Interfaces',
    'about.value3.body': 'High-performance screens that feel sharp, guided, and memorable.',
    'about.blueprint.title': 'Delivery Blueprint',
    'about.blueprint.step1': 'Discovery',
    'about.blueprint.step2': 'Prototype',
    'about.blueprint.step3': 'Build',
    'about.blueprint.step4': 'Scale',

    'services.kicker': 'Capabilities',
    'services.title': 'Specialized Engineering',
    'services.web.title': 'Web Development',
    'services.web.body': 'Fast, accessible Angular and modern frontend builds with durable component systems.',
    'services.saas.title': 'SaaS Architecture',
    'services.saas.body': 'Multi-tenant platforms, billing flows, APIs, and cloud infrastructure ready for scale.',
    'services.ai.title': 'AI Integration',
    'services.ai.body': 'LLM copilots, retrieval systems, analytics, and automation built into real workflows.',
    'services.ux.title': 'UI/UX Systems',
    'services.ux.body': 'Design systems and interaction models that make complex software easier to use.',
    'services.perf.title': 'Performance Engineering',
    'services.perf.body': 'Audits, optimization, and re-engineering for faster loading and smoother interaction.',
    'services.security.title': 'Enterprise Security',
    'services.security.body': 'Hardened architecture, roles, audit trails, and zero-trust product decisions.',

    'work.kicker': 'Case Studies',
    'work.title': 'Selected Work',
    'work.filters': 'Work filters',
    'work.filter.all': 'All',
    'work.filter.angular': 'Angular',
    'work.category.angular': 'Angular',
    'work.projectBuild': 'Angular build',
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

    'footer.rights': 'DEVORA Studio. All rights reserved.',
  },
  ar: {
    'nav.about': 'عن الشركة',
    'nav.services': 'الخدمات',
    'nav.work': 'الأعمال',
    'nav.stack': 'التقنيات',
    'nav.contact': 'ابدأ مشروعك',
    'nav.theme': 'تغيير الوضع',
    'nav.language': 'English',
    'nav.home': 'العودة إلى الرئيسية',

    'hero.kicker': 'استوديو هندسة برمجيات',
    'hero.title.line1': 'نصمم أنظمة',
    'hero.title.line2': 'رقمية قابلة للتوسع',
    'hero.title.line3': 'للمستقبل',
    'hero.subtitle':
      'تبني DEVORA منتجات جاهزة للذكاء الاصطناعي، ومنصات SaaS مرنة، وواجهات تفاعلية مصقولة للفرق التي تحتاج إلى السرعة دون فقدان الجودة.',
    'hero.primaryCta': 'استكشف الأعمال',
    'hero.secondaryCta': 'تواصل معنا',
    'hero.console.title': 'مسار الإطلاق',
    'hero.console.line1': 'strategy.scan()',
    'hero.console.line2': 'prototype.render()',
    'hero.console.line3': 'scale.deploy()',
    'hero.metric1.value': '42',
    'hero.metric1.label': 'إطلاق منتج',
    'hero.metric2.value': '7x',
    'hero.metric2.label': 'تكرار أسرع',
    'hero.metric3.value': '99.9%',
    'hero.metric3.label': 'أهداف جاهزية',
    'hero.scroll': 'مرر',

    'about.kicker': 'الاستوديو',
    'about.title': 'نقود حدود التجربة الرقمية',
    'about.body':
      'نجمع بين استراتيجية المنتج، وهندسة البرمجيات، وحركة الواجهات المصقولة لتحويل الأفكار الطموحة إلى أنظمة رقمية موثوقة.',
    'about.value1.title': 'معمارية تتحمل النمو',
    'about.value1.body': 'أساسات سحابية مصممة للنمو، والمراقبة، ووضوح الملكية التقنية.',
    'about.value2.title': 'ذكاء اصطناعي بهدف',
    'about.value2.body': 'تدفقات عمل ذكية تحل مشكلات أعمال حقيقية دون إضافة ضوضاء.',
    'about.value3.title': 'واجهات تقودها الحركة',
    'about.value3.body': 'شاشات عالية الأداء تشعر المستخدم بالوضوح، والانسيابية، والتميّز.',
    'about.blueprint.title': 'خطة التسليم',
    'about.blueprint.step1': 'اكتشاف',
    'about.blueprint.step2': 'نموذج أولي',
    'about.blueprint.step3': 'بناء',
    'about.blueprint.step4': 'توسّع',

    'services.kicker': 'القدرات',
    'services.title': 'هندسة برمجية متخصصة',
    'services.web.title': 'تطوير الويب',
    'services.web.body': 'تطبيقات Angular وواجهات حديثة سريعة وقابلة للوصول بنظام مكونات متين.',
    'services.saas.title': 'معمارية SaaS',
    'services.saas.body': 'منصات متعددة العملاء، تدفقات دفع واشتراكات، واجهات API، وبنية سحابية جاهزة للنمو.',
    'services.ai.title': 'دمج الذكاء الاصطناعي',
    'services.ai.body': 'مساعدات LLM، وأنظمة استرجاع، وتحليلات، وأتمتة داخل سير العمل الحقيقي.',
    'services.ux.title': 'أنظمة UI/UX',
    'services.ux.body': 'أنظمة تصميم ونماذج تفاعل تجعل البرمجيات المعقدة أسهل في الاستخدام.',
    'services.perf.title': 'هندسة الأداء',
    'services.perf.body': 'تدقيق وتحسين وإعادة هندسة من أجل تحميل أسرع وتفاعل أكثر سلاسة.',
    'services.security.title': 'أمان المؤسسات',
    'services.security.body': 'معمارية مؤمنة، وصلاحيات، وسجلات تدقيق، وقرارات منتج مبنية على الثقة الصفرية.',

    'work.kicker': 'دراسات حالة',
    'work.title': 'أعمال مختارة',
    'work.filters': 'فلاتر الأعمال',
    'work.filter.all': 'الكل',
    'work.filter.angular': 'Angular',
    'work.category.angular': 'Angular',
    'work.projectBuild': 'تنفيذ Angular',
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

    'footer.rights': 'استوديو DEVORA. جميع الحقوق محفوظة.',
  },
};

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly storageKey = 'devora-language';
  readonly language = signal<LanguageCode>('en');

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    const storedLanguage = this.readStoredLanguage();
    this.setLanguage(storedLanguage ?? 'en', false);
  }

  t(key: string): string {
    return TRANSLATIONS[this.language()][key] ?? TRANSLATIONS.en[key] ?? key;
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
}
