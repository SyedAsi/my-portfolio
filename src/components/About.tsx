import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Coffee, Layers, Zap, Users } from 'lucide-react'

const stats = [
  { icon: Layers, label: 'Projects Built', value: '10+' },
  { icon: Coffee, label: 'Technologies', value: '20+' },
  { icon: Zap, label: 'APIs Designed', value: '50+' },
  { icon: Users, label: 'Happy Clients', value: '5+' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="orb w-96 h-96 top-0 right-0 opacity-10" style={{ backgroundColor: '#2563EB' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main card */}
            <div
              className="rounded-2xl p-8 relative"
              style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(37, 99, 235, 0.2)' }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4" style={{ borderBottom: '1px solid rgba(37, 99, 235, 0.15)' }}>
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
                <span className="ml-2 text-xs" style={{ color: '#64748B', fontFamily: 'monospace' }}>about.java</span>
              </div>

              {/* Code-style content */}
              <div className="font-mono text-sm leading-8">
                <div><span style={{ color: '#94A3B8' }}>// Developer Profile</span></div>
                <div className="mt-2">
                  <span style={{ color: '#2563EB' }}>String </span>
                  <span style={{ color: '#38BDF8' }}>name </span>
                  <span style={{ color: '#F8FAFC' }}>= </span>
                  <span style={{ color: '#22C55E' }}>"Syed Asif"</span>
                  <span style={{ color: '#F8FAFC' }}>;</span>
                </div>
                <div>
                  <span style={{ color: '#2563EB' }}>String </span>
                  <span style={{ color: '#38BDF8' }}>role </span>
                  <span style={{ color: '#F8FAFC' }}>= </span>
                  <span style={{ color: '#22C55E' }}>"Java Backend Dev"</span>
                  <span style={{ color: '#F8FAFC' }}>;</span>
                </div>
                <div>
                  <span style={{ color: '#2563EB' }}>boolean </span>
                  <span style={{ color: '#38BDF8' }}>available </span>
                  <span style={{ color: '#F8FAFC' }}>= </span>
                  <span style={{ color: '#F97316' }}>true</span>
                  <span style={{ color: '#F8FAFC' }}>;</span>
                </div>
                <div className="mt-3">
                  <span style={{ color: '#2563EB' }}>List</span>
                  <span style={{ color: '#F8FAFC' }}>&lt;</span>
                  <span style={{ color: '#14B8A6' }}>String</span>
                  <span style={{ color: '#F8FAFC' }}>&gt; </span>
                  <span style={{ color: '#38BDF8' }}>skills </span>
                  <span style={{ color: '#F8FAFC' }}>= </span>
                  <span style={{ color: '#2563EB' }}>List</span>
                  <span style={{ color: '#F8FAFC' }}>.of(</span>
                </div>
                {['Spring Boot', 'Microservices', 'MongoDB', 'Docker', 'RabbitMQ'].map((skill, i) => (
                  <div key={skill} className="ml-4">
                    <span style={{ color: '#22C55E' }}>"{skill}"</span>
                    {i < 4 && <span style={{ color: '#F8FAFC' }}>,</span>}
                  </div>
                ))}
                <div><span style={{ color: '#F8FAFC' }}>);</span></div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="rounded-xl p-4 text-center card-hover"
                  style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(37, 99, 235, 0.2)' }}
                >
                  <Icon size={20} style={{ color: '#38BDF8', margin: '0 auto 8px' }} />
                  <div className="text-2xl font-bold gradient-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{value}</div>
                  <div className="text-xs mt-1" style={{ color: '#64748B' }}>{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#38BDF8', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
              About Me
            </div>

            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Building Backends That{' '}
              <span className="gradient-text">Scale & Perform</span>
            </h2>

            <p className="text-base leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              I'm a Java Backend Developer with hands-on experience building scalable backend systems using
              <span style={{ color: '#38BDF8' }}> Java, Spring Boot, Microservices, REST APIs, MongoDB, PostgreSQL, Docker, RabbitMQ, </span>
              and JUnit.
            </p>

            <p className="text-base leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              I enjoy designing clean architectures, solving complex backend problems, and delivering reliable solutions
              for real-world business applications. Whether it's a startup MVP or a production-grade microservice system,
              I build backend systems that are maintainable, tested, and built to last.
            </p>

            <div className="space-y-3">
              {[
                { label: 'Clean Architecture', width: '92%' },
                { label: 'REST API Design', width: '95%' },
                { label: 'Microservices', width: '88%' },
                { label: 'Database Design', width: '85%' },
              ].map(({ label, width }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span style={{ color: '#CBD5E1' }}>{label}</span>
                    <span style={{ color: '#38BDF8' }}>{width}</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #2563EB, #38BDF8)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
