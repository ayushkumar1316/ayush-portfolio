import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiCode, FiSmile, FiAward, FiCheckCircle } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';
import { portfolioData } from '../data/PortfolioData';
import { TECH } from '../data/TechStack';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const STAT_ICONS = [FiClock, FiCode, FiSmile, FiAward];
const STAT_COLORS = [
  "from-blue-400 to-indigo-400",
  "from-indigo-400 to-violet-400",
  "from-violet-400 to-fuchsia-400",
  "from-fuchsia-400 to-pink-400"
];

const Hero = () => {
  const { hero } = portfolioData;

  return (
    <section className="relative min-h-screen pt-28 pb-16 overflow-hidden flex flex-col justify-between">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 text-left space-y-8">
              <motion.div 
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {hero.availability}
              </motion.div>

              <div className="space-y-4">
                <motion.h2 
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-base sm:text-lg font-bold text-slate-400 tracking-wider flex items-center gap-2"
                >
                  {hero.greeting} <span className="text-2xl animate-bounce">👋</span>
                </motion.h2>

                <motion.h1 
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white"
                >
                  {hero.headline.split("real problems.").length > 1 ? (
                    <>
                      {hero.headline.split("real problems.")[0]}
                      <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                        real problems.
                      </span>
                    </>
                  ) : (
                    hero.headline
                  )}
                </motion.h1>
              </div>

              <motion.p 
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed font-light"
              >
                {hero.shortBio}
              </motion.p>

            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="space-y-4"
            >
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                Tech Stack <span className="text-indigo-500 text-[10px]"></span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {hero.techStack.map((tech, index) => {
                  const techData = TECH[tech.name.toLowerCase()] || TECH[tech.name];
                  const IconComponent = techData?.icon;
                  return (
                    <div 
                      key={index} 
                      className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/[0.02] transition-all duration-300 cursor-default"
                    >
                      {IconComponent && (
                        <IconComponent className="text-sm transition-transform duration-300 group-hover:scale-110" style={{ color: tech.hex }} />
                      )}
                      <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors duration-200">{tech.name}</span>
                    </div>
                  );
                })}
                <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 cursor-pointer">
                  <span className="text-[10px] font-bold text-slate-400">+More</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center relative mt-10 lg:mt-0">
            
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-indigo-500/10 flex items-center justify-center animate-spin" style={{ animationDuration: '40s' }}>
              <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-dashed border-indigo-500/5"></div>
            </div>

            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-slate-900 border border-white/10 p-2 overflow-visible shadow-2xl flex items-center justify-center"
            >
              <div className="w-full h-full rounded-[20px] overflow-hidden relative bg-[#0d0d1a] flex items-end justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/20 to-transparent z-10" ></div>
                <img 
                  src={hero.image} 
                  alt="Ayush" 
                  className="w-full h-full object-cover relative z-0"
                />
              </div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -left-6 top-2 sm:-left-12 sm:top-6 md:-left-16 md:top-8 lg:-left-24 scale-75 sm:scale-90 md:scale-100 origin-top-left z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#090912]/80 border border-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
              >
                <div className="w-9 h-9 rounded-xl bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
                  <FaRocket className="text-violet-400 text-sm animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500">{hero.floatingCards.left.label}</div>
                  <div className="text-[11px] font-bold text-white">{hero.floatingCards.left.value}</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 bottom-2 sm:-right-12 sm:bottom-6 md:-right-16 md:bottom-8 lg:-right-24 scale-75 sm:scale-90 md:scale-100 origin-bottom-right z-20 flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-[#090912]/80 border border-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
              >
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500">{hero.floatingCards.right.label}</div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    {hero.floatingCards.right.value} <FiCheckCircle className="text-indigo-400 text-[10px]" />
                  </div>
                </div>
                <div className="w-12 h-6 flex items-end gap-1">
                  <div className="w-1.5 h-2.5 bg-indigo-500/40 rounded-full"></div>
                  <div className="w-1.5 h-4 bg-indigo-500/60 rounded-full"></div>
                  <div className="w-1.5 h-3 bg-indigo-500/80 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-6 bg-indigo-500 rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 md:mt-24 z-10">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5 py-6 md:py-8 px-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-xl"
        >
          {hero.stats.map((stat, idx) => {
            const StatIcon = STAT_ICONS[idx] || FiClock;
            const colorClass = STAT_COLORS[idx] || STAT_COLORS[0];
            return (
              <div key={idx} className="flex flex-col items-center justify-center text-center p-3 md:p-4 group">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </span>
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${colorClass} bg-opacity-20 flex items-center justify-center text-slate-950 text-xs shadow-md`}>
                    <StatIcon className="text-white" />
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
