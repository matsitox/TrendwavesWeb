"use client"

import { useEffect, useRef, useState } from "react"
import { ContactModal } from "./contact-modal"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    interface Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      pulse: number
      pulseSpeed: number
    }

    const particles: Particle[] = []
    const particleCount = 80

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 6 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.pulse += particle.pulseSpeed

        const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.2
        const pulseSize = particle.size + Math.sin(particle.pulse) * 1

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, pulseSize * 2)
        gradient.addColorStop(0, `rgba(0, 255, 0, ${pulseOpacity})`)
        gradient.addColorStop(0.5, `rgba(0, 200, 0, ${pulseOpacity * 0.5})`)
        gradient.addColorStop(1, "rgba(0, 255, 0, 0)")

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 0, ${pulseOpacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80 z-[1]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              <span className="italic">Fusionando</span>
              <br />
              <span className="italic">marcas &</span>
              <br />
              <span className="italic">influencers</span>
            </h1>
            <button
              onClick={() => setIsContactOpen(true)}
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium transition-colors"
            >
              CONTÁCTANOS
            </button>
          </div>
          <div className="lg:text-right">
            <p className="text-lg text-muted-foreground max-w-xl lg:ml-auto leading-relaxed">
              Trendwaves es una agencia de marketing que conecta marcas con resultados, combinando creatividad,
              estrategia y el impulso de nuestros influencers para potenciar cada servicio.
            </p>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  )
}
