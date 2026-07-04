import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Broadband Product Ordering System',
    role: 'Backend Developer',
    description:
      'A full-featured telecom backend system for managing broadband product orders through REST APIs, microservice communication, and messaging queues.',
    tech: ['Java', 'Spring Boot', 'MongoDB', 'PostgreSQL', 'RabbitMQ', 'Docker'],
    highlights: [
      'Built REST APIs for end-to-end product ordering flow',
      'Implemented microservice communication with RabbitMQ',
      'Integrated messaging queues for async order processing',
      'Improved backend performance by optimizing queries',
      'Wrote unit and integration tests using Mockito & JUnit',
    ],
    github: 'https://github.com/SyedAsif',
    live: '',
    gradient: 'from-blue-600 to-cyan-500',
    accentColor: '#2563EB',
    icon: '📡',
    tags: ['Microservices', 'Messaging', 'API'],
  },
  {
    id: 2,
    title: 'Grocery Store Backend',
    role: 'Full Stack Backend',
    description:
      'A comprehensive e-commerce backend for a grocery store supporting authentication, product management, cart, orders, and payment workflows.',
    tech: ['Spring Boot', 'Microservices', 'MongoDB', 'JWT', 'Docker'],
    highlights: [
      'JWT-based authentication and authorization',
      'Product catalog management with search & filter',
      'Cart and order processing microservices',
      'Payment workflow integration',
      'REST APIs for all business operations',
    ],
    github: 'https://github.com/SyedAsif',
    live: '',
    gradient: 'from-teal-500 to-green-400',
    accentColor: '#14B8A6',
    icon: '🛒',
    tags: ['E-commerce', 'Auth', 'Payments'],
  },
  {
    id: 3,
    title: 'Smart QR Restaurant System',
    role: 'Backend Developer',
    description:
      'An AI-powered restaurant management system with QR-based menu, intelligent dish recommendations, digital ordering, and admin analytics.',
    tech: ['Spring Boot', 'React', 'AI Integration', 'PostgreSQL', 'Docker'],
    highlights: [
      'QR code-based digital menu for table ordering',
      'AI-powered dish recommendations engine',
      'Digital order management with real-time updates',
      'Admin dashboard with sales analytics',
      'Clean REST API architecture for frontend integration',
    ],
    github: 'https://github.com/SyedAsif',
    live: '',
    gradient: 'from-purple-600 to-pink-500',
    accentColor: '#A78BFA',
    icon: '🍽️',
    tags: ['AI', 'QR', 'Analytics'],
  },
]

const filters = ['All', 'Microservices', 'Messaging', 'API', 'E-commerce', 'Auth', 'AI']

export default function Projects() {
  const { ref, inView } = useInView()
  const [activeFilter, setActiveFilter] = useState('All')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter))

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="orb w-96 h-96 top-1/2 right-0 opacity-10" style={{ backgroundColor: '#2563EB' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#38BDF8', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
            Featured Work
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Projects That <span className="gradient-text">Speak Results</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#64748B' }}>
            Real-world backend systems built with production quality standards.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: activeFilter === filter ? '#2563EB' : 'rgba(30, 41, 59, 0.7)',
                color: activeFilter === filter ? 'white' : '#94A3B8',
                border: activeFilter === filter ? '1px solid #2563EB' : '1px solid rgba(37, 99, 235, 0.2)',
              }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden card-hover"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  border: `1px solid ${project.accentColor}25`,
                }}
              >
                {/* Card Top */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${project.accentColor}20, ${project.accentColor}40)`, border: `1px solid ${project.accentColor}30` }}
                    >
                      {project.icon}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {project.title}
                          </h3>
                          <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `${project.accentColor}20`, color: project.accentColor }}>
                            {project.role}
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                            style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#94A3B8', border: '1px solid rgba(37, 99, 235, 0.2)' }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = '#38BDF8'; e.currentTarget.style.borderColor = '#38BDF8' }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.2)' }}
                          >
                            <Github size={14} /> GitHub
                          </a>
                          {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
                              style={{ background: 'linear-gradient(135deg, #2563EB, #38BDF8)', color: 'white' }}
                            >
                              <ExternalLink size={14} /> Live Demo
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed mb-4" style={{ color: '#94A3B8' }}>
                        {project.description}
                      </p>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium"
                            style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#38BDF8', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expand toggle */}
                  <button
                    onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    className="mt-4 flex items-center gap-2 text-xs font-medium transition-colors duration-200"
                    style={{ color: project.accentColor }}
                  >
                    {expandedId === project.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    {expandedId === project.id ? 'Hide' : 'Show'} Key Highlights
                  </button>
                </div>

                {/* Expanded Highlights */}
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ borderTop: `1px solid ${project.accentColor}20` }}
                    >
                      <div className="px-6 md:px-8 py-5">
                        <div className="grid sm:grid-cols-2 gap-2">
                          {project.highlights.map((h, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm" style={{ color: '#CBD5E1' }}>
                              <span style={{ color: project.accentColor, marginTop: '2px', flexShrink: 0 }}>▹</span>
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/SyedAsif"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#38BDF8', border: '1px solid rgba(37, 99, 235, 0.3)' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <Github size={18} /> View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
