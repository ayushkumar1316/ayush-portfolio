import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMoon, FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) {
        setActiveSection('');
        return;
      }

      const sections = ['featured', 'projects', 'about', 'contact'];
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const scrollTo = (id) => {
    if (!isHomePage) {
      navigate('/', { state: { scrollTo: id } });
      setIsOpen(false);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Work', id: 'featured' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill Container */}
        <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-xl">

          {/* Brand Logo */}
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">
              Ayush<span className="text-indigo-500">.</span>
            </span>
          </Link>

          {/* Central Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeSection === link.id ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* Right Side CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2.5 rounded-full text-slate-400 hover:text-white transition-colors duration-200 hover:bg-white/10 cursor-pointer">
              <FiMoon className="text-sm" />
            </button>
            
            <button 
              onClick={() => scrollTo('contact')}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full font-semibold text-xs tracking-wider transition-all duration-300 flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] cursor-pointer"
            >
              <span className="relative z-10">Let's Connect</span>
              <FiArrowUpRight className="text-[12px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle Combo */}
          <div className="flex md:hidden items-center gap-3">
            <button className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10">
              <FiMoon className="text-sm" />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:text-white cursor-pointer"
            >
              {isOpen ? <FiX className="text-sm" /> : <FiMenu className="text-sm" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 z-40 md:hidden bg-slate-950/95 border border-white/10 p-6 rounded-3xl backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollTo(link.id)}
                  key={link.label}
                  className={`text-left text-lg font-medium px-4 py-2.5 rounded-2xl cursor-pointer ${
                    activeSection === link.id 
                    ? 'bg-gradient-to-r from-violet-600/20 to-indigo-600/20 text-indigo-400 border border-indigo-500/20' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <button 
                onClick={() => scrollTo('contact')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm tracking-wide shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Let's Connect</span>
                <FiArrowUpRight className="text-xs" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
