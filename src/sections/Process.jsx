import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    title: "Discover",
    description:
      "We talk through your goals, your audience, and what success actually looks like for the project.",
  },
  {
    title: "Direction",
    description:
      "I shape a visual direction and map the deliverables before any final design begins.",
  },
  {
    title: "Design",
    description:
      "You see the work as it develops, with room for feedback, refinement, and honest conversation.",
  },
  {
    title: "Deliver",
    description:
      "Final files, organised and ready for print, web, or production — with the details documented.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="section-pad texture-paper"
      aria-labelledby="process-title"
    >
      <div className="container-kk">
        <div className="process__head">
          <Reveal>
            <span className="eyebrow text-teal-dark">How it works</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="process-title" className="display process__title">
              A clear path from{" "}
              <em className="serif-accent text-teal-dark">first idea</em> to
              final file.
            </h2>
          </Reveal>
        </div>

        <ol className="process__grid">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              className="process-step"
              delay={120 + index * 70}
            >
              <span className="process-step__num" aria-hidden="true">
                0{index + 1}
              </span>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__copy">{step.description}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="process__note" delay={180}>
          <p>
            Most projects begin with a short conversation. Tell me what you are
            making, and I will tell you how I can help — clearly, and without
            the design jargon.
          </p>
          <a href="#contact" className="link-arrow">
            Start the conversation
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
