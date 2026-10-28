import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WorkModal } from "@/components/WorkModal";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function Work() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const isOpen = selectedIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 40);

    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(focusTimer);
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedIndex(null);

      if (event.key === "Tab") {
        const panel = document.querySelector(".modal__panel");
        if (!panel) return;

        const focusable = Array.from(
          panel.querySelectorAll('a[href], button:not([disabled])')
        );
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
        return;
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((index) =>
          index === null
            ? index
            : (index - 1 + projects.length) % projects.length
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((index) =>
          index === null ? index : (index + 1) % projects.length
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const showPrevious = () => {
    setSelectedIndex((index) =>
      index === null
        ? index
        : (index - 1 + projects.length) % projects.length
    );
  };

  const showNext = () => {
    setSelectedIndex((index) =>
      index === null ? index : (index + 1) % projects.length
    );
  };

  return (
    <section
      id="work"
      className="section-pad texture-paper relative overflow-hidden"
      aria-labelledby="work-title"
    >
      <div className="container-kk">
        <div className="work__head">
          <div>
            <Reveal>
              <span className="eyebrow text-teal-dark">Selected work</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 id="work-title" className="display work__title">
                Ideas,{" "}
                <em className="serif-accent">made visible.</em>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <p className="work__lede">
              A selection of recent projects across print, editorial, social
              media, and merchandise — each one built around a clear idea.
            </p>
          </Reveal>
        </div>

        <div className="work__grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={80 + (index % 3) * 60}>
              <button
                type="button"
                className="work-card group"
                onClick={() => setSelectedIndex(index)}
                aria-haspopup="dialog"
                aria-label={`View ${project.title}`}
              >
                <span className="work-card__media">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="work-card__index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <span className="work-card__view" aria-hidden="true">
                    View project
                    <ArrowUpRight size={13} />
                  </span>
                </span>

                <span className="work-card__meta">
                  <span>
                    <span className="work-card__title">
                      {project.title}
                    </span>
                    <span className="work-card__category">
                      {project.category}
                      {project.year ? ` · ${project.year}` : ""}
                    </span>
                  </span>
                  <span className="work-card__plus" aria-hidden="true">
                    <Plus size={14} />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="work__foot" delay={100}>
          <p>
            A few recent projects. The full archive lives in my design
            portfolio.
          </p>
          <a
            href={site.portfolioProjects}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
          >
            View the full archive
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </Reveal>
      </div>

      {isOpen && (
        <WorkModal
          project={projects[selectedIndex]}
          index={selectedIndex}
          total={projects.length}
          onClose={() => setSelectedIndex(null)}
          onPrev={showPrevious}
          onNext={showNext}
          closeButtonRef={closeButtonRef}
        />
      )}
    </section>
  );
}
