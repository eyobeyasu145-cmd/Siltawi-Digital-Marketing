import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';

interface ContactFormProps {
  prefilledSubject: string;
  onClearSubject: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ prefilledSubject, onClearSubject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync prefilled subject state
  useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: prefilledSubject
      }));
    }
  }, [prefilledSubject]);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) tempErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message content is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear field error on writing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate standard safe network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      onClearSubject();
    }, 1800);
  };

  return (
    <div className="w-full relative z-10" id="contact-wrapper">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Direct info Cards & Map Embed */}
        <div className="lg:col-span-5 flex flex-col gap-6 select-none">
          
          {/* Card 1: Office Info Block */}
          <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all text-left">
            <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white mb-6">
              Connect With Us
            </h3>
            
            <div className="flex flex-col gap-5">
              {/* Location indicator */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">
                    HQ Location
                  </span>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 leading-snug">
                    Bole Road, Central Hub Tower, Floor 4<br />Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              {/* Email address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">
                    Direct Email
                  </span>
                  <a 
                    href="mailto:info@siltawi.com" 
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-accent mt-0.5 block transition-colors"
                  >
                    info@siltawi.com
                  </a>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">
                    Call Hotline
                  </span>
                  <a 
                    href="tel:+251900000000" 
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-accent mt-0.5 block transition-colors"
                  >
                    +251 900 000 000
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Addis Map Frame */}
          <div className="flex-1 min-h-[280px] rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm relative">
            <iframe
              title="Siltawi Digital Marketing Addis Ababa Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.3361427506277!2d38.7836306!3d9.0061214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85aaf5ec4a0d%3A0x6bbaeee040da4af7!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1718873041249!5m2!1sen!2set"
              className="absolute inset-0 w-full h-full border-0 grayscale dark:invert-[0.9] dark:hue-rotate-180 opacity-90"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right Column: Lead Capture interactive contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden text-left">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form-block"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                    Fill out the consultation sheet below. Our accounts director will review your targets and follow up via email within 2 business hours.
                  </p>

                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Samuel Tsegaye"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-accent/40 ${
                        errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200/60 dark:border-slate-800/60 focus:border-primary dark:focus:border-accent'
                      }`}
                    />
                    {errors.name && <span className="text-xs text-rose-500 mt-1">{errors.name}</span>}
                  </div>

                  {/* Contact multi-row panel */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email field */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. client@domain.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-accent/40 ${
                          errors.email ? 'border-rose-500' : 'border-slate-200/60 dark:border-slate-800/60'
                        }`}
                      />
                      {errors.email && <span className="text-xs text-rose-500 mt-1">{errors.email}</span>}
                    </div>

                    {/* Phone field */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +251 900 000 000"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-accent/40 ${
                          errors.phone ? 'border-rose-500' : 'border-slate-200/60 dark:border-slate-800/60'
                        }`}
                      />
                      {errors.phone && <span className="text-xs text-rose-500 mt-1">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Subject field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                      Inquiry Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Website Growth & Social Ads Campaign"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-accent/40 ${
                        errors.subject ? 'border-rose-500' : 'border-slate-200/60 dark:border-slate-800/60'
                      }`}
                    />
                    {errors.subject && <span className="text-xs text-rose-500 mt-1">{errors.subject}</span>}
                  </div>

                  {/* Message textarea field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                      Your Message / Goals
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Explain your goals, target market, budget expectations, and timeframe..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-accent/40 resize-none ${
                        errors.message ? 'border-rose-500' : 'border-slate-200/60 dark:border-slate-800/60'
                      }`}
                    />
                    {errors.message && <span className="text-xs text-rose-500 mt-1">{errors.message}</span>}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer py-3.5 px-6 rounded-xl bg-primary hover:bg-primary/95 text-white font-semibold flex items-center justify-center gap-2 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/35 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
                    id="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4.5 h-4.5 animate-spin" />
                        Analyzing Goals...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Consultation Message
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                // Success State View
                <motion.div
                  key="contact-success-block"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="py-12 px-4 flex flex-col items-center text-center max-w-md mx-auto select-none"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 flex items-center justify-center mb-6 shadow-inner relative">
                    <CheckCircle2 size={36} />
                    <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-emerald-400 animate-pulse" />
                  </div>
                  
                  <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white tracking-tight">
                    Inquiry Received!
                  </h3>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                    Thank you for reaching out to Siltawi Digital Marketing. A diagnostic consultant has been assigned to your workspace. We will contact you at your email or phone number shortly.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-900 w-full mt-6 text-xs text-slate-500 dark:text-slate-400 font-mono flex flex-col gap-2">
                    <div>
                      <span className="font-bold">Contact Representative:</span> info@siltawi.com
                    </div>
                    <div>
                      <span className="font-bold">Assigned SLA:</span> Under 2 Hours
                    </div>
                  </div>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-8 px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 font-semibold text-xs cursor-pointer focus:outline-none transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </div>
  );
};
