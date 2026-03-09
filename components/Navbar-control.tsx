"use client"

import { useMode } from "@/components/mode-context"
import { WorkNavbar } from "./work/navbar"
import { GamerNavbar } from "./gamer/gamer-navbar"

export function Navbar() {
  const { mode } = useMode()

  return mode === "gamer" ? <GamerNavbar /> : <WorkNavbar />
}