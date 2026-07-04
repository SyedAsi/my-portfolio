import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Java Backend Developer',
    company: 'Freelance / Projects',
    period: '2023 – Present',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Designing and developing scalable backend systems using Java and Spring Boot. Working on microservice architectures, REST API development, and cloud-ready deployments for real-world business applications.',
    responsibilities: [
      'Developed production-grade REST APIs using Spring Boot and Java',
      'Architected microservice systems with service discovery and load balancing',
      'Implemented messaging workflows with RabbitMQ for async communication',
      'Designed and optimized MongoDB and PostgreSQL database schemas',
      'Containerized applications using Docker and Docker Compose',
      'Wrote comprehensive unit tests using JUnit 5 and Mockito',
      'Collaborated in Agile sprints with iterative delivery cycles',
      'Integrated IBM MQ for enterprise messaging solutions',
    ],
    techUsed: ['Java', 'Spring Boot', 'Microservices', 'MongoDB', 'PostgreSQL', 'RabbitMQ', 'Docker', 'JUnit', 'Mockito', 'Agile'],
    accentColor: '#2563EB',
  },
]

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="orb w-80 h-80 bottom-0 right-0 opacity-10" style={{ backgroundColor: '#14B8A6' }} />

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
            Experience
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, #2563EB, #14B8A6, transparent)' }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative pl-14 md:pl-20 mb-10"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-1.5 md:left-5 top-6 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#2563EB', border: '3px solid #0F172A', boxShadow: '0 0 12px rgba(37, 99, 235, 0.5)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* Card */}
              <div
                className="rounded-2xl p-6 md:p-8"
                style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', border: `1px solid ${exp.accentColor}25` }}
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${exp.accentColor}15`, border: `1px solid ${exp.accentColor}30` }}>
                        <Briefcase size={18} style={{ color: exp.accentColor }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>{exp.title}</h3>
                        <p className="font-medium text-sm" style={{ color: exp.accentColor }}>{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:items-end">
                    <div className="flex items-center gap-2 text-xs" style={{ color: '#64748B' }}>
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-xs" style={{ color: '#64748B' }}>
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${exp.accentColor}20`, color: exp.accentColor }}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#64748B' }}>
                    Key Responsibilities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {exp.responsibilities.map((r, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm" style={{ color: '#CBD5E1' }}>
                        <span style={{ color: exp.accentColor, flexShrink: 0, marginTop: '2px' }}>▹</span>
                        {r}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech tags */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#64748B' }}>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techUsed.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-medium"
                        style={{ backgroundColor: `${exp.accentColor}10`, color: exp.accentColor, border: `1px solid ${exp.accentColor}25` }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
