export interface Stat {
  id: string;
  value: string;
  number: number;
  suffix: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: string; // Name of Lucide Icon to render
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Websites' | 'Branding' | 'Social Media' | 'Video';
  client: string;
  industry: string;
  image: string;
  description: string;
  results: string[];
  technologies?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
