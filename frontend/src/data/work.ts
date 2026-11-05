import type { Project } from "../types/work";

export const projects: Project[] = [
  {
    number: "01",
    name: "Apna Ashiana",
    title: "Find a place to call home.",
    description:
      "A full-stack property platform designed to simplify property discovery and management with a modern user experience.",
    category: "Full-Stack Application",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    status: "Completed",
    liveDemo: "",
    github: "",
    accent: "from-lime-400/20 via-emerald-500/10 to-transparent",
  },
  {
    number: "02",
    name: "Reelverse",
    title: "Explore the world of cinema.",
    description:
      "A movie discovery experience powered by TMDB, featuring searchable content and dynamic movie information.",
    category: "Frontend Application",
    technologies: ["React", "TypeScript", "Tailwind CSS", "TanStack Query"],
    status: "Completed",
    liveDemo: "https://reelverse-app.vercel.app",
    github: "",
    accent: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    number: "03",
    name: "Todo App",
    title: "Organize. Prioritize. Get things done.",
    description:
      "A task management application built around a structured REST API, PostgreSQL database, and modern frontend.",
    category: "PERN Stack Application",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    status: "In Progress",
    liveDemo: "",
    github: "",
    accent: "from-sky-500/20 via-cyan-500/10 to-transparent",
  },
  {
    number: "04",
    name: "Jaatni",
    title: "A little experience made personal.",
    description:
      "A personalized interactive birthday experience with animated storytelling and carefully crafted details.",
    category: "Creative Web Experience",
    technologies: ["React", "GSAP", "CSS"],
    status: "Completed",
    liveDemo: "",
    github: "",
    accent: "from-pink-500/20 via-rose-500/10 to-transparent",
  },
];