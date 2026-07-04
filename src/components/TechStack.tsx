import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const categories = [
  {
    name: 'Backend',
    color: '#2563EB',
    techs: [
      { name: 'Java', icon: '☕', color: '#F97316' },
      { name: 'Spring Boot', icon: '🌱', color: '#22C55E' },
      { name: 'Spring Security', icon: '🔐', color: '#22C55E' },
      { name: 'REST APIs', icon: '🔗', color: '#38BDF8' },
      { name: 'Microservices', icon: '⚡', color: '#A78BFA' },
    ],
  },
  {
    name: 'Database',
    color: '#14B8A6',
    techs: [
      { name: 'MongoDB', icon: '🍃', color: '#22C55E' },
      { name: 'PostgreSQL', icon: '🐘', color: '#38BDF8' },
      { name: 'MySQL', icon: '🗄️', color: '#F97316' },
    ],
  },
  {
    name: 'Messaging',
    color: '#F97316',
    techs: [
      { name: 'RabbitMQ', icon: '🐰', color: '#F97316' },
      { name: 'IBM MQ', icon: '📨', color: '#2563EB' },
    ],
  },
  {
    name: 'DevOps',
    color: '#38BDF8',
    techs: [
      { name: 'Docker', icon: '🐳', color: '#38BDF8' },
      { name: 'Git', icon: '📂', color: '#F97316' },
      { name: 'GitHub', icon: '🐙', color: '#F8FAFC' },
      { name: 'Maven', icon: '🏗️', color: '#A78BFA' },
    ],
  },
  {
    name: 'Testing',
    color: '#A78BFA',
    techs: [
      { name: 'JUnit', icon: '✅', color: '#22C55E' },
      { name: 'Mockito', icon: '🎭', color: '#A78BFA' },
    ],
  },
  {
    name: 'Tools',
    color: '#22C55E',
    techs: [
      { name: 'Postman', icon: '📮', color: '#F97316' },
      { name: 'IntelliJ IDEA', icon: '💡', color: '#A78BFA' },
      { name: 'VS Code', icon: '🔵', color: '#38BDF8' },
      { name: 'Swagger', icon: '📖', color: '#22C55E' },
    ],
  },
]

export default function TechStack() {
  const { ref, inView } = useInView()

  return (
    <section id="tech" className="py-24 relative overflow-hidden" ref={ref}
      style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
      <div className="orb w-80 h-80 bottom-0 left-0 opacity-10" style={{ backgroundColor: '#14B8A6' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#38BDF8', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
            Tech Stack
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#64748B' }}>
            A curated set of tools and frameworks I use to build production-grade backend systems.
          </p>
        </motion.div>

        {/* Tech categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="rounded-2xl p-6 card-hover"
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.7)',
                border: `1px solid ${category.color}25`,
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="font-semibold text-sm uppercase tracking-wider" style={{ color: category.color, fontFamily: 'Poppins, sans-serif' }}>
                  {category.name}
                </h3>
              </div>

              {/* Tech items */}
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, techIdx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: catIdx * 0.1 + techIdx * 0.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                    style={{
                      backgroundColor: `${tech.color}15`,
                      color: tech.color,
                      border: `1px solid ${tech.color}30`,
                      cursor: 'default',
                    }}
                    whileHover={{ scale: 1.05, boxShadow: `0 0 12px ${tech.color}30` }}
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling tech marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...categories.flatMap(c => c.techs), ...categories.flatMap(c => c.techs)].map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm flex-shrink-0"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.5)',
                  color: '#64748B',
                  border: '1px solid rgba(37, 99, 235, 0.15)',
                }}
              >
                {tech.icon} {tech.name}
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  )
}
