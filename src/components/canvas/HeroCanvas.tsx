import React, { Suspense, useEffect, useState, Component } from 'react'
import { Canvas } from '@react-three/fiber'
import { DataCore3D } from './DataCore3D'
import { CanvasFallback } from './CanvasFallback'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { PORTFOLIO_DATA } from '@/data/content'
import { Rotate3d, Compass } from 'lucide-react'

// Error boundary to gracefully catch WebGL context crashes
interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: unknown) {
    console.warn('WebGL Rendering encountered an issue, falling back to static 3D canvas:', error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export const HeroCanvas: React.FC = () => {
  const mouse = useMousePosition()
  const isReducedMotion = useReducedMotion()
  const [isWebGLAvailable, setIsWebGLAvailable] = useState<boolean | null>(null)
  const [isInteracting, setIsInteracting] = useState(false)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setIsWebGLAvailable(Boolean(gl))
    } catch {
      setIsWebGLAvailable(false)
    }
  }, [])

  // If WebGL check failed or pending, or if WebGL is unavailable
  if (isWebGLAvailable === false) {
    return <CanvasFallback />
  }

  return (
    <div
      className="relative w-full h-[520px] sm:h-[600px] lg:h-[700px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      onMouseDown={() => setIsInteracting(true)}
      onMouseUp={() => setIsInteracting(false)}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={() => setIsInteracting(false)}
    >
      <WebGLErrorBoundary fallback={<CanvasFallback />}>
        <Suspense fallback={<CanvasFallback />}>
          <Canvas
            camera={{
              position: PORTFOLIO_DATA.model3DConfig.cameraPosition,
              fov: 45,
              near: 0.1,
              far: 1000,
            }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            className="w-full h-full"
          >
            <DataCore3D mouse={mouse} isReducedMotion={isReducedMotion} />
          </Canvas>
        </Suspense>
      </WebGLErrorBoundary>

      {/* Interactive 360 Hint Pill */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 text-xs font-medium text-slate-300 transition-opacity duration-300 pointer-events-none shadow-lg shadow-black/50 ${
          isInteracting ? 'opacity-40' : 'opacity-85 animate-pulse'
        }`}
      >
        <Rotate3d className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
        <span>Drag 360° to rotate data core</span>
        <Compass className="w-3.5 h-3.5 text-emerald-400" />
      </div>
    </div>
  )
}
