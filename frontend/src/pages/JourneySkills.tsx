
import { ArrowUpRight } from "lucide-react";
import { journey } from "../data/journey";





const JourneySection = () => {
  return (
    <section id="journey" className="section">
      {/* Section Header */}
      <div className="mb-16">
        <p className="label">04 / MY JOURNEY</p>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            How I got <span className="text-brand">here.</span>
          </h2>

          <span className="font-mono text-xs text-muted">
            LEARNING NEVER STOPS
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative ml-2 sm:ml-4">
        {/* Timeline Line */}
        <div className="absolute bottom-5 left-1.75 top-2 w-px bg-line sm:left-2.25" />

        <div className="space-y-12 sm:space-y-16">
          {journey.map((item,) => {
            const Icon = item.icon;

            return (
              <article
                key={`${item.year}-${item.title}`}
                className="group relative grid grid-cols-[16px_1fr] gap-6 sm:grid-cols-[20px_1fr] sm:gap-8"
              >
                {/* Timeline Marker */}
                <div className="relative z-10 mt-1 flex justify-center">
                  <span
                    className={`h-4 w-4 rounded-full border-2 transition-all duration-300 sm:h-5 sm:w-5 ${
                      item.current
                        ? "border-brand bg-brand shadow-[0_0_14px_var(--color-brand)]"
                        : "border-brand bg-bg "
                    }`}
                  />
                </div>

                {/* Timeline Content */}
                <div className="max-w-3xl pb-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span
                      className={`font-mono text-xs tracking-wider ${
                        item.current ? "text-brand" : "text-muted"
                      }`}
                    >
                      {item.year.toUpperCase()}
                    </span>

                    <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-muted">
                      {item.type}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`text-xl font-bold tracking-tight text-text transition-colors duration-300 sm:text-2xl lg:text-3xl ${item.current ? "group-hover:text-brand" : "text-text"}`}>
                      {item.title}
                    </h3>

                    <Icon
                      size={21}
                      strokeWidth={1.6}
                      className={`mt-1 shrink-0 text-muted transition-colors duration-300 ${item.current ? "group-hover:text-brand" : "text-muted"}`}
                    />
                  </div>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-lg text-sm leading-7 text-muted">
          Still learning, still building, and always looking for the next
          problem worth solving.
        </p>

        <a
          href="#contact"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-text transition-colors hover:text-brand"
        >
          What's next? Let's connect
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default JourneySection;
