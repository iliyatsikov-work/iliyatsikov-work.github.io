"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  experiences,
  navigationItems,
  projects,
  skillGroups,
} from "@/data/portfolio";
import { ExperienceItem } from "@/components/experience-item";
import { ProjectCard } from "@/components/project-card";

export function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#164e63_0%,transparent_35%),radial-gradient(circle_at_70%_20%,#312e81_0%,transparent_35%)] opacity-40" />

      <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold uppercase tracking-widest">
            Iliya Tsikov
          </a>
          <ul className="hidden items-center gap-5 md:flex">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-zinc-400 transition hover:text-cyan-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-10 px-6 py-20 lg:flex-row lg:items-center lg:justify-between"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              London, UK
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Iliya Tsikov
            </h1>
            <h2 className="text-2xl font-medium text-zinc-300 sm:text-3xl">
              Senior Unity Developer
            </h2>
            <p className="max-w-xl text-lg text-zinc-400">
              Building interactive experiences and games with Unity
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Contact
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto h-72 w-72 overflow-hidden rounded-3xl border border-zinc-700/70 shadow-[0_0_60px_rgba(8,145,178,0.25)]"
          >
            <Image
              src="/images/portrait.avif"
              alt="Iliya Tsikov portrait placeholder"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 288px, 320px"
            />
          </motion.div>
        </section>

        <section id="about" className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="grid gap-10 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">About</h2>
              <p className="text-zinc-300">
                Hi! I&apos;m a Senior Unity Developer working for Red Engine, the
                team behind Flight Club Darts and Electric Shuffle.
              </p>
              <p className="text-zinc-400">
                I build interactive gaming systems and have experience shipping
                production software across Unity and WinForms environments.
              </p>
              <p className="text-zinc-400">
                Background in software engineering and mechatronics.
              </p>
            </div>
            <div className="relative h-64 overflow-hidden rounded-2xl border border-zinc-800">
              <Image
                src="/images/portrait-second.jpg"
                alt="Secondary portrait placeholder"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-24">
          <h2 className="mb-10 text-3xl font-semibold">Experience</h2>
          <ul className="rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-8">
            {experiences.map((item, index) => (
              <ExperienceItem key={`${item.company}-${item.role}`} item={item} index={index} />
            ))}
          </ul>
        </section>

        <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold">Projects</h2>
            <p className="mt-3 text-zinc-400">
              Selected mobile and social game experiences.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-24">
          <h2 className="mb-10 text-3xl font-semibold">Skills</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.group}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <h3 className="text-lg font-semibold text-zinc-100">
                  {group.group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto w-full max-w-6xl px-6 py-24">
          <h2 className="mb-10 text-3xl font-semibold">Education</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-lg font-semibold text-zinc-100">
                University of Nottingham
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Mechanical Engineering with Mechatronics, Mechatronics,
                Robotics, and Automation Engineering
              </p>
              <p className="mt-2 text-sm text-zinc-500">(2013 - 2017)</p>
            </article>
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-lg font-semibold text-zinc-100">
                Royal Grammar School High Wycombe
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Maths, Further Maths, Physics, Design and Technology
              </p>
              <p className="mt-2 text-sm text-zinc-500">(2006 - 2013)</p>
            </article>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="grid gap-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Contact</h2>
              <p className="text-zinc-400">
                Email:
                <a
                  href="mailto:iliyatsikovwork@gmail.com"
                  className="ml-2 text-cyan-300 hover:text-cyan-200"
                >
                  iliyatsikovwork@gmail.com
                </a>
              </p>
              <div className="flex gap-3 pt-2">
                <a
                  href="#"
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3 text-sm outline-none transition focus:border-cyan-400"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3 text-sm outline-none transition focus:border-cyan-400"
                required
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3 text-sm outline-none transition focus:border-cyan-400"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/80 px-6 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Iliya Tsikov</p>
          <div className="flex gap-4">
            <a href="#projects" className="transition hover:text-cyan-300">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-cyan-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
