"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useMode } from "@/components/mode-context"

export function GamerNavbar() {
  const { toggleMode } = useMode()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: "About", href: "#gamer-about" },
    { label: "Gaming", href: "#gaming" },
    { label: "Anime", href: "#anime" },
    { label: "Connect", href: "#contact" },
    { label: "IRL", action: "toggle" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur border-b border-red-500/30"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto w-full max-w-6xl px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#gamer-hero"
          className="relative h-10 w-10 hover:scale-110 transition"
        >
          <Image
            src="/logos/RG-logo.png"
            alt="RG Logo"
            fill
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.action === "toggle" ? (
                <button
                  onClick={toggleMode}
                  className="text-sm font-semibold text-red-400 hover:scale-105 transition"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-red-400"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {mobileOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.3 }}
        className="glass-card border-t border-red-400/30 md:hidden"
        // className="backdrop-blur border-t border-red-400/30 md:hidden"
      >
        <ul className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.action === "toggle" ? (
                <button
                  onClick={() => {
                    toggleMode()
                    setMobileOpen(false)
                  }}
                  className="block text-sm font-semibold text-red-400 hover:scale-105 transition"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-muted-foreground hover:text-red-400"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    )}
    </motion.header>
  )
} 