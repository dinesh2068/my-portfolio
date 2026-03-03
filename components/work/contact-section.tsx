"use client"

import { motion } from "framer-motion"
import { Mail, Send, Github, Linkedin, Phone } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formState.name}`
    )
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )

    window.location.href = `mailto:baladinesh2068@gmail.com?subject=${subject}&body=${body}`

    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="relative px-6 py-24 scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 inline-flex items-center gap-3 text-3xl font-bold text-foreground sm:text-4xl">
            <Mail className="h-8 w-8 text-neon-purple" />
            Get In Touch
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-neon-purple" />
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* LEFT SIDE — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to new opportunities.
            </p>

            <div className="flex flex-col gap-4">

              <a
                href="tel:+91 6379731223" className="flex items-center gap-3 rounded-lg border border-border bg-secondary/50 p-4 transition-all hover:border-neon-purple/40">
                <Phone className="h-5 w-5 text-neon-cyan" />
                <span className="text-sm font-medium text-foreground">
                  +91 6379731223
                </span>
              </a>

              <a
                href="mailto:baladinesh2068@gmail.com"
                className="flex items-center gap-3 rounded-lg border border-border bg-secondary/50 p-4 transition-all hover:border-neon-purple/40"
              >
                <Mail className="h-5 w-5 text-neon-cyan" />
                <span className="text-sm font-medium text-foreground">
                  baladinesh2068@gmail.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/dineshkarthik-n/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border bg-secondary/50 p-4 transition-all hover:border-neon-purple/40"
              >
                <Linkedin className="h-5 w-5 text-neon-cyan" />
                <span className="text-sm font-medium text-foreground">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://github.com/dinesh2068"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border bg-secondary/50 p-4 transition-all hover:border-neon-purple/40"
              >
                <Github className="h-5 w-5 text-neon-cyan" />
                <span className="text-sm font-medium text-foreground">
                  GitHub
                </span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE — Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-xl p-8 flex flex-col gap-5"
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formState.name}
              onChange={(e) =>
                setFormState((s) => ({ ...s, name: e.target.value }))
              }
              className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-neon-purple/50 focus:outline-none focus:ring-1 focus:ring-neon-purple/30"
            />

            <input
              type="email"
              required
              placeholder="Your Email"
              value={formState.email}
              onChange={(e) =>
                setFormState((s) => ({ ...s, email: e.target.value }))
              }
              className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-neon-purple/50 focus:outline-none focus:ring-1 focus:ring-neon-purple/30"
            />

            <textarea
              rows={5}
              required
              placeholder="Tell me about your project or just say hello..."
              value={formState.message}
              onChange={(e) =>
                setFormState((s) => ({ ...s, message: e.target.value }))
              }
              className="resize-none rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-neon-purple/50 focus:outline-none focus:ring-1 focus:ring-neon-purple/30"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-neon-purple px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}