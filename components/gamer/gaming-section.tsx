"use client"

import { motion } from "framer-motion"
import { Gamepad2, Trophy, Clock, Swords, Star, Target } from "lucide-react"
import Image from "next/image"

interface GameCard {
  title: string
  image: string
}

const favoriteGames: GameCard[] = [
  {
    title: "Wuthering Waves",
    image: "/images/gamer_mode/wuwa-fg.jpg",
 
  },
  {
    title: "Epic Seven",
    image: "/images/gamer_mode/Epic-7-fg.png",
  },
  {
    title: "Arknights: Endfield",
    image: "/images/gamer_mode/arknights-endfield.png",
  },
  {
    title: "Warframe",
    image: "/images/gamer_mode/warframe.png",
  },
  {
    title: "Counter Strike 2",
    image: "/images/gamer_mode/Counter-Strike-2.png",
  },
  {
    title: "NFS: Most Wanted 2012",
    image: "/images/gamer_mode/NFS-MW-2012.png",
  },
  {
    title: "Roblox",
    image: "/images/gamer_mode/roblox.png",
  },
  {
    title: "Lost Light",
    image: "/images/gamer_mode/lost-light.png",
  },
  {
    title: "World War Legion",
    image: "/images/gamer_mode/world-war-Legion.png",
  },
]


const stats = [
  { icon: <Trophy className="h-5 w-5" />, label: "Achievements", value: "342" },
  { icon: <Clock className="h-5 w-5" />, label: "Hours Played", value: "3,500+" },
  { icon: <Swords className="h-5 w-5" />, label: "Games Completed", value: "85" },
  { icon: <Star className="h-5 w-5" />, label: "Platinum Trophies", value: "12" },
]

export function GamingSection() {
  return (
    <section id="gaming" className="relative px-6 py-24 scroll-mt-28">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 inline-flex items-center gap-3 text-3xl font-bold text-foreground sm:text-4xl">
            <Gamepad2 className="h-8 w-8 text-red-400" />
            Gaming Corner
          </h2>

          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-red-400" />

          <p className="mt-4 text-muted-foreground">
            In every system, there is a weakness.
          </p>
        </motion.div>

        {/* Stats Bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 rounded-xl border border-red-900/40 bg-black/60 p-6 backdrop-blur-md"
        >
          <div className="mb-4 flex items-center gap-2">
            <Target className="h-4 w-4 text-red-400" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-red-400">
              Player Stats
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex flex-col items-center rounded-lg border border-red-900/40 bg-black/50 p-4 text-center"
              >
                <span className="mb-2 text-red-400">{stat.icon}</span>
                <span className="text-xl font-bold text-foreground">{stat.value}</span>
                <span className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Currently Playing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 rounded-xl border border-red-900/40 bg-black/60 p-6 backdrop-blur-md"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            <h3 className="font-mono text-xs uppercase tracking-wider text-green-400">
              Currently Playing
            </h3>
          </div>

          <div className="flex flex-col gap-4">
          {/* Currently Playing Game 1 */}
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/images/gamer_mode/wuwa-pl.png"
                alt="Currently playing Wuthering Waves"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">
                Wuthering Waves
              </p>
              {/* <p className="text-sm text-muted-foreground">
                Mode / Status
              </p> */}
            </div>
          </div>

          {/* Currently Playing Game 2 */}
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/images/gamer_mode/epic-7-pl.png"
                alt="Currently playing Epic Seven"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">
                Epic Seven
              </p>
              {/* <p className="text-sm text-muted-foreground">
                Mode / Status
              </p> */}
            </div>
          </div>
          </div>
        </motion.div>

        {/* Game Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteGames.map((game, idx) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 * idx }}
              className="group overflow-hidden rounded-xl border border-red-900/40 bg-black/60 backdrop-blur-md transition-all hover:shadow-[0_0_30px_rgba(255,70,70,0.25)]"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={game.image}
                  alt={`${game.title} game artwork`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* <span className="absolute right-3 top-3 rounded-md bg-red-400/20 px-2 py-0.5 font-mono text-[10px] uppercase text-red-400 backdrop-blur">
                  {game.genre}
                </span> */}
              </div>

              <div className="p-5">
                <h4 className="mb-2 text-lg font-bold text-foreground">
                  {game.title}
                </h4>

                {/* <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {game.hours} hrs
                  </span>

                  <span className="flex items-center gap-1.5 font-medium text-red-400">
                    <Trophy className="h-3.5 w-3.5" />
                    {game.rank}
                  </span>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}