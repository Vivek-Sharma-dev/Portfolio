import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navbarRef = useRef<HTMLElement>(null);

  // Detect the section currently in view.
  useEffect(() => {
    const sectionIds = [
      "home",
      ...navigationLinks.map((link) => link.href.slice(1)),
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close the mobile menu when Escape is pressed.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleOutsideClick = (e: KeyboardEvent | TouchEvent) => {
      if (
        navbarRef.current &&
        e.target instanceof Node &&
        !navbarRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "Escape"
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const getNavLinkClass = (sectionId: string) => {
    const isActive = activeSection === sectionId;

    return [
      "relative inline-flex items-center py-2 text-sm transition-colors duration-200",
      "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full",
      "after:origin-left after:bg-brand after:transition-transform after:duration-200",
      isActive
        ? "nav-link-active text-brand after:scale-x-100"
        : "text-muted after:scale-x-0 hover:text-brand hover:after:scale-x-100",
    ].join(" ");
  };

  return (
    <header ref={navbarRef} className="relative z-50 w-full bg-bg">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-340 items-center justify-between px-6 py-5 md:px-14"
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={() => {
            setActiveSection("home");
            closeMenu();
          }}
          className="group inline-flex shrink-0 items-center gap-3 font-mono text-base font-medium text-text"
          aria-label="Vivek's portfolio home"
        >
          <span
            className="h-2.5 w-2.5 rounded-full bg-brand transition-shadow duration-300 group-hover:shadow-[0_0_12px_var(--color-brand)]"
            aria-hidden="true"
          />

          <span>
            vivek<span className="text-brand">.</span>dev
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navigationLinks.map((link) => {
            const sectionId = link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={
                  activeSection === sectionId ? "location" : undefined
                }
                onClick={() => setActiveSection(sectionId)}
                className={getNavLinkClass(sectionId)}
              >
                {link.label}
              </a>
            );
          })}

          {/* Private dashboard entry */}
          <Link
            to="/dashboard/login"
            aria-label="Open portfolio dashboard login"
            className="rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors duration-200 hover:border-brand hover:text-brand"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="inline-flex items-center justify-center rounded-xl border border-line p-2.5 text-text transition-colors duration-200 hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <X size={21} aria-hidden="true" />
          ) : (
            <Menu size={21} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={[
          "absolute inset-x-0 top-full overflow-hidden border-b border-line bg-surface",
          "transition-[opacity,visibility] duration-200 lg:hidden",
          isMenuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-340 flex-col gap-1 px-6 py-5 md:px-14">
          {navigationLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                tabIndex={isMenuOpen ? 0 : -1}
                aria-current={isActive ? "location" : undefined}
                onClick={() => {
                  setActiveSection(sectionId);
                  closeMenu();
                }}
                className={[
                  "rounded-xl border-l-2 px-4 py-3 text-sm transition-colors duration-200",
                  isActive
                    ? "border-brand bg-surface-2 text-brand"
                    : "border-transparent text-muted hover:bg-surface-2 hover:text-brand",
                ].join(" ")}
              >
                {link.label}
              </a>
            );
          })}

          <Link
            to="/dashboard/login"
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={closeMenu}
            className="mt-2 rounded-xl border border-line px-4 py-3 text-sm text-muted transition-colors duration-200 hover:border-brand hover:text-brand"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}
