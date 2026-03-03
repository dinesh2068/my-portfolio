"use client"

import { useEffect } from "react"
import { useMode } from "@/components/mode-context"

export function FaviconSwitcher() {
  const { mode } = useMode()

  useEffect(() => {
    let link = document.querySelector(
      "link[rel='icon']"
    ) as HTMLLinkElement | null

    if (!link) {
      link = document.createElement("link")
      link.rel = "icon"
      document.head.appendChild(link)
    }

    // Force instant refresh
    link.href =
      mode === "work"
        ? "/logos/dk-logo.png"
        : "/logos/RG-logo.png"
  }, [mode])

  return null
}