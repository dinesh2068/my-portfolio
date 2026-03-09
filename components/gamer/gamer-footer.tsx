"use client"

import Image from "next/image"
import { Mail, Instagram } from "lucide-react"

export function GamerFooter() {
  return (
    <footer className="border-t border-red-900/40 bg-black/60 py-10 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-3 text-left">

          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <div className="relative h-7 w-7">
              <Image
                src="/logos/RG-logo.png"
                alt="RG Logo"
                fill
                className="object-contain "
              />
            </div>

            <span className="font-semibold tracking-wide text-red-400">
              Rufus Grimmoir
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-red-300/60">
            In every system, there is a weakness.
          </p>

          {/* Copyright */}
          <p className="text-xs text-red-500/50">
           Copyright © {new Date().getFullYear()} Grimmoir Organization. All rights reserved.
          </p>

        </div>

        {/* RIGHT SIDE - Social Icons */}
        <div className="flex items-center gap-5">

          {[
            {
              icon: <Mail className="h-4 w-4" />,
              href: "mailto:rufusgrimmoir@gmail.com",
              label: "Email",
            },
            {
              icon: <Instagram className="h-4 w-4" />,
              href: "https://www.instagram.com/call__me__mr.dk/",
              label: "Instagram",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-900/40 bg-black/40 text-red-400 transition-all hover:border-red-500 hover:text-red-300 hover:shadow-[0_0_10px_rgba(220,38,38,0.6)]"
            >
              {social.icon}
            </a>
          ))}

        </div>

      </div>
    </footer>
  )
}