"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export function GamerAboutSection() {
  const [flipped, setFlipped] = useState(false)
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
          className="grid items-center gap-8 text-center md:grid-cols-2 md:text-left"
        >

          {/* 🎮 LEFT — TEXT */}
          <div className="space-y-6 order-2 md:order-1">

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
            <div className="flex flex-wrap justify-center gap-3 text-sm md:justify-start">
              <span className="rounded-lg border border-red-400/30 px-3 py-1 text-red-400">
                PC & Mobile
              </span>
              <span className="rounded-lg border border-red-400/30 px-3 py-1 text-red-400">
                Since 2017
              </span>
            </div>

          </div>

          {/* 🖼 RIGHT — PROFILE IMAGE */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div
              className="relative w-[240px] h-[240px] cursor-pointer [perspective:1200px]"
              onMouseEnter={() => setFlipped(true)}
              onMouseLeave={() => setFlipped(false)}
              onClick={() => setFlipped(!flipped)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >

                {/* FRONT */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="absolute inset-0 rounded-full blur-3xl bg-red-500/20" />

                  <Image
                    src="/images/gamer_mode/gamer-profile.png"
                    alt="Rufus Grimmoir"
                    width={240}
                    height={240}
                    className="relative rounded-full border border-red-400/30 object-cover"
                  />
                </div>

                {/* BACK */}
                <div className="absolute inset-0 flex items-center justify-center rounded-full border border-red-400/30 bg-black/80 text-center p-6 text-red-300 [transform:rotateY(180deg)] [backface-visibility:hidden]">

                  <p className="text-sm italic leading-relaxed">
                    "If you are losing a game, change your game.  
                    Remember there is no game you cannot cheat."
                  </p>

                </div>

              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}