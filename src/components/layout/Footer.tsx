import React, { useState, useEffect } from 'react'
import { PORTFOLIO_DATA } from '@/data/content'
import { ArrowUp, Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons'

export const Footer: React.FC = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
    }
    updateClock()
    const timer = setInterval(updateClock, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#05070a] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-syne font-bold text-cyan-400">
                RK
              </div>
              <span className="font-syne font-bold text-lg text-white">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {PORTFOLIO_DATA.personal.tagline} Focused on transforming raw, complex data into strategic business intelligence and intuitive visual dashboards.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Location: {PORTFOLIO_DATA.personal.location}</span>
              <span className="text-slate-600">|</span>
              <span className="font-mono text-cyan-400">{time ? `${time} IST` : 'Local Time'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              {PORTFOLIO_DATA.navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500/40 group-hover:w-2 transition-all" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <p className="text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase">
              Connect
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={PORTFOLIO_DATA.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.socials[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PORTFOLIO_DATA.socials[2].url}
                className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
            <span>using React, Three.js & Tailwind CSS.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Roshan Kohar. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
