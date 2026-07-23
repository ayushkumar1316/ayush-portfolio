import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useLocation } from 'react-router-dom';
import { 
  FiExternalLink, FiGithub, FiFileText, FiLayers, FiFile, FiCpu, 
  FiLink, FiTrendingUp, FiTarget, FiCheckSquare, FiCalendar, 
  FiPieChart, FiMessageSquare, FiBell, FiArrowRight, FiArrowUpRight, FiArrowLeft, FiZap, 
  FiRefreshCw, FiSmartphone, FiShield, FiCheck
} from 'react-icons/fi';
import { TECH } from '../data/TechStack';
import { portfolioData } from '../data/PortfolioData';

const SiGemini = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#8B5CF6"/>
    <path d="M18 14L18.75 16.75L21.5 17.5L18.75 18.25L18 21L17.25 18.25L14.5 17.5L17.25 16.75L18 14Z" fill="#A78BFA"/>
  </svg>
);

const SiGroq = () => (
  <span style={{fontWeight:900,fontSize:'11px',background:'linear-gradient(90deg,#f97316,#ef4444)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',letterSpacing:'-0.5px'}}>groq</span>
);

const CaseStudy = () => {
  const { id } = useParams();
  const location = useLocation();

  const featuredWork = portfolioData.featuredWork;
  const allProjects = portfolioData.projects.items;

  let project = null;
  let isFeatured = false;

  if (id === 'featured' || id === String(featuredWork.title?.toLowerCase().replace(/\s+/g, '-'))) {
    project = featuredWork;
    isFeatured = true;
  } else {
    project = allProjects.find((p) => String(p.id) === id);
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#05030d] text-slate-200 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-slate-400 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-purple-500 hover:to-indigo-500 transition-all"
          >
            <FiArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const projectTitle = project.title || 'Project';
  const projectSubtitle = project.subtitle || project.category || '';
  const projectDescription = project.description || '';
  const projectLiveLink = project.liveLink || '#';
  const projectGithubLink = project.githubLink || '#';
  const projectThumbnail = project.thumbnail || '';
  const projectStats = project.stats || [];
  const caseStudy = project.caseStudy || {};
  const projectKeyFeatures = caseStudy.keyFeatures || [];
  const projectTechStackNames = caseStudy.techStack || project.techStack || [];
  const projectGallery = caseStudy.projectGallery || [];
  const projectOverview = caseStudy.overview || projectDescription;
  const projectProblem = caseStudy.problem || '';
  const projectSolution = caseStudy.solution || '';
  const projectTags = caseStudy.tags || [];
  const projectLearnings = caseStudy.learnings || [];

  const LOCAL_TECH = {
    'gemini ai': { name: 'Gemini AI', icon: SiGemini, color: '#8B5CF6' },
    'groq': { name: 'Groq', icon: SiGroq, color: '#F97316' },
  };

  const resolvedTechStack = projectTechStackNames.map((techName) => {
    const lowerName = techName.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (LOCAL_TECH[lowerName]) return { ...LOCAL_TECH[lowerName], displayName: techName };
    if (TECH[lowerName]) return { ...TECH[lowerName], displayName: techName };
    const match = Object.keys(TECH).find((key) => lowerName.includes(key) || key.includes(lowerName));
    if (match) return { ...TECH[match], displayName: techName };
    return { name: techName, icon: null, color: '#8B5CF6', displayName: techName };
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const glassCardClasses = "bg-white/[0.03] border border-white/[0.08] rounded-2xl backdrop-blur-xl hover:bg-white/[0.05] hover:border-purple-500/30 hover:shadow-[0_8px_40px_rgba(139,92,246,0.1)] transition-all duration-300";
  const btnPurpleClasses = "bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-[0_4px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2";
  const btnGlassClasses = "bg-white/5 border border-white/10 text-slate-200 px-6 py-3 rounded-xl font-medium backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2";

  return (
    <div className="min-h-screen bg-[#05030d] text-slate-200 font-sans selection:bg-purple-500/30 overflow-x-hidden pt-12 pb-24">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-[40%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(109,40,217,0.1)_0%,transparent_70%)] blur-[120px] pointer-events-none z-0" />

      {/* Minimal Nav Header */}
      <nav className="relative z-20 max-w-7xl mx-auto px-6 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/"
            className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors duration-200 group"
          >
            <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-200">
              <FiArrowLeft className="text-sm" />
            </div>
            <span className="text-sm font-medium hidden sm:block">Back to Projects</span>
          </Link>
          <Link 
            to="/"
            className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Ayush<span className="text-indigo-500">.</span>
          </Link>
        </div>
      </nav>
      
      {/* 1. HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-8 items-center">
          {/* Left Content */}
          <div className="xl:w-1/2 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-purple-400 text-sm font-medium tracking-wider uppercase"> Detailed Case Study</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-white">{projectTitle.split(' ')[0]}</span>
              {projectTitle.split(' ').length > 1 && (
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  {' ' + projectTitle.split(' ').slice(1).join(' ')}
                </span>
              )}
            </h1>
            
            {projectSubtitle && (
              <h2 className="text-xl md:text-2xl font-semibold text-white/90">{projectSubtitle}</h2>
            )}
            
            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg">
              {projectDescription}
            </p>
            
            <div className="flex flex-wrap gap-3 mt-2">
              {projectLiveLink && projectLiveLink !== '#' && (
                <a href={projectLiveLink} target="_blank" rel="noopener noreferrer" className={btnPurpleClasses}>
                  Live Demo <FiExternalLink className="text-lg" />
                </a>
              )}
              {projectGithubLink && projectGithubLink !== '#' && (
                <a href={projectGithubLink} target="_blank" rel="noopener noreferrer" className={btnGlassClasses}>
                  <FiGithub className="text-lg" /> GitHub
                </a>
              )}
              {project.caseStudyLink && (
                <a href={project.caseStudyLink} target="_blank" rel="noopener noreferrer" className={btnGlassClasses}>
                  <FiFileText className="text-lg" /> Case Study
                </a>
              )}
            </div>
            
            <div className="flex items-center gap-2 mt-4 bg-white/5 border border-white/5 w-fit px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
              <span className="text-xs font-medium text-slate-300">
                {project.status ? `Status: ${project.status}` : 'Live and actively in use'}
              </span>
            </div>
          </div>
          
          {/* Right Content: Mockup or Fallback */}
          <div className="xl:w-1/2 flex justify-center items-center relative w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-purple-500/15 blur-[100px]"></div>
            </div>
            
            {project.mockup ? (
              <img src={project.mockup} alt={`${projectTitle} mockup`} className="w-full max-w-[500px] h-auto object-cover rounded-2xl relative z-10" />
            ) : project.id === 'flowmind' ? (
              <div className="relative transform scale-[0.65] sm:scale-[0.8] md:scale-100 origin-center w-[520px]">
                {/* Laptop */}
                <div className="relative bg-[#1a1a2e] rounded-t-xl border-2 border-[#2d2d44] border-b-0 overflow-hidden w-[440px] h-[280px] ml-5 shadow-2xl">
                  <div className="p-4 h-full bg-[#0f0f1a]">
                    {/* Top bar */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500/80"></div>
                        <span className="text-white text-xs font-semibold">{projectTitle}</span>
                      </div>
                      <span className="text-slate-500 text-[10px]">May 12, 2024</span>
                    </div>
                    {/* Greeting */}
                    <div className="mb-4">
                      <div className="text-white text-sm font-semibold">Good morning, Ayush! 👋</div>
                      <div className="text-slate-500 text-[10px] mt-0.5">Let's plan your productive day.</div>
                    </div>
                    {/* Stats row */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      <div className="bg-white/5 rounded-lg p-2 border border-white/5"><div className="text-slate-500 text-[9px]">Tasks</div><div className="text-white text-sm font-bold mt-0.5">12</div><div className="text-slate-500 text-[8px]">Total</div></div>
                      <div className="bg-white/5 rounded-lg p-2 border border-white/5"><div className="text-slate-500 text-[9px]">Focus Time</div><div className="text-white text-sm font-bold mt-0.5">4.5h</div><div className="text-slate-500 text-[8px]">Today</div></div>
                      <div className="bg-white/5 rounded-lg p-2 border border-white/5"><div className="text-slate-500 text-[9px]">Completion</div><div className="text-white text-sm font-bold mt-0.5">78%</div><div className="text-slate-500 text-[8px]">Progress</div></div>
                      <div className="bg-white/5 rounded-lg p-2 border border-white/5"><div className="text-slate-500 text-[9px]">Streak</div><div className="text-white text-sm font-bold mt-0.5">14</div><div className="text-slate-500 text-[8px]">Days</div></div>
                    </div>
                    {/* Today's Plan */}
                    <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                      <div className="text-white text-[11px] font-semibold mb-2">Today's Plan</div>
                      <div className="space-y-1.5">
                        <div className="bg-white/5 rounded p-1.5"><div className="text-white text-[9px] font-medium">Complete AGI Project Documentation</div><div className="text-slate-500 text-[8px]">09:00 AM - 11:00 AM</div></div>
                        <div className="bg-white/5 rounded p-1.5"><div className="text-white text-[9px] font-medium">{projectTitle} Frontend Development</div><div className="text-slate-500 text-[8px]">11:30 AM - 03:00 PM</div></div>
                        <div className="bg-white/5 rounded p-1.5"><div className="text-white text-[9px] font-medium">DSA Practice</div><div className="text-slate-500 text-[8px]">04:00 PM - 05:30 PM</div></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="w-[440px] ml-5 bg-[#2d2d44] h-3 rounded-b-lg relative shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#1a1a2e] rounded-b-md"></div>
                </div>
                <div className="w-[480px] -ml-0 bg-[#2d2d44] h-1.5 rounded-b-md mx-auto"></div>
                
                {/* Phone Mockup */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute right-[-20px] top-6 w-[130px] h-[260px] bg-[#0f0f1a] rounded-3xl border-2 border-[#2d2d44] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                  <div className="w-20 h-5 bg-[#1a1a2e] rounded-b-xl mx-auto relative z-10"></div>
                  <div className="p-3 pt-2 h-full flex flex-col">
                    <div className="text-white text-[9px] font-semibold mb-0.5">Hello, Ayush! 👋</div>
                    <div className="text-slate-500 text-[7px] mb-3">Let's achieve more today</div>
                    <div className="text-slate-400 text-[7px] mb-1 text-center">Today's Progress</div>
                    
                    {/* Progress Circle */}
                    <div className="flex justify-center mb-4 relative">
                      <svg className="w-16 h-16 transform -rotate-90">
                        <circle cx="32" cy="32" r="26" stroke="rgba(255,255,255,0.05)" strokeWidth="4" fill="none"/>
                        <circle cx="32" cy="32" r="26" stroke="#8b5cf6" strokeWidth="4" fill="none" strokeDasharray="163.3" strokeDashoffset="35.9" strokeLinecap="round"/>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-white text-[12px] font-bold leading-none">78%</span>
                      </div>
                    </div>
                    
                    <div className="text-slate-400 text-[7px] mb-1.5">Upcoming Tasks</div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between bg-white/5 rounded px-1.5 py-1.5"><span className="text-white text-[7px]">API Docs</span><span className="text-slate-500 text-[6px]">9:00 AM</span></div>
                      <div className="flex items-center justify-between bg-white/5 rounded px-1.5 py-1.5"><span className="text-white text-[7px]">Dev Sync</span><span className="text-slate-500 text-[6px]">11:30 AM</span></div>
                    </div>
                    <div className="flex justify-center mt-auto pb-1">
                      <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/30">
                        <FiZap className="text-sm" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className="w-full max-w-[500px] aspect-video flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-6 text-center relative z-10">
                <div className="text-3xl mb-3">💻</div>
                <span className="text-gray-400 font-medium tracking-wide">Mockup Updating Soon...</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. STATS RIBBON */}
      {projectStats.length > 0 && (
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="relative z-10 max-w-7xl mx-auto px-6 pb-16"
        >
          <div className={`${glassCardClasses} p-6 md:p-8`}>
            <div className="flex flex-wrap justify-between items-center gap-6">
              {projectStats.map((stat, idx) => {
                const icons = [FiLayers, FiFile, FiCpu, FiLink, FiTrendingUp];
                const IconComponent = icons[idx % icons.length];
                return (
                  <div key={idx} className="flex items-center gap-4 min-w-[140px]">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl flex-shrink-0">
                      <IconComponent />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>
      )}

      {/* 3. KEY FEATURES GRID */}
      {projectKeyFeatures.length > 0 && (
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto px-6 pb-16"
        >
          <motion.div variants={itemFadeUp} className={`${glassCardClasses} p-6 md:p-8`}>
            <div className="flex items-center gap-2 mb-8">
              <FiTarget className="text-purple-400 text-xl" />
              <h2 className="text-xl md:text-2xl font-bold text-white">Key Features</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projectKeyFeatures.map((feat, idx) => {
                const icons = [FiTarget, FiCheckSquare, FiCalendar, FiPieChart, FiMessageSquare, FiBell];
                const IconComponent = icons[idx % icons.length];
                const title = typeof feat === 'string' ? feat : feat.title;
                const desc = typeof feat === 'string' ? '' : feat.description;
                return (
                  <motion.div key={idx} variants={itemFadeUp} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5 hover:bg-white/[0.04] transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/15 flex items-center justify-center text-purple-400 text-xl mb-4">
                      <IconComponent />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                    {desc && <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.section>
      )}

      {/* 4. TECH STACK */}
      {resolvedTechStack.length > 0 && (
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="relative z-10 max-w-7xl mx-auto px-6 pb-16"
        >
          <div className={`${glassCardClasses} p-6 md:p-8`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white">Tech Stack</h2>
                <span className="text-purple-400 text-xl">*</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-6">
              {resolvedTechStack.map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-default">
                    {tech.icon ? (
                      <tech.icon className="text-2xl" style={{ color: tech.color }} />
                    ) : (
                      <span className="text-sm font-bold" style={{ color: tech.color }}>{tech.displayName?.charAt(0)}</span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-slate-400">{tech.displayName || tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* 5. PROJECT GALLERY / SCREENSHOTS */}
      {projectGallery.length > 0 ? (
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto px-6 pb-16"
        >
          <motion.div variants={itemFadeUp} className={`${glassCardClasses} p-6 md:p-8`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white">Project Gallery</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projectGallery.map((imgSrc, idx) => (
                <motion.div key={idx} variants={itemFadeUp} className="bg-[#0f0f1a] border border-white/[0.08] rounded-xl overflow-hidden hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)] transition-all duration-300">
                  {/* Browser Window Header */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a2e] border-b border-white/[0.06]">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60"></div>
                    <div className="flex-1 flex justify-center">
                      <div className="w-32 h-1.5 rounded-full bg-white/5"></div>
                    </div>
                  </div>
                  {/* Screenshot Image */}
                  <div className="overflow-hidden aspect-video">
                    <img 
                      src={imgSrc} 
                      alt={`Screenshot ${idx + 1}`}
                      className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      ) : (
        <section className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
          <div className={`${glassCardClasses} p-10 flex flex-col items-center justify-center text-center`}>
            <div className="text-3xl mb-3">🖼️</div>
            <span className="text-gray-400 font-medium tracking-wide">Gallery Updating Soon...</span>
          </div>
        </section>
      )}

      {/* 6. BENTO CONTENT */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
        className="relative z-10 max-w-7xl mx-auto px-6 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* About */}
          <motion.div variants={itemFadeUp} className={`${glassCardClasses} p-6 md:p-8`}>
            <div className="flex items-center gap-2 mb-5">
              <h2 className="text-xl font-bold text-white">About the Project</h2>
              <span className="text-purple-400 text-xl">*</span>
            </div>
            <p className="text-slate-400 text-sm md:text-[15px] leading-relaxed mb-8">
              {projectOverview}
            </p>
            {projectTags.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {projectTags.map((tag, idx) => {
                  const pills = [
                    { icon: FiZap },
                    { icon: FiRefreshCw },
                    { icon: FiSmartphone },
                    { icon: FiShield },
                  ];
                  const PillIcon = pills[idx % pills.length].icon;
                  return (
                    <span key={idx} className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full text-sm font-medium text-slate-300">
                      <PillIcon className="text-purple-400" /> {tag}
                    </span>
                  );
                })}
              </div>
            )}
          </motion.div>

          {/* What I Learned */}
          <motion.div variants={itemFadeUp} className={`${glassCardClasses} p-6 md:p-8`}>
            <div className="flex items-center gap-2 mb-5">
              <h2 className="text-xl font-bold text-white">What I Learned</h2>
              <span className="text-purple-400 text-xl">*</span>
            </div>
            {projectLearnings.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectLearnings.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl text-sm font-medium text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-purple-500/15 flex items-center justify-center flex-shrink-0 text-purple-400">
                      <FiCheck className="text-xs" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Product Thinking", "AI Integration", "State Management", 
                  "System Design", "Performance Optimization", "User Experience"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl text-sm font-medium text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-purple-500/15 flex items-center justify-center flex-shrink-0 text-purple-400">
                      <FiCheck className="text-xs" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* 7. BOTTOM CTA */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
        className="relative z-10 max-w-7xl mx-auto px-6 pb-8"
      >
        <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/10 border border-purple-500/20 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden">
          {/* Internal Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1)_0%,transparent_50%)] pointer-events-none" />
          
          <div className="w-16 h-16 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(139,92,246,0.2)] animate-pulse">
            <FiZap className="text-2xl text-purple-400" />
          </div>
          
          <div className="flex-1 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Interested in building something amazing together?</h3>
            <p className="text-slate-400 text-base">I'm always excited to work on innovative projects and solve real-world problems.</p>
          </div>
          
          <Link to="/#contact" className={`${btnPurpleClasses} whitespace-nowrap relative z-10 px-8`}>
            Let's Connect <FiArrowUpRight className="text-lg" />
          </Link>
        </div>
      </motion.section>

    </div>
  );
};

export default CaseStudy;
