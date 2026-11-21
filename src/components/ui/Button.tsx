import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  href?: string
  external?: boolean
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  external = false,
  children,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-medium tracking-wide',
    md: 'px-6 py-3 text-sm font-semibold tracking-wide',
    lg: 'px-8 py-4 text-base font-bold tracking-wide',
  }

  const variantStyles = {
    primary:
      'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 border border-cyan-400/30',
    glow:
      'relative overflow-hidden bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 text-slate-950 font-bold shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 border border-white/20',
    secondary:
      'bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border border-slate-700/80 shadow-md hover:border-slate-600 hover:-translate-y-0.5',
    outline:
      'bg-transparent hover:bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 shadow-sm hover:-translate-y-0.5',
    ghost:
      'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-transparent',
  }

  const baseStyles =
    'inline-flex items-center justify-center gap-2.5 rounded-full transition-all duration-300 cursor-pointer active:scale-95 disabled:opacity-50 disabled:pointer-events-none select-none group'

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
      >
        {content}
      </a>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  )
}
