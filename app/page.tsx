"use client"

import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/work/navbar"
import { HeroSection } from "@/components/work/hero-section"
import { AboutSection } from "@/components/work/about-section"
import { SkillsSection } from "@/components/work/skills-section"
import { ProjectsSection } from "@/components/work/projects-section"
import { ContactSection } from "@/components/work/contact-section"
import { Footer } from "@/components/work/footer"
import { useMode } from "@/components/mode-context"


import { GamerAboutSection } from "@/components/gamer/gamer-about-section"
import { GamingSection } from "@/components/gamer/gaming-section"
import { GamerConnectSection } from "@/components/gamer/gamer-connect-section"
import { GamerFooter } from "@/components/gamer/gamer-footer"

export default function Home() {
  const { mode } = useMode()

  return (
    <>
      <AnimatedBackground mode={mode} />
      <Navbar />

      <main
      className={`relative z-10 ${
        mode === "gamer" ? "pt-24 md:pt-28" : "pt-16 md:pt-20"
      }`}
      >

        {/* 💼 WORK MODE — FULL PROFESSIONAL */}
        {mode === "work" ? (
          <main className="mx-auto w-full max-w-6xl px-6">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
        ) : (
          /* 🎮 GAMER MODE — YOUR EXACT ORDER */
          <>
            <GamerAboutSection />
            <GamingSection />
            <GamerConnectSection />
          </>
        )}

      </main>

      {mode === "work" ? <Footer /> : <GamerFooter />}
    </>
  )
}