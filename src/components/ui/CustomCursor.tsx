import React, { useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const prefersReduced = useReducedMotion()

  useEffect(() => {
    // Detect touch-only screen
    if (window.matchMedia('(pointer: coarse)').matches || prefersReduced) {
      setIsTouchDevice(true)
      return
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.interactive-hover'))
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [isVisible, prefersReduced])

  // Smooth lagging ring
  useEffect(() => {
    if (isTouchDevice || prefersReduced) return

    let animationFrame: number
    const followCursor = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x
        const dy = position.y - prev.y
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        }
      })
      animationFrame = requestAnimationFrame(followCursor)
    }
    animationFrame = requestAnimationFrame(followCursor)

    return () => cancelAnimationFrame(animationFrame)
  }, [position, isTouchDevice, prefersReduced])

  if (isTouchDevice || !isVisible || prefersReduced) return null

  return (
    <>
      {/* Center sharp dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-cyan-400 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_8px_#06b6d4]"
        style={{
          width: isHovering ? '6px' : '6px',
          height: isHovering ? '6px' : '6px',
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* Outer interactive trailing ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-cyan-400/50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          isHovering
            ? 'scale-150 bg-cyan-500/15 border-cyan-300'
            : 'scale-100 bg-transparent'
        }`}
        style={{
          width: '32px',
          height: '32px',
          transform: `translate3d(${trailingPos.x - 16}px, ${trailingPos.y - 16}px, 0)`,
        }}
      />
    </>
  )
}
