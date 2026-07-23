import React from 'react';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiPostman,
  SiDocker,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiVite,
  SiFramer,
  SiGithub,
  SiFigma,
  SiGooglecloud,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiVercel,
  SiNetlify,
  SiSupabase,
  SiPrisma,
  SiSocketdotio,
  SiRedux,
  SiSass,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiPrettier,
  SiLinux,
  SiArduino,
  SiRaspberrypi,
  SiHtml5,
  SiCss,
  SiXml,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// Custom OpenAI icon (since SiOpenai doesn't exist in react-icons/si)
const SiOpenai = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L12.5963 8.39l-.071.071 4.294 2.5154.142.0852a4.4992 4.4992 0 0 1-.6774 8.0968v-.0003zm.6585-3.7951a4.4755 4.4755 0 0 1-2.8764 1.0408l-.142-.0852-4.783-2.7582a.7948.7948 0 0 0-.3927-.6813l-2.3501-1.3573v2.3324a.0804.0804 0 0 1-.0332.0615l-4.8303 2.7865a4.4992 4.4992 0 0 1-6.1408-1.6464l.142-.0852 4.7783-2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 11.6v-3.71z"/>
  </svg>
);

// Custom Gemini icon (since SiGemini doesn't exist in react-icons/si)
const SiGemini = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"/>
    <path d="M18 14L18.75 16.75L21.5 17.5L18.75 18.25L18 21L17.25 18.25L14.5 17.5L17.25 16.75L18 14Z" opacity="0.7"/>
  </svg>
);

// Custom REST API icon (since no specific icon exists in react-icons/si)
const SiRestapi = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zm0 2v10h16V7H4zm2 2h4v2H6V9zm0 4h8v2H6v-2zm10-4h2v2h-2V9zm-4 0h2v2h-2V9z"/>
  </svg>
);

// ==========================================
// TECH STACK REGISTRY - Single Source of Truth
// ==========================================

export const TECH = {
  // ── Frontend ──
  html: { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  css: { name: "CSS", icon: SiCss, color: "#1572B6" },
  react: { name: "React", icon: SiReact, color: "#61DAFB" },
  nextjs: { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  javascript: { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  typescript: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  tailwind: { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  sass: { name: "Sass", icon: SiSass, color: "#CC6699" },
  redux: { name: "Redux", icon: SiRedux, color: "#764ABC" },
  framer: { name: "Framer Motion", icon: SiFramer, color: "#FFFFFF" },
  vite: { name: "Vite", icon: SiVite, color: "#646CFF" },
  webpack: { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
  babel: { name: "Babel", icon: SiBabel, color: "#F5DA55" },

  // ── Backend ──
  nodejs: { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  express: { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  python: { name: "Python", icon: SiPython, color: "#3776AB" },
  java: { name: "Java", icon: FaJava, color: "#ED8B00" },
  "rest-api": { name: "REST API", icon: SiRestapi, color: "#FFFFFF" },
  xml: { name: "XML", icon: SiXml, color: "#F16529" },
  graphql: { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  socketio: { name: "Socket.io", icon: SiSocketdotio, color: "#FFFFFF" },

  // ── Databases ──
  mongodb: { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  postgresql: { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  mysql: { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  redis: { name: "Redis", icon: SiRedis, color: "#DC382D" },
  supabase: { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  prisma: { name: "Prisma", icon: SiPrisma, color: "#2D3748" },

  // ── Firebase & BaaS ──
  firebase: { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },

  // ── AI / ML ──
  tensorflow: { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  pytorch: { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  openai: { name: "OpenAI", icon: SiOpenai, color: "#FFFFFF" },
  gemini: { name: "Gemini", icon: SiGemini, color: "#8B5CF6" },
  pandas: { name: "Pandas", icon: SiPandas, color: "#150458" },
  numpy: { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
  jupyter: { name: "Jupyter", icon: SiJupyter, color: "#F37626" },

  // ── DevOps & Tools ──
  git: { name: "Git", icon: SiGit, color: "#F05032" },
  github: { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  docker: { name: "Docker", icon: SiDocker, color: "#2496ED" },
  postman: { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  eslint: { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
  prettier: { name: "Prettier", icon: SiPrettier, color: "#F7B93E" },

  // ── Design ──
  figma: { name: "Figma", icon: SiFigma, color: "#F24E1E" },

  // ── Cloud & Deployment ──
  vercel: { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  netlify: { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  gcloud: { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },

  // ── Hardware & IoT ──
  linux: { name: "Linux", icon: SiLinux, color: "#FCC624" },
  arduino: { name: "Arduino", icon: SiArduino, color: "#00979D" },
  raspberry: { name: "Raspberry Pi", icon: SiRaspberrypi, color: "#A51616" },
};

// ==========================================
// HELPER: Get all tech IDs as an array
// ==========================================
export const TECH_IDS = Object.keys(TECH);

// ==========================================
// HELPER: Get tech by ID with safety guard
// ==========================================
export const getTech = (id) => {
  const tech = TECH[id];
  if (!tech) {
    console.warn(`Tech "${id}" not found in registry.`);
    return null;
  }
  return tech;
};

// ==========================================
// COMPONENT: TechBadge - Reusable pill badge
// ==========================================
const TechBadge = ({ techId, size = "sm" }) => {
  const tech = TECH[techId];
  if (!tech) return null;

  const IconComponent = tech.icon;

  const sizeClasses = {
    xs: "px-2 py-1 gap-1.5 text-[10px]",
    sm: "px-3 py-1.5 gap-2 text-xs",
    md: "px-4 py-2 gap-2.5 text-sm",
    lg: "px-5 py-2.5 gap-3 text-base",
  };

  const iconSizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div
      className={`inline-flex items-center rounded-xl bg-white/[0.04] border border-white/[0.08] font-medium transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] cursor-default ${sizeClasses[size]}`}
    >
      <IconComponent
        className={`${iconSizes[size]} transition-transform duration-300 hover:scale-110`}
        style={{ color: tech.color }}
      />
      <span className="text-white/70">{tech.name}</span>
    </div>
  );
};

export default TechBadge;
