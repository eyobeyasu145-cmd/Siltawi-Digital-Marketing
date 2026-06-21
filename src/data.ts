import { Stat, Service, PortfolioItem, TeamMember, Testimonial, Value, TimelineEvent } from './types';

export const statsData: Stat[] = [
  {
    id: 'projects',
    value: '100+',
    number: 100,
    suffix: '+',
    label: 'Projects Completed'
  },
  {
    id: 'clients',
    value: '50+',
    number: 50,
    suffix: '+',
    label: 'Active Clients'
  },
  {
    id: 'team',
    value: '15',
    number: 15,
    suffix: '',
    label: 'Team Members'
  },
  {
    id: 'satisfaction',
    value: '95%',
    number: 95,
    suffix: '%',
    label: 'Client Satisfaction'
  }
];

export const servicesData: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Grow your business with customized multi-channel strategies including social media, Facebook/Instagram ads, and Google ads.',
    longDescription: 'Our Digital Marketing suite is designed for maximum ROI. We take your business goals and translate them into custom campaigns that get noticed, drive traffic, and lock in sales on modern high-engagement platforms.',
    features: [
      'Social Media Marketing (SMM)',
      'Highly targeted Facebook, Instagram & TikTok Ads',
      'Google Search, Display & Performance Max Ads',
      'High-conversion Email Marketing Automations',
      'Influencer Marketing & Regional Collaborations'
    ],
    icon: 'Megaphone'
  },
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'Beautiful, lightning-fast company profile websites, e-commerce systems, landing pages, and ongoing site maintenance.',
    longDescription: 'We develop secure, highly responsive, and speed-optimized digital solutions tailored specifically to represent your brand. From corporate profile websites to full-featured e-commerce stores, our tech stack ensures flawless performance.',
    features: [
      'Enterprise-grade Corporate Profile Sites',
      'Seamless E-Commerce & Payment Gateway Integrations',
      'High-converting Landing Pages',
      'Professional Portfolio & Blog Websites',
      'Full Security compliance & Website Maintenance'
    ],
    icon: 'Laptop'
  },
  {
    id: 'branding-design',
    title: 'Branding & Design',
    description: 'Formulate memorable brand identities with professional logo design, marketing collateral, and sleek UI/UX design.',
    longDescription: 'A strong brand translates into strong business loyalty. We craft gorgeous visual assets, solid brand guidelines, and delightful user interfaces that ensure your business stands out both offline and online.',
    features: [
      'Bespoke Logo Design & Typography Packages',
      'Comprehensive Brand Identity Systems & Guidelines',
      'Custom Marketing & Print Collateral',
      'Premium Mobile & Web UI/UX Design',
      'Modern Interactive Prototyping'
    ],
    icon: 'Palette'
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Amplify your message with professional photography, engaging video production, copywriting, and social media schedules.',
    longDescription: 'Content is king. Our design and media creation studio handles complete production lifecycles, ensuring high-quality aesthetics and storytelling that build strong emotional ties with your regional target audience.',
    features: [
      'Professional Commercial Photography',
      'Engaging Video Production (Reels, TikToks, Explainers)',
      'Persuasive Copywriting & Storytelling',
      'Dynamic Social Media Calendars & Asset Design',
      'Motion Design & Motion Graphics'
    ],
    icon: 'Camera'
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    description: 'Improve search rankings and organically drive high-intent customer traffic through technical audits and local SEO solutions.',
    longDescription: 'Disappear from page two and show up right in front of high-intent buyers. Our SEO programs cover everything from code restructuring to hyper-targeted content writing engineered to dominate local search grids.',
    features: [
      'In-Depth Technical SEO Audits & Analytics Setup',
      'Addis Ababa & Regional Local SEO Optimization',
      'Comprehensive Keyword Research & Competitor Analysis',
      'High-authority On-Page Content Structuring',
      'Performance Optimization & Core Web Vitals Fixes'
    ],
    icon: 'Search'
  }
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 'portfolio-1',
    title: 'Ethio-Heritage Coffee',
    category: 'Branding',
    client: 'Ethio-Heritage Ltd.',
    industry: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80',
    description: 'A complete premium rebrand and packaging design for a legendary organic coffee exporter based in Addis Ababa, targeting high-end European and Asian markets.',
    results: [
      'Boosted global retail packaging inquiry rate by 85%',
      'Designed 4 unique seasonal coffee bag lineups',
      'Secured a visual style praised at the Regional Trade Show'
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Cinema 4D', 'Premium Print Production']
  },
  {
    id: 'portfolio-2',
    title: 'Zemen Premium Ride',
    category: 'Websites',
    client: 'Zemen Transportation Services',
    industry: 'Logistics & Tech',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
    description: 'Development of an ultra-fast, search-optimized corporate portal with real-time tariff calculations and a seamless driver onboarding platform.',
    results: [
      'Achieved a 99/100 Mobile Speed score on Lighthouse',
      'Drove a 140% increase in driver registration applications',
      'Integrated real-time geolocation estimator APIs'
    ],
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Google Maps API', 'Express']
  },
  {
    id: 'portfolio-3',
    title: 'Sheger Telecom Launch',
    category: 'Social Media',
    client: 'Sheger Communications Group',
    industry: 'Telecommunications',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    description: 'A comprehensive, multi-phase public launch campaign on Facebook and Telegram, featuring creative motion teasers and interactive community give-aways.',
    results: [
      'Grew active subscriber tracking by 320,000 users in 4 weeks',
      'Accumulated over 5 million viral impressions across Ethiopia',
      'Engineered an engagement rate that was 4x the industry average'
    ],
    technologies: ['Facebook Ads Manager', 'Telegram Channel Automation', 'After Effects', 'Canva SDK']
  },
  {
    id: 'portfolio-4',
    title: 'Bole Highrise Living',
    category: 'Video',
    client: 'Bole Heights Realty',
    industry: 'Real Estate Developer',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    description: 'Cinematic commercial video showcase for a luxury 20-story condominium complex in the heart of Bole, targeting the high-net-worth Ethiopian diaspora.',
    results: [
      'Generated 220+ verified warm leads within the first week',
      'Achieved a 95% video watch-through metric on YouTube & Instagram',
      'Assisted in completing 75% tower pre-sales in record time'
    ],
    technologies: ['4K Drone Videography', 'Adobe Premiere Pro', 'Color Grading (LUTs)', 'Instagram Reel Targeted Boosting']
  },
  {
    id: 'portfolio-5',
    title: 'Habesha Fintech Hub',
    category: 'Websites',
    client: 'Habesha Pay PLC',
    industry: 'Financial Technology',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    description: 'Design and coding of a highly interactive multi-purpose website to present their digital banking API, compliant with international bank testing frameworks.',
    results: [
      'Simplified API key generation UI to 3 quick clicks',
      'Incorporated rich client-side interactive calculators',
      'Established a secure, beautiful dark-themed technical dashboard look'
    ],
    technologies: ['React', 'TypeScript', 'Motion API', 'Tailwind CSS', 'Framer Designs']
  },
  {
    id: 'portfolio-6',
    title: 'Abyssinia Craft Brewery',
    category: 'Branding',
    client: 'Abyssinia Premium Beverages',
    industry: 'Consumer Goods',
    image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=800&q=80',
    description: 'Crafted a modern logo, corporate letterhead, social media design grids, and taproom menu graphics blending traditional icons with contemporary typography.',
    results: [
      'Created a distinctive visual trademark register verified by global authorities',
      'Provided 100+ organized layout assets for multi-site deployment',
      'Increased general bar traffic footfall by 35% through design upgrades'
    ],
    technologies: ['Bespoke Typography', 'Vector Branding Kit', 'Photoshop Mockups', 'Social Asset Libraries']
  }
];

export const valuesData: Value[] = [
  {
    id: 'val-1',
    title: 'Innovation',
    description: 'We continuous experiment with emerging marketing tech and tools to give our clients an unfair competitive advantage.',
    icon: 'Lightbulb'
  },
  {
    id: 'val-2',
    title: 'Creativity',
    description: 'No cookie-cutter shortcuts. Every piece of code, layout, and visual script is handcrafted to tell a unique story.',
    icon: 'Sparkles'
  },
  {
    id: 'val-3',
    title: 'Transparency',
    description: 'Complete visibility over budget spends, organic metrics, ad performances, and campaign results. Full access always.',
    icon: 'Eye'
  },
  {
    id: 'val-4',
    title: 'Excellence',
    description: 'We demand high-performance standards from our systems, delivering designs that load instantly and leave lasting marks.',
    icon: 'Award'
  },
  {
    id: 'val-5',
    title: 'Customer Success',
    description: 'Your financial bottom line is our primary success KPI. When your business grows, we celebrate a true victory.',
    icon: 'TrendingUp'
  },
  {
    id: 'val-6',
    title: 'Continuous Learning',
    description: 'The digital realm changes overnight. We train constantly to master the latest shifting algorithms and web frameworks.',
    icon: 'GraduationCap'
  }
];

export const timelineData: TimelineEvent[] = [
  {
    year: '2023',
    title: 'Agency Founded',
    description: 'Siltawi Digital Marketing is established in Addis Ababa with 3 passionate innovators. Launched initial branding and SEO audit products.'
  },
  {
    year: '2024',
    title: 'Expanded Digital & Dev Services',
    description: 'Recruited top local React developers and video directors. Broadened our catalog to full-scale Web Portal development and high-budget Facebook/Google Ads management.'
  },
  {
    year: '2025',
    title: '50+ Clients Reached',
    description: 'Successfully partnered with major local and diaspora-led enterprises. Moved into our modern creative studio in Bole and exceeded 100 total project completions.'
  }
];

export const teamData: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Dawit Siltawi',
    role: 'CEO & Founder',
    bio: 'Dawit has spent over 10 years directing digital transformation. He founded Siltawi to combine cutting-edge technology with creative regional marketing storytelling.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com/'
  },
  {
    id: 'team-2',
    name: 'Helena Tekle',
    role: 'Marketing Strategy Lead',
    bio: 'Helena is a performance marketing wizard. She has managed over $500k in digital ad spend and specializes in hyper-segmented diaspora campaigns.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com/'
  },
  {
    id: 'team-3',
    name: 'Yared Shimelis',
    role: 'Lead Web Developer',
    bio: 'Yared is an expert full-stack developer who constructs responsive, lightning-fast UI experiences. He is obsessed with page-load performance and SEO-friendly architectures.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com/'
  },
  {
    id: 'team-4',
    name: 'Selamawit Girma',
    role: 'Creative Art Director',
    bio: 'Selamawit coordinates our team of visual artists. Her design perspective merges traditional Ethiopian culture with slick minimalist international design guidelines.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com/'
  },
  {
    id: 'team-5',
    name: 'Ephraim Kebede',
    role: 'Head of Content & Video Commercials',
    bio: 'Ephraim produces captivating cinematic stories, commercial photography, and highly engaging vertical reels that turn scroll-by viewers into active buyers.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com/'
  },
  {
    id: 'team-6',
    name: 'Nardos Bekele',
    role: 'SEO & Analytics Manager',
    bio: 'Nardos studies algorithm shifts. She makes sure our websites scale organic search ladders and provides highly actionable web marketing telemetry boards.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com/'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Siltawi helped us increase our online inquiries by over 200% within six months. Their data-driven approach and targeted campaigns are unmatched in the East African market.',
    author: 'Daniel Hailu',
    role: 'Managing Director',
    company: 'Abyssinia Premium Logistics',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'test-2',
    quote: 'Their modern website design and social media strategy transformed our brand presence completely. The diaspora response has been outstanding. We highly praise the engineering precision!',
    author: 'Martha Belay',
    role: 'Co-Founder & CEO',
    company: 'Bole Heights Realty & Living',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'test-3',
    quote: 'A collaborative, highly creative, and technical team that respects deadlines. They rebuilt our entire company profile site and established an incredible organic SEO funnel.',
    author: 'Samuel Tsegaye',
    role: 'Head of Brand Operations',
    company: 'Ethio-Heritage Coffee Exporters',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80'
  }
];
