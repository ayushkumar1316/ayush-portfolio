import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const statusConfig = {
  Completed: { bg: 'rgba(34, 197, 94, 0.08)', color: '#16a34a', dot: '#22c55e' },
  'In Progress': { bg: 'rgba(245, 158, 11, 0.08)', color: '#d97706', dot: '#f59e0b' },
  Hackathon: { bg: 'rgba(99, 102, 241, 0.08)', color: 'var(--color-accent)', dot: 'var(--color-accent)' },
}

const gradientColors = [
  ['rgba(99, 102, 241, 0.08)', 'rgba(129, 140, 248, 0.03)'],
  ['rgba(245, 158, 11, 0.06)', 'rgba(34, 197, 94, 0.03)'],
  ['rgba(99, 102, 241, 0.07)', 'rgba(239, 68, 68, 0.02)'],
  ['rgba(34, 197, 94, 0.06)', 'rgba(99, 102, 241, 0.03)'],
]

function ProjectCard({ project, index }) {
  const { title, status, description, techStack, githubUrl, liveUrl } = project
  const statusStyle = statusConfig[status] || statusConfig.Completed
  const gradient = gradientColors[index % gradientColors.length]

  return (
    <motion.div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 1, 0.25, 1] }}
      whileHover={{
        y: -6,
        boxShadow: '0 30px 60px -16px rgba(99, 102, 241, 0.25)',
        borderColor: 'rgba(99, 102, 241, 0.4)',
        transition: { duration: 0.3, ease: [0.25, 1, 0.25, 1] },
      }}
    >
      {/* Preview Area */}
      <motion.div
        className="aspect-[16/10] flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${gradient[0]}, var(--color-surface) 60%, ${gradient[1]})`,
        }}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.25, 1] }}
      >
        <div className="text-center p-8">
          <div
            className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
            style={{
              background: 'rgba(99, 102, 241, 0.06)',
              boxShadow: 'inset 0 1px 3px rgba(99, 102, 241, 0.05)',
            }}
          >
            <svg
              className="w-7 h-7"
              style={{ color: 'var(--color-accent)' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', opacity: 0.45 }}>
            Project Preview
          </p>
        </div>
      </motion.div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-8" style={{ gap: '0' }}>
        {/* Section 1 — Status */}
        <div className="mb-6">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase px-3.5 py-1 rounded-full"
            style={{ background: statusStyle.bg, color: statusStyle.color }}
          >
            <span className="w-1 h-1 rounded-full" style={{ background: statusStyle.dot }} />
            {status}
          </span>
        </div>

        {/* Section 2 — Title */}
        <h3
          className="text-xl font-bold leading-[1.2] mb-5 line-clamp-2"
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.03em',
          }}
        >
          {title}
        </h3>

        {/* Section 3 — Description */}
        <p
          className="mb-6 line-clamp-3"
          style={{
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            lineHeight: '1.7',
            opacity: 0.75,
          }}
        >
          {description}
        </p>

        {/* Section 4 — Tech Stack */}
        <div className="mb-6">
          <span
            className="block text-[10px] font-medium tracking-[0.1em] uppercase mb-3"
            style={{ color: 'var(--color-text-secondary)', opacity: 0.45 }}
          >
            Tech Stack
          </span>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium leading-none px-3 py-1.5 rounded-lg"
                style={{
                  color: 'var(--color-text-secondary)',
                  background: 'transparent',
                  border: '1px solid color-mix(in srgb, var(--color-border) 50%, transparent)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Spacer to push footer to bottom */}
        <div className="flex-1" />

        {/* Section 5 — Actions Footer */}
        <div
          className="pt-5"
          style={{ borderTop: '1px solid color-mix(in srgb, var(--color-border) 50%, transparent)' }}
        >
          <div className="flex items-center gap-3">
            <motion.a
              href={githubUrl}
              className="btn-secondary"
              style={{ padding: '10px 20px', fontSize: '13px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            >
              <FiGithub className="w-4 h-4" />
              GitHub
            </motion.a>
            <motion.a
              href={liveUrl}
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '13px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard