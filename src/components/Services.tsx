import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import {
  Code2, Server, GitBranch, Database, Bug, Zap,
  Package, TestTube, Plug, Layout
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'REST API Development',
    description: 'Design and build clean, documented, and secure REST APIs following industry best practices.',
    color: '#2563EB',
  },
  {
    icon: Server,
    title: 'Spring Boot Applications',
    description: 'End-to-end Spring Boot applications from setup to production-ready deployment.',
    color: '#22C55E',
  },
  {
    icon: GitBranch,
    title: 'Microservices Architecture',
    description: 'Design scalable microservice systems with proper service boundaries and communication patterns.',
    color: '#38BDF8',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Schema design, query optimization, and data modeling for MongoDB, PostgreSQL, and MySQL.',
    color: '#14B8A6',
  },
  {
    icon: Bug,
    title: 'Bug Fixing',
    description: 'Diagnose and resolve complex backend issues quickly and effectively.',
    color: '#F97316',
  },
  {
    icon: Zap,
    title: 'Backend Optimization',
    description: 'Identify bottlenecks and improve API response times, throughput, and resource usage.',
    color: '#A78BFA',
  },
  {
    icon: Package,
    title: 'Docker Deployment',
    description: 'Containerize applications and set up Docker Compose for local and production environments.',
    color: '#38BDF8',
  },
  {
    icon: TestTube,
    title: 'Unit Testing',
    description: 'Write thorough unit and integration tests using JUnit and Mockito for reliable code.',
    color: '#22C55E',
  },
  {
    icon: Plug,
    title: 'API Integration',
    description: 'Integrate third-party APIs, payment gateways, messaging systems, and external services.',
    color: '#2563EB',
  },
  {
    icon: Layout,
    title: 'System Design Consultation',
    description: 'Architect backend systems aligned with your business goals and scalability requirements.',
    color: '#14B8A6',
  },
]

export default function Services() {
  const { ref, inView } = useInView()

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={ref}
      style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
      <div className="orb w-96 h-96 top-0 left-1/2 opacity-10" style={{ backgroundColor: '#2563EB' }} />

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
            Services
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            What I Can <span className="gradient-text">Build For You</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#64748B' }}>
            End-to-end backend development services tailored for startups and growing businesses.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl p-5 card-hover group cursor-default"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.7)',
                  border: `1px solid rgba(37, 99, 235, 0.15)`,
                }}
                whileHover={{ borderColor: service.color + '50' }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}30` }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>

                <h3 className="font-semibold text-sm mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: '#F1F5F9' }}>
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="h-0.5 rounded-full mt-4"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)`, width: '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-14"
        >
          <p className="text-base mb-5" style={{ color: '#94A3B8' }}>
            Need a custom backend solution? Let's talk about your project.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #2563EB, #14B8A6)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 99, 235, 0.5)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 99, 235, 0.3)' }}
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
