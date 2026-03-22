"use client"

import Image from "next/image"
import { Github, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">

        {/* Logo + Copyright */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          {/* <div className="relative h-5 w-5">
            <Image
              src="/logos/dk-logo.png"
              alt="DK Logo"
              fill
              className="object-contain "
            />
          </div> */}

          <span>
           Copyright © {new Date().getFullYear()} DK . All rights reserved.
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {[
            { icon: <Github className="h-4 w-4" />, href: "https://github.com/dinesh2068", label: "GitHub" },
            { icon: <Linkedin className="h-4 w-4" />, href: "https://www.linkedin.com/in/dineshkarthik-n/", label: "LinkedIn" },
            { icon: <Instagram className="h-4 w-4" />, href: "https://www.instagram.com/call__me__mr.dk/", label: "Instagram" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted-foreground transition-colors hover:text-neon-purple"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}