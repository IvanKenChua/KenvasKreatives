import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";

export function WorkModal({
  project,
  index,
  total,
  onClose,
  onPrev,
  onNext,
  closeButtonRef,
}) {
  const panelRef = useRef(null);

  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0 });
  }, [project.id]);

  const handleContactClick = (event) => {
    event.preventDefault();
    onClose();
    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  };

  return (
    <div
      className="modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="work-modal-title"
      >
        <div className="modal__media">
          <img src={project.image} alt={project.alt} />
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close project preview"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <div className="modal__body">
          <span className="modal__eyebrow">{project.category}</span>
          <h3 id="work-modal-title" className="modal__title">
            {project.title}
          </h3>
          <p className="modal__copy">{project.description}</p>

          <p className="modal__scope-label">Scope</p>
          <ul className="modal__scope">
            {project.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {project.year && (
            <p className="modal__year">Year · {project.year}</p>
          )}

          <div className="modal__footer">
            <a
              href="#contact"
              className="link-arrow"
              onClick={handleContactClick}
            >
              Start a similar project
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>

            <div className="modal__nav">
              <button
                type="button"
                className="modal__nav-btn"
                onClick={onPrev}
                aria-label="Previous project"
              >
                <ArrowLeft size={15} aria-hidden="true" />
              </button>
              <span className="px-1 text-xs tabular-nums text-muted">
                {index + 1} / {total}
              </span>
              <button
                type="button"
                className="modal__nav-btn"
                onClick={onNext}
                aria-label="Next project"
              >
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
