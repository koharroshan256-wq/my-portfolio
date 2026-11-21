import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'glass' | 'solid' | 'glow' | 'subtle'
  interactive?: boolean
  className?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'glass',
  interactive = true,
  className = '',
  ...props
}) => {
  const variantStyles = {
    glass:
      'bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40',
    solid:
      'bg-[#0d1321] border border-slate-800 shadow-xl shadow-black/40',
    glow:
      'bg-gradient-to-b from-slate-900/80 to-slate-950/90 backdrop-blur-xl border border-cyan-500/20 shadow-2xl shadow-cyan-950/20',
    subtle:
      'bg-white/[0.02] border border-white/5 backdrop-blur-md',
  }

  const interactiveStyles = interactive
    ? 'transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-cyan-500/10 hover:shadow-2xl'
    : ''

  return (
    <div
      className={`rounded-2xl p-6 md:p-8 relative overflow-hidden ${variantStyles[variant]} ${interactiveStyles} ${className}`}
      {...props}
    >
      {/* Decorative gradient corner light */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      {children}
    </div>
  )
}
