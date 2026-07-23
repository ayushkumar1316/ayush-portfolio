import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
  FiGrid, FiLayers, FiGlobe, FiCpu, FiSmartphone,
  FiBriefcase, FiCode, FiZap, FiAward, FiArrowUpRight, FiArrowDown, FiChevronUp,
  FiExternalLink
} from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

import { portfolioData } from '../data/PortfolioData';
import { TECH } from '../data/TechStack';

const filters = [
  { id: 'all', label: 'All Projects', icon: FiGrid },
  { id: 'fullstack', label: 'Full Stack', icon: FiLayers },
  { id: 'web', label: 'Web Apps', icon: FiGlobe },
  { id: 'ml', label: 'AI / ML', icon: FiCpu },
  { id: 'mobile', label: 'Mobile Apps', icon: FiSmartphone },
];

const categoryMap = {
  "Full Stack": "fullstack",
  "Web Apps": "web",
  "AI / ML": "ml",
  "Mobile Apps": "mobile",
};

const badgeColors = {
  "Featured": "from-purple-600 to-indigo-600",
  "Full Stack": "from-blue-600 to-indigo-600",
  "Web App": "from-emerald-600 to-teal-600",
  "AI / ML": "from-orange-600 to-red-600",
  "Mobile": "from-green-600 to-emerald-600",
};

const ProjectCard = ({ project, badgeColor }) => {
  const resolveTech = (techId) => {
    const tech = TECH[techId];
    if (tech) return tech;
    const lower = techId.toLowerCase().replace(/[^a-z0-9]/g, '');
    const match = Object.keys(TECH).find((key) => lower.includes(key) || key.includes(lower));
    return match ? TECH[match] : null;
  };

  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden group hover:border-purple-500/30 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      {/* ── Image Area with Badge ── */}
      <Link to={`/case-study/${project.id}`} state={{ from: 'projects' }} className="relative h-48 overflow-hidden border-b border-white/5 block">
        <img
          src={project.image || project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className={`w-full h-full bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-110 items-center justify-center`} style={{ display: 'none' }}>
          <span className="text-white/30 text-sm font-medium">{project.title}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#05030d] via-transparent to-transparent opacity-80" />
        {/* Badge */}
        <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-gradient-to-r ${badgeColor} text-[10px] font-bold text-white uppercase tracking-wider shadow-lg`}>
          {project.badge}
        </div>
      </Link>

      {/* ── Content Area ── */}
      <div className="p-5 flex flex-col flex-1 relative z-10 bg-[#05030d]">
        <Link to={`/case-study/${project.id}`} state={{ from: 'projects' }}>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors cursor-pointer">
            {project.title}
          </h3>
        </Link>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Tech Stack Row */}
        <div className="mb-5">
          <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-2.5">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((techId, i) => {
              const tech = resolveTech(techId);
              if (!tech) return null;
              const IconComponent = tech.icon;
              return (
                <div
                  key={i}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-default"
                  title={tech.name}
                >
                  {IconComponent ? (
                    <IconComponent className="text-[15px]" style={{ color: tech.color }} />
                  ) : (
                    <span className="text-[9px] text-slate-400 font-medium">{tech.name?.charAt(0)}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Actions: 3-Button Layout ── */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          {/* Primary: View Case Study */}
          <Link
            to={`/case-study/${project.id}`}
            state={{ from: 'projects' }}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold text-center hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_4px_15px_rgba(139,92,246,0.3)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.5)]"
          >
            View Case Study
          </Link>

          {/* Secondary: Live Preview */}
          <a
            href={project.liveLink || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            title="Live Preview"
          >
            <FiExternalLink className="text-base" />
          </a>

          {/* Secondary: GitHub */}
          <a
            href={project.githubLink || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            title="GitHub"
          >
            <FaGithub className="text-base" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const projectsData = portfolioData.projects.items.map((project) => ({
    ...project,
    categories: [categoryMap[project.category]].filter(Boolean),
  }));

  const filteredProjects = projectsData.filter((p) =>
    activeFilter === 'all' ? true : p.categories.includes(activeFilter)
  );

  const INITIAL_COUNT = 4;
  const visibleProjects = filteredProjects.slice(0, INITIAL_COUNT);
  const extraProjects = filteredProjects.slice(INITIAL_COUNT);
  const hasMore = extraProjects.length > 0;

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setShowAll(false);
  };

  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER & STATS ── */}
        <div className="flex flex-col lg:flex-row gap-10 mb-14">
          <div className="flex-1">
            <p className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">Projects</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Things I've<br/>built with <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">passion.</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-md leading-relaxed">
              A collection of projects that reflect my journey, skills, and problem-solving approach.
            </p>
          </div>

          <div className="lg:w-[500px] shrink-0">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 shadow-[0_0_30px_rgba(139,92,246,0.1)] backdrop-blur-md">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-x divide-white/5">
                {[
                  { icon: FiBriefcase, count: "08+", label: "Projects Completed" },
                  { icon: FiCode, count: "15K+", label: "Lines of Code" },
                  { icon: FiZap, count: "04+", label: "Tech Stack" },
                  { icon: FiAward, count: "03+", label: "Hackathons" }
                ].map((stat, idx) => (
                  <div key={idx} className={`text-center ${idx % 2 === 0 ? '' : 'border-l border-white/5'} sm:border-l-0`}>
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="text-purple-400 text-lg" />
                    </div>
                    <p className="text-xl font-bold text-white mb-1">{stat.count}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wide leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FILTER BUTTONS ── */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white shadow-[0_4px_20px_rgba(139,92,246,0.4)] border-transparent'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-filter-bg"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <filter.icon className={`relative z-10 ${isActive ? 'text-white' : 'text-purple-400'}`} />
                <span className="relative z-10">{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── PROJECTS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Always-visible cards */}
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => {
              const badgeColor = badgeColors[project.badge] || "from-purple-600 to-indigo-600";
              return (
                <motion.div
                  key={project.id}
                  layout="position"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  <ProjectCard project={project} badgeColor={badgeColor} />
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Expandable extra cards */}
          <AnimatePresence>
            {showAll && extraProjects.map((project) => {
              const badgeColor = badgeColors[project.badge] || "from-purple-600 to-indigo-600";
              return (
                <motion.div
                  key={project.id}
                  layout="position"
                  initial={{ opacity: 0, height: 0, y: 20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <ProjectCard project={project} badgeColor={badgeColor} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ── VIEW ALL / SHOW LESS BUTTON ── */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => {
                setShowAll(!showAll);
                if (showAll) {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative px-8 py-3.5 rounded-full border border-purple-500/30 text-white font-semibold text-sm hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 flex items-center gap-2.5 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10">
                {showAll ? 'Show Less' : `View All Projects (${filteredProjects.length})`}
              </span>
              {showAll ? (
                <FiChevronUp className="relative z-10 text-lg group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <FiArrowDown className="relative z-10 text-lg group-hover:translate-y-0.5 transition-transform" />
              )}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-indigo-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/20 group-hover:to-indigo-600/20 transition-all duration-300" />
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Projects;
