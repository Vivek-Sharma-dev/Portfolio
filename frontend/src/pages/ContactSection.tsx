
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Vivek-Sharma-dev",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivek-sharma-webdev",
    icon: FaLinkedin,
  },
];

const ContactSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="section pb-8">
      {/* Main Contact Card */}
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-20 text-center sm:px-12 sm:py-24 lg:py-28">

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/5 blur-[100px]" />

        {/* Content */}
        <div className="relative mx-auto flex max-w-4xl flex-col items-center">

          <p className="label mb-7">08 / CONTACT</p>

          <h2 className="text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Let's build something
            <br className="hidden sm:block" />
            <span className="text-brand"> together.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Have a project idea, an opportunity, or just want to
            talk about technology? My inbox is always open.
          </p>

          {/* Email CTA */}
          <a
            href="mailto:vivek.fsd@gmail.com"
            className="btn mt-9 inline-flex items-center gap-3"
          >
            <Mail size={18} />
            Get in touch
            <ArrowUpRight size={17} />
          </a>

          {/* Social Links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-7">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 border-b border-line-strong pb-1 text-sm text-muted transition-colors duration-200 hover:border-brand hover:text-brand"
                >
                  <Icon size={16} />
                  {link.label}
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="font-mono text-xs text-muted">
          © {currentYear} Vivek Sharma.
          <span className="ml-2 text-brand">All rights reserved.</span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          <span>Crafted with</span>
          <span className="text-brand">♥</span>
          <span>using React & TypeScript</span>
        </div>

        <a
          href="#home"
          className="font-mono text-xs text-muted transition-colors hover:text-brand"
        >
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
};

export default ContactSection;
