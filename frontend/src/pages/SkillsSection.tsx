import {
  ArrowUpRight,
} from "lucide-react";
import { skillGroups, learningTopics } from "../data/mySkills";



const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      {/* Section Heading */}
      <div className="mb-12">
        <p className="label">03 / SKILLS & TECHNOLOGIES</p>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            What I work <span className="text-brand">with.</span>
          </h2>

          <span className="font-mono text-xs text-muted">
            TECHNOLOGY STACK / 2026
          </span>
        </div>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article
              key={group.id}
              className="group relative overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 sm:p-8"
            >
              {/* Subtle background accent */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/5 blur-3xl transition-opacity duration-300 group-hover:bg-brand/10" />

              {/* Card Header */}
              <div className="relative flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface-2 text-brand transition-colors duration-300 group-hover:border-brand/40">
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <span className="font-mono text-xs text-muted group-hover:text-brand">
                  / {group.number}
                </span>
              </div>

              {/* Card Title */}
              <div className="relative mt-8">
                <h3 className="text-2xl font-bold tracking-tight text-text">
                  {group.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                  {group.description}
                </p>
              </div>

              {/* Skill List */}
              <div className="relative mt-6 mb-9 border-t border-line">
                {group.skills.slice(0,6).map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-3 border-b border-line py-4 last:border-b-0"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="font-mono text-[10px] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="truncate text-sm font-medium text-text transition-colors duration-200 group-hover:text-text">
                        {skill.name}
                      </span>
                    </div>

                    <span className="shrink-0 text-right text-[11px] text-muted">
                      {skill.detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="absolute w-full px-8 bottom-10 left-0 mt-6 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-wider text-muted">
                  {String(group.skills.length).padStart(2, "0")} TECHNOLOGIES
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand"
                />
              </div>
            </article>
          );
        })}
      </div>

      {/* Currently Learning */}
      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-line bg-surface px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 hover:border-brand/60 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />

          <span className="font-mono text-xs font-medium tracking-wider text-brand">
            CURRENTLY EXPLORING
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {learningTopics.map((topic) => (
            <span key={topic} className="chip">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
