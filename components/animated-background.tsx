"use client"

import { useEffect, useRef } from "react"

type Props = {
  mode: "work" | "gamer"
}

export function AnimatedBackground({ mode }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const safeCanvas = canvas
    const safeCtx = ctx

    // 🎯 Theme detection INSIDE effect (important)
    const isGamer = mode === "gamer"

    // 🟣 Work theme
    const workDotRGB = "139, 92, 246"
    const workLineRGB = "139, 92, 246"

    // 🔴 Gamer theme
    const gamerDotRGB = "255, 70, 70"
    const gamerLineRGB = "255, 70, 70"

    const dotRGB = isGamer ? gamerDotRGB : workDotRGB
    const lineRGB = isGamer ? gamerLineRGB : workLineRGB

    let animationId: number
    const particles: Particle[] = []

    // 📱 mobile-safe particle count
    const particleCount = window.innerWidth < 768 ? 35 : 60

    function resize() {
      safeCanvas.width = window.innerWidth
      safeCanvas.height = window.innerHeight
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor() {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.4
        this.speedY = (Math.random() - 0.5) * 0.4
        this.opacity = Math.random() * 0.5 + 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > safeCanvas.width) this.x = 0
        if (this.x < 0) this.x = safeCanvas.width
        if (this.y > safeCanvas.height) this.y = 0
        if (this.y < 0) this.y = safeCanvas.height
      }

      draw() {
        safeCtx.beginPath()
        safeCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        safeCtx.fillStyle = `rgba(${dotRGB}, ${this.opacity})`
        safeCtx.fill()
      }
    }

    function init() {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = (1 - distance / 150) * (isGamer ? 0.22 : 0.15)
            safeCtx.beginPath()
            safeCtx.strokeStyle = `rgba(${lineRGB}, ${opacity})`
            safeCtx.lineWidth = 0.5
            safeCtx.moveTo(particles[i].x, particles[i].y)
            safeCtx.lineTo(particles[j].x, particles[j].y)
            safeCtx.stroke()
          }
        }
      }
    }

    function animate() {
      safeCtx.clearRect(0, 0, safeCanvas.width, safeCanvas.height)

      particles.forEach((p) => {
        p.update()
        p.draw()
      })

      drawConnections()
      animationId = requestAnimationFrame(animate)
    }

    resize()
    init()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [mode]) // ✅ IMPORTANT — reacts to toggle

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  )
}