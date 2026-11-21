import React from 'react'
import { PORTFOLIO_DATA } from '@/data/content'
import { Heading } from '@/components/ui/Heading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import {
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Glow decorations */}
      <div className="absolute top-1/2 -left-36 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Heading
          tag="Who I Am"
          title="Bridging Analytical Precision with Intuitive Engineering"
          subtitle="Passionate about uncovering hidden patterns, building reliable data pipelines, and transforming analytics into business decisions."
          gradientWord="Precision"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Photo / Avatar Hologram & Quick Status (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card variant="glass" className="relative p-6 sm:p-8 flex flex-col items-center text-center">
              {/* Futuristic Avatar Frame */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 mb-6 shadow-2xl shadow-cyan-500/20 group">
                <div className="w-full h-full rounded-2xl bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden border border-white/10">
                  {/* Decorative background grid */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
                  
                  {/* Monogram / Hologram Symbol */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500/20 to-indigo-500/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-syne font-extrabold text-3xl shadow-inner">
                    RK
                  </div>
                  
                  <div className="mt-3 relative z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                    <Sparkles className="w-3 h-3" />
                    <span>Roshan Kohar</span>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-3 -right-3 bg-slate-900 border border-emerald-500/40 rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Future Interns Alum</span>
                </div>
              </div>

              <h3 className="text-xl font-bold font-syne text-white">
                {PORTFOLIO_DATA.personal.name}
              </h3>
              <p className="text-sm font-mono text-cyan-400 mt-1">
                B.Tech Computer Science & Engineering
              </p>

              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Specialized in Data Cleaning, EDA, Power BI Dashboards, SQL Database Architecture, and Interactive Modern UI Engineering.
              </p>

              <div className="w-full pt-6 mt-6 border-t border-white/10 flex flex-wrap justify-center gap-2">
                <Badge variant="cyan" size="sm">Python</Badge>
                <Badge variant="cyan" size="sm">Power BI</Badge>
                <Badge variant="emerald" size="sm">SQL</Badge>
                <Badge variant="violet" size="sm">EDA</Badge>
                <Badge variant="slate" size="sm">React & UI</Badge>
              </div>
            </Card>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {PORTFOLIO_DATA.personal.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-md flex flex-col justify-center"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold font-syne text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-slate-400 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative & Experience Timeline (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Card variant="glass" className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                <span>Background & Philosophy</span>
              </div>
              <h3 className="text-2xl font-bold font-syne text-white">
                "Data is only as valuable as the actionable decisions it inspires."
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {PORTFOLIO_DATA.personal.shortBio}
              </p>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {PORTFOLIO_DATA.personal.fullBio}
              </p>
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="md"
                  href="#contact"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Discuss Analytics Projects
                </Button>
              </div>
            </Card>

            {/* Practical Experience Spotlight */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold font-syne text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <span>Hands-on Experience & Education</span>
              </h4>

              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <Card
                  key={idx}
                  variant="glass"
                  className="border-l-4 border-l-cyan-500 hover:border-l-cyan-400 transition-all p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-base font-bold font-syne text-white">
                      {exp.role}
                    </span>
                    <span className="text-xs font-mono text-cyan-300 flex items-center gap-1 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/60">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-cyan-400/90 mb-3 flex items-center gap-2">
                    {exp.role.includes('B.Tech') ? (
                      <GraduationCap className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Briefcase className="w-4 h-4 text-indigo-400" />
                    )}
                    {exp.organization} • {exp.location}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                    {exp.summary}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs sm:text-sm text-slate-400 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {exp.badges.map((b, bIdx) => (
                      <Badge key={bIdx} variant="slate" size="sm">
                        {b}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
