import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend, FiDownload, 
  FiUser, FiEdit3, FiMessageCircle, FiLock, FiArrowUpRight 
} from 'react-icons/fi';
import { portfolioData } from '../data/PortfolioData';

const contactIconMap = {
  email: FiMail,
  linkedin: FiLinkedin,
  github: FiGithub,
  location: FiMapPin,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.55, ease: [0.25, 1, 0.25, 1] } 
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Check for empty fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('empty');
      return;
    }

    // 2. Strict Email Regex Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('invalid_email');
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          access_key: '59919ce2-283e-4613-b604-56001c4050f7',
        }),
      });

      const result = await res.json();

      if (res.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(null), 4000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const { contact } = portfolioData;

  return (
    <section id="contact" className="relative min-h-screen text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        
        {/* Main 2-Column Layout — Equal 50/50 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          
          {/* ================= LEFT COLUMN: INFO ================= */}
          <div className="flex flex-col h-full justify-center space-y-8">
            
            {/* Header Section */}
            <div>
              <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20 inline-block mb-4">
                {contact.overline}
              </span>
              <h2 className="text-5xl sm:text-6xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.1]">
                {contact.title} <br />
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                  {contact.highlightTitle}
                </span> <br />
                {contact.endTitle}
              </h2>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                {contact.description}
              </p>

              {/* Status Badge */}
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {contact.availability}
              </div>
            </div>

            {/* Contact Cards — 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contact.contactLinks.map((item) => {
                const IconComponent = contactIconMap[item.id] || FiMail;
                const isExternal = item.url.startsWith('http');
                return (
                  <a 
                    key={item.id} 
                    href={item.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-purple-500/50 rounded-xl px-5 py-4 transition-all duration-300 flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors flex-shrink-0">
                      <IconComponent className="text-base" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[9px] font-medium text-gray-400 uppercase tracking-wider block">{item.label}</span>
                      <p className="text-xs font-semibold text-gray-200 truncate">{item.value}</p>
                    </div>
                    <FiArrowUpRight className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs flex-shrink-0" />
                  </a>
                );
              })}
            </div>

            {/* Resume Download Card — Full Width */}
            <a 
              href={contact.resume.url} 
              download
              className="group bg-gradient-to-r from-purple-900/30 to-indigo-900/30 hover:from-purple-900/50 hover:to-indigo-900/50 border border-purple-500/30 hover:border-purple-500 rounded-xl px-5 py-4 transition-all duration-300 flex items-center gap-3 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
            >
              <div className="p-2 rounded-lg bg-purple-500 text-white shadow-md flex-shrink-0">
                <FiDownload className="text-base" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-white">{contact.resume.label}</h4>
                <p className="text-[10px] text-gray-400">{contact.resume.description}</p>
              </div>
              <FiArrowUpRight className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs flex-shrink-0" />
            </a>
          </div>

          {/* ================= RIGHT COLUMN: FORM CARD ================= */}
          <div className="flex flex-col h-full">

            {/* Main Glass Form Container */}
            <div className="relative bg-[#13131f]/80 border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] pb-8 h-full flex flex-col">
              
              {/* Centered Send Icon */}
              <div className="w-14 h-14 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.6)] border border-white/20 mx-auto mb-4">
                <FiSend className="text-white text-xl -rotate-12 ml-0.5" />
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white tracking-wide">Send a Message</h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">{contact.responseTime}</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative group">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none group-focus-within:text-purple-400 transition-colors duration-300" />
                    <input 
                      type="text" name="name" required autoComplete="name"
                      value={formData.name} onChange={handleChange}
                      placeholder="Your Name" 
                      className="w-full bg-white/[0.04] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.06] focus:border-purple-500 focus:bg-white/[0.06] rounded-xl px-4 pl-11 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 min-h-[48px]"
                    />
                  </div>
                  <div className="relative group">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none group-focus-within:text-purple-400 transition-colors duration-300" />
                    <input 
                      type="email" name="email" required autoComplete="email"
                      value={formData.email} onChange={handleChange}
                      placeholder="Email Address" 
                      className="w-full bg-white/[0.04] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.06] focus:border-purple-500 focus:bg-white/[0.06] rounded-xl px-4 pl-11 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 min-h-[48px]"
                    />
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div className="relative group">
                  <FiEdit3 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none group-focus-within:text-purple-400 transition-colors duration-300" />
                  <input 
                    type="text" name="subject" autoComplete="off"
                    value={formData.subject} onChange={handleChange}
                    placeholder="What's this about?" 
                    className="w-full bg-white/[0.04] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.06] focus:border-purple-500 focus:bg-white/[0.06] rounded-xl px-4 pl-11 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 min-h-[48px]"
                  />
                </div>

                {/* Row 3: Message */}
                <div className="relative group flex-1">
                  <FiMessageCircle className="absolute left-4 top-4 text-gray-400 text-lg pointer-events-none group-focus-within:text-purple-400 transition-colors duration-300" />
                  <textarea 
                    name="message" rows="4" required autoComplete="off"
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell me about your project, idea, or just say hello..." 
                    className="w-full h-full bg-white/[0.04] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.06] focus:border-purple-500 focus:bg-white/[0.06] rounded-xl px-4 pl-11 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 resize-none min-h-[120px]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base rounded-xl shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer min-h-[48px] disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Animated Status Banners */}
                <AnimatePresence>
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      className="mt-4 overflow-hidden"
                    >
                      {status === 'success' ? (
                        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3">
                          <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-emerald-400 text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                        </div>
                      ) : (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                          <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span className="text-red-400 text-sm font-medium">
                            {status === 'empty' && 'Please fill out all fields.'}
                            {status === 'invalid_email' && 'Please enter a valid email address.'}
                            {status === 'error' && 'Something went wrong. Please try again.'}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Security Note */}
                <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-gray-400">
                  <FiLock className="text-purple-400" />
                  <span>{contact.securityNote}</span>
                </div>

              </form>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default Contact;
