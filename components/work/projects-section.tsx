"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, FolderOpen } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: "AutoRefresher",
    description:
      "A Chrome extension that detects webpage server errors (e.g., 500, 502) and automatically refreshes the page until it loads successfully, improving reliability in unstable networks.",
    image: "/images/work_mode/autorefresher.png",
    tags: ["HTML", "CSS", "Javascript", "Manifest V3"],
    github: "https://github.com/dinesh2068/WebPage_Auto_Refresher.git",
  },
  {
    title: "CampusCred: Student OD Management System",
    description:
      "Collaborated on developing a Student OD Management System to digitize and streamline request submission, approval, and tracking processes. ",
    image: "/images/work_mode/campuscred.png",
    tags: ["React.js", "TypeScript", "JavaScript", "HTML", "CSS", "PostgreSQL","Supabase"],
    github: "https://github.com/dinesh2068/CampusCred-miniproject.git",
  },
  {
    title: "Evolve GYM",
    description:
      "Built a gym management system as part of an internship, leading UI/UX development with React.js and Tailwind CSS, and integrating FastAPI + Supabase for real-time, role-based features.",
    image: "/images/work_mode/evolve-gym.png",
    tags: ["React", "Node.js", "Tailwind CSS","PostgreSQL","Supabase"],
    github: "https://github.com/dinesh2068/Gym-Management-Project.git",
    demo: "https://evolvegym-tn.vercel.app/",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-24 scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 inline-flex items-center gap-3 text-3xl font-bold text-foreground sm:text-4xl">
            <FolderOpen className="h-8 w-8 text-neon-purple" />
            Projects
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-neon-purple" />
          <p className="mt-4 text-muted-foreground">
            A selection of things I have built and shipped.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 * idx }}
              className="glass-card group overflow-hidden rounded-xl transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} `}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-neon-cyan/20 bg-neon-cyan/10 px-2 py-0.5 font-mono text-[10px] text-neon-cyan uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-neon-purple/50 hover:text-neon-purple"
                      aria-label={`View ${project.title} source on GitHub`}
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-neon-purple/20 px-3 py-1.5 text-xs font-medium text-neon-purple transition-colors hover:bg-neon-purple/30"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/dinesh2068?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 px-8 py-4 rounded-xl border border-neon-purple/30 bg-neon-purple/10 hover:bg-neon-purple/20 backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.25)] hover:shadow-[0_0_35px_rgba(124,58,237,0.5)]"
        >
          <span className="text-base text-neon-purple tracking-wide">
            See more on
          </span>

          <Github className="w-6 h-6 text-neon-purple group-hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
      </div>
    </section>
  )
}
