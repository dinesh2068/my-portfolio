"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function GamerAboutSection() {
  return (
    <section
      id="gamer-about"
      className="relative px-6 py-16 scroll-mt-28"
    >
      <div className="mx-auto w-full max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-8 md:grid-cols-2"
        >

          {/* 🎮 LEFT — TEXT */}
          <div className="space-y-6">

            <h2 className="text-3xl font-bold text-red-400">
              Rufus Grimmoir
            </h2>

            {/* 🔥 Styled Quote */}
            <blockquote className="text-lg leading-relaxed text-red-200 italic">
              “If you are losing at a game, change your game.
              Remember there is no game you cannot cheat.”
               <span className="block mt-4 w-fit ml-[55%] text-sm not-italic text-red-400/80">
                  – No Game No Life
               </span>
            </blockquote>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 text-sm pt-2">
              <span className="rounded-lg border border-red-400/30 px-3 py-1 text-red-400">
                PC & Mobile
              </span>
              <span className="rounded-lg border border-red-400/30 px-3 py-1 text-red-400">
                Since 2017
              </span>
            </div>

          </div>

          {/* 🖼 RIGHT — PROFILE IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl bg-red-500/20" />
              <Image
                src="/images/gamer_mode/gamer-profile.png"
                alt="Rufus Grimmoir"
                width={240}
                height={240}
                className="relative rounded-full border border-red-400/30 object-cover"
              />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}