import React from 'react'
import { PORTFOLIO_DATA } from '@/data/content'
import { Heading } from '@/components/ui/Heading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import {
  Database,
  Filter,
  LineChart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

export const Process: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'DatabaseZap':
        return <Database className="w-5 h-5 text-cyan-400" />
      case 'Filter':
        return <Filter className="w-5 h-5 text-indigo-400" />
      case 'LineChart':
        return <LineChart className="w-5 h-5 text-emerald-400" />
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-violet-400" />
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />
    }
  }

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#07090e]/95">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Heading
          tag="Methodology"
          title="The Data-to-Impact Pipeline"
          subtitle="How I systematically take raw, unorganized business data and convert it into high-impact visual intelligence."
          gradientWord="Impact"
        />

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.process.map((step, idx) => (
            <Card
              key={step.step}
              variant="glass"
              className="relative p-6 sm:p-7 flex flex-col justify-between border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono font-extrabold text-3xl sm:text-4xl text-slate-800 group-hover:text-cyan-400/40 transition-colors">
                    {step.step}
                  </span>
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-syne text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  {step.shortDesc}
                </p>

                {/* Details list */}
                <div className="space-y-2.5 mb-6">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* KPI Benchmark Badge */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">Benchmark:</span>
                <Badge variant="cyan" size="sm">
                  {step.kpi}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom pipeline banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-indigo-950/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <p className="text-sm text-slate-200">
              Need a custom analytics dashboard or transactional database schema?
            </p>
          </div>
          <a
            href="#contact"
            className="text-xs font-mono font-bold text-cyan-300 hover:text-cyan-200 flex items-center gap-1.5 transition-colors"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
