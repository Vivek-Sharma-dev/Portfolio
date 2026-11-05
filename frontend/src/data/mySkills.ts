import { Code2, Server, Wrench } from "lucide-react";

export const skillGroups = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    description: "Building responsive and interactive interfaces.",
    icon: Code2,
    skills: [
      { name: "React", detail: "UI development" },
      { name: "TypeScript", detail: "Type-safe development" },
      { name: "JavaScript", detail: "ES6+" },
      { name: "HTML & CSS", detail: "Web fundamentals" },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    description: "Building APIs and managing application data.",
    icon: Server,
    skills: [
      { name: "Node.js", detail: "Runtime environment" },
      { name: "Express.js", detail: "REST APIs" },
      { name: "PostgreSQL", detail: "Relational database" },
      { name: "MongoDB", detail: "NoSQL database" },
    ],
  },
  {
    id: "tools",
    number: "03",
    title: "Tools & Ecosystem",
    description: "Tools and libraries I use in development.",
    icon: Wrench,
    skills: [
      { name: "Tailwind CSS", detail: "Styling" },
      { name: "TanStack Query", detail: "Server state" },
      { name: "Zod", detail: "Schema validation" },
      { name: "Git & GitHub", detail: "Version control" },
      { name: "Vite", detail: "Build tooling" },
      { name: "GSAP", detail: "Animations" },
      { name: "Framer Motion", detail: "Animations" },
    ],
  },
];

export const learningTopics = [
  "PERN Stack",
  "Advanced PostgreSQL",
  "API Architecture",
  "Authentication",
];
