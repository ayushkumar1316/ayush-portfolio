import React from 'react';
import { motion } from 'framer-motion';
import {
  FiMapPin, FiCalendar, FiClock, FiGithub, FiLinkedin, FiInstagram, FiMail,
  FiLayout, FiServer, FiPenTool, FiCpu, FiBookOpen, FiArrowUpRight, FiLayers,
  FiEye
} from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';
import { portfolioData } from '../data/PortfolioData';
import { TECH } from '../data/TechStack';

const { about } = portfolioData;

const About = () => {
  const glassCard = "bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30";

  return (
    <section id="about" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── ROW 1: INTRO + PROFILE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">

          {/* TOP LEFT: INTRO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-5 lg:p-6 flex flex-col justify-center"
          >
            <p className="text-purple-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-3">About Me</p>
            <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-white leading-[1.15] mb-4 tracking-tight">
              Building digital solutions with{' '}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">purpose</span>
              {' '}and{' '}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">passion.</span>
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-5 max-w-md">
              {about.bio}
            </p>

            {/* Info Pills */}
            <div className="flex gap-2 mb-5 overflow-x-auto pb-1 -mb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {about.badges.map((badge, idx) => {
                const icons = [FiMapPin, FiCalendar, FiClock];
                const IconComponent = icons[idx] || FiMapPin;
                return (
                  <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2 transition-colors hover:border-purple-500/30 shrink-0">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                      <IconComponent className="text-sm" />
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-500 uppercase tracking-wider mb-0">{badge.label}</p>
                      <p className="text-[11px] font-semibold text-white flex items-center gap-1.5 whitespace-nowrap">
                        {badge.value}
                        {badge.hasPulse && (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {about.socialLinks.map((social, idx) => {
                const icons = [FiGithub, FiLinkedin, FiInstagram, FiMail];
                const IconComponent = icons[idx] || FiGithub;
                return (
                  <a key={idx} href={social.url} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                    <IconComponent className="text-base" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* TOP RIGHT: PROFILE CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className={`${glassCard} lg:col-span-5 lg:-ml-4 px-5 py-4 flex flex-row items-center gap-4 relative overflow-hidden z-10`}
          >
            {/* Avatar with Glow Ring */}
            <div className="relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24">
              <div className="absolute inset-[-6px] rounded-full bg-gradient-to-br from-purple-500/50 via-violet-500/30 to-indigo-500/40 blur-[5px] z-0" />
              <div className="absolute inset-[-3px] rounded-full bg-gradient-to-br from-purple-400/60 via-violet-500/40 to-indigo-400/50 z-0" />
              <div className="relative w-full h-full rounded-full border-[2px] border-purple-400/50 overflow-hidden bg-gradient-to-br from-purple-900/60 to-slate-900/60 z-10 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <img 
                  src={about.profileCard.image}
                  alt={about.profileCard.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-left z-10 min-w-0 relative">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5 flex items-center gap-1.5">
                {about.profileCard.name} <MdVerified className="text-purple-500 text-lg" />
              </h3>
              <p className="text-purple-400 text-sm font-medium mb-1">{about.profileCard.role}</p>
              <p className="text-slate-400 text-sm leading-snug">
                {about.profileCard.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── ROW 2: WHAT I DO + EDUCATION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* BOTTOM LEFT: WHAT I DO + TECH STACK */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className={`${glassCard} lg:col-span-7 p-6 lg:p-7 flex flex-col`}
          >
            <div className="mb-6">
              <h3 className="flex items-center gap-3 text-lg font-bold text-white mb-5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400"><FiLayout /></div>
                What I Do
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {about.whatIDo.map((item, idx) => {
                  const icons = [FiLayout, FiServer, FiPenTool, FiCpu];
                  const IconComponent = icons[idx] || FiLayout;
                  return (
                    <div key={idx} className="text-left">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-2">
                        <IconComponent className="text-lg" />
                      </div>
                      <h4 className="text-white text-sm font-semibold mb-0.5">{item.title}</h4>
                      <p className="text-slate-500 text-[10px] leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

            <div className="flex-1">
              <h3 className="flex items-center gap-3 text-lg font-bold text-white mb-4">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400"><FiLayers /></div>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {about.techStack.map((techId, idx) => {
                  const tech = TECH[techId];
                  if (!tech) return null;
                  const IconComponent = tech.icon;
                  return (
                    <div key={idx} className="bg-white/[0.04] border border-white/[0.08] rounded-xl w-14 h-14 flex flex-col items-center justify-center gap-1 hover:border-purple-500/40 hover:bg-white/[0.07] hover:-translate-y-1 transition-all cursor-default group">
                      {IconComponent && (
                        <IconComponent className="text-xl group-hover:scale-110 transition-transform" style={{ color: tech.color }} />
                      )}
                      <span className="text-[8px] text-slate-400 font-medium">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* BOTTOM RIGHT: EDUCATION TIMELINE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className={`${glassCard} lg:col-span-5 p-6 lg:p-7 flex flex-col`}
          >
            <h3 className="flex items-center gap-3 text-lg font-bold text-white mb-6">
              <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400"><FiBookOpen /></div>
              Education & Journey
            </h3>

            <div className="relative flex-1 space-y-6">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/10" />

              {about.education.map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  {/* Glowing dot on the line */}
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500/20 border border-purple-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                  </div>

                  <div className="flex flex-col gap-1">
                    {/* Top Row: Year + Score */}
                    <div className="flex justify-between items-center w-full">
                      <span className="text-xs font-medium text-slate-400">{item.year}</span>
                      <span className="text-[10px] sm:text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md">{item.score}</span>
                    </div>
                    {/* Degree */}
                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug">{item.degree}</h4>
                    {/* Institution */}
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href={about.profileCard.resumeLink} 
              target="#" 
              rel="noopener noreferrer"
              className="w-full mt-5 py-3 rounded-xl border border-purple-500/30 bg-purple-500/10 text-white text-sm font-semibold hover:bg-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all flex items-center justify-center gap-2 group"
            >
              <FiEye className="group-hover:-translate-y-0.5 transition-transform" />
              View My Resume
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
