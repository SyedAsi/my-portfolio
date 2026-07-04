import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Github, Star, GitFork, Eye } from 'lucide-react'

const pinnedRepos = [
  {
    name: 'broadband-ordering-system',
    description: 'REST APIs for telecom broadband product ordering with microservices and RabbitMQ.',
    stars: 12,
    forks: 4,
    watchers: 8,
    language: 'Java',
    languageColor: '#F97316',
    topics: ['spring-boot', 'microservices', 'rabbitmq', 'docker'],
  },
  {
    name: 'grocery-store-backend',
    description: 'Full-featured grocery e-commerce backend with auth, cart, orders, and payment workflows.',
    stars: 18,
    forks: 6,
    watchers: 11,
    language: 'Java',
    languageColor: '#F97316',
    topics: ['spring-boot', 'mongodb', 'jwt', 'microservices'],
  },
  {
    name: 'smart-qr-restaurant',
    description: 'AI-powered restaurant system with QR menus, digital ordering, and admin analytics.',
    stars: 24,
    forks: 8,
    watchers: 16,
    language: 'Java',
    languageColor: '#F97316',
    topics: ['spring-boot', 'ai', 'postgresql', 'react'],
  },
]

// Generate a fake contribution grid (52 weeks x 7 days)
function generateContributions() {
  const weeks = []
  for (let w = 0; w < 52; w++) {
    const days = []
    for (let d = 0; d < 7; d++) {
      // Simulate realistic contribution patterns
      const rand = Math.random()
      if (rand < 0.35) days.push(0)
      else if (rand < 0.60) days.push(1)
      else if (rand < 0.78) days.push(2)
      else if (rand < 0.90) days.push(3)
      else days.push(4)
    }
    weeks.push(days)
  }
  return weeks
}

const contributions = generateContributions()

const levelColors: Record<number, string> = {
  0: 'rgba(37, 99, 235, 0.08)',
  1: 'rgba(37, 99, 235, 0.3)',
  2: 'rgba(56, 189, 248, 0.5)',
  3: 'rgba(20, 184, 166, 0.7)',
  4: '#14B8A6',
}

export default function GitHub() {
  const { ref, inView } = useInView()

  return (
    <section id="github" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="orb w-80 h-80 bottom-0 right-0 opacity-10" style={{ backgroundColor: '#38BDF8' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#38BDF8', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
            GitHub Activity
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Coding <span className="gradient-text">Consistently</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#64748B' }}>
            Active contributions across personal and client projects.
          </p>
        </motion.div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl p-6 md:p-8 mb-8 overflow-x-auto"
          style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(37, 99, 235, 0.2)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Github size={18} style={{ color: '#38BDF8' }} />
              <span className="font-medium text-sm" style={{ color: '#F1F5F9' }}>Contribution Graph</span>
            </div>
            <span className="text-xs" style={{ color: '#64748B' }}>Past 12 months</span>
          </div>

          <div className="flex gap-1 min-w-max">
            {contributions.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((level, di) => (
                  <motion.div
                    key={di}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: wi * 0.005 }}
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: levelColors[level] }}
                    title={`Level ${level}`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-2 mt-4 justify-end">
            <span className="text-xs" style={{ color: '#64748B' }}>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div key={level} className="w-3 h-3 rounded-sm" style={{ backgroundColor: levelColors[level] }} />
            ))}
            <span className="text-xs" style={{ color: '#64748B' }}>More</span>
          </div>
        </motion.div>

        {/* Pinned Repos */}
        <div className="grid md:grid-cols-3 gap-5">
          {pinnedRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href="https://github.com/SyedAsif"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="block rounded-2xl p-5 card-hover"
              style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(37, 99, 235, 0.2)' }}
              whileHover={{ borderColor: 'rgba(56, 189, 248, 0.4)' }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Github size={16} style={{ color: '#94A3B8' }} />
                  <span className="font-semibold text-sm" style={{ color: '#38BDF8', fontFamily: 'monospace' }}>
                    {repo.name}
                  </span>
                </div>
              </div>

              <p className="text-xs leading-relaxed mb-4" style={{ color: '#64748B' }}>
                {repo.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {repo.topics.map((topic) => (
                  <span key={topic} className="text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#38BDF8', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                    {topic}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-xs" style={{ color: '#64748B' }}>
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                  {repo.language}
                </div>
                <div className="flex items-center gap-1">
                  <Star size={12} />
                  {repo.stars}
                </div>
                <div className="flex items-center gap-1">
                  <GitFork size={12} />
                  {repo.forks}
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={12} />
                  {repo.watchers}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* GitHub Profile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/SyedAsif"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
            style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', color: '#F1F5F9', border: '1px solid rgba(37, 99, 235, 0.3)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#38BDF8'; e.currentTarget.style.color = '#38BDF8' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.3)'; e.currentTarget.style.color = '#F1F5F9' }}
          >
            <Github size={18} /> View Full GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
