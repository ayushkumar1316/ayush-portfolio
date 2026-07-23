import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiFileText, FiStar, FiCode, FiZap, FiArrowUpRight, FiArrowRight,
  FiLayout, FiCalendar, FiCheck, FiPieChart, FiSettings, FiPlus, FiHome, FiUser, FiX
} from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/PortfolioData';
import { TECH } from '../data/TechStack';

const SiGemini = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#8B5CF6"/>
    <path d="M18 14L18.75 16.75L21.5 17.5L18.75 18.25L18 21L17.25 18.25L14.5 17.5L17.25 16.75L18 14Z" fill="#A78BFA"/>
  </svg>
);

const SiGroq = () => (
  <span style={{fontWeight:700,fontSize:'13px',background:'linear-gradient(90deg,#f97316,#ef4444)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',letterSpacing:'-0.5px'}}>groq</span>
);

const STAT_ICONS = [FiFileText, FiStar, FiCode, FiZap];

const sidebarItems = [
  { icon: <FiLayout />, label: 'Dashboard', active: true },
  { icon: <FiCalendar />, label: 'Planner' },
  { icon: <FiCheck />, label: 'Tasks' },
  { icon: <FiCalendar />, label: 'Calendar' },
  { icon: <FiPieChart />, label: 'Analytics' },
  { icon: <FaRobot />, label: 'AI Coach' },
  { icon: <FiSettings />, label: 'Settings' },
];

const todayTasks = [
  { title: 'Complete AGI Project Documentation', time: '09:00 AM – 11:00 AM' },
  { title: 'FlowMind Frontend Development', time: '11:30 AM – 02:30 PM' },
  { title: 'DSA Practice', time: '04:00 PM – 05:30 PM' },
];

const phoneTasks = [
  { title: 'AGI Documentation', time: '9:00 AM' },
  { title: 'FlowMind Dev', time: '11:30 AM' },
  { title: 'DSA Practice', time: '4:00 PM' },
];

function FeaturedWork() {
  const { featuredWork } = portfolioData;

  const LOCAL_TECH = {
    'gemini ai': { name: 'Gemini AI', icon: SiGemini, color: '#8B5CF6' },
    'groq': { name: 'Groq', icon: SiGroq, color: '#F97316' },
  };

  const resolvedTechStack = featuredWork.techStack.map((techName) => {
    const lowerName = techName.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (LOCAL_TECH[lowerName]) return { ...LOCAL_TECH[lowerName], displayName: techName };
    if (TECH[lowerName]) return { ...TECH[lowerName], displayName: techName };
    const match = Object.keys(TECH).find((key) => lowerName.includes(key) || key.includes(lowerName));
    if (match) return { ...TECH[match], displayName: techName };
    return { name: techName, icon: null, color: '#8B5CF6', displayName: techName };
  });

  const titleParts = featuredWork.title.split(/(?<=Flow)(?=Mind)/i);

  function LaptopMockup() {
    return (
      <div className="relative w-full max-w-[520px] mx-auto">
        <div className="laptop-frame rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(139,92,246,0.15)] bg-gradient-to-b from-[#1a1228] to-[#0f0a1a]">
          <div className="flex items-center gap-2 px-3 py-2 bg-[#0d0818] border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/70" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
              <div className="w-2 h-2 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/5 rounded-md px-4 py-0.5 text-[9px] text-white/30 max-w-[180px] truncate">flowmind.app/dashboard</div>
            </div>
          </div>
          <div className="flex" style={{ height: '280px' }}>
            <div className="w-[110px] shrink-0 bg-[#0a0614] border-r border-white/5 p-2.5 flex flex-col gap-0.5">
              <div className="flex items-center gap-1.5 mb-3 px-1">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                  <span className="text-[7px] font-bold text-white">F</span>
                </div>
                <span className="text-[10px] font-semibold text-white/90">{featuredWork.title}</span>
              </div>
              {sidebarItems.map((item, i) => (
                <div key={i} className={`sidebar-item flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[9px] transition-all duration-200 ${item.active ? 'bg-violet-500/25 text-violet-300' : 'text-white/40 hover:text-white/60'}`}>
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="flex-1 p-3 overflow-hidden bg-[#0c0818]">
              <div className="flex items-start justify-between mb-2.5">
                <div>
                  <div className="text-[12px] font-semibold text-white">Good morning, Ayush! 👋</div>
                  <div className="text-[8px] text-white/40 mt-0.5">Let's plan your productive day.</div>
                </div>
                <div className="text-[8px] text-white/30 flex items-center gap-1">
                  <FiCalendar /> May 12, 2024
                </div>
              </div>
              <div className="grid grid-cols-4 gap-1.5 mb-2.5">
                {featuredWork.stats.map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-1.5 text-center">
                    <div className="text-[7px] text-white/40">{s.label}</div>
                    <div className="text-[13px] font-bold text-white leading-tight">{s.value}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-white/5 border border-white/10 rounded-lg p-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-semibold text-white">Today's Plan</span>
                    <span className="text-white/20"><FiX className="w-3 h-3"/></span>
                  </div>
                  {todayTasks.map((t, i) => (
                    <div key={i} className="mb-1.5 last:mb-0">
                      <div className="text-[8px] text-white/80 leading-tight">{t.title}</div>
                      <div className="text-[7px] text-white/30">{t.time}</div>
                    </div>
                  ))}
                  <div className="mt-1.5 text-[7px] text-violet-400 flex items-center gap-0.5 cursor-pointer"> View All</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-semibold text-white">AI Insight</span>
                    <span className="text-white/20"><FiX className="w-3 h-3"/></span>
                  </div>
                  <div className="text-[8px] text-white/60 leading-snug mb-1">You are most productive in the morning.</div>
                  <div className="text-[8px] text-violet-400 mb-2">Keep focusing! 🚀</div>
                  <svg viewBox="0 0 120 40" className="w-full h-8">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,35 Q15,32 25,28 T50,22 T75,15 T100,8 T120,5" fill="none" stroke="#8B5CF6" strokeWidth="1.5" className="chart-line" />
                    <path d="M0,35 Q15,32 25,28 T50,22 T75,15 T100,8 T120,5 L120,40 L0,40 Z" fill="url(#chartGrad)" opacity="0.5" />
                    <circle cx="100" cy="8" r="2.5" fill="#A78BFA" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-2.5 bg-gradient-to-b from-[#2a1f3d] to-[#1a1228] rounded-b-lg relative mx-auto" style={{ width: '105%', marginLeft: '-2.5%' }}>
          <div className="absolute bottom-[-4px] left-[15%] right-[15%] h-1 bg-gradient-to-b from-[#1a1228] to-[#0d0818] rounded-b-[6px]" />
        </div>
        <div className="h-1 mx-auto rounded-b-lg bg-[#151020]" style={{ width: '30%' }} />
      </div>
    );
  }

  function PhoneMockup() {
    const circumference = 2 * Math.PI * 36;
    const progress = 0.78;
    const offset = circumference * (1 - progress);

    return (
      <div className="bg-gradient-to-b from-[#1a1228] to-[#0c0816] border-2 border-white/10 shadow-[0_15px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(139,92,246,0.2)] rounded-[1.75rem] overflow-hidden w-[140px] sm:w-[155px]" style={{ height: '300px' }}>
        <div className="flex items-center justify-between px-4 pt-2 pb-1">
          <span className="text-[8px] text-white/50 font-medium">9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-1.5 border border-white/30 rounded-sm relative">
              <div className="absolute inset-0.5 right-0.5 bg-white/50 rounded-[1px]" />
            </div>
          </div>
        </div>
        <div className="px-3 pt-1 pb-2 flex flex-col h-[calc(100%-28px)]">
          <div className="text-[11px] font-semibold text-white">Hello, Ayush! 👋</div>
          <div className="text-[8px] text-white/40 mb-3">Let's achieve more today</div>
          <div className="flex flex-col items-center mb-3">
            <div className="text-[8px] text-white/40 mb-1">Today's Progress</div>
            <div className="relative w-[90px] h-[90px]">
              <svg width="90" height="90" className="transform -rotate-90">
                <circle cx="45" cy="45" r="36" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                <circle cx="45" cy="45" r="36" fill="none" stroke="url(#progGrad)" strokeWidth="6" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} />
                <defs>
                  <linearGradient id="progGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[18px] font-bold text-white leading-none">78%</span>
                <span className="text-[7px] text-white/40">Completed</span>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-2 flex-1">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-semibold text-white">Upcoming Tasks</span>
              <span className="text-white/20"><FiX className="w-3 h-3"/></span>
            </div>
            {phoneTasks.map((t, i) => (
              <div key={i} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  <span className="text-[8px] text-white/70">{t.title}</span>
                </div>
                <span className="text-[7px] text-white/30">{t.time}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-around mt-2 pt-1.5 border-t border-white/5 text-[14px]">
            <div className="text-violet-400"><FiHome /></div>
            <div className="text-white/30"><FiCheck /></div>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)] text-white -mt-3">
              <FiPlus />
            </div>
            <div className="text-white/30"><FiCalendar /></div>
            <div className="text-white/30"><FiUser /></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="featured" className="relative py-20 overflow-hidden">

      <style dangerouslySetInnerHTML={{ __html: `
        .chart-line { stroke-dasharray: 200; stroke-dashoffset: 200; animation: drawLine 2s ease forwards 0.5s; }
        @keyframes drawLine { to { stroke-dashoffset: 0; } }
      `}} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] text-violet-400 uppercase">{featuredWork.overline}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-none mb-3">
              {titleParts.length > 1 ? (
                <>
                  <span className="text-white">{titleParts[0]}</span>
                  <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">{titleParts[1]}</span>
                </>
              ) : (
                <span className="text-white">{featuredWork.title}</span>
              )}
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-medium mb-4">{featuredWork.subtitle}</p>
            <p className="text-sm sm:text-[15px] text-white/45 leading-relaxed max-w-md mb-7">
              {featuredWork.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8 max-w-md">
              {featuredWork.stats.map((stat, i) => {
                const StatIcon = STAT_ICONS[i] || FiFileText;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className="bg-white/5 border border-white/5 hover:border-violet-500/30 hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 rounded-xl p-3 sm:p-3.5 flex flex-col items-center text-center cursor-default"
                  >
                    <div className="text-violet-400 mb-1.5 opacity-80">
                      <StatIcon className="w-5 h-5" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-white leading-none">{stat.value}</div>
                    <div className="text-[10px] sm:text-[11px] text-white/40 mt-1">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a 
                href={featuredWork.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] shadow-[0_4px_24px_rgba(139,92,246,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_32px_rgba(139,92,246,0.65),inset_0_1px_0_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              >
                Live Demo <FiArrowUpRight className="text-lg" />
              </a>
              <Link 
                to="/case-study/featured"
                state={{ from: 'featured' }}
                className="bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/25 transition-all duration-300 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white/80"
              >
                View Case Study <FiArrowRight className="text-lg" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column (Mockups) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="relative flex items-center justify-center min-h-[340px] sm:min-h-[400px]"
          >

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-full"
            >
              <LaptopMockup />
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute z-20 right-0 sm:right-2 bottom-0 sm:bottom-2 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              <PhoneMockup />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Tech Stack Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10">
        <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 overflow-hidden">
          <div className="flex items-center gap-2 shrink-0 sm:pr-5 sm:border-r sm:border-white/10 sm:mr-5">
            <span className="text-sm font-semibold text-white/80">Tech Stack</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto w-full pb-1 -mb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
            {resolvedTechStack.map((t, i) => {
              const IconComponent = t.icon;
              return (
                <div key={i} className="flex items-center gap-1.5 shrink-0 group cursor-default">
                  {IconComponent && (
                    <span className="opacity-80 group-hover:opacity-100 transition-opacity text-sm sm:text-[16px]">
                      <IconComponent className="w-4 h-4" style={{ color: t.color }} />
                    </span>
                  )}
                  <span className="text-[11px] sm:text-[13px] text-white/50 group-hover:text-white/70 transition-colors whitespace-nowrap font-medium">{t.displayName}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}

export default FeaturedWork;
