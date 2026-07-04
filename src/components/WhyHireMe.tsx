import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { CheckCircle, Code2, Layers, Bug, MessageSquare, TestTube, Clock, Rocket } from 'lucide-react'

const reasons = [
  {
    icon: Code2,
    title: 'Clean, Maintainable Code',
    description: 'I write code that other developers can read, maintain, and extend. Clean architecture is non-negotiable.',
    color: '#2563EB',
  },
  {
    icon: Layers,
    title: 'Scalable Backend Architecture',
    description: 'Systems designed to grow. Microservice patterns and clean separation of concerns built in from day one.',
    color: '#14B8A6',
  },
  {
    icon: Rocket,
    title: 'Fast API Development',
    description: 'From design to delivery — I build REST APIs rapidly without cutting corners on quality.',
    color: '#38BDF8',
  },
  {
    icon: Bug,
    title: 'Strong Debugging Skills',
    description: 'I dig into complex problems systematically and find root causes, not just symptoms.',
    color: '#F97316',
  },
  {
    icon: MessageSquare,
    title: 'Effective Communication',
    description: 'I keep clients informed, ask the right questions upfront, and deliver what was agreed.',
    color: '#A78BFA',
  },
  {
    icon: TestTube,
    title: 'Thorough Testing',
    description: 'Nothing ships without proper unit tests. I use JUnit and Mockito to validate all critical paths.',
    color: '#22C55E',
  },
  {
    icon: Clock,
    title: 'Reliable Delivery',
    description: 'Deadlines are commitments. I plan realistically and communicate early if anything changes.',
    color: '#F59E0B',
  },
  {
    icon: CheckCircle,
    title: 'Real-World Experience',
    description: 'Production-grade systems, not just tutorial projects. I understand what it takes to run at scale.',
    color: '#38BDF8',
  },
]

export default function WhyHireMe() {
  const { ref, inView } = useInView()

  return (
    <section id="why-hire" className="py-24 relative overflow-hidden" ref={ref}
      style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
      <div className="orb w-96 h-96 top-1/2 left-0 opacity-10" style={{ backgroundColor: '#2563EB' }} />

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
            Why Choose Me
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Why Clients <span className="gradient-text">Trust Me</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#64748B' }}>
            Beyond the tech skills — the professional traits that make the difference on real projects.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl p-6 card-hover group"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.7)',
                  border: '1px solid rgba(37, 99, 235, 0.15)',
                }}
              >
                {/* Icon with pulse */}
                <div className="relative mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${reason.color}15`, border: `1px solid ${reason.color}30` }}
                  >
                    <Icon size={22} style={{ color: reason.color }} />
                  </div>
                  {/* Pulse ring on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                    style={{ border: `1px solid ${reason.color}` }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0, 0.4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                <h3 className="font-semibold text-sm mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: '#F1F5F9' }}>
                  {reason.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(20, 184, 166, 0.15))',
            border: '1px solid rgba(37, 99, 235, 0.3)',
          }}
        >
          <div className="orb w-64 h-64 -top-16 -right-16 opacity-20" style={{ backgroundColor: '#2563EB' }} />
          <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to build your backend system?
          </h3>
          <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>
            Let's discuss your project and find the best solution together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #2563EB, #38BDF8)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 99, 235, 0.6)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 99, 235, 0.4)' }}
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
