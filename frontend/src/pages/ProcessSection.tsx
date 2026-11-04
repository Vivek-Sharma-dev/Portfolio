
import {
  Search,
  Workflow,
  Code2,
  TestTube2,
  ArrowUpRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the problem, project requirements, target users and what the application needs to achieve.",
    detail: "REQUIREMENTS & RESEARCH",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "Plan the application structure, database schema, API flow and user interface before implementation.",
    detail: "ARCHITECTURE & PLANNING",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop reusable frontend components, backend APIs and database integration with maintainable code.",
    detail: "DEVELOPMENT & INTEGRATION",
    icon: Code2,
  },
  {
    number: "04",
    title: "Test & Refine",
    description:
      "Test functionality, debug issues, improve performance and refine the experience across devices.",
    detail: "TESTING & IMPROVEMENT",
    icon: TestTube2,
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section">
      {/* Section Header */}
      <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="label">06 / MY PROCESS</p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            How I build <span className="text-brand">things.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
            A structured approach to turning ideas into functional,
            maintainable and user-focused applications.
          </p>
        </div>

        <span className="pb-1 font-mono text-xs tracking-wider text-muted">
          IDEAS → IMPLEMENTATION
        </span>
      </div>

      {/* Process Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step) => {
          const Icon = step.icon;

          return (
            <article
              key={step.number}
              className="group relative flex min-h-70 flex-col overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 sm:p-7"
            >
              {/* Background Accent */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/5 blur-3xl transition-colors duration-300 group-hover:bg-brand/10" />

              {/* Card Top */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-sm text-muted group-hover:text-brand">
                  {step.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-muted transition-all duration-300 group-hover:border-brand/40 group-hover:text-brand">
                  <Icon size={19} strokeWidth={1.7} />
                </div>
              </div>

              {/* Card Content */}
              <div className="relative mt-9 flex-1">
                <h3 className="text-xl font-bold tracking-tight text-text transition-colors duration-300 group-hover:text-brand sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {step.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="relative mt-7 flex items-center justify-between border-t border-line pt-5">
                <span className="font-mono text-[9px] tracking-wider text-muted sm:text-[10px]">
                  {step.detail}
                </span>

                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessSection;
