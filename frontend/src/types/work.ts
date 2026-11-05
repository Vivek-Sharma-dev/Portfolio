export type Project = {
  number: string;
  name: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  status: "Completed" | "In Progress";
  liveDemo: string;
  github: string;
  accent?: string;
  preview?: string;
};