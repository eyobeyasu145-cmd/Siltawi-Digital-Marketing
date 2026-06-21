import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb, 
  Zap, 
  Compass, 
  Crown, 
  Check, 
  Target, 
  Eye, 
  Calendar,
  Layers,
  Activity,
  MousePointer,
  ArrowUpRight,
  GraduationCap
} from 'lucide-react';

// Custom subcomponents
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { FloatingElements } from './components/FloatingElements';
import { StatsSection } from './components/StatsSection';
import { ServiceCard } from './components/ServiceCard';
import { ServiceModal } from './components/ServiceModal';
import { PortfolioGrid } from './components/PortfolioGrid';
import { TeamGrid } from './components/TeamGrid';
import { TestimonialsSlider } from './components/TestimonialsSlider';
import { ContactForm } from './components/ContactForm';

// Data loaders
import { servicesData, valuesData, timelineData } from './data';
import { Service } from './types';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    // Check initial local cache
    const saved = localStorage.getItem('siltawi-theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [prefilledSubject, setPrefilledSubject] = useState('');

  // Apply dark mode theme class to HTML node
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('siltawi-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('siltawi-theme', 'light');
    }
  }, [darkMode]);

  // Section Observer for active sticky header highlighting
  useEffect(() => {
    if (loading) return;

    const sections = ['home', 'about', 'services', 'portfolio', 'team', 'testimonials', 'contact'];
    
    // We look in the viewport with standard thresholds
    const options = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [loading]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Pre-fill helper from modal triggers
  const handleBookConsultation = (serviceTitle: string) => {
    setSelectedService(null); // Close active modal
    setPrefilledSubject(`Consultation: ${serviceTitle}`);
    
    // Smooth scroll down to contact section
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleHeroCTA = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-dark-bg text-slate-800 dark:text-slate-200 transition-colors duration-300 font-sans relative">
      <AnimatePresence>
        {loading ? (
          <LoadingScreen onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col min-h-screen"
          >
            {/* Header Sticky Navigation bar */}
            <Header 
              darkMode={darkMode} 
              toggleDarkMode={toggleDarkMode} 
              activeSection={activeSection} 
            />

            {/* Float quick shortcuts triggers */}
            <FloatingElements />

            {/* Page content wrapper */}
            <main className="flex-grow pt-20">
              
              {/* ==============================================
                  1. HERO SECTION (id="home")
                  ============================================== */}
              <section 
                id="home" 
                className="relative py-12 md:py-24 xl:py-32 overflow-hidden px-6 text-center lg:text-left select-none bg-grid-pattern dark:bg-grid-pattern-dark/50"
              >
                {/* Visual glass backgrounds */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-[120px] pointer-events-none" />
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/10 rounded-full filter blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
                  
                  {/* Left Column Text details */}
                  <div className="lg:col-span-6 flex flex-col items-center lg:items-start">
                    
                    {/* Regional Creative pill tag */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary/10 dark:bg-accent/15 border border-primary/20 dark:border-accent/20 mb-6"
                    >
                      <Sparkles className="w-4 h-4 text-primary dark:text-accent animate-pulse" />
                      <span className="text-xs font-bold text-primary dark:text-accent font-display tracking-wide uppercase">
                        Addis Ababa's Premier Agency
                      </span>
                    </motion.div>

                    {/* Massive Display Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="font-display font-black text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-slate-900 dark:text-white leading-[1.1] tracking-tight text-center lg:text-left"
                    >
                      Grow Your Business with{' '}
                      <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent capitalize">
                        Creative Digital
                      </span>{' '}
                      Solutions
                    </motion.h1>

                    {/* Description subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.18 }}
                      className="text-slate-500 dark:text-slate-400 text-base md:text-lg mt-6 leading-relaxed max-w-xl text-center lg:text-left"
                    >
                      Helping startups and businesses build strong online brands through marketing, design, and technology.
                    </motion.p>

                    {/* Double CTAs buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.25 }}
                      className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
                    >
                      <button
                        onClick={() => handleHeroCTA('contact')}
                        className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary/95 text-white font-bold text-sm tracking-wide shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none group"
                        id="hero-cta-primary"
                      >
                        Get Started
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      
                      <button
                        onClick={() => handleHeroCTA('portfolio')}
                        className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-accent/50 text-slate-800 dark:text-slate-200 font-bold text-sm bg-white/50 dark:bg-slate-950/40 hover:bg-white dark:hover:bg-slate-950 transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none"
                        id="hero-cta-secondary"
                      >
                        View Portfolio
                      </button>
                    </motion.div>
                  </div>

                  {/* Right Column Custom Mock Dashboard Illustration */}
                  <div className="lg:col-span-6 w-full flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
                      className="relative w-full max-w-[500px] aspect-[1.15] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-3xl shadow-xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden"
                      id="hero-dashboard-mock"
                    >
                      {/* Browser Window header dots */}
                      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-900">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                          analytics.siltawi.com
                        </span>
                        <div className="w-5" />
                      </div>

                      {/* Dashboard Grid body */}
                      <div className="flex-1 grid grid-cols-12 gap-3 sm:gap-4 py-4 overflow-hidden text-left">
                        
                        {/* Sidebar Mock column */}
                        <div className="col-span-3 border-r border-slate-100 dark:border-slate-900 pr-2 hidden sm:flex flex-col gap-3 font-mono text-[9px] text-slate-400 dark:text-slate-500 font-semibold select-none">
                          <div className="py-1 px-1.5 rounded bg-primary/10 text-primary dark:text-accent font-bold flex items-center gap-1.5">
                            <Layers size={10} />
                            Dashboard
                          </div>
                          <div className="px-1.5 py-0.5 hover:text-slate-700 dark:hover:text-slate-350 transition-colors flex items-center gap-1.5">
                            <Activity size={10} />
                            Campaigns
                          </div>
                          <div className="px-1.5 py-0.5 hover:text-slate-700 dark:hover:text-slate-350 transition-colors flex items-center gap-1.5">
                            <Calendar size={10} />
                            Schedules
                          </div>
                        </div>

                        {/* Core Content Column */}
                        <div className="col-span-12 sm:col-span-9 flex flex-col justify-between gap-3 h-full overflow-hidden">
                          {/* Inner Status widgets */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850">
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                                Ad Conversions
                              </span>
                              <span className="text-lg font-black text-slate-900 dark:text-white mt-1 block">
                                +248%
                              </span>
                              <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                                <div className="h-full bg-primary w-3/4 rounded-full" />
                              </div>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850 relative">
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                                Live Session CTR
                              </span>
                              <span className="text-lg font-black text-slate-900 dark:text-white mt-1 block">
                                +31.4%
                              </span>
                              <span className="absolute top-3 right-3 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                            </div>
                          </div>

                          {/* Beautiful custom vector chart representing conversions scaling */}
                          <div className="flex-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850 flex flex-col justify-between overflow-hidden relative">
                            <div className="flex items-center justify-between pb-1 select-none">
                              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">
                                Organic SEO Growth Trend
                              </span>
                              <span className="text-[8px] font-mono font-bold bg-[#06B6D4]/10 text-accent px-1.5 py-0.5 rounded">
                                Bole Target Grid
                              </span>
                            </div>

                            {/* Chart spline SVG */}
                            <div className="w-full h-24 relative mt-1">
                              <svg viewBox="0 0 100 35" className="w-full h-full text-primary dark:text-accent overflow-visible">
                                <defs>
                                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
                                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                                  </linearGradient>
                                </defs>
                                {/* Grid indicator guidelines */}
                                <line x1="0" y1="5" x2="100" y2="5" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5" />
                                <line x1="0" y1="18" x2="100" y2="18" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5" />
                                <line x1="0" y1="31" x2="100" y2="31" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5" />
                                
                                {/* Spline Shadow fill */}
                                <path 
                                  d="M0 31 Q 20 28, 35 18 T 70 8 T 100 3 L 100 35 L 0 35 Z" 
                                  fill="url(#chartGlow)"
                                />
                                {/* Spline Line stroke */}
                                <motion.path
                                  d="M0 31 Q 20 28, 35 18 T 70 8 T 100 3"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ duration: 1.8, delay: 0.8, ease: 'easeOut' }}
                                />
                                
                                {/* Pulse locator dot at the tip of graph */}
                                <circle cx="100" cy="3" r="1.5" className="fill-accent dark:fill-primary" />
                              </svg>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Small Bottom ticker */}
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-900 text-slate-400 text-[9px] font-medium flex items-center justify-between select-none">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                          <span>Active campaigns syncing (Addis Ababa time)</span>
                        </div>
                        <span className="font-mono">SLA Coverage: 99.8%</span>
                      </div>

                    </motion.div>
                  </div>

                </div>
              </section>

              {/* ==============================================
                  2. ANIMATED STATISTICS SECTION
                  ============================================== */}
              <StatsSection />

              {/* ==============================================
                  3. SERVICES SECTION (id="services")
                  ============================================== */}
              <section 
                id="services" 
                className="py-16 md:py-24 max-w-7xl mx-auto px-6 select-none"
              >
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                  <span className="text-xs font-black tracking-[0.2em] uppercase text-primary dark:text-accent font-mono block">
                    Core Services
                  </span>
                  
                  <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-3 leading-tight tracking-tight">
                    Custom Solutions Tailored For Visual Reach
                  </h2>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-4 leading-relaxed">
                    We offer a premium digital agency package to streamline your brand guidelines, develop rapid responsive software systems, and boost sales conversions.
                  </p>
                </div>

                {/* Service Cards Grid list */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {servicesData.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      index={index}
                      onLearnMore={(srv) => setSelectedService(srv)}
                    />
                  ))}
                </div>

                {/* Subservice modal detail controller */}
                <ServiceModal
                  isOpen={!!selectedService}
                  service={selectedService}
                  onClose={() => setSelectedService(null)}
                  onBookConsulation={handleBookConsultation}
                />

                {/* ==============================================
                    4. WHY CHOOSE US SUB-SECTION
                    ============================================== */}
                <div className="mt-20 md:mt-28 p-8 md:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden text-left" id="why-choose-us-grid">
                  <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
                  {/* Glowing background circles */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full filter blur-[100px] pointer-events-none" />
                  
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left text column */}
                    <div className="lg:col-span-4 lg:pr-6">
                      <span className="text-xs font-black tracking-widest text-[#06B6D4] uppercase font-mono block">
                        Our Edge
                      </span>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-2 leading-tight tracking-tight">
                        Why Regional Companies Partner With Us
                      </h3>
                      <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                        Through data-driven structures and creative innovation, we provide high-performance solutions that yield measurable financial success.
                      </p>
                    </div>

                    {/* Right features checklist block */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans">
                      
                      {/* Item 1 */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] flex items-center justify-center shrink-0">
                          <Lightbulb size={20} />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-base text-slate-100">Experienced Team</h4>
                          <p className="text-slate-400 text-xs mt-1 leading-relaxed">Top industry coordinators managing millions in regional media spend metrics.</p>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                          <Zap size={20} />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-base text-slate-100">Fast Delivery</h4>
                          <p className="text-slate-400 text-xs mt-1 leading-relaxed">Sprints-driven engineering ensuring your brand goes live on strict schedules.</p>
                        </div>
                      </div>

                      {/* Item 3 */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Target size={20} />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-base text-slate-100">Data-Driven Strategy</h4>
                          <p className="text-slate-400 text-xs mt-1 leading-relaxed">No generic templates. Every campaign is constructed using localized analytic tests.</p>
                        </div>
                      </div>

                      {/* Item 4 */}
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                          <Crown size={20} />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-base text-slate-100">Continuous Support</h4>
                          <p className="text-slate-400 text-xs mt-1 leading-relaxed">Round-the-clock systems monitoring, maintenance operations, and conversion reports.</p>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </section>

              {/* ==============================================
                  5. ABOUT US SECTION (id="about")
                  ============================================== */}
              <section 
                id="about" 
                className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-950/40 relative select-none"
              >
                {/* Horizontal segment bounds */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-200/40 dark:border-slate-900" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-200/40 dark:border-slate-900" />

                <div className="max-w-7xl mx-auto px-6">
                  
                  {/* Part 1: Company Profile Narrative */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    {/* Portrait collage */}
                    <div className="lg:col-span-5 relative max-w-[420px] mx-auto lg:mx-0">
                      <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-slate-250/50 dark:border-slate-800 shadow-md">
                        <img
                          src="https://images.unsplash.com/photo-1542744094-2ab25be78b90?auto=format&fit=crop&w=700&q=80"
                          alt="Siltawi Agency Team Collaborating"
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      
                      {/* Overlay small badge tag */}
                      <div className="absolute -bottom-6 -right-6 p-5 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-left shadow-lg max-w-[200px]">
                        <span className="text-2xl font-black text-primary dark:text-accent font-display block">
                          Est. 2023
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold tracking-wide mt-1 block">
                          Established in Bole Road, Addis Ababa
                        </span>
                      </div>
                    </div>

                    {/* Story writeup right side */}
                    <div className="lg:col-span-7 text-left">
                      <span className="text-xs font-black tracking-[0.2em] uppercase text-primary dark:text-accent font-mono block">
                        Our Story
                      </span>
                      
                      <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-3 leading-tight tracking-tight">
                        Pioneering Digital Innovation in Addis Ababa
                      </h2>

                      <div className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-6 leading-relaxed space-y-4 font-sans">
                        <p>
                          Founded in 2023, <strong>Siltawi Digital Marketing</strong> emerged from a shared ambition: to transform the East African digital ecosystem. Our founders recognized that modern businesses needed more than mere advertisements—they required unified creative platforms and clean, fast software engines that command visual presence and yield tangible growth.
                        </p>
                        <p>
                          The word <strong>"Siltawi"</strong> translates to a structured, highly refined approach. By bridging the gap between artistic marketing storytelling and technical programming execution, we have helped major local and diaspora-led enterprises scale their customer acquisition pipelines.
                        </p>
                      </div>

                      {/* Vision & Mission grid split */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                        <div className="p-5 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                          <div className="w-10 h-10 rounded-xl bg-[#06B6D4]/15 text-[#06B6D4] flex items-center justify-center mb-4">
                            <Target size={20} />
                          </div>
                          <h4 className="font-display font-extrabold text-base text-slate-900 dark:text-white">Our Mission</h4>
                          <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 leading-relaxed">
                            To empower companies with custom, high-converting marketing campaigns and software frameworks that boost visual leverage and retention.
                          </p>
                        </div>

                        <div className="p-5 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                          <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-4">
                            <Eye size={20} />
                          </div>
                          <h4 className="font-display font-extrabold text-base text-slate-900 dark:text-white">Our Vision</h4>
                          <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 leading-relaxed">
                            To establish Siltawi as Africa's benchmark creative agency—where state-of-the-art marketing technology converges with pristine local branding.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider line spacing */}
                  <div className="my-16 md:my-24 h-[1px] bg-slate-200/50 dark:bg-slate-900" />

                  {/* Part 2: Core Values Section (Cards with Icons) */}
                  <div className="mb-20 md:mb-28 text-center">
                    <span className="text-xs font-black tracking-widest text-primary dark:text-accent font-mono block">
                      Core Values
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white mt-2 mb-10 tracking-tight">
                      The Foundations Of Our Philosophy
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                      {valuesData.map((val) => (
                        <div 
                          key={val.id} 
                          className="p-6 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition duration-300"
                        >
                          <div className="w-9 h-9 rounded-lg bg-primary/10 dark:bg-accent/15 text-primary dark:text-accent flex items-center justify-center mb-4 font-bold">
                            {val.id === 'val-1' && <Lightbulb size={18} />}
                            {val.id === 'val-2' && <Sparkles size={18} />}
                            {val.id === 'val-3' && <CheckCircle2 size={18} />}
                            {val.id === 'val-4' && <Compass size={18} />}
                            {val.id === 'val-5' && <Target size={18} />}
                            {val.id === 'val-6' && <GraduationCap size={18} />}
                          </div>
                          
                          <h4 className="font-display font-extrabold text-base text-slate-900 dark:text-white mb-2">
                            {val.title}
                          </h4>
                          
                          <p className="text-slate-400 text-xs leading-relaxed">
                            {val.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Part 3: Company Timeline */}
                  <div className="max-w-4xl mx-auto text-center">
                    <span className="text-xs font-black tracking-widest text-primary dark:text-accent font-mono block">
                      Chronology
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white mt-2 mb-12 tracking-tight">
                      A Growth Journey Built on Success
                    </h3>

                    <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 md:pl-10 text-left space-y-10 md:space-y-12">
                      {timelineData.map((time, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.5 }}
                          className="relative"
                        >
                          {/* Round floating milestone node dot */}
                          <div className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-[#F8FAFC] dark:ring-dark-bg border-2 border-white" />
                          
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-5 mb-2 select-none">
                            <span className="text-2xl font-black font-display text-[#06B6D4] font-mono leading-none">
                              {time.year}
                            </span>
                            <h4 className="font-display font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                              {time.title}
                            </h4>
                          </div>

                          <p className="text-slate-500 dark:text-slate-450 text-xs md:text-sm leading-relaxed max-w-2xl font-sans">
                            {time.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>
              </section>

              {/* ==============================================
                  6. PORTFOLIO PAGE SECTION (id="portfolio")
                  ============================================== */}
              <section 
                id="portfolio" 
                className="py-16 md:py-24 max-w-7xl mx-auto px-6 select-none"
              >
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                  <span className="text-xs font-black tracking-[0.2em] uppercase text-primary dark:text-accent font-mono block">
                    Our Portfolio
                  </span>
                  
                  <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-3 leading-tight tracking-tight">
                    Case Studies of Strategic Impact
                  </h2>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-4 leading-relaxed">
                    Explore real-world client deployments across East Africa. From corporate branding structures to ultra-fast responsive React portals and viral Telegram systems.
                  </p>
                </div>

                {/* Portfolio Filters grid controller */}
                <PortfolioGrid />
              </section>

              {/* ==============================================
                  7. TEAM PAGE SECTION (id="team")
                  ============================================== */}
              <section 
                id="team" 
                className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-950/40 relative select-none"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-200/40 dark:border-slate-900" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-200/40 dark:border-slate-900" />

                <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <span className="text-xs font-black tracking-[0.15em] uppercase text-primary dark:text-accent font-mono block">
                      The Crew
                    </span>
                    
                    <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-3 leading-tight tracking-tight">
                      Meet the Minds Behind Siltawi Digital
                    </h2>
                    
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-4 leading-relaxed font-sans">
                      Our dynamic group of programmers, copywriters, performance marketers, and creative art directors has spent years driving business excellence.
                    </p>
                  </div>

                  {/* Team Cards list component */}
                  <TeamGrid />
                </div>
              </section>

              {/* ==============================================
                  8. TESTIMONIALS SECTION (id="testimonials")
                  ============================================== */}
              <section 
                id="testimonials" 
                className="py-16 md:py-24 max-w-7xl mx-auto px-6 overflow-hidden select-none"
              >
                <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
                  <span className="text-xs font-black tracking-[0.2em] uppercase text-[#06B6D4] font-mono block">
                    Endorsements
                  </span>
                  
                  <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-3 leading-tight tracking-tight">
                    Trusted by Executive Corporate Captains
                  </h2>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-4 leading-relaxed">
                    Read the actual ratings and feedback shared by business leaders and founders scaling regional markets with our agency frameworks.
                  </p>
                </div>

                {/* Autoplay Slider review component */}
                <TestimonialsSlider />
              </section>

              {/* ==============================================
                  9. CONTACT US SECTION (id="contact")
                  ============================================== */}
              <section 
                id="contact" 
                className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-950/40 relative"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-200/40 dark:border-slate-900" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-200/40 dark:border-slate-900" />

                <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 select-none">
                    <span className="text-xs font-black tracking-[0.2em] uppercase text-primary dark:text-accent font-mono block">
                      Consultation Booking
                    </span>
                    
                    <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mt-3 leading-tight tracking-tight">
                      Let's Scale Your Business Metrics
                    </h2>
                    
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-4 leading-relaxed font-sans">
                      Ready to launch your digital growth sequence? Submit your details to claim a comprehensive SEO roadmap and brand diagnostic consultation.
                    </p>
                  </div>

                  {/* Main Form and Location map grid */}
                  <ContactForm 
                    prefilledSubject={prefilledSubject} 
                    onClearSubject={() => setPrefilledSubject('')} 
                  />
                </div>
              </section>

            </main>

            {/* Footer Sitemap and copyrights */}
            <Footer />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
