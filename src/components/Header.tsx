import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Team', id: 'team' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for sticky header height
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
    <>
      <header
        className={`fixed top-4 left-4 right-4 z-40 transition-all duration-300 max-w-7xl mx-auto ${
          isScrolled
            ? 'py-3 px-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-md rounded-2xl'
            : 'py-4 px-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-sm rounded-2xl'
        }`}
      >
        <div className="mx-auto flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center group cursor-pointer focus:outline-none"
            id="nav-logo"
          >
            <img 
              src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg" 
              alt="Siltawi Logo" 
              className="h-10 md:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`relative text-sm font-medium tracking-wide transition-colors hover:text-primary dark:hover:text-accent focus:outline-none cursor-pointer py-1 ${
                      activeSection === link.id
                        ? 'text-primary dark:text-accent font-semibold'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-primary dark:bg-accent rounded-full"
                        style={{ originY: 'bottom' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Vertical Divider */}
            <div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-800" />

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-accent transition-all hover:scale-105 focus:outline-none cursor-pointer"
              aria-label="Toggle theme"
              id="theme-toggler"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Contact CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/95 text-white text-sm font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all cursor-pointer focus:outline-none"
              id="header-cta"
            >
              Consult Now
            </button>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Dark Mode Theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer"
              aria-label="Toggle theme"
              id="theme-toggler-mobile"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile Open Drawer Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer"
              aria-label="Toggle mobile menu"
              id="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-[84px] bg-white/95 dark:bg-slate-950/95 backdrop-blur-md z-30 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl lg:hidden max-h-[calc(100vh-110px)] overflow-y-auto"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full text-left py-2 px-3 rounded-lg text-base font-semibold tracking-wide transition-colors ${
                        activeSection === link.id
                          ? 'bg-slate-50 dark:bg-slate-900 text-primary dark:text-accent'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                      }`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="h-[1px] bg-slate-100 dark:bg-slate-900 my-1" />

              {/* Call to Action CTA */}
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center py-3 rounded-xl bg-primary text-white font-semibold shadow-md shadow-primary/20 hover:bg-primary/95 transition-all text-sm cursor-pointer"
                id="mobile-drawer-cta"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
