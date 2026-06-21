import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type LanguageCode = 'en' | 'ar';

const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: {
    'nav.about': 'Why DEVORA',
    'nav.services': 'Services',
    'nav.cybersecurity': 'Cybersecurity',
    'nav.process': 'Process',
    'nav.work': 'Work',
    'nav.stack': 'Stack',
    'nav.tech': 'Stack',
    'nav.contact': 'Start a Project',
    'nav.login': 'Login',
    'nav.dashboard': 'Dashboard',
    'nav.theme': 'Toggle theme',
    'nav.language': 'Arabic',
    'nav.home': 'DEVORA home',
    'nav.openDashboard': 'Open dashboard',

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
    'hero.scrollTour': 'Scroll down the page',

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

    'services.kicker': 'Commercial outcomes',
    'services.title': 'Digital work built to win clients, not just attention',
    'services.body':
      'We turn websites, MVPs, dashboards, and platforms into business assets with clear offers, credible UX, and production-grade Angular engineering.',
    'services.offer.label': 'Registered technology partner',
    'services.offer.title': 'A Saudi registered technology establishment for serious digital launches.',
    'services.offer.body':
      'DEVORA Technology Solutions operates as an active registered establishment, giving companies a credible partner for websites, SaaS, internal systems, and long-term product growth.',
    'services.trust.kicker': 'Legal trust signal',
    'services.trust.title': 'Commercial Registration Certificate verified through the Saudi Ministry of Commerce.',
    'services.trust.statusLabel': 'Registration status',
    'services.trust.statusValue': 'Active',
    'services.trust.entityLabel': 'Entity',
    'services.trust.entityValue': 'DEVORA Technology Solutions',
    'services.trust.issueLabel': 'Issued',
    'services.trust.issueValue': '22 May 2026',
    'services.primaryCta': 'Request a project plan',
    'services.secondaryCta': 'Review live work',
    'services.previous': 'Previous service',
    'services.next': 'Next service',
    'services.stat1.value': 'CR',
    'services.stat1.label': 'Registered technology entity',
    'services.stat2.value': 'MVP',
    'services.stat2.label': 'Launch-ready scope',
    'services.stat3.value': 'UX+CODE',
    'services.stat3.label': 'Strategy through delivery',
    'services.strategy.title': 'Product strategy',
    'services.strategy.body':
      'We clarify the offer, user journey, core screens, and launch scope before time is wasted in execution.',
    'services.strategy.outcome': 'Clear roadmap',
    'services.web.title': 'Websites that persuade clients',
    'services.web.body':
      'Modern websites and landing experiences that show trust quickly and turn visitors into serious leads.',
    'services.web.outcome': 'Better qualified leads',
    'services.saas.title': 'Platforms and web applications',
    'services.saas.body':
      'Dashboards, customer portals, management systems, APIs, and workflows designed for daily use and growth.',
    'services.saas.outcome': 'Scalable platform',
    'services.perf.title': 'Optimization and growth',
    'services.perf.body':
      'We improve speed, usability, code quality, and launch readiness so the product performs under pressure.',
    'services.perf.outcome': 'Stronger experience',
    'services.launch.title': 'Launch a revenue-ready website',
    'services.launch.body':
      'We structure the offer, pages, calls to action, and trust signals so visitors understand the business and know exactly what to do next.',
    'services.launch.outcome': 'More qualified inquiries',
    'services.mvp.title': 'Turn an idea into a usable MVP',
    'services.mvp.body':
      'We define the first version, user flows, core screens, and technical foundation so the product can reach real users without wasted scope.',
    'services.mvp.outcome': 'Clear first launch',
    'services.modernize.title': 'Modernize outdated digital systems',
    'services.modernize.body':
      'We rebuild slow, confusing, or fragile experiences into cleaner Angular interfaces that are easier to operate, maintain, and grow.',
    'services.modernize.outcome': 'Lower friction and stronger trust',
    'services.internal.title': 'Build dashboards and internal tools',
    'services.internal.body':
      'We create admin panels, portals, workflows, and reporting interfaces that make daily operations faster and less dependent on manual work.',
    'services.internal.outcome': 'Better operational control',
    'services.conversion.title': 'Improve conversion and lead flow',
    'services.conversion.body':
      'We audit messaging, forms, UX friction, page hierarchy, speed, and mobile behavior to turn passive visits into serious project conversations.',
    'services.conversion.outcome': 'Higher intent leads',
    'services.scale.title': 'Prepare products for scale',
    'services.scale.body':
      'We improve architecture, component systems, performance, and handover quality so future features can ship without breaking the product.',
    'services.scale.outcome': 'Cleaner growth path',
    'services.brand.title': 'Shape a sharper digital presence',
    'services.brand.body':
      'We align visual direction, messaging, page hierarchy, and proof points so the brand feels credible before the first conversation starts.',
    'services.brand.outcome': 'Clearer market position',
    'services.commerce.title': 'Build sales-ready product flows',
    'services.commerce.body':
      'We design product browsing, checkout paths, inquiry flows, and conversion moments that make buying or requesting a quote feel simple.',
    'services.commerce.outcome': 'Smoother buying journeys',
    'services.integrations.title': 'Connect forms, data, and operations',
    'services.integrations.body':
      'We connect websites and dashboards with APIs, forms, CRMs, and operational tools so teams spend less time moving data by hand.',
    'services.integrations.outcome': 'Less manual admin',
    'services.support.title': 'Maintain and improve after launch',
    'services.support.body':
      'We support releases, fixes, UX improvements, performance checks, and small product iterations so the platform keeps moving after launch.',
    'services.support.outcome': 'Reliable product evolution',
    'services.cyber.title': 'Cybersecurity and penetration testing',
    'services.cyber.body':
      'We assess web apps, APIs, dashboards, and launch infrastructure with PT testing, vulnerability review, hardening priorities, and a clear remediation report.',
    'services.cyber.outcome': 'Lower security risk',

    'cyber.kicker': 'Cybersecurity services',
    'cyber.title': 'PT, vulnerability review, and hardening for digital products',
    'cyber.body':
      'We test web applications, APIs, dashboards, forms, authentication flows, and launch infrastructure to find exploitable risk before attackers or customers do.',
    'cyber.primaryCta': 'Request a security assessment',
    'cyber.secondaryCta': 'See delivery services',
    'cyber.panel.label': 'Security scope',
    'cyber.panel.title': 'Practical testing with clear fixes, not vague alerts.',
    'cyber.signal1.label': 'Testing',
    'cyber.signal1.value': 'Web app, API, auth, forms, and dashboard PT',
    'cyber.signal2.label': 'Method',
    'cyber.signal2.value': 'OWASP-based review, manual validation, risk ranking',
    'cyber.signal3.label': 'Output',
    'cyber.signal3.value': 'Executive summary, technical report, and retest path',
    'cyber.capability.pt.title': 'Penetration testing',
    'cyber.capability.pt.body':
      'Focused PT for websites, SaaS products, portals, dashboards, and critical user journeys with validated findings.',
    'cyber.capability.api.title': 'API and auth testing',
    'cyber.capability.api.body':
      'Review of API exposure, broken access control, token handling, authentication flows, and sensitive data paths.',
    'cyber.capability.vuln.title': 'Vulnerability assessment',
    'cyber.capability.vuln.body':
      'Structured scan and manual verification for misconfigurations, injection risk, weak forms, and unsafe dependencies.',
    'cyber.capability.hardening.title': 'Hardening and remediation',
    'cyber.capability.hardening.body':
      'Clear remediation priorities for headers, access rules, deployment settings, logging, rate limits, and secure release steps.',
    'cyber.deliverables.label': 'Deliverables',
    'cyber.deliverables.title': 'Risk map, remediation plan, and retest-ready report.',
    'cyber.deliverables.body':
      'Every engagement ends with severity ranking, business impact, reproduction notes, fix guidance, and a clean path to verify the fixes.',
    'services.step1.label': 'Step 01',
    'services.step1.title': 'Clarify the commercial objective',
    'services.step2.label': 'Step 02',
    'services.step2.title': 'Design the experience and system',
    'services.step3.label': 'Step 03',
    'services.step3.title': 'Launch with handover and next actions',

    'process.kicker': 'How we deliver',
    'process.title': 'A practical delivery system for businesses that need momentum',
    'process.body':
      'Every engagement is structured around decisions, deliverables, and launch readiness. You see what is being built, why it matters, and what becomes usable next.',
    'process.step1.title': 'Diagnose',
    'process.step1.point1': 'Business goal and target client review',
    'process.step1.point2': 'Current website, product, or workflow audit',
    'process.step1.point3': 'Fastest path to visible business value',
    'process.step2.title': 'Scope',
    'process.step2.point1': 'Priority features and launch boundaries',
    'process.step2.point2': 'User journeys, pages, and conversion paths',
    'process.step2.point3': 'Timeline, dependencies, and delivery order',
    'process.step3.title': 'Design system',
    'process.step3.point1': 'Responsive layouts and component states',
    'process.step3.point2': 'Content hierarchy and trust signals',
    'process.step3.point3': 'Reusable UI patterns for future growth',
    'process.step4.title': 'Build',
    'process.step4.point1': 'Angular standalone components',
    'process.step4.point2': 'Typed models and maintainable structure',
    'process.step4.point3': 'Performance, forms, animations, and integrations',
    'process.step5.title': 'Launch',
    'process.step5.point1': 'Deployment-ready production build',
    'process.step5.point2': 'Responsive checks and browser validation',
    'process.step5.point3': 'Content, SEO, and handover review',
    'process.step6.title': 'Improve',
    'process.step6.point1': 'Analytics-driven UX and copy updates',
    'process.step6.point2': 'Feature backlog and growth priorities',
    'process.step6.point3': 'Maintenance path for new releases',
    'process.model1.label': 'Sprint',
    'process.model1.title': 'Discovery Sprint',
    'process.model1.body':
      'For founders and teams that need a clear scope, offer, sitemap, and product direction before investing in a full build.',
    'process.model1.meta': 'Best before a new launch',
    'process.model2.label': 'Build',
    'process.model2.title': 'Website or MVP Build',
    'process.model2.body':
      'For companies that need a polished website, landing system, MVP, or product interface delivered with practical engineering.',
    'process.model2.meta': 'Best for launch-ready execution',
    'process.model3.label': 'Growth',
    'process.model3.title': 'Platform Upgrade Retainer',
    'process.model3.body':
      'For active businesses that need ongoing UX improvements, feature releases, performance work, and technical cleanup.',
    'process.model3.meta': 'Best after product-market signal',

    'work.kicker': 'Case Studies',
    'work.title': 'Selected Work',
    'work.body':
      'A handpicked collection of our most impactful projects. Hover or click on each image to preview the experience.',
    'work.contactCta': 'Contact us',
    'work.viewAll': 'View All Projects',
    'work.projectsNav': 'Selected work projects',
    'work.previousProject': 'Previous project',
    'work.nextProject': 'Next project',
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

    'tech.kicker': 'Engineering proof',
    'tech.title': 'Built like a product team, not a template shop',
    'tech.caption': 'Clean Angular architecture, typed components, performance-minded UI, and handover-ready code for products that need to live beyond launch.',

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

    'manifesto.kicker': 'Operating principles',
    'manifesto.line1': 'Build with clarity.',
    'manifesto.line2': 'Launch with proof.',
    'manifesto.item1': 'Every decision serves a measurable business goal.',
    'manifesto.item2': 'Architecture stays clean enough for the next team to own.',
    'manifesto.item3': 'The interface earns trust before it asks for action.',

    'contact.kicker': 'Project intake',
    'contact.title': 'Tell us what needs to launch, convert, or scale',
    'contact.body':
      'Send the business goal, project type, and timeline. We will reply with the most practical path to ship something useful.',
    'contact.name': 'Full Name',
    'contact.namePlaceholder': 'John Doe',
    'contact.email': 'Email Address',
    'contact.emailPlaceholder': 'john@example.com',
    'contact.service': 'Project type',
    'contact.chooseService': 'Choose project type',
    'contact.option.launch': 'Revenue-ready website',
    'contact.option.mvp': 'MVP or new product',
    'contact.option.platform': 'SaaS / portal / platform',
    'contact.option.dashboard': 'Dashboard or internal tool',
    'contact.option.cybersecurity': 'Cybersecurity / penetration test',
    'contact.option.optimization': 'Optimization / rebuild',
    'contact.option.other': 'Other',
    'contact.timeline': 'Timeline',
    'contact.chooseTimeline': 'Choose timeline',
    'contact.timeline.option1': 'Launch this month',
    'contact.timeline.option2': '1-3 months',
    'contact.timeline.option3': 'Planning stage',
    'contact.details': 'Business goal',
    'contact.detailsPlaceholder': 'What do you need to launch, fix, automate, or improve? What should success look like?',
    'contact.submit': 'Request Project Plan',
    'contact.success': 'Thanks. DEVORA will review the details and reply with the next practical step.',
    'contact.legal': 'Registered Saudi technology establishment',
    'contact.location': 'Jeddah, Al-Waha District, Abdulrahman Ibn Amr',
    'contact.nationalNumberLabel': 'National Unified Number:',
    'contact.nationalNumber': 'National Unified Number: 7054431932',

    'floating.cta.message.default': 'Ready to discuss a serious launch?',
    'floating.cta.message.work': 'See the work, then start your project.',
    'floating.cta.message.services': 'Choose the path that fits your launch.',
    'floating.cta.message.process': 'A clear process is ready when you are.',
    'floating.cta.message.stack': 'Built on a stack your team can own.',
    'floating.cta.button': 'Start a Project',

    'footer.builtBy': 'Website built by DEVORA',
    'footer.rights': 'All rights reserved.',
    'footer.readyLabel': "Let's work together",
    'footer.ctaHeading': 'Start your project',
    'footer.ctaBtn': 'Get in touch',

    'login.home': 'DEVORA home',
    'login.kicker': 'Dashboard Access',
    'login.title': 'Login with email OTP',
    'login.body': 'Enter your email, confirm the one-time code, then continue to the DEVORA dashboard.',
    'login.email': 'Email address',
    'login.emailPlaceholder': 'admin@devora.studio',
    'login.sendOtp': 'Send OTP',
    'login.otp': 'OTP code',
    'login.otpPlaceholder': '000000',
    'login.devOtp': 'Development OTP',
    'login.verify': 'Verify and open dashboard',
    'login.useAnotherEmail': 'Use another email',
    'login.otpGenerated': 'OTP generated. In this local build, use the development code shown below.',
    'login.genericError': 'Something went wrong.',
    'login.error.invalidEmail': 'Enter a valid email address.',
    'login.error.requestNewOtp': 'Request a new OTP for this email.',
    'login.error.expiredOtp': 'OTP expired. Request a new code.',
    'login.error.incorrectOtp': 'OTP is incorrect.',
  },
  ar: {
    'nav.about': 'لماذا DEVORA',
    'nav.services': 'الخدمات',
    'nav.cybersecurity': 'الأمن السيبراني',
    'nav.process': 'طريقة العمل',
    'nav.work': 'الأعمال',
    'nav.stack': 'التقنيات',
    'nav.tech': 'التقنيات',
    'nav.contact': 'ابدأ مشروعك',
    'nav.login': 'دخول',
    'nav.dashboard': 'لوحة التحكم',
    'nav.theme': 'تغيير الوضع',
    'nav.language': 'English',
    'nav.home': 'العودة إلى الرئيسية',
    'nav.openDashboard': 'فتح لوحة التحكم',

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
    'hero.scrollTour': 'التمرير إلى أسفل الصفحة',

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

    'services.kicker': 'نتائج تجارية',
    'services.title': 'عمل رقمي مصمم لكسب العملاء، وليس جذب الانتباه فقط',
    'services.body':
      'نحوّل المواقع، ونسخ MVP، ولوحات التحكم، والمنصات إلى أصول أعمال بعرض واضح، وتجربة موثوقة، وهندسة Angular جاهزة للإنتاج.',
    'services.offer.label': 'شريك تقني مسجل',
    'services.offer.title': 'مؤسسة تقنية سعودية مسجلة للإطلاقات الرقمية الجادة.',
    'services.offer.body':
      'تعمل DEVORA Technology Solutions كمؤسسة مسجلة ونشطة، لتمنح الشركات شريكا موثوقا للمواقع، ومنصات SaaS، والأنظمة الداخلية، ونمو المنتجات على المدى الطويل.',
    'services.primaryCta': 'اطلب خطة مشروع',
    'services.secondaryCta': 'راجع الأعمال المباشرة',
    'services.previous': 'الخدمة السابقة',
    'services.next': 'الخدمة التالية',
    'services.stat1.value': 'CR',
    'services.stat1.label': 'كيان تقني مسجل',
    'services.stat2.value': 'MVP',
    'services.stat2.label': 'نطاق جاهز للإطلاق',
    'services.stat3.value': 'UX+CODE',
    'services.stat3.label': 'من الاستراتيجية إلى التسليم',
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
    'work.previousProject': 'المشروع السابق',
    'work.nextProject': 'المشروع التالي',
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

    'manifesto.kicker': 'مبادئ العمل',
    'manifesto.line1': 'نبني بوضوح.',
    'manifesto.line2': 'ونطلق بدليل.',
    'manifesto.item1': 'كل قرار يخدم هدفا تجاريا قابلا للقياس.',
    'manifesto.item2': 'تبقى المعمارية نظيفة بما يكفي لامتلاكها من الفريق التالي.',
    'manifesto.item3': 'الواجهة تكسب الثقة قبل أن تطلب الإجراء.',

    'contact.kicker': 'استقبال المشاريع',
    'contact.title': 'أخبرنا ما الذي يحتاج إلى إطلاق أو تحويل أو توسع',
    'contact.body':
      'أرسل هدف العمل، ونوع المشروع، والجدول الزمني. سنرد عليك بأكثر مسار عملي لإطلاق شيء مفيد.',
    'contact.name': 'الاسم الكامل',
    'contact.namePlaceholder': 'محمد علي',
    'contact.email': 'البريد الإلكتروني',
    'contact.emailPlaceholder': 'hello@example.com',
    'contact.service': 'نوع المشروع',
    'contact.chooseService': 'اختر نوع المشروع',
    'contact.details': 'هدف العمل',
    'contact.detailsPlaceholder': 'ما الذي تريد إطلاقه أو إصلاحه أو أتمتته أو تحسينه؟ وكيف يبدو النجاح؟',
    'contact.submit': 'اطلب خطة مشروع',
    'contact.success': 'شكرا لك. سيراجع فريق DEVORA التفاصيل ويرد عليك بالخطوة العملية التالية.',
    'contact.location': 'جدة، حي الواحة، عبدالرحمن ابن عمرو',
    'contact.nationalNumberLabel': 'الرقم الوطني الموحد:',
    'contact.nationalNumber': 'الرقم الوطني الموحد: 7054431932',

    'services.trust.kicker': 'دليل ثقة قانوني',
    'services.trust.title': 'شهادة سجل تجاري موثقة من وزارة التجارة السعودية.',
    'services.trust.statusLabel': 'حالة التسجيل',
    'services.trust.statusValue': 'نشط',
    'services.trust.entityLabel': 'الكيان',
    'services.trust.entityValue': 'DEVORA Technology Solutions',
    'services.trust.issueLabel': 'تاريخ الإصدار',
    'services.trust.issueValue': '22 مايو 2026',
    'services.launch.title': 'إطلاق موقع جاهز للإيراد',
    'services.launch.body':
      'نرتب العرض والصفحات ودعوات الإجراء وإشارات الثقة حتى يفهم الزائر النشاط التجاري ويتخذ الخطوة التالية بوضوح.',
    'services.launch.outcome': 'استفسارات أكثر جدية',
    'services.mvp.title': 'تحويل الفكرة إلى MVP قابل للاستخدام',
    'services.mvp.body':
      'نحدد النسخة الأولى والتدفقات والشاشات الأساسية والبنية التقنية حتى يصل المنتج إلى مستخدمين حقيقيين بدون تضخم في النطاق.',
    'services.mvp.outcome': 'إطلاق أول واضح',
    'services.modernize.title': 'تحديث الأنظمة الرقمية القديمة',
    'services.modernize.body':
      'نعيد بناء التجارب البطيئة أو المربكة أو الهشة إلى واجهات Angular أنظف وأسهل في التشغيل والصيانة والنمو.',
    'services.modernize.outcome': 'ثقة أعلى واحتكاك أقل',
    'services.internal.title': 'لوحات تحكم وأدوات داخلية',
    'services.internal.body':
      'نبني لوحات إدارة وبوابات عملاء وتدفقات تشغيل وتقارير تقلل العمل اليدوي وتسرع العمليات اليومية.',
    'services.internal.outcome': 'تحكم تشغيلي أفضل',
    'services.conversion.title': 'تحسين التحويل وتدفق العملاء',
    'services.conversion.body':
      'نراجع الرسائل والنماذج وترتيب الصفحة والسرعة وتجربة الجوال لتحويل الزيارات إلى محادثات مشاريع جادة.',
    'services.conversion.outcome': 'عملاء محتملون بجودة أعلى',
    'services.scale.title': 'تجهيز المنتج للنمو',
    'services.scale.body':
      'نحسن المعمارية ونظام المكونات والأداء وجودة التسليم حتى لا تتعطل الميزات القادمة مع نمو المنتج.',
    'services.scale.outcome': 'مسار نمو أنظف',
    'services.brand.title': 'توضيح الحضور الرقمي للعلامة',
    'services.brand.body':
      'نوائم الاتجاه البصري والرسائل وترتيب الصفحات وإشارات الثقة حتى تبدو العلامة أكثر مصداقية قبل أول محادثة.',
    'services.brand.outcome': 'تموضع أوضح في السوق',
    'services.commerce.title': 'تدفقات بيع جاهزة للعملاء',
    'services.commerce.body':
      'نصمم تصفح المنتجات ومسارات الطلب والدفع ونقاط التحويل حتى يصبح الشراء أو طلب العرض أبسط وأوضح.',
    'services.commerce.outcome': 'رحلة شراء أسهل',
    'services.integrations.title': 'ربط النماذج والبيانات والتشغيل',
    'services.integrations.body':
      'نربط المواقع ولوحات التحكم مع APIs والنماذج وأنظمة العملاء وأدوات التشغيل لتقليل نقل البيانات يدويا.',
    'services.integrations.outcome': 'إدارة يدوية أقل',
    'services.support.title': 'دعم وتحسين بعد الإطلاق',
    'services.support.body':
      'ندعم الإصدارات والإصلاحات وتحسينات UX وفحوصات الأداء وتطويرات صغيرة حتى يستمر المنتج في التحسن بعد الإطلاق.',
    'services.support.outcome': 'تطوير منتج مستقر',
    'services.cyber.title': 'أمن سيبراني واختبار اختراق',
    'services.cyber.body':
      'ننفذ اختبارات اختراق PT لتطبيقات الويب وواجهات API ولوحات التحكم وبيئة الإطلاق، مع فحص ثغرات، تقوية حماية، وتقرير معالجة واضح بالأولويات.',
    'services.cyber.outcome': 'مخاطر أمنية أقل',

    'cyber.kicker': 'خدمات الأمن السيبراني',
    'cyber.title': 'اختبار اختراق PT وفحص ثغرات وتقوية حماية للمنتجات الرقمية',
    'cyber.body':
      'نختبر تطبيقات الويب وواجهات API ولوحات التحكم والنماذج وتدفقات تسجيل الدخول وبيئة الإطلاق لاكتشاف المخاطر القابلة للاستغلال قبل أن تظهر للمستخدمين أو المهاجمين.',
    'cyber.primaryCta': 'اطلب تقييم أمني',
    'cyber.secondaryCta': 'راجع خدمات التنفيذ',
    'cyber.panel.label': 'نطاق الحماية',
    'cyber.panel.title': 'اختبار عملي بإصلاحات واضحة، وليس تنبيهات مبهمة.',
    'cyber.signal1.label': 'الاختبار',
    'cyber.signal1.value': 'PT لتطبيقات الويب وAPI والتسجيل والنماذج ولوحات التحكم',
    'cyber.signal2.label': 'المنهجية',
    'cyber.signal2.value': 'مراجعة وفق OWASP، تحقق يدوي، وترتيب للمخاطر',
    'cyber.signal3.label': 'المخرجات',
    'cyber.signal3.value': 'ملخص تنفيذي، تقرير تقني، ومسار إعادة اختبار',
    'cyber.capability.pt.title': 'اختبار اختراق',
    'cyber.capability.pt.body':
      'PT موجه للمواقع ومنتجات SaaS والبوابات ولوحات التحكم ورحلات المستخدم الحساسة مع نتائج مؤكدة.',
    'cyber.capability.api.title': 'اختبار API وتسجيل الدخول',
    'cyber.capability.api.body':
      'مراجعة تعرض API، مشاكل الصلاحيات، التعامل مع التوكن، تدفقات الدخول، ومسارات البيانات الحساسة.',
    'cyber.capability.vuln.title': 'تقييم الثغرات',
    'cyber.capability.vuln.body':
      'فحص منظم وتحقق يدوي من الإعدادات الخاطئة، مخاطر الحقن، ضعف النماذج، والاعتماديات غير الآمنة.',
    'cyber.capability.hardening.title': 'تقوية الحماية والمعالجة',
    'cyber.capability.hardening.body':
      'أولويات معالجة واضحة للهيدرز، قواعد الوصول، إعدادات النشر، التسجيل، حدود الطلبات، وخطوات الإطلاق الآمن.',
    'cyber.deliverables.label': 'المخرجات',
    'cyber.deliverables.title': 'خريطة مخاطر وخطة معالجة وتقرير جاهز لإعادة الاختبار.',
    'cyber.deliverables.body':
      'كل تعاون ينتهي بترتيب للشدة، أثر تجاري، خطوات إعادة إنتاج، إرشادات إصلاح، ومسار واضح للتحقق من المعالجة.',

    'process.kicker': 'طريقة التسليم',
    'process.title': 'نظام تنفيذ عملي للشركات التي تحتاج زخما واضحا',
    'process.body':
      'كل تعاون مبني حول قرارات ومخرجات وجاهزية إطلاق. تعرف ما الذي يتم بناؤه، ولماذا يهم، وما الذي يصبح قابلا للاستخدام في الخطوة التالية.',
    'process.step1.title': 'تشخيص',
    'process.step1.point1': 'مراجعة هدف العمل والعميل المستهدف',
    'process.step1.point2': 'تدقيق الموقع أو المنتج أو سير العمل الحالي',
    'process.step1.point3': 'أسرع طريق لقيمة تجارية واضحة',
    'process.step2.title': 'تحديد النطاق',
    'process.step2.point1': 'أولويات الميزات وحدود الإطلاق',
    'process.step2.point2': 'رحلات المستخدم والصفحات ومسارات التحويل',
    'process.step2.point3': 'الجدول والاعتماديات وترتيب التسليم',
    'process.step3.title': 'نظام التصميم',
    'process.step3.point1': 'تخطيطات متجاوبة وحالات للمكونات',
    'process.step3.point2': 'تدرج محتوى وإشارات ثقة',
    'process.step3.point3': 'أنماط واجهة قابلة لإعادة الاستخدام',
    'process.step4.title': 'بناء',
    'process.step4.point1': 'مكونات Angular مستقلة',
    'process.step4.point2': 'نماذج typed وهيكل قابل للصيانة',
    'process.step4.point3': 'أداء ونماذج وحركة وتكاملات',
    'process.step5.title': 'إطلاق',
    'process.step5.point1': 'نسخة إنتاج جاهزة للنشر',
    'process.step5.point2': 'اختبار تجاوب ومتصفحات',
    'process.step5.point3': 'مراجعة محتوى وSEO وتسليم',
    'process.step6.title': 'تحسين',
    'process.step6.point1': 'تحسينات UX ومحتوى بناء على القياس',
    'process.step6.point2': 'قائمة ميزات وأولويات نمو',
    'process.step6.point3': 'مسار صيانة للإصدارات القادمة',
    'process.model1.label': 'Sprint',
    'process.model1.title': 'Discovery Sprint',
    'process.model1.body': 'للشركات التي تحتاج نطاقا واضحا وعرضا وخريطة صفحات واتجاه منتج قبل الاستثمار في بناء كامل.',
    'process.model1.meta': 'مناسب قبل الإطلاق الجديد',
    'process.model2.label': 'Build',
    'process.model2.title': 'Website or MVP Build',
    'process.model2.body': 'لمن يحتاج موقعا مصقولا أو landing system أو MVP أو واجهة منتج بتنفيذ هندسي عملي.',
    'process.model2.meta': 'مناسب للتنفيذ الجاهز للإطلاق',
    'process.model3.label': 'Growth',
    'process.model3.title': 'Platform Upgrade Retainer',
    'process.model3.body': 'للمنتجات النشطة التي تحتاج تحسينات UX وإصدارات ميزات وأداء وتنظيفا تقنيا مستمرا.',
    'process.model3.meta': 'مناسب بعد ظهور إشارة سوقية',

    'contact.option.launch': 'موقع جاهز للإيراد',
    'contact.option.mvp': 'MVP أو منتج جديد',
    'contact.option.platform': 'SaaS / بوابة / منصة',
    'contact.option.dashboard': 'لوحة تحكم أو أداة داخلية',
    'contact.option.cybersecurity': 'أمن سيبراني / اختبار اختراق',
    'contact.option.optimization': 'تحسين أو إعادة بناء',
    'contact.option.other': 'أخرى',
    'contact.timeline': 'الجدول الزمني',
    'contact.chooseTimeline': 'اختر الجدول الزمني',
    'contact.timeline.option1': 'إطلاق هذا الشهر',
    'contact.timeline.option2': 'من شهر إلى 3 أشهر',
    'contact.timeline.option3': 'مرحلة التخطيط',
    'contact.legal': 'مؤسسة تقنية سعودية مسجلة',
    'floating.cta.message.default': 'جاهز لمناقشة إطلاق جاد؟',
    'floating.cta.message.work': 'راجع الأعمال ثم ابدأ مشروعك.',
    'floating.cta.message.services': 'اختر المسار المناسب لإطلاقك.',
    'floating.cta.message.process': 'مسار واضح جاهز عندما تكون مستعدا.',
    'floating.cta.message.stack': 'مبني على تقنيات يستطيع فريقك امتلاكها.',
    'floating.cta.button': 'ابدأ مشروعك',
    'footer.builtBy': 'الموقع من تنفيذ شركة ديفورا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.readyLabel': 'لنعمل معًا',
    'footer.ctaHeading': 'ابدأ مشروعك',
    'footer.ctaBtn': 'تواصل معنا',

    'login.home': 'العودة إلى الرئيسية',
    'login.kicker': 'دخول لوحة التحكم',
    'login.title': 'تسجيل الدخول برمز البريد الإلكتروني',
    'login.body': 'أدخل بريدك الإلكتروني، ثم أكد رمز الاستخدام الواحد للمتابعة إلى لوحة تحكم DEVORA.',
    'login.email': 'البريد الإلكتروني',
    'login.emailPlaceholder': 'admin@devora.studio',
    'login.sendOtp': 'إرسال الرمز',
    'login.otp': 'رمز OTP',
    'login.otpPlaceholder': '000000',
    'login.devOtp': 'رمز التطوير',
    'login.verify': 'تحقق وافتح لوحة التحكم',
    'login.useAnotherEmail': 'استخدم بريدا آخر',
    'login.otpGenerated': 'تم إنشاء الرمز. في نسخة التطوير المحلية استخدم الرمز الظاهر بالأسفل.',
    'login.genericError': 'حدث خطأ غير متوقع.',
    'login.error.invalidEmail': 'أدخل بريدا إلكترونيا صحيحا.',
    'login.error.requestNewOtp': 'اطلب رمز OTP جديدا لهذا البريد.',
    'login.error.expiredOtp': 'انتهت صلاحية رمز OTP. اطلب رمزا جديدا.',
    'login.error.incorrectOtp': 'رمز OTP غير صحيح.',
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

