"use client"

import { motion } from "framer-motion"
import { Zap, Code2, Wrench, Sparkles } from "lucide-react"

const skillGroups = [
  {
    title: "Programming Languages",
    icon: <Code2 className="h-5 w-5 text-neon-purple" />,
    skills: ["C", "Python", "SQL", "Java", ,"JavaScript", "React","Tailwind CSS"],
  },
  {
    title: "Tools",
    icon: <Wrench className="h-5 w-5 text-neon-cyan" />,
    skills: ["Git / GitHub", "VS Code", "Linux", "Twilio"],
  },
  {
    title: "Skills",
    icon: <Sparkles className="h-5 w-5 text-neon-blue" />,
    skills: ["Communication" , "Collaboration", "Adaptability"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-24 scroll-mt-28">
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 inline-flex items-center gap-3 text-3xl font-bold text-foreground sm:text-4xl">
            <Zap className="h-8 w-8 text-neon-purple" />
            Skills & Expertise
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-neon-purple" />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                {group.icon}
                <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground transition-all hover:border-neon-purple/40 hover:shadow-[0_0_10px_rgba(124,58,237,0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}