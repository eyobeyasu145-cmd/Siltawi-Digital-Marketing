import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonialsData } from '../data';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const total = testimonialsData.length;

  const nextSlider = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlider = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const jumpToSlider = (idx: number) => {
    setCurrentIndex(idx);
  };

  useEffect(() => {
    // Autoplay interval: advance every 5.5 seconds unless paused on hover
    if (!isHovering) {
      autoplayTimerRef.current = setInterval(() => {
        nextSlider();
      }, 5500);
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isHovering]);

  const active = testimonialsData[currentIndex];

  return (
    <div 
      className="max-w-4xl mx-auto px-4 select-none relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      id="testimonial-carousel"
    >
      {/* Decorative quote marks */}
      <div className="absolute -top-12 -left-2 text-primary/10 dark:text-accent/10 pointer-events-none scale-150">
        <Quote size={80} />
      </div>

      <div className="relative rounded-3xl bg-blue-600 dark:bg-blue-700 border border-transparent p-8 sm:p-12 md:p-16 shadow-xl flex flex-col items-center text-white">
        {/* Render Star Rating row */}
        <div className="flex items-center gap-1 mb-6 text-yellow-300">
          {[...Array(active.rating)].map((_, i) => (
            <Star key={`${active.id}-star-${i}`} size={18} fill="currentColor" className="animate-pulse" />
          ))}
        </div>

        {/* Animated Slide content */}
        <div className="w-full relative overflow-hidden min-h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="text-center"
            >
              <blockquote className="text-white text-base sm:text-lg md:text-xl font-display font-medium leading-relaxed italic px-4">
                "{active.quote}"
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Author metadata panel */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 shadow-sm bg-blue-500">
            <img 
              src={active.image} 
              alt={active.author} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <cite className="not-italic font-display font-extrabold text-white block tracking-wide">
              {active.author}
            </cite>
            <span className="text-xs text-blue-100 dark:text-blue-200 font-medium font-sans mt-0.5 block">
              {active.role} at <span className="text-yellow-300 font-bold">{active.company}</span>
            </span>
          </div>
        </div>

        {/* Slide Counter Dots and arrows row */}
        <div className="mt-10 flex items-center justify-between w-full pt-6 border-t border-white/15">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlider}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors cursor-pointer focus:outline-none"
            aria-label="Previous Review"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Core index indicator dots */}
          <div className="flex items-center gap-1.5">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => jumpToSlider(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer focus:outline-none ${
                  currentIndex === idx
                    ? 'w-6 bg-white'
                    : 'w-2.5 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlider}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors cursor-pointer focus:outline-none"
            aria-label="Next Review"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
