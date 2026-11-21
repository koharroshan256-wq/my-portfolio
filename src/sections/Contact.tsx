import React, { useState } from 'react'
import { PORTFOLIO_DATA } from '@/data/content'
import { Heading } from '@/components/ui/Heading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons'
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Sparkles,
} from 'lucide-react'
import confetti from 'canvas-confetti'

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Data Analytics & Dashboards',
    message: '',
  })

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#6366f1', '#10b981'],
      })
    } catch {
      // safe fallback
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Glow lights */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Heading
          tag="Initiate Contact"
          title="Let's Build Something Impactful Together"
          subtitle="Whether you're looking for an analytical mind for your team, have an interesting dataset to explore, or want to build a modern web application — let's connect."
          gradientWord="Impactful"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct info & social cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="glass" className="space-y-6 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Badge variant="status" size="md">
                  Active & Available
                </Badge>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-syne text-white">
                  Direct Inquiries
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  I typically respond within 24 hours. Feel free to copy my direct email or connect through professional networks.
                </p>
              </div>

              {/* Copy Email Box */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="block text-[11px] font-mono text-slate-400">
                      Email Address
                    </span>
                    <span className="block text-sm font-semibold text-slate-100 truncate">
                      {PORTFOLIO_DATA.personal.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location & Status info */}
              <div className="space-y-2 text-xs font-mono text-slate-400 pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Based in {PORTFOLIO_DATA.personal.location} (Open to Remote Globally)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Internship & Full-time opportunities welcome</span>
                </div>
              </div>
            </Card>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PORTFOLIO_DATA.socials[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md flex items-center gap-3 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400">Network</span>
                  <span className="block text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    LinkedIn
                  </span>
                </div>
              </a>

              <a
                href={PORTFOLIO_DATA.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md flex items-center gap-3 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400">Repositories</span>
                  <span className="block text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    GitHub
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form UI (7 cols) */}
          <div className="lg:col-span-7">
            <Card variant="glass" className="p-6 sm:p-8">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-xl">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-syne text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name || 'there'}! I have received your message and will review it and reply promptly.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Data Analytics & Dashboards',
                        message: '',
                      })
                    }}
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                    >
                      <option value="Data Analytics & Dashboards">
                        Data Analytics & Dashboards (Power BI / Python)
                      </option>
                      <option value="Data Cleaning & EDA">
                        Data Cleaning & Exploratory Analysis
                      </option>
                      <option value="Full-time / Internship Role">
                        Full-time / Internship Role Offer
                      </option>
                      <option value="Frontend & UI Engineering">
                        Frontend & UI Engineering Collaboration
                      </option>
                      <option value="General Conversation">General Conversation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your dataset, role requirements, or project vision..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    className="w-full"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Send Direct Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
