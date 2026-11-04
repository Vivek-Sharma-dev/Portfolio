import { useId } from "react";
import StatsSection from "./StatsCard";
import { HeroData } from "../../data/hero";

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
      className="  py-7 sm:py-5 mt-30 space-y-15"
    >
      <MarqueeRow
        label="01 / CORE TECHNOLOGIES"
        skills={HeroData.coreSkills}
        direction="right"
        duration={36}
      />

      <div className="my-5 h-px sm:my-5" />

      <MarqueeRow
        label="02 / TOOLS & ECOSYSTEM"
        skills={HeroData.toolSkills}
        direction="left"
        duration={31}
      />

      <StatsSection />
    </section>
  );
}
