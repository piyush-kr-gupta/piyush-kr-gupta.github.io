/**
 * Portfolio Data Source of Truth
 * 
 * Strongly typed, centralized configuration for:
 * - Profile & Contact Information
 * - Application Portfolio (with verified links and details)
 * - Domain Expertise (dynamically derived and augmented)
 * - Professional Experience & Education
 * - Categorized Technical Skills
 * - Resume Asset Settings
 * 
 * To add a new project, simply add an entry to the `applications` array.
 * Business domains, filters, and domain counts will automatically update!
 */

export type BusinessModel = 'B2C' | 'B2B' | 'Enterprise' | 'Unspecified';

export interface Application {
  id: string;
  name: string;
  domain: string;
  businessModel: BusinessModel;
  playStoreUrl: string;
  description: string;
  highlights: string[];
  technologies: string[];
  company?: string;
  featured?: boolean;
  downloads?: string;
  // Optional local asset path (e.g. '/images/apps/bigbasket.png')
  iconPath?: string;
  // Fallback visual initials
  initials: string;
  // Domain category icon identifier
  domainCategory: 'quick-commerce' | 'logistics' | 'healthcare' | 'entertainment' | 'social';
}

export interface Experience {
  company: string;
  client?: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  associatedAppIds?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  location: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLinks {
  linkedin?: string;
  github?: string;
  email?: string;
  website?: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    headline: string;
    shortSummary: string;
    extendedBio: string;
    location: string;
    primaryRole: string;
    experienceYears: string;
    keyHighlights: string[];
  };
  contact: SocialLinks;
  resume: {
    available: boolean;
    downloadPath: string;
    downloadFilename: string;
    label: string;
  };
  skillCategories: SkillCategory[];
  applications: Application[];
  experiences: Experience[];
  education: Education[];
  domainDescriptions: Record<string, string>;
}

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Piyush Kumar Gupta',
    headline: 'Senior Android & Flutter Engineer',
    primaryRole: 'Senior Mobile Engineer',
    experienceYears: '6.5+ Years',
    location: 'Bengaluru, India',
    shortSummary:
      'Senior Mobile Engineer with 6.5+ years of experience contributing to the development and optimization of high-performance high-performance Android and cross-platform mobile applications with over 120M+ cumulative Google Play installs. Specialized in Kotlin, Android SDK, Jetpack Compose, Flutter, Clean Architecture, and progressive migrations for platforms serving tens of millions of users.',
    extendedBio:
      'My engineering philosophy centers on clean architecture, maintainability, and measurable runtime performance. Over 6.5+ years, I have architected and delivered mobile solutions across diverse domains—including large-scale quick commerce, logistics marketplaces, healthcare diagnostic suites, and content platforms with 120M+ total installs. I specialize in building robust apps with Kotlin and Flutter, modernizing legacy Java codebases, streamlining state management with BLoC and MVVM, and driving crash rates down in production.',
    keyHighlights: [
      '120M+ Cumulative Google Play Installs Across 8 Apps',
      'Native Android (Kotlin & Java) & Cross-Platform Flutter',
      'Clean Architecture, MVVM, MVI & BLoC Patterns',
      'Modernization & Java-to-Kotlin Large-Scale Migrations',
      'Performance Profiling, Crash Reduction & Memory Optimization',
    ],
  },

  contact: {
    email: 'piyush.kr.work@gmail.com',
    linkedin: 'https://www.linkedin.com/in/piyush-gupta-0a2354103/',
    github: 'https://github.com/piyush-kr-gupta',
  },

  resume: {
    available: true,
    downloadPath: '/Piyush_Kumar_Gupta_Resume.pdf',
    downloadFilename: 'Piyush_Kumar_Gupta_Resume.pdf',
    label: 'Download Resume',
  },

  skillCategories: [
    {
      title: 'Languages & Frameworks',
      skills: ['Kotlin', 'Flutter', 'Dart', 'Java', 'Swift'],
    },
    {
      title: 'Android Development',
      skills: [
        'Android SDK',
        'Jetpack Compose',
        'Coroutines',
        'Flow',
        'Room',
        'WorkManager',
        'ViewModel',
        'Jetpack',
      ],
    },
    {
      title: 'Architecture & Engineering',
      skills: [
        'MVVM',
        'Clean Architecture',
        'Modularization',
        'System Design',
        'BLoC',
        'MVI',
        'Performance Optimization',
      ],
    },
    {
      title: 'Infrastructure & Integrations',
      skills: [
        'REST APIs',
        'Firebase',
        'Firestore',
        'Crashlytics',
        'Hilt',
        'Dagger',
        'CI/CD',
        'Git',
        'Retrofit',
      ],
    },
    {
      title: 'Testing',
      skills: ['Unit Testing'],
    },
  ],

  applications: [
    {
      id: 'bigbasket',
      name: 'BigBasket',
      domain: 'Quick Commerce',
      businessModel: 'B2C',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.bigbasket.mobileapp&hl=en_IN',
      description:
        'Flagship grocery and quick-commerce platform serving 25M+ registered users, 15M+ monthly orders, and 18M+ monthly visitors across India.',
      highlights: [
        'Contributed to the consolidation of BBdaily into the unified BigBasket application, bringing subscription and scheduled deliveries into 10–20 minute quick-commerce operations.',
        'Engineered reusable Flutter widgets, screens, and UI flows adhering to scalable clean architecture and consistent commerce journeys.',
        'Managed Flutter state management, backend-driven UI, and asynchronous data pipelines for complex checkout and ordering.',
        'Optimized widget rendering, controlled rebuilds, and integrated Lottie/Rive animations for fluid UI interactions.',
      ],
      technologies: ['Flutter', 'Dart', 'BLoC', 'Lottie', 'Rive', 'REST APIs', 'Backend-Driven UI'],
      company: 'Recrosoft Technologies (Client: BigBasket)',
      featured: true,
      downloads: '100M+ Installs',
      iconPath: '/images/apps/bigbasket.webp',
      initials: 'BB',
      domainCategory: 'quick-commerce',
    },
    {
      id: 'bigbasket-delivery-partner',
      name: 'BigBasket Delivery Partner App',
      domain: 'Quick Commerce',
      businessModel: 'Unspecified',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.bigbasket.dapp.activity&hl=en_IN',
      description:
        'Mission-critical delivery operations application empowering BigBasket fleet partners with route fulfillment, order execution, and dispatch tracking.',
      highlights: [
        'Extensively spearheaded progressive migration from legacy Java to modern Kotlin, modernizing the codebase while preserving backward compatibility and stability.',
        'Maintained and stabilized legacy Java libraries and modules, resolving production edge cases without disrupting daily logistics.',
        'Implemented modern Android Jetpack libraries including Coroutines, Kotlin Flow, ViewModel, Room, and WorkManager to improve app responsiveness.',
      ],
      technologies: [
        'Kotlin',
        'Java',
        'Android Jetpack',
        'Coroutines',
        'Kotlin Flow',
        'ViewModel',
        'Room',
        'WorkManager',
      ],
      company: 'Recrosoft Technologies (Client: BigBasket)',
      featured: true,
      downloads: '1M+ Installs',
      iconPath: '/images/apps/bbdelivery.webp',
      initials: 'DP',
      domainCategory: 'quick-commerce',
    },
    {
      id: 'vahak',
      name: 'Vahak',
      domain: 'Transportation & Logistics',
      businessModel: 'B2B',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=search.find.lorries.invite.transporter.add.lorries.deliveries.codenicely.search.vahak&hl=en_IN',
      description:
        "India's largest B2B road transport logistics marketplace connecting lorry owners, fleet operators, and transport contractors for load bookings.",
      highlights: [
        'Collaborated within the core mobile team using BLoC state management and MVVM architecture to ship high-frequency booking and discovery features.',
        'Created custom Flutter packages and native platform plugins written in Kotlin to interface seamlessly with Android system APIs.',
        'Boosted app performance, lowered load times, and reduced memory footprint through lazy loading and widget tree optimization.',
        'Conducted comprehensive code reviews to maintain clean code standards and strict adherence to Flutter engineering guidelines.',
      ],
      technologies: ['Flutter', 'Dart', 'Kotlin', 'BLoC', 'MVVM', 'Method Channels', 'REST APIs'],
      company: 'Epictus Solutions India Pvt. Ltd - Vahak',
      featured: true,
      downloads: '5M+ Installs',
      iconPath: '/images/apps/vahak_logo.webp',
      initials: 'VH',
      domainCategory: 'logistics',
    },
    {
      id: 'creliohealth-patients',
      name: 'CrelioHealth for Patients',
      domain: 'Healthcare',
      businessModel: 'B2C',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.livehealth&hl=en_IN',
      description:
        'Patient-centric digital health portal allowing patients to access verified laboratory test reports, track longitudinal vitals, and book medical appointments.',
      highlights: [
        'Architected core application layers utilizing Hilt dependency injection, Kotlin Coroutines, Room offline storage, and Retrofit.',
        'Enhanced app stability and monitoring by integrating Firebase Crashlytics and Performance Monitoring SDKs.',
        'Streamlined the codebase by migrating modules from Java to Kotlin, eliminating boilerplate code and accelerating bug fixes.',
      ],
      technologies: [
        'Kotlin',
        'Android SDK',
        'Hilt',
        'Coroutines',
        'Room',
        'Retrofit',
        'Firebase Crashlytics',
        'Performance Monitoring',
      ],
      company: 'Creliant Software Pvt. Ltd.',
      featured: true,
      downloads: '5L+ Installs',
      iconPath: '/images/apps/creliopatients.webp',
      initials: 'CP',
      domainCategory: 'healthcare',
    },
    {
      id: 'creliohealth-doctors',
      name: 'CrelioHealth for Doctors',
      domain: 'Healthcare',
      businessModel: 'B2B',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.livehealthdoctorapp&hl=en_IN',
      description:
        'Clinical communication and diagnostic interpretation application designed for medical professionals, lab directors, and referring physicians.',
      highlights: [
        'Utilized modern Android libraries including Hilt, Coroutines, Room, and Retrofit to build efficient and secure report verification workflows.',
        'Migrated existing Java components to Kotlin with clean MVVM architecture, ensuring clear decoupling of presentation from medical data flows.',
        'Maintained rapid release cycles and high crash-free user rates across clinical settings.',
      ],
      technologies: ['Kotlin', 'Android SDK', 'Hilt', 'Coroutines', 'Room', 'Retrofit', 'MVVM'],
      company: 'Creliant Software Pvt. Ltd.',
      downloads: '10K+ Installs',
      iconPath: '/images/apps/creliodoctors.webp',
      initials: 'CD',
      domainCategory: 'healthcare',
    },
    {
      id: 'creliohealth-inventory',
      name: 'CrelioHealth Inventory',
      domain: 'Healthcare',
      businessModel: 'B2B',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.creliohealth.inventorymanagement&hl=en_IN',
      description:
        'Comprehensive diagnostic lab inventory management solution for tracking reagents, stock consumption, batch expiry dates, and purchase orders.',
      highlights: [
        'Developed the CrelioHealth Inventory Android application from the ground up using Kotlin, creating a reliable and modular solution.',
        'Built the companion CrelioHealth Inventory iOS application from scratch using Swift, delivering a seamless experience for iOS lab managers.',
        'Designed offline-first local persistence and barcode validation logic for fast laboratory scanning operations.',
      ],
      technologies: ['Kotlin', 'Android SDK', 'Swift (iOS)', 'Clean Architecture', 'Room', 'Retrofit'],
      company: 'Creliant Software Pvt. Ltd.',
      downloads: '100+ Installs',
      iconPath: '/images/apps/crelioinventory.webp',
      initials: 'CI',
      domainCategory: 'healthcare',
    },
    {
      id: 'tv-lens',
      name: 'TV Lens / OTT Watch',
      domain: 'Entertainment',
      businessModel: 'Unspecified',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=movies.old.watched.free',
      description:
        'Media discovery guide and movie streaming aggregator helping users search and track movies and television shows across streaming providers.',
      highlights: [
        'Independently owned the entire mobile application lifecycle spanning development, testing, release, and Play Store deployment.',
        'Dramatically reduced the application crash rate from 8% down to 1.5% through defensive error handling and memory optimization.',
        'Architected UI and data separation using MVVM pattern with Dagger-Hilt, Room, Retrofit, and optimized image loading with Glide and Picasso.',
      ],
      technologies: [
        'Kotlin',
        'Java',
        'MVVM',
        'Dagger-Hilt',
        'Room',
        'Retrofit',
        'Glide',
        'Picasso',
      ],
      company: 'Appyhigh Technology LLP',
      downloads: '10M+ Installs',
      iconPath: '/images/apps/ottwatch.webp',
      initials: 'TL',
      domainCategory: 'entertainment',
    },
    {
      id: 'mymandir',
      name: 'MyMandir',
      domain: 'Devotional Social Media',
      businessModel: 'Unspecified',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mymandir&hl=en_IN',
      description:
        "India's largest vernacular social media platform for the devotional community, connecting millions of users with regional cultural content.",
      highlights: [
        'Engineered responsive, localized mobile experiences with native language support across 9 Indian languages.',
        'Wrote clean, modular, and well-tested code following MVP and MVVM architectural standards.',
        'Implemented ad monetization infrastructure using Google AdMob and Facebook Audience Network with mediation cascades.',
      ],
      technologies: [
        'Java',
        'Kotlin',
        'Android SDK',
        'MVP',
        'MVVM',
        'AdMob Mediation',
        'Localization',
      ],
      company: 'Bakbak Technologies Pvt Ltd',
      downloads: '5M+ Installs',
      iconPath: '/images/apps/mymandir.webp',
      initials: 'MM',
      domainCategory: 'social',
    },
  ],

  domainDescriptions: {
    'Quick Commerce':
      'High-throughput consumer and delivery partner platforms handling real-time order tracking, complex scheduled subscriptions, and 10–20 minute rapid delivery workflows.',
    'Transportation & Logistics':
      'B2B marketplace networks connecting thousands of fleet owners, truck drivers, and logistics contractors with real-time bidding, route discovery, and telematics.',
    'Healthcare':
      'Mission-critical diagnostic reporting, clinical communication platforms, and lab inventory management systems built with strict data integrity and offline reliability.',
    'Entertainment':
      'Consumer video streaming catalogs, media recommendation engines, and high-density browsing experiences optimized for memory and fluid image rendering.',
    'Devotional Social Media':
      'High-engagement vernacular social communities supporting 9 Indian languages, dynamic media feeds, and mediated programmatic monetization.',
  },

  experiences: [
    {
      company: 'Recrosoft Technologies',
      client: 'BigBasket',
      role: 'Senior Software Engineer (Flutter, Kotlin)',
      period: 'May 2025 – June 2026',
      location: 'Bengaluru, India',
      summary:
        'Drove critical feature migrations and architectural modernization across BigBasket’s consumer shopping ecosystem and internal delivery partner operations.',
      achievements: [
        'Contributed to the platform migration and consolidation of BBdaily into the unified BigBasket application, supporting a platform with 25M+ registered users, 15M+ monthly orders, and 18M+ monthly visitors.',
        'Engineered reusable Flutter widgets, state management architectures, and backend-driven UI components across subscription journeys and 10–20 minute quick-commerce flows.',
        'Optimized Flutter rendering, controlled widget rebuilds, and introduced Lottie and Rive animation systems to maintain smooth 60fps UX.',
        'Led progressive Java-to-Kotlin modernization for the BigBasket Delivery Partner App, improving app reliability and stability across a mature enterprise codebase.',
        'Implemented modern Android Jetpack libraries including Coroutines, Kotlin Flow, ViewModel, Room, and WorkManager for robust background synchronization.',
      ],
      technologies: [
        'Flutter',
        'Dart',
        'Kotlin',
        'Java',
        'Android Jetpack',
        'Coroutines',
        'Flow',
        'Room',
        'WorkManager',
        'BLoC',
        'Lottie',
        'Rive',
      ],
      associatedAppIds: ['bigbasket', 'bigbasket-delivery-partner'],
    },
    {
      company: 'Epictus Solutions India Pvt. Ltd',
      client: 'Vahak',
      role: 'Mobile Developer SDE-2 (Flutter, Kotlin)',
      period: 'Nov 2023 – Jan 2025',
      location: 'Bengaluru, India',
      summary:
        'Engineered features and boosted mobile performance on India’s premier B2B road transport logistics network.',
      achievements: [
        'Collaborated within an agile squad of Flutter developers, implementing BLoC state management and MVVM architecture to accelerate feature delivery.',
        'Developed custom Flutter packages and native Android platform plugins using Kotlin for specialized system interactions.',
        'Improved app performance via BLoC-based state management, lazy loading, and widget tree optimization, reducing load times and device resource consumption.',
        'Conducted thorough code reviews and mentored teammates on clean code principles, Flutter guidelines, and unit testing.',
      ],
      technologies: [
        'Flutter',
        'Dart',
        'Kotlin',
        'BLoC',
        'MVVM',
        'Platform Channels',
        'REST APIs',
        'Git',
      ],
      associatedAppIds: ['vahak'],
    },
    {
      company: 'Creliant Software Pvt. Ltd.',
      role: 'Mobile Developer (Kotlin, Java, Swift)',
      period: 'Jul 2021 – Nov 2023',
      location: 'Pune, India',
      summary:
        'Engineered medical diagnostic apps for doctors and patients and developed multi-platform inventory management software.',
      achievements: [
        'Developed CrelioHealth Inventory Android application from the ground up using Kotlin, and built the companion iOS app from scratch with Swift.',
        'Architected and implemented data pipelines for CrelioHealth for Patients and CrelioHealth for Doctors using Hilt, Coroutines, Room, and Retrofit.',
        'Instrumented Firebase Crashlytics and Performance Monitoring SDKs to systematically diagnose production bottlenecks and ensure high stability.',
        'Led codebase modernization by migrating legacy Java modules to Kotlin, reducing boilerplate code and bug-fixing overhead.',
      ],
      technologies: [
        'Kotlin',
        'Java',
        'Swift',
        'Android SDK',
        'Hilt',
        'Coroutines',
        'Room',
        'Retrofit',
        'Firebase Crashlytics',
      ],
      associatedAppIds: ['creliohealth-patients', 'creliohealth-doctors', 'creliohealth-inventory'],
    },
    {
      company: 'Appyhigh Technology LLP',
      role: 'Android Developer (Kotlin, Java)',
      period: 'Jul 2020 – Mar 2021',
      location: 'Hyderabad, India',
      summary:
        'Independently owned the entire lifecycle for TV Lens (OTT Watch) mobile application from design through production deployment.',
      achievements: [
        'Independently owned end-to-end development, testing, release management, and deployment of TV Lens using Kotlin and Java.',
        'Reduced application crash rate from 8% down to 1.5% through defensive programming and comprehensive error handling.',
        'Enforced separation of UI and business logic via MVVM architecture, Dagger-Hilt, Room, and Retrofit.',
        'Implemented optimized media caching with Glide and Picasso to deliver smooth catalog browsing.',
      ],
      technologies: [
        'Kotlin',
        'Java',
        'Android SDK',
        'MVVM',
        'Dagger-Hilt',
        'Room',
        'Retrofit',
        'Glide',
        'Picasso',
      ],
      associatedAppIds: ['tv-lens'],
    },
    {
      company: 'Bakbak Technologies Pvt Ltd',
      role: 'Android Developer (Java, Kotlin)',
      period: 'Apr 2019 – Jun 2020',
      location: 'Bengaluru, India',
      summary:
        'Developed vernacular social media experiences and wellness mobile applications with extensive localization and monetization integrations.',
      achievements: [
        'Engineered vernacular social media features for MyMandir with comprehensive language support across 9 Indian languages.',
        'Wrote clean, modular code in MVP and MVVM architecture, ensuring high test coverage and component reusability.',
        'Integrated ad monetization waterfalls with Google AdMob and Facebook Audience Network using ad mediation.',
        'Contributed to Eka, a habit-building wellness application centered around Yoga and meditation for mental well-being.',
      ],
      technologies: [
        'Java',
        'Kotlin',
        'Android SDK',
        'MVP',
        'MVVM',
        'AdMob Mediation',
        'Localization',
        'REST APIs',
      ],
      associatedAppIds: ['mymandir'],
    },
  ],

  education: [
    {
      degree: 'B. Tech in Electronics & Communication Engineering (ECE)',
      institution: 'MCKV Institute of Engineering',
      period: '2014 – 2018',
      grade: '8.07 DGPA',
      location: 'Kolkata, India',
    },
  ],
};

/**
 * Domain statistics dynamically derived from applications data.
 * When a new application is added to `applications`, it automatically registers here!
 */
export interface DomainStat {
  name: string;
  count: number;
  description: string;
  category: 'quick-commerce' | 'logistics' | 'healthcare' | 'entertainment' | 'social';
  appNames: string[];
}

export function getDerivedDomains(apps: Application[] = portfolioData.applications): DomainStat[] {
  const map = new Map<string, { count: number; appNames: string[]; category: Application['domainCategory'] }>();

  for (const app of apps) {
    const existing = map.get(app.domain);
    if (existing) {
      existing.count += 1;
      existing.appNames.push(app.name);
    } else {
      map.set(app.domain, {
        count: 1,
        appNames: [app.name],
        category: app.domainCategory,
      });
    }
  }

  const result: DomainStat[] = [];
  map.forEach((value, domainName) => {
    result.push({
      name: domainName,
      count: value.count,
      description:
        portfolioData.domainDescriptions[domainName] ||
        `Production mobile applications and engineering solutions built for the ${domainName} industry.`,
      category: value.category,
      appNames: value.appNames,
    });
  });

  return result;
}

/**
 * Preferred presentation order for industry domains in portfolio filters
 */
export const PREFERRED_DOMAIN_ORDER = [
  'Quick Commerce',
  'Transportation & Logistics',
  'Healthcare',
  'Entertainment',
  'Devotional Social Media',
];

/**
 * Unique list of domains directly extracted from projects for the filter dropdown,
 * ordered according to the preferred domain hierarchy.
 */
export function getUniqueDomains(apps: Application[] = portfolioData.applications): string[] {
  const unique = Array.from(new Set(apps.map((a) => a.domain)));
  return unique.sort((a, b) => {
    const idxA = PREFERRED_DOMAIN_ORDER.indexOf(a);
    const idxB = PREFERRED_DOMAIN_ORDER.indexOf(b);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a.localeCompare(b);
  });
}
