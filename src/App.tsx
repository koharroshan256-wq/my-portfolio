import React from 'react'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Projects } from '@/sections/Projects'
import { Process } from '@/sections/Process'
import { Contact } from '@/sections/Contact'

export function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Dynamic interactive desktop cursor */}
        <CustomCursor />

        {/* Sticky navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Process />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
