/*
 * ============================================================
 * CONTACT PAGE — COLOR TOKENS & CUSTOM VALUES
 * ============================================================
 *
 * BACKGROUND:
 *   --bg-primary:    #050510  (deep near-black)
 *   --bg-card:       rgba(15, 12, 30, 0.65)  (dark glass)
 *
 * NEON ACCENTS:
 *   --neon-violet:   #8B5CF6  (primary purple)
 *   --neon-purple:   #A855F7  (brighter purple)
 *   --neon-pink:     #EC4899  (accent pink)
 *   --glow-violet:   0 0 20px rgba(139, 92, 246, 0.4)
 *   --glow-strong:   0 0 30px rgba(139, 92, 246, 0.6)
 *
 * GRADIENTS:
 *   --gradient-text: from-[#a78bfa] via-[#c084fc] to-[#f472b6]
 *   --gradient-btn:  from-[#7c3aed] to-[#a855f7]
 *   --gradient-glow: radial-gradient(ellipse, rgba(139,92,246,.15) 0%, transparent 70%)
 *
 * BORDERS:
 *   --border-glass:  rgba(139, 92, 246, 0.2)
 *   --border-hover:  rgba(139, 92, 246, 0.45)
 *
 * STATUS:
 *   --status-green:  #22C55E
 *   --status-glow:   0 0 8px rgba(34, 197, 94, 0.6)
 *
 * SHADOWS:
 *   --card-shadow:   0 8px 32px rgba(0, 0, 0, 0.4)
 *   --glow-shadow:   0 0 40px rgba(139, 92, 246, 0.15)
 * ============================================================
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Download,
  Send,
  User,
  Tag,
  MessageSquare,
  Lock,
  Rocket,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

// ─── Animation Variants ───────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const cardHover = {
  rest: { scale: 1, borderColor: 'rgba(139, 92, 246, 0.2)' },
  hover: {
    scale: 1.02,
    borderColor: 'rgba(139, 92, 246, 0.5)',
    boxShadow: '0 0 24px rgba(139, 92, 246, 0.2)',
    transition: { duration: 0.25 },
  },
};

// ─── Contact Links Data ───────────────────────────────────────
const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@ayushkumar.dev',
    href: 'mailto:hello@ayushkumar.dev',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ayushkumar',
    href: 'https://linkedin.com/in/ayushkumar',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ayushkumar',
    href: 'https://github.com/ayushkumar',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Odisha, India',
    href: '#',
  },
];

// ═══════════════════════════════════════════════════════════════
// 🎯 CONTACT PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen overflow-hidden bg-[#050510] px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* ── Background Effects ──────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial glow behind left content */}
        <div className="absolute -left-40 -top-20 h-[600px] w-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(139,92,246,.12)_0%,transparent_70%)]" />
        {/* Radial glow behind form */}
        <div className="absolute -right-20 top-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(168,85,247,.08)_0%,transparent_70%)]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(139,92,246,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Floating sparkles */}
        <Sparkles className="absolute left-[15%] top-[18%] h-4 w-4 text-purple-400/30" />
        <Sparkles className="absolute right-[25%] top-[35%] h-3 w-3 text-pink-400/20" />
        <Sparkles className="absolute left-[40%] bottom-[25%] h-3.5 w-3.5 text-violet-400/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ── Section Label ─────────────────────────────── */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium tracking-widest text-purple-400">
            CONTACT{' '}
            <span className="text-purple-500">+</span>
          </span>
        </motion.div>

        {/* ── Main Layout Grid ─────────────────────────── */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* ═══ LEFT COLUMN ═══ */}
          <div>
            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
            >
              Let's build{' '}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                something great
              </span>{' '}
              together.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mb-6 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg"
            >
              Whether you have a project in mind, a job opportunity, or just want
              to say hello — I'd love to hear from you.
            </motion.p>

            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                </span>
                Available for new opportunities
              </span>
            </motion.div>

            {/* Contact Cards Grid (2×2) */}
            <motion.div
              variants={containerVariants}
              className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className="group flex items-center gap-4 rounded-xl border border-purple-500/15 bg-white/[0.03] p-4 backdrop-blur-md transition-colors hover:border-purple-500/40 hover:bg-white/[0.06]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400 transition-colors group-hover:bg-purple-500/25 group-hover:text-purple-300">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-400">{link.label}</p>
                    <p className="truncate text-sm font-medium text-gray-200">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-purple-400" />
                </motion.a>
              ))}
            </motion.div>

            {/* Download Resume Card */}
            <motion.a
              href="/resume.pdf"
              download
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="group mt-3 flex items-center gap-4 rounded-xl border border-purple-500/15 bg-white/[0.03] p-4 backdrop-blur-md transition-colors hover:border-purple-500/40 hover:bg-white/[0.06]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400 transition-colors group-hover:bg-purple-500/25 group-hover:text-purple-300">
                <Download className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-200">
                  Download Resume
                </p>
                <p className="text-sm text-gray-400">
                  Get a quick overview of my experience
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-purple-400" />
            </motion.a>
          </div>

          {/* ═══ RIGHT COLUMN – FORM CARD ═══ */}
          <motion.div variants={itemVariants} className="lg:pt-8">
            <div className="relative rounded-2xl border border-purple-500/20 bg-[rgba(15,12,30,0.65)] p-6 pb-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-8">
              {/* Floating Paper Plane Badge */}
              <div className="absolute -top-6 left-1/2 z-10 -translate-x-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-[0_0_30px_rgba(139,92,246,0.5)] ring-4 ring-[#050510]">
                  <Send className="h-6 w-6" strokeWidth={2} />
                </div>
              </div>

              {/* Form Header */}
              <div className="mb-6 pt-6 text-center sm:pt-8">
                <h2 className="mb-1.5 text-2xl font-bold text-white">
                  Send a Message
                </h2>
                <p className="text-sm text-gray-400">
                  I typically respond within 12 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:ring-inset"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:ring-inset"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <Tag className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:ring-inset"
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-gray-500" />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project, idea, or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:ring-inset"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 py-4 text-base font-semibold text-white shadow-[0_4px_20px_rgba(139,92,246,0.35)] transition-all hover:brightness-110 hover:shadow-[0_6px_28px_rgba(139,92,246,0.45)] active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>

                {/* Privacy Note */}
                <p className="flex items-center justify-center gap-1.5 pt-1 text-xs text-gray-500">
                  <Lock className="h-3 w-3" />
                  Your information is safe with me. I'll never share it.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom CTA Banner ─────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="mt-12 overflow-hidden rounded-2xl border border-purple-500/15 bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-purple-900/20 p-6 backdrop-blur-md sm:p-8 lg:mt-16"
        >
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
            {/* Rocket Icon Container */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/30 to-purple-600/30 ring-1 ring-purple-500/30 sm:h-20 sm:w-20">
              <Rocket className="h-8 w-8 text-purple-300 sm:h-10 sm:w-10" />
              {/* Mini sparkles around rocket */}
              <Sparkles className="absolute -right-1 -top-1 h-3 w-3 text-purple-400/60" />
              <Sparkles className="absolute -bottom-1 -left-1 h-2.5 w-2.5 text-fuchsia-400/50" />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="mb-1 text-xl font-bold text-white sm:text-2xl">
                Ready to bring your idea to life?
              </h3>
              <p className="text-sm text-gray-400 sm:text-base">
                Let's create something impactful and innovative together.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#contact-form"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-purple-400/40 bg-transparent px-6 py-3 text-sm font-semibold text-purple-300 transition-all hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-200 active:scale-95"
            >
              Let's Connect
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
