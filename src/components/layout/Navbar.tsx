import React, { useState, useEffect } from 'react'
import { PORTFOLIO_DATA } from '@/data/content'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'process', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#07090e]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 group select-none cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center font-syne font-extrabold text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all duration-300 shadow-md shadow-cyan-950/30">
                <Terminal className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-bold text-slate-100 text-base tracking-tight group-hover:text-cyan-300 transition-colors">
                  {PORTFOLIO_DATA.personal.name}
                </span>
                <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                  Data Analyst & UI
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-slate-900/60 border border-white/[0.08] backdrop-blur-md">
              {PORTFOLIO_DATA.navigation.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-500/10'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full" />
                    )}
                  </a>
                )
              })}
            </nav>

            {/* Status & CTA Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Badge variant="status" size="sm" className="hidden xl:inline-flex">
                Available for Roles
              </Badge>
              <Button
                size="sm"
                variant="glow"
                href="#contact"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#07090e]/95 backdrop-blur-2xl flex flex-col justify-between p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center font-syne font-bold text-cyan-400">
                RK
              </div>
              <span className="font-syne font-bold text-slate-100">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 my-auto py-8">
            {PORTFOLIO_DATA.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-syne font-bold text-slate-300 hover:text-cyan-400 transition-colors flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>{item.name}</span>
                <ArrowUpRight className="w-5 h-5 text-cyan-400/60" />
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <Badge variant="status" size="md">
              Open to Data Analytics Roles
            </Badge>
            <Button
              variant="glow"
              size="md"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
