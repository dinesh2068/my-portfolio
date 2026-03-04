"use client"

import { motion } from "framer-motion"
import { ChevronDown, ExternalLink, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center pt-24">

      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vw] w-[80vw] max-h-[600px] max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.05) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-8 lg:flex-row lg:justify-between">

        {/* LEFT – Text */}
        <motion.div
          className="flex max-w-xl flex-col gap-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-1.5 w-fit mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
            </span>
            <span className="text-xs font-medium tracking-wider text-neon-cyan uppercase">
              III Year - B.Tech Information Technology
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-neon-purple block sm:inline">
              Hey, I'm
            </span>{" "}
            <span className="block sm:inline">
              Dineshkarthik N
            </span>
          </h1>

          {/* Title */}
          <p className="font-mono text-base text-neon-cyan sm:text-lg md:text-xl">
            Full Stack Developer
          </p>

          {/* Tagline */}
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            I build powerful, efficient systems and craft immersive digital experiences.
            When the code compiles, the game begins.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 lg:justify-start">

            {/* View Projects */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-neon-purple px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              <ExternalLink className="h-4 w-4" />
              View Projects
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-neon-cyan/50 hover:text-neon-cyan"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-neon-purple/40 bg-neon-purple/10 px-6 py-3 text-sm font-semibold text-neon-purple transition-all hover:border-neon-purple hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
            >
              Download Resume
            </a>

          </div>
        </motion.div>

        {/* RIGHT – Profile Image */}
        <motion.div
          className="relative shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Glow */}
          <div className="absolute -inset-4 rounded-full bg-neon-purple/20 blur-2xl" />

          {/* Image */}
          <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-neon-purple/30 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <Image
              src="/images/work_mode/profile.png" 
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="#about" aria-label="Scroll Down">
          <ChevronDown className="h-6 w-6 animate-bounce text-muted-foreground hover:text-neon-purple transition-colors" />
        </a>
      </motion.div>

    </section>
  )
}