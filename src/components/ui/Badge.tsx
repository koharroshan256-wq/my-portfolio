import React from 'react'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'cyan' | 'emerald' | 'violet' | 'slate' | 'status'
  size?: 'sm' | 'md'
  icon?: React.ReactNode
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  icon,
  className = '',
}) => {
  const sizeStyles = {
    sm: 'px-2.5 py-1 text-xs font-medium',
    md: 'px-3.5 py-1.5 text-xs md:text-sm font-semibold',
  }

  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/25',
    emerald: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25',
    violet: 'bg-violet-500/10 text-violet-300 border border-violet-500/25',
    slate: 'bg-slate-800/80 text-slate-300 border border-slate-700/60',
    status:
      'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 flex items-center gap-2',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full backdrop-blur-md transition-colors duration-200 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {variant === 'status' && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </span>
  )
}
