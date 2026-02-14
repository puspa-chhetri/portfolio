import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { createFileRoute } from '@tanstack/react-router'

import { useEffect, useState } from "react"
export const Route = createFileRoute('/')({ component: App })

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated cursor follower gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 lg:block hidden"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.06), transparent 80%)`
        }}
      />

      <div className="mx-auto max-w-screen-xl px-6 pt-2 pb-12 md:px-12 md:pt-6 md:pb-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column - Sticky Header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-2">
            <Hero />
          </header>

          {/* Right Column - Scrollable Content */}
          <main className="lg:w-1/2 lg:py-6">
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

      </div>
    </div>
  )
}
