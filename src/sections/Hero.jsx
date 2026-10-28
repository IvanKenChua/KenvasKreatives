import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";

const disciplines = ["Branding", "Social", "Print", "Merchandise"];

export function Hero() {
  return (
    <section id="top" className="hero texture-paper">
      <div className="hero__watermark" aria-hidden="true">
        <img src="/brand/kenvas-mark.svg" alt="" />
      </div>

      <div className="container-kk relative z-10">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow hero-anim hero-anim--1 text-teal-dark">
              Independent studio · Philippines
            </p>

            <h1 className="display hero__title hero-anim hero-anim--2">
              <span className="block">Every idea</span>
              <span className="block">deserves a</span>
              <span className="block">
                <span className="hero__accent-wrap">
                  <span className="serif-accent hero__accent">canvas.</span>
                  <svg
                    className="hero__underline"
                    viewBox="0 0 320 18"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 12C74 4 174 3 316 9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="hero__lede hero-anim hero-anim--3">
              Kenvas Kreatives is a freelance design practice for brands,
              events, and people with something to say. Identity, social,
              print, and merchandise — made with clarity and care.
            </p>

            <div className="hero__actions hero-anim hero-anim--4">
              <Button as="a" href="#contact" variant="green" size="lg">
                Start a project
                <ArrowUpRight size={17} aria-hidden="true" />
              </Button>
              <Button as="a" href="#work" variant="outline" size="lg">
                See the work
              </Button>
            </div>

            <div className="hero__meta hero-anim hero-anim--5">
              {disciplines.map((discipline, index) => (
                <span key={discipline} className="inline-flex items-center gap-3">
                  {index > 0 && (
                    <span className="hero__meta-dot" aria-hidden="true" />
                  )}
                  {discipline}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-art hero-anim hero-anim--3">
            <div className="hero-art__arcs" aria-hidden="true" />

            <figure className="hero-art__frame hero-art__frame--mark">
              <span className="hero-art__mark-canvas">
                <img
                  src="/brand/kenvas-mark.svg"
                  alt="Kenvas Kreatives monogram"
                  className="hero-art__mark hero-art__mark--ink"
                  width="595"
                  height="666"
                />
                <img
                  src="/brand/kenvas-mark-light.svg"
                  alt=""
                  className="hero-art__mark hero-art__mark--paper"
                  width="595"
                  height="666"
                />
              </span>
              <figcaption>
                <span>Kenvas Kreatives</span>
                <span>Identity &amp; monogram</span>
              </figcaption>
            </figure>

            <div className="hero-art__badge">
              <span className="hero-art__badge-dot" aria-hidden="true" />
              Open for select projects
            </div>
          </div>
        </div>

        <div className="hero__foot hero-anim hero-anim--5">
          <a href="#services" className="hero__scroll">
            <span className="hero__scroll-line" aria-hidden="true" />
            Scroll to explore
          </a>
          <span className="inline-flex items-center gap-2">
            <ArrowDown size={13} aria-hidden="true" />
            Based in the Philippines
          </span>
        </div>
      </div>
    </section>
  );
}
