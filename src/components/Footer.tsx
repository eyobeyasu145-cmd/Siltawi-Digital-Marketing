import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Send, Sparkles, Loader2, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!newsletterEmail.trim()) {
      setErrorMsg('Please enter an email.');
      return;
    } else if (!/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setErrorMsg('Invalid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setNewsletterEmail('');
    }, 1200);
  };

  const handleScrollClick = (id: string) => {
    const element = document.getElementById(id);
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
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 select-none px-6 py-12 md:py-20 relative overflow-hidden text-left font-sans">
      
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 md:pb-16 border-b border-slate-900">
          
          {/* Box 1: Brand description, social anchors */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <button
              onClick={() => handleScrollClick('home')}
              className="flex items-center gap-2 group cursor-pointer focus:outline-none w-fit text-left"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base leading-none text-white tracking-wide">
                  SILTAWI
                </span>
                <span className="text-[8px] tracking-widest text-[#06B6D4] uppercase font-semibold font-mono mt-0.5">
                  Digital Marketing
                </span>
              </div>
            </button>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering businesses through cutting-edge design, search-engine optimization, high-budget digital advertising campaigns, and ROI-driven content strategies in East Africa and beyond.
            </p>

            {/* Social Connection Icons Row */}
            <div className="flex items-center gap-3 mt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-primary border border-slate-900 hover:border-primary/50 text-slate-400 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Siltawi Facebook"
              >
                <Facebook size={16} />
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 border border-slate-900 hover:border-pink-500/50 text-slate-400 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Siltawi Instagram"
              >
                <Instagram size={16} />
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-700 border border-slate-900 hover:border-blue-600/50 text-slate-400 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Siltawi LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              {/* Telegram Channel (labeled with Send icon) */}
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-sky-500 border border-slate-900 hover:border-sky-400/50 text-slate-400 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Siltawi Telegram Channel"
              >
                <Send size={15} />
              </a>
            </div>
          </div>

          {/* Box 2: Quick Navigation Links Sitemap */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#06B6D4] font-mono">
              Sitemap Links
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              {['home', 'about', 'services', 'portfolio', 'team', 'testimonials', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => handleScrollClick(section)}
                    className="hover:text-primary dark:hover:text-accent font-medium capitalize text-left cursor-pointer transition-colors"
                  >
                    {section === 'home' ? 'Homepage' : section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 3: General Services Catalog */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-mono">
              Core Deliverables
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <button 
                  onClick={() => handleScrollClick('services')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Digital Marketing & PPC Ads
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollClick('services')} 
                  className="hover:text-white transition-colors text-left"
                >
                  SEO & Search Engine Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollClick('services')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Company Profile Websites
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollClick('services')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Commercial Content Production
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollClick('services')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Branding Systems & Guidelines
                </button>
              </li>
            </ul>
          </div>

          {/* Box 4: Interactive Newsletter capture */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-500 font-mono">
              Strategic Updates
            </h4>
            
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Subscribe to the Siltawi Digest for modern ad hacks, SEO studies, and creative metrics curated for corporate leaders.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2 mt-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    setErrorMsg('');
                  }}
                  placeholder="name@company.com"
                  className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-primary/60 transition-all font-mono"
                  disabled={isSubscribed || isSubmitting}
                />
                
                <button
                  type="submit"
                  disabled={isSubmitting || isSubscribed}
                  className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-primary hover:bg-primary/90 text-white disabled:opacity-40 transition-all hover:scale-105 cursor-pointer focus:outline-none"
                  aria-label="Subscribe"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : isSubscribed ? (
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Status or Error indicator log line */}
              {errorMsg && <span className="text-[10px] text-rose-500 font-semibold font-mono">{errorMsg}</span>}
              {isSubscribed && (
                <span className="text-[10px] text-emerald-400 font-semibold font-mono animate-pulse">
                  ✓ Successfully Subscribed! Welcome on board.
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom copyright list line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© {currentYear} Siltawi Digital Marketing Agency. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:info@siltawi.com" className="hover:text-white transition-colors">info@siltawi.com</a>
            <span className="text-slate-800">|</span>
            <span>Bole, Addis Ababa, Ethiopia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
