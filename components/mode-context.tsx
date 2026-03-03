"use client"

import { createContext, useContext, useState, useEffect } from "react"

type Mode = "work" | "gamer"

type ModeContextType = {
  mode: Mode
  toggleMode: () => void
}

const ModeContext = createContext<ModeContextType | null>(null)

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("work")

  const toggleMode = () => {
    const newMode = mode === "work" ? "gamer" : "work"
    setMode(newMode)

    // Scroll reset
    setTimeout(() => {
      if (newMode === "gamer") {
        document
          .getElementById("gamer-about")
          ?.scrollIntoView({ behavior: "auto" })
      } else {
        window.scrollTo({ top: 0, behavior: "auto" })
      }
    }, 50)
  }

  // Apply theme
  useEffect(() => {
    const root = document.documentElement
    if (mode === "gamer") {
      root.classList.add("gamer-theme")
    } else {
      root.classList.remove("gamer-theme")
    }
  }, [mode])

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  const ctx = useContext(ModeContext)
  if (!ctx) throw new Error("useMode must be used inside ModeProvider")
  return ctx
}