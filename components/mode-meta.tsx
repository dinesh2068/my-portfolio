"use client"

import { useEffect } from "react"
import { useMode } from "@/components/mode-context"

export function ModeMeta() {
  const { mode } = useMode()

  useEffect(() => {
    const metaDescription =
      document.querySelector("meta[name='description']") ||
      document.createElement("meta")

    metaDescription.setAttribute("name", "description")

    if (mode === "work") {
      document.title = "DK | Dineshkarthik"
      metaDescription.setAttribute(
        "content",
        "DK — Full Stack Developer"
      )
    } else {
      document.title = "RG | Rufus Grimmoir"
      metaDescription.setAttribute(
        "content",
        "Rufus Grimmoir"
      )
    }

    document.head.appendChild(metaDescription)
  }, [mode])

  return null
}