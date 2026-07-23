import { motion } from 'framer-motion'

const icons = {
  Education: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5m9 5l9-5m-9 5v-7" />
  ),
  'Tech Stack': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  ),
  Interests: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  ),
  'Currently Learning': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  ),
}

function InfoCard({ label, content, index }) {
  return (
    <motion.div
      className="glass-card rounded-xl p-6"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 1, 0.25, 1] }}
      whileHover={{ y: -3 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(99, 102, 241, 0.08)' }}
        >
          <svg
            className="w-[18px] h-[18px]"
            style={{ color: 'var(--color-accent)' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {icons[label] || icons['Education']}
          </svg>
        </div>
        <h3
          className="text-[15px] font-semibold tracking-tight"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
        >
          {label}
        </h3>
      </div>
      <p
        className="leading-relaxed"
        style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.65' }}
      >
        {content}
      </p>
    </motion.div>
  )
}

export default InfoCard