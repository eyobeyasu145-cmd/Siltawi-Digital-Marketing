import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export const FloatingElements: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // WhatsApp link setup
  const phoneNumber = '251900000000'; // Cleaned phone string for WhatsApp API
  const prependedMessage = encodeURIComponent(
    "Hello Siltawi Digital Marketing, I visited your website and would love to consult regarding your creative marketing services!"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prependedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 select-none">
      <AnimatePresence>
        {/* WhatsApp Dynamic Toggle */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 border border-emerald-400/20 hover:bg-emerald-600 transition-colors cursor-pointer group"
          id="whatsapp-floating-btn"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Pulsing glow ring around WhatsApp */}
          <span className="absolute -inset-1 rounded-full border border-emerald-500 animate-ping opacity-25 pointer-events-none" />
        </motion.a>

        {/* Back to Top Toggle */}
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/95 transition-colors cursor-pointer focus:outline-none"
            aria-label="Back to top"
            id="back-to-top"
          >
            <ArrowUp className="w-5 h-5 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
