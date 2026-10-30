import React from "react";

const HeroIntro = () => {
  return (
    <div className="flex flex-col items-start">
      {/* Availability Badge */}
      <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-surface px-4 py-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
        </span>

        <span className="font-mono text-xs tracking-wide text-muted">
          OPEN TO OPPORTUNITIES
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
        Building
        <br />
        <span className="text-brand">digital</span>
        <br />
        experiences<span className="text-brand">.</span>
      </h1>

      {/* Introduction */}
      <p className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-lg">
        Hey, I'm <span className="font-medium text-brand">Vivek Sharma</span> —
        a developer passionate about building full-stack web applications,
        solving problems, and turning ideas into products that work.
      </p>

      {/* Tech Stack */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {["React", "Node.js", "Express", "PostgreSQL", "TypeScript"].map(
          (tech) => (
            <span key={tech} className="chip text-muted">
              {tech}
            </span>
          ),
        )}
      </div>

      {/* Call to Action */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a href="#work" className="btn">
          Explore My Work <span className="ml-2">↗</span>
        </a>

        <a href="#contact" className="btn-ghost">
          Let's Talk
        </a>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#work"
        className="mt-14 inline-flex items-center gap-3 font-mono text-xs tracking-widest text-muted transition-colors hover:text-brand"
      >
        <span className="h-px w-10 bg-line-strong" />
        SCROLL TO EXPLORE
      </a>
    </div>
  );
};

export default HeroIntro;
