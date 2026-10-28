import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Facebook, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light"
  );
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      window.localStorage.setItem("kk-theme", theme);
    } catch {
      // Storage can be unavailable in private browsing; the theme still applies.
    }

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute(
        "content",
        theme === "dark" ? "#0c0d0c" : "#ffffff"
      );
    }
  }, [theme]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const focusableElements = () => {
      const themeToggles = Array.from(
        document.querySelectorAll(".theme-toggle")
      ).filter((element) => element.getBoundingClientRect().width > 0);
      const menuItems = menuRef.current
        ? Array.from(
            menuRef.current.querySelectorAll("a[href], button:not([disabled])")
          )
        : [];
      return [...themeToggles, toggleRef.current, ...menuItems].filter(
        Boolean
      );
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = focusableElements();
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    const focusTimer = window.setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 80);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(focusTimer);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <>
      <header
        className={`site-header ${isScrolled ? "is-scrolled" : ""} ${
          isMenuOpen ? "is-menu-open" : ""
        }`}
      >
        <div className="container-kk site-header__inner">
          <a
            href="#top"
            aria-label="Kenvas Kreatives — back to top"
            onClick={closeMenu}
          >
            <Logo />
          </a>

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-link"
                aria-current={
                  activeSection === link.id ? "true" : undefined
                }
              >
                <span className="nav-link__dot" aria-hidden="true" />
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#contact" className="btn btn--ink btn--sm">
              Start a project
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <X size={21} aria-hidden="true" />
              ) : (
                <Menu size={21} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="mobile-menu lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="container-kk flex min-h-0 flex-1 flex-col overflow-y-auto pb-8">
            <nav aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={`#${link.id}`}
                  className="mobile-menu__link"
                  onClick={closeMenu}
                >
                  <span className="mobile-menu__index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-7">
              <Button
                as="a"
                href="#contact"
                variant="ink"
                size="lg"
                className="w-full"
                onClick={closeMenu}
              >
                Start a project
                <ArrowUpRight size={17} aria-hidden="true" />
              </Button>
            </div>

            <div className="mt-auto pt-10">
              <p className="eyebrow text-teal-dark">Get in touch</p>
              <div className="mt-4 flex flex-col gap-2.5">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink"
                >
                  <Mail size={15} aria-hidden="true" />
                  {site.email}
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink"
                >
                  <Facebook size={15} aria-hidden="true" />
                  Facebook
                </a>
              </div>
              <p className="mt-6 font-serif text-xl italic text-muted">
                Every idea deserves a canvas.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
