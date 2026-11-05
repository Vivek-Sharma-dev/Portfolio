import { Code2, GraduationCap, Server } from "lucide-react";

export const journey = [ 
  {
    year: "2022 — 2025",
    title: "Diploma in Computer Science",
    description:
      "Completed my Diploma in CSE. During this period, I was introduced to web development and started exploring how websites are built.",
    icon: GraduationCap,
    type: "Education",
    current: false,
  },
  {
    year: "2023 — 2025",
    title: "My First Steps into Frontend Development",
    description:
      "Started experimenting with HTML, CSS and JavaScript, gradually exploring React and frontend development. My learning was on and off, but these experiments helped me discover my interest in building for the web.",
    icon: Code2,
    type: "Frontend Development",
    current: false,
  },
  {
    year: "currently studying",
    title: "Pursuing B.Tech in Computer Science",
    description:
      "Joined B.Tech CSE through lateral entry after completing my diploma. Continuing my academic journey while strengthening my computer science fundamentals.",
    icon: GraduationCap,
    type: "Education",
    current: false,
  },
  {
    year: "currently building",
    title: "Focused on Full-Stack Development",
    description:
      "Started taking software development more seriously, moving beyond frontend into Node.js, Express, PostgreSQL and backend engineering. Currently building full-stack applications and improving my development skills.",
    icon: Server,
    type: "Full-Stack Development",
    current: true,
  },
];