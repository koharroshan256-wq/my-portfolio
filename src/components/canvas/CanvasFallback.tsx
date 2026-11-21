import React from 'react'

export const CanvasFallback: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
      {/* Background radial glow */}
      <div className="absolute w-[340px] h-[340px] md:w-[480px] md:h-[480px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-emerald-500/10 blur-3xl animate-pulse" />

      {/* Isometric Animated Core */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-cyan-400/20 border-dashed animate-[spin_20s_linear_infinite]" />
        
        {/* Middle Ring */}
        <div className="absolute inset-6 rounded-full border border-indigo-400/30 animate-[spin_15s_linear_infinite_reverse]" />

        {/* Orbiting data points */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#06b6d4] animate-ping" />
        <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981]" />
        <div className="absolute top-12 left-6 w-3 h-3 rounded-full bg-indigo-400 shadow-[0_0_12px_#818cf8]" />

        {/* Central Geometric Hologram */}
        <div className="relative z-10 w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-indigo-600/30 to-emerald-500/10 border border-cyan-400/40 backdrop-blur-xl rotate-45 flex items-center justify-center shadow-[0_0_35px_rgba(6,182,212,0.25)]">
          <div className="w-20 h-20 rounded-xl bg-cyan-950/60 border border-cyan-300/30 -rotate-45 flex flex-col items-center justify-center">
            <span className="text-cyan-300 font-mono text-xs font-bold tracking-widest">DATA</span>
            <span className="text-emerald-400 font-mono text-[10px] tracking-wider">INSIGHT</span>
          </div>
        </div>
      </div>
    </div>
  )
}
