import React, { useState } from 'react'
import { PORTFOLIO_DATA, Project } from '@/data/content'
import { Heading } from '@/components/ui/Heading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { GithubIcon } from '@/components/ui/Icons'
import {
  Sparkles,
  CheckCircle2,
  X,
  Layers,
} from 'lucide-react'

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All')
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null)

  const categories = [
    'All',
    'Data Analytics',
    'Business Intelligence',
    'Software Engineering',
  ]

  const filteredProjects =
    selectedFilter === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedFilter)

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Heading
          tag="Case Studies"
          title="Featured Analytics & Engineering Projects"
          subtitle="Explore practical data analytics dashboards, exploratory data analysis workflows, and database applications built to extract real-world value."
          gradientWord="Projects"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              variant="glass"
              className="group p-6 sm:p-8 flex flex-col justify-between border-slate-800 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="cyan" size="sm">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      <Sparkles className="w-3 h-3" />
                      Featured Project
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold font-syne text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/80 mt-1 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* KPI Metrics Chips */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-white/5 mb-6">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <span className="block text-sm sm:text-base font-extrabold font-syne text-cyan-400">
                          {m.value}
                        </span>
                        <span className="block text-[10px] text-slate-400 font-medium">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="slate" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveModalProject(project)}
                  icon={<Layers className="w-4 h-4" />}
                >
                  View Case Study
                </Button>

                {project.githubUrl && (
                  <Button
                    variant="secondary"
                    size="sm"
                    href={project.githubUrl}
                    external
                    icon={<GithubIcon className="w-4 h-4" />}
                  >
                    GitHub Code
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-950/40">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <Badge variant="cyan" size="sm" className="mb-3">
              {activeModalProject.category}
            </Badge>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-syne text-white">
              {activeModalProject.title}
            </h3>
            <p className="text-xs font-mono text-cyan-400 mt-1 mb-4">
              {activeModalProject.subtitle}
            </p>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
              <p>{activeModalProject.description}</p>
            </div>

            {/* Metrics */}
            {activeModalProject.metrics && (
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-white/10 mb-6">
                {activeModalProject.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <span className="block text-lg font-bold font-syne text-cyan-400">
                      {m.value}
                    </span>
                    <span className="block text-xs text-slate-400 mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                Key Technical Deliverables
              </h4>
              <ul className="space-y-2.5">
                {activeModalProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.technologies.map((t) => (
                  <Badge key={t} variant="slate" size="sm">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
              <Button
                variant="glow"
                size="md"
                href={activeModalProject.githubUrl}
                external
                icon={<GithubIcon className="w-4 h-4" />}
              >
                Inspect Repository on GitHub
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => setActiveModalProject(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
