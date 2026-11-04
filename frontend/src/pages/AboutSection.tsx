
const aboutHighlights = [
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Tailwind CSS",
  "TanStack Query",
  "Git",
];

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
        {/* Left: Heading */}
        <div>
          <p className="label">04 / ABOUT ME</p>

          <h2 className="max-w-xl text-4xl leading-[1.15] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            More than just
            <br />
            writing <span className="text-brand">code.</span>
            <br />
            Building with
            <br />
            purpose.
          </h2>
        </div>

        {/* Right: Introduction */}
        <div className="flex flex-col justify-center">
          <p className="text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            I'm <span className="font-medium text-text">Vivek Sharma</span>, a
            full-stack developer focused on building web applications that are
            functional, maintainable, and thoughtfully designed.
          </p>

          <p className="mt-6 text-base leading-8 text-muted">
            I enjoy working across the stack — from crafting responsive
            interfaces with React and TypeScript to building backend APIs,
            handling authentication, and managing data with Node.js,
            Express, and PostgreSQL.
          </p>

          <p className="mt-6 text-base leading-8 text-muted">
            I'm continuously learning, experimenting with new technologies,
            and improving how I approach problems. For me, development is
            about understanding how things work, not just making them work.
          </p>

          {/* Technologies */}
          <div className="mt-8">
            <p className="mb-4 font-mono text-xs tracking-widest text-brand">
              CURRENTLY WORKING WITH
            </p>

            <div className="flex flex-wrap gap-3">
              {aboutHighlights.map((tech) => (
                <span key={tech} className="chip text-muted transition-colors duration-200 hover:border-brand hover:text-brand">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
