"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24 scroll-mt-28">
      <div className="mx-auto max-w-4xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 inline-flex items-center gap-3 text-3xl font-bold text-foreground sm:text-4xl">
            <User className="h-8 w-8 text-neon-purple" />
            About Me
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-neon-purple" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            I'm an aspiring full stack developer with a strong foundation in{" "}
            <span className="font-medium text-foreground">Javascript</span>,{" "}
            <span className="font-medium text-foreground">React</span>, and{" "}
            <span className="font-medium text-foreground">Tailwind CSS</span>. 
            I focus on building web applications that are both functional and visually clean.
          </p>

          <p>
            My experience spans from crafting responsive frontends to building 
            robust backends with{" "}
            <span className="font-medium text-foreground">FastAPI</span> and{" "}
            <span className="font-medium text-foreground">Supabase</span>. 
            I enjoy working on real-world automation and systems that solve practical problems.
          </p>

          <p>
            I believe in writing clean, maintainable code and continuously 
            learning new technologies to deliver efficient and scalable solutions.
          </p>
        </motion.div>

      </div>
    </section>
  )
}