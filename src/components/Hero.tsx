import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, ChevronRight } from 'lucide-react'

const roles = [
  'Java Backend Developer',
  'Spring Boot Specialist',
  'Microservices Architect',
  'REST API Engineer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background orbs */}
      <div className="orb w-96 h-96 top-1/4 -left-24" style={{ backgroundColor: '#2563EB' }} />
      <div className="orb w-80 h-80 bottom-1/4 -right-16" style={{ backgroundColor: '#14B8A6' }} />
      <div className="orb w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: '#38BDF8', opacity: 0.07 }} />

      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['@RestController', 'SpringBoot', '@Service', 'Docker', 'MongoDB', 'RabbitMQ', '@Entity', 'JWT', 'Swagger'].map((text, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono opacity-10"
            style={{
              color: i % 3 === 0 ? '#2563EB' : i % 3 === 1 ? '#38BDF8' : '#14B8A6',
              left: `${10 + (i * 10) % 80}%`,
              top: `${10 + (i * 13) % 75}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.08, 0.18, 0.08],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            {text}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
              style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#38BDF8', border: '1px solid rgba(56, 189, 248, 0.3)' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Freelance Projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-bold mb-4 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Syed Asif</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-semibold mb-6 h-10"
              style={{ color: '#38BDF8', fontFamily: 'Poppins, sans-serif' }}
            >
              {displayed}
              <span className="cursor" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base leading-relaxed mb-8 max-w-lg"
              style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}
            >
              Specializing in <span style={{ color: '#38BDF8' }}>Spring Boot</span>, <span style={{ color: '#38BDF8' }}>Microservices</span>, REST APIs, and Cloud-ready backend systems.
              I build scalable, secure, and high-performance applications for startups and businesses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #38BDF8)',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 99, 235, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 99, 235, 0.4)'
                }}
              >
                Hire Me <ChevronRight size={16} />
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 gradient-border"
                style={{ color: '#38BDF8' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.1)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                View Projects <ArrowDown size={16} />
              </a>
              <a
                href="/my-portfolio/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)', color: '#14B8A6', border: '1px solid rgba(20, 184, 166, 0.3)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(20, 184, 166, 0.2)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(20, 184, 166, 0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <Download size={16} /> Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: Github, href: 'https://github.com/SyedAsif', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/syedasif', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:syedasif@email.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#94A3B8', border: '1px solid rgba(37, 99, 235, 0.2)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.2)'
                    e.currentTarget.style.color = '#38BDF8'
                    e.currentTarget.style.borderColor = '#38BDF8'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.1)'
                    e.currentTarget.style.color = '#94A3B8'
                    e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.2)'
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
              <span className="text-sm" style={{ color: '#64748B' }}>Find me on</span>
            </motion.div>
          </div>

          {/* Right — Avatar / Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer ring */}
              <div
                className="w-72 h-72 sm:w-80 sm:h-80 rounded-full flex items-center justify-center"
                style={{ border: '2px solid rgba(37, 99, 235, 0.3)' }}
              >
                {/* Spinning dashed ring */}
                <motion.div
                  className="absolute w-full h-full rounded-full"
                  style={{ border: '2px dashed rgba(56, 189, 248, 0.3)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />

                {/* Inner circle - avatar */}
                <div
                  className="w-56 h-56 sm:w-64 sm:h-64 rounded-full flex items-center justify-center relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(20, 184, 166, 0.2))', border: '2px solid rgba(37, 99, 235, 0.4)' }}
                >
                  {/* Code graphic inside avatar */}
                  <div className="text-center p-4">
                    <div className="font-mono text-xs leading-6 text-left" style={{ color: '#38BDF8' }}>
                      <div><span style={{ color: '#64748B' }}>// Java Backend Dev</span></div>
                      <div><span style={{ color: '#94A3B8' }}>@RestController</span></div>
                      <div><span style={{ color: '#2563EB' }}>public class </span><span style={{ color: '#38BDF8' }}>Asif</span><span style={{ color: '#F8FAFC' }}> {'{'}</span></div>
                      <div className="ml-2"><span style={{ color: '#2563EB' }}>@GetMapping</span><span style={{ color: '#F8FAFC' }}>("/")</span></div>
                      <div className="ml-2"><span style={{ color: '#14B8A6' }}>String </span><span style={{ color: '#38BDF8' }}>hello</span><span style={{ color: '#F8FAFC' }}>()</span></div>
                      <div className="ml-2"><span style={{ color: '#F8FAFC' }}>{'{'}</span></div>
                      <div className="ml-4"><span style={{ color: '#2563EB' }}>return </span><span style={{ color: '#22C55E' }}>"Hire Me!"</span><span style={{ color: '#F8FAFC' }}>;</span></div>
                      <div className="ml-2"><span style={{ color: '#F8FAFC' }}>{'}'}</span></div>
                      <div><span style={{ color: '#F8FAFC' }}>{'}'}</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              {[
                { label: 'Spring Boot', color: '#22C55E', pos: 'top-0 -right-4' },
                { label: 'Docker', color: '#38BDF8', pos: 'bottom-8 -left-6' },
                { label: 'MongoDB', color: '#22C55E', pos: 'top-12 -left-8' },
                { label: 'RabbitMQ', color: '#F97316', pos: 'bottom-0 right-0' },
              ].map(({ label, color, pos }) => (
                <motion.div
                  key={label}
                  className={`absolute ${pos} px-3 py-1.5 rounded-full text-xs font-semibold`}
                  style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', color, border: `1px solid ${color}40` }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: Math.random() * 2 }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs" style={{ color: '#64748B' }}>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} style={{ color: '#38BDF8' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
