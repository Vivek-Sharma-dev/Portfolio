import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../data/work";
const WorkSection = () => {
  return (
    <section id="work" className="section">
      {/* Section Heading */}
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="label">02 / SELECTED PROJECTS</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Selected <span className="text-brand">Work.</span>
          </h2>
        </div>

        <span className="pb-1 font-mono text-xs text-muted sm:text-sm">
          {String(projects.length).padStart(2, "0")} Projects
        </span>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <article
            key={project.number}
            className="group overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
          >
            {/* Project Preview Placeholder */}
            <div className="relative m-3 aspect-video overflow-hidden rounded-2xl border border-line bg-surface-2">
              {project.preview && (
                <img
                  src={project.preview}
                  alt={project.name}
                  className="h-full w-full object-cover"
                />
              )}
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.preview? "bg-black/10" : project.accent}`}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-mono text-xs tracking-[0.3em] text-muted">
                  PROJECT / {project.number}
                </span>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-text transition-transform duration-500 group-hover:scale-105 sm:text-3xl italic">
                  {project.name}
                  <span className="text-brand">.</span>
                </h3>
                {!project.preview && (
                  <span className="mt-3 rounded-full border border-line-strong bg-bg/50 px-3 py-1 font-mono text-[10px] text-muted backdrop-blur-sm">
                  PREVIEW COMING SOON
                </span>
                )}
              </div>
            </div>

            {/* Project Information */}
            <div className="p-5 pt-3 sm:p-6 sm:pt-3">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-brand">
                  {project.number}
                </span>

                <span className="text-xs text-muted">{project.category}</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-text transition-colors duration-300 group-hover:text-brand italic">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line-strong bg-surface-2 px-3 py-1.5 font-mono text-[11px] text-muted transition-colors duration-200 hover:border-brand hover:text-brand"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5">
                <span
                  className={`flex items-center gap-2 text-xs ${
                    project.status === "Completed"
                      ? "text-brand"
                      : "text-yellow-400"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {project.status}
                </span>

                <div className="flex items-center gap-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-brand"
                    >
                      Live Demo
                      <ExternalLink size={13} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-brand"
                    >
                      GitHub
                      <FaGithub size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      {projects.length > 4 && (
        <div className="border-2 border-brand text-center py-2 rounded-full text-brand font-bold mt-6  hover:bg-brand hover:text-black transition-all duration-300 cursor-pointer active:scale-95">
          +{projects.length - 4} more
        </div>
      )}
    </section>
  );
};

export default WorkSection;
