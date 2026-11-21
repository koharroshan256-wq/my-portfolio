import React, { useState } from 'react'
import { PORTFOLIO_DATA } from '@/data/content'
import { Heading } from '@/components/ui/Heading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import {
  BarChart3,
  Database,
  Layout,
  BrainCircuit,
  CheckCircle,
  Sparkles,
} from 'lucide-react'

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all')

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-cyan-400" />
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-400" />
      case 'Layout':
        return <Layout className="w-5 h-5 text-emerald-400" />
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-violet-400" />
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />
    }
  }

  const displayedCategories =
    selectedCategory === 'all'
      ? PORTFOLIO_DATA.skillsCategories
      : [PORTFOLIO_DATA.skillsCategories[selectedCategory]]

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07090e]/95">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Heading
          tag="Core Competencies"
          title="Skills Engineered for Data & Visual Precision"
          subtitle="A comprehensive toolkit combining rigorous statistical data manipulation with clean, responsive interface engineering."
          gradientWord="Precision"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            All Competencies
          </button>
          {PORTFOLIO_DATA.skillsCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(idx)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                selectedCategory === idx
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((category) => (
            <Card
              key={category.title}
              variant="glass"
              className="p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/10">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-syne text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skill Bars with Tags */}
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-semibold text-slate-200 flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-cyan-300 font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Meter */}
                      <div className="h-2 w-full bg-slate-950/80 rounded-full overflow-hidden border border-white/5 p-0.5">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {/* Sub-tags */}
                      {skill.tags && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {skill.tags.map((tag) => (
                            <Badge key={tag} variant="slate" size="sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Summary Pill */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Verified in production & academic pipelines</span>
                <span className="text-emerald-400">● Active Focus</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
