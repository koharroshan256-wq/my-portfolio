import React from 'react'

export interface HeadingProps {
  tag?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  gradientWord?: string
  className?: string
}

export const Heading: React.FC<HeadingProps> = ({
  tag,
  title,
  subtitle,
  align = 'center',
  gradientWord,
  className = '',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align]

  // Render title with potential gradient word highlighting
  const renderTitle = () => {
    if (!gradientWord) return title

    const parts = title.split(new RegExp(`(${gradientWord})`, 'gi'))
    return parts.map((part, index) =>
      part.toLowerCase() === gradientWord.toLowerCase() ? (
        <span
          key={index}
          className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent"
        >
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  return (
    <div className={`flex flex-col ${alignClass} mb-12 md:mb-16 ${className}`}>
      {tag && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {tag}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-syne leading-tight">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
