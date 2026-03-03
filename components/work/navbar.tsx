"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useMode } from "@/components/mode-context"

export function Navbar() {
  const { mode, toggleMode } = useMode()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Mode-aware nav links
  const navLinks =
    mode === "gamer"
      ? [
          { label: "About", href: "#gamer-about" },
          { label: "Gaming", href: "#gaming" },
          { label: "Connect", href: "#contact" },
        ]
      : [
          { label: "About", href: "#about" },
          { label: "Skills", href: "#skills" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ]

  // Scroll blur effect
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const hoverClass =
    mode === "gamer" ? "hover:text-red-400" : "hover:text-neon-cyan"

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? mode === "gamer"
            ? "bg-black/60 backdrop-blur border-b border-red-400/20"
            : "glass-card shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* 🔥 LOGO MODE SWITCH */}
        <div className="flex items-center gap-3 select-none">

          <button
            onClick={toggleMode}
            className={`relative h-10 w-10 transition-all duration-300 hover:scale-110 ${
              mode === "gamer"
                ? "drop-shadow-[0_0_12px_rgba(220,38,38,0.8)]"
                : "drop-shadow-[0_0_12px_rgba(124,58,237,0.8)]"
            }`}
            aria-label="Toggle Mode"
          >
            <motion.div
              key={mode}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative h-10 w-10"
            >
              <Image
                src={mode === "work" ? "/logos/dk-logo.png" : "/logos/RG-logo.png"}
                alt="Mode Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </button>

          {/* Branding Text */}
          {/* {mode === "work" ? (
            <span className="neon-text-purple text-lg font-bold tracking-wide">
              Dineshkarthik N
            </span>
          ) : (
            <span className="text-red-400 text-lg font-bold tracking-wider">
              Rufus Grimmoir
            </span>
          )} */}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium text-muted-foreground transition-colors ${hoverClass}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="glass-card border-t border-border md:hidden"
        >
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm font-medium text-muted-foreground transition-colors ${hoverClass}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}