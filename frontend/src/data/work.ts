import type { Project } from "../types/work";
import reelverse2Preview from "../assets/projects/reelverse-2.0.webp";
import reelversePreview from "../assets/projects/reelverse.webp";
import clarityPreview from "../assets/projects/clarity.webp";

export const projects: Project[] = [
  {
    number: "01",
    name: "Reelverse 2.0",
    title: "A better way to explore cinema.",
    description:
      "An upgraded movie discovery experience with enhanced search functionality, dynamic movie information, and a refined frontend architecture.",
    category: "Frontend Application",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "TanStack Query",
    ],
    status: "Completed",
    liveDemo: "https://reelverse-app.vercel.app",
    github: "https://github.com/Vivek-Sharma-dev/ReelVerse-2.0",
    accent: "from-fuchsia-500/20 via-violet-500/10 to-transparent",
    preview: reelverse2Preview,
  },
  {
    number: "02",
    name: "Todo App",
    title: "Organize. Prioritize. Get things done.",
    description:
      "A full-stack task management application built with the PERN stack, featuring a structured REST API, PostgreSQL database, authentication, and task management workflows.",
    category: "Full-Stack Application",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    status: "In Progress",
    liveDemo: "",
    github: "",
  },
  {
    number: "03",
    name: "Reelverse",
    title: "Discover movies worth watching.",
    description:
      "A movie discovery application powered by TMDB, allowing users to explore movies and access dynamic movie information through a clean frontend experience.",
    category: "Frontend Application",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    status: "Completed",
    liveDemo: "https://reelverse-project.vercel.app",
    github: "https://github.com/Vivek-Sharma-dev/reelverse-project",
    preview: reelversePreview,
  },
  {
    number: "04",
    name: "Clarity",
    title: "Recreating interfaces with precision.",
    description:
      "A Bootstrap-inspired interface recreated using React and Tailwind CSS, focusing on component architecture, responsive layouts, and styling.",
    category: "UI Recreation",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    status: "Completed",
    liveDemo: "https://clarity-zeta-one.vercel.app",
    github: "https://github.com/Vivek-Sharma-dev/Clarity",
    preview: clarityPreview,
  },
];
