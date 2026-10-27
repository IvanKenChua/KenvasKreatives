import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

const tools = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Figma",
  "Canva",
  "PowerPoint",
];

export function About() {
  return (
    <section
      id="about"
      className="section-pad texture-paper bg-paper-2 overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="container-kk">
        <div className="about__grid">
          <Reveal className="about__visual">
            <div className="about__block" aria-hidden="true" />
            <figure className="about__photo">
              <img
                src="/studio/about-profile.jpg"
                alt="Ivan Ken Chua, founder of Kenvas Kreatives"
                width="900"
                height="1170"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="about__label">
              Ivan Ken Chua
              <span>Founder &amp; designer</span>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow text-teal-dark">
                The person behind the canvas
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h2 id="about-title" className="display about__title">
                Hi, I&apos;m Ivan{" "}
                <span className="about__name-mark">Ken</span> —{" "}
                <em className="serif-accent">the K in Kenvas.</em>
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="about__copy">
                I am a creative designer based in the Philippines, working
                across brand identity, editorial design, social media, and
                print. Kenvas Kreatives is where that work comes together for
                clients — with the same care I would give my own ideas.
              </p>
            </Reveal>

            <Reveal delay={190}>
              <p className="about__copy">
                Over the past few years I have designed for campus
                publications, local businesses, schools, and events — from full
                yearbooks and calendars to lanyards and campaign graphics. I
                like work that is clear, useful, and quietly distinctive.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="about__tools-label">Tools I work in</p>
              <ul className="about__tools">
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="about__actions" delay={290}>
              <Button as="a" href="#contact" variant="ink">
                Work with me
                <ArrowUpRight size={15} aria-hidden="true" />
              </Button>
              <a
                href={site.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                Full design portfolio
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
