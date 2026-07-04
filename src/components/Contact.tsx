import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Github, Linkedin, MessageCircle, Send, CheckCircle, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate send (replace with EmailJS or Formspree)
    await new Promise((r) => setTimeout(r, 1500))
    setSending(false)
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contacts = [
    { icon: Mail, label: 'Email', value: 'syedasif@email.com', href: 'mailto:syedasif@email.com', color: '#2563EB' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/syedasif', href: 'https://linkedin.com/in/syedasif', color: '#0A66C2' },
    { icon: Github, label: 'GitHub', value: 'github.com/SyedAsif', href: 'https://github.com/SyedAsif', color: '#F8FAFC' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+92 xxx xxx xxxx', href: 'https://wa.me/92xxxxxxxxxx', color: '#22C55E' },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="orb w-96 h-96 top-0 right-0 opacity-10" style={{ backgroundColor: '#2563EB' }} />
      <div className="orb w-80 h-80 bottom-0 left-0 opacity-10" style={{ backgroundColor: '#14B8A6' }} />

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
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#64748B' }}>
            Have a project in mind? I'd love to hear about it. Send a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Available for Freelance Work
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              I'm currently taking on new backend development projects. Whether it's building a new system from scratch,
              improving an existing codebase, or integrating complex APIs — let's talk.
            </p>

            {/* Quick info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm" style={{ color: '#94A3B8' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  <MapPin size={14} style={{ color: '#38BDF8' }} />
                </div>
                <span>Remote — Available Worldwide</span>
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: '#94A3B8' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  <Clock size={14} style={{ color: '#38BDF8' }} />
                </div>
                <span>Response time: within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>
                <span style={{ color: '#22C55E', fontWeight: 500 }}>Currently Available</span>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contacts.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                  style={{ backgroundColor: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(37, 99, 235, 0.15)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${color}50`; e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.9)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.15)'; e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.7)' }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-xs font-medium" style={{ color: '#64748B' }}>{label}</div>
                    <div className="text-sm font-medium" style={{ color: '#CBD5E1' }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(37, 99, 235, 0.2)' }}>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={48} style={{ color: '#22C55E', margin: '0 auto 16px' }} />
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Message Sent!</h3>
                  <p className="text-sm" style={{ color: '#94A3B8' }}>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: '#94A3B8' }}>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                        style={{
                          backgroundColor: 'rgba(15, 23, 42, 0.8)',
                          border: '1px solid rgba(37, 99, 235, 0.2)',
                          color: '#F1F5F9',
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(37, 99, 235, 0.15)' }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.2)'; e.currentTarget.style.boxShadow = 'none' }}
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: '#94A3B8' }}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                        style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(37, 99, 235, 0.2)', color: '#F1F5F9' }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(37, 99, 235, 0.15)' }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.2)'; e.currentTarget.style.boxShadow = 'none' }}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: '#94A3B8' }}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Discussion / Hire / Collaboration"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                      style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(37, 99, 235, 0.2)', color: '#F1F5F9' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(37, 99, 235, 0.15)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.2)'; e.currentTarget.style.boxShadow = 'none' }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: '#94A3B8' }}>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, requirements, timeline..."
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 resize-none"
                      style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(37, 99, 235, 0.2)', color: '#F1F5F9' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(37, 99, 235, 0.15)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.2)'; e.currentTarget.style.boxShadow = 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all duration-300 disabled:opacity-70"
                    style={{
                      background: 'linear-gradient(135deg, #2563EB, #38BDF8)',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
                    }}
                    onMouseEnter={(e) => { if (!sending) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.5)' } }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)' }}
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
