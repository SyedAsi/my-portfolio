import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', borderTop: '1px solid rgba(37, 99, 235, 0.15)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #2563EB, #38BDF8)' }}>
              <Code2 size={18} color="white" />
            </div>
            <div>
              <div className="font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span style={{ color: '#38BDF8' }}>Syed</span>
                <span style={{ color: '#F8FAFC' }}>Asif</span>
              </div>
              <div className="text-xs" style={{ color: '#64748B' }}>Java Backend Developer</div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-5">
            {['#about', '#tech', '#projects', '#services', '#contact'].map((href) => (
              <a
                key={href}
                href={href}
                className="text-xs transition-colors duration-200 capitalize"
                style={{ color: '#64748B' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
              >
                {href.replace('#', '')}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
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
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', color: '#64748B', border: '1px solid rgba(37, 99, 235, 0.15)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#38BDF8'; e.currentTarget.style.borderColor = '#38BDF8' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#64748B'; e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.15)' }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ borderTop: '1px solid rgba(37, 99, 235, 0.1)', color: '#475569' }}
        >
          <span>© {currentYear} Syed Asif. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with <Heart size={12} style={{ color: '#EF4444', margin: '0 2px' }} /> using React + Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  )
}
