import React from 'react'
import { PORTFOLIO_DATA } from '@/data/content'
import { HeroCanvas } from '@/components/canvas/HeroCanvas'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import {
  ArrowDown,
  ArrowUpRight,
  Database,
  BarChart3,
  Sparkles,
  Layers,
} from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Vignette and Glow Orbs */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="status" size="md">
                Available for Roles & Internships
              </Badge>
              <span className="hidden sm:inline-flex text-xs font-mono text-slate-500">
                // B.Tech CSE Student
              </span>
            </div>

            {/* Main Animated Headline */}
            <div className="space-y-2">
              <p className="text-sm md:text-base font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Frontend Developer & UI Engineer</span>
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-syne text-white leading-[1.08]">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  {PORTFOLIO_DATA.personal.name}
                </span>
              </h1>
            </div>

            {/* Tagline & Short Bio snippet */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-200 max-w-xl font-syne">
              {PORTFOLIO_DATA.personal.tagline}
            </p>
            <p className="text-sm md:text-base text-slate-400 max-w-xl leading-relaxed">
              Aspiring Data Analyst and B.Tech CSE student passionate about transforming raw datasets into actionable business intelligence through Python, SQL, Power BI, and modern reactive web interfaces.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="glow"
                size="lg"
                href="#projects"
                icon={<ArrowUpRight className="w-5 h-5" />}
              >
                View Selected Work
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#about"
                icon={<Layers className="w-4 h-4" />}
                iconPosition="left"
              >
                About & Experience
              </Button>
            </div>

            {/* Quick Metrics / Focus Pillars */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                  Analytics
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-100 mt-1">
                  Power BI & EDA
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-indigo-400" />
                  Databases
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-100 mt-1">
                  SQL & Python
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Experience
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-100 mt-1">
                  Future Interns
                </span>
              </div>
            </div>

          </div>

          {/* Right Hero 3D Interactive Canvas (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroCanvas />
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono text-slate-500 pointer-events-none">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
      </div>
    </section>
  )
}
