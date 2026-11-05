
import { HeroData } from "../../data/hero";

const HeroIntro = () => {
  return (
    <div className="flex w-full min-w-0 flex-col items-start">
      {/* Availability Badge */}
      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-line bg-surface px-3 py-2 sm:mb-8 sm:px-4">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
        </span>

        <span className="font-mono text-[10px] tracking-wide text-muted sm:text-xs">
          {HeroData.availability}
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="max-w-full text-[clamp(2.8rem,7vw,5.8rem)] leading-[1.02] font-bold tracking-tight">
        {HeroData.heading.first}
        <br />
        <span className="text-brand">
          {HeroData.heading.highlight}
        </span>
        <br />
        {HeroData.heading.last}
      </h1>

      {/* Introduction */}
      <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
        Hey, I'm{" "}
        <span className="font-medium text-brand">Vivek Sharma</span> — a
        developer passionate about building full-stack web applications,
        solving problems, and turning ideas into products that work.
      </p>

      {/* Tech Stack */}
      <div className="mt-5 flex w-full flex-wrap items-center gap-2 sm:mt-6">
        {HeroData.techStack.map((tech) => (
          <span key={tech} className="chip text-xs text-muted sm:text-[13px]">
            {tech}
          </span>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-7 flex w-full flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
        <a
          href="#work"
          className="btn px-5 py-3 text-sm sm:px-7 sm:py-4 sm:text-base"
        >
          Explore My Work <span className="ml-2">↗</span>
        </a>

        <a
          href="#contact"
          className="btn-ghost px-5 py-3 text-sm sm:px-7 sm:py-4 sm:text-base"
        >
          Let's Talk
        </a>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#work"
        className="mt-10 hidden items-center gap-3 font-mono text-xs tracking-widest text-muted transition-colors hover:text-brand sm:inline-flex lg:mt-14"
      >
        <span className="h-px w-10 bg-line-strong" />
        SCROLL TO EXPLORE
      </a>
    </div>
  );
};

export default HeroIntro;
