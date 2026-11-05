import { useId } from "react";
import StatsSection from "./StatsCard";
import { techInfo } from "../../data/techStats";
type MarqueeRowProps = {
  label: string;
  skills: string[];
  direction: "left" | "right";
  duration?: number;
};

function MarqueeRow({ skills, direction, duration = 32 }: MarqueeRowProps) {
  const id = useId();

  return (
    <div className="marquee-row">
      <div className="marquee-viewport">
        <div
          className={`marquee-track marquee-track--${direction}`}
          style={
            { "--marquee-duration": `${duration}s` } as React.CSSProperties
          }
        >
          {[0, 1].map((copy) => (
            <div
              key={`${id}-${copy}`}
              className="marquee-group"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {skills.map((skill) => (
                <div key={skill} className="marquee-item">
                  <span className="marquee-dot" aria-hidden="true" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section
      aria-label="Technologies and tools"
      className=" space-y-4 lg:space-y-8 py-6 sm:space-y-15 sm:py-8"
    >
      <MarqueeRow
        label="01 / CORE TECHNOLOGIES"
        skills={techInfo.coreSkills}
        direction="right"
        duration={36}
      />

      <div className="my-5 h-px sm:my-5" />

      <MarqueeRow
        label="02 / TOOLS & ECOSYSTEM"
        skills={techInfo.toolSkills}
        direction="left"
        duration={31}
      />

      <StatsSection />
    </section>
  );
}
