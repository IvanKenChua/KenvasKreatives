import { useState } from "react";
import { ArrowDownRight, Plus, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";

export function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="services"
      className="section-pad texture-paper bg-paper-2"
      aria-labelledby="services-title"
    >
      <div className="container-kk">
        <div className="services__grid">
          <div className="services__intro">
            <Reveal>
              <span className="eyebrow text-teal-dark">The studio</span>
            </Reveal>

            <Reveal delay={80}>
              <h2 id="services-title" className="display services__title">
                A small studio with a{" "}
                <em className="serif-accent">wide canvas.</em>
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <div className="services__copy">
                <p>
                  Kenvas Kreatives is an independent design practice built
                  around one belief: a good idea deserves to be seen clearly. I
                  work with people and small businesses to turn rough thoughts
                  into identities, publications, campaigns, and objects that
                  feel considered.
                </p>
                <p>
                  No layers of account managers, no one-size-fits-all templates.
                  Just direct collaboration with the designer doing the work —
                  from the first sketch to the final file.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <a href="#process" className="link-arrow services__link">
                See how the studio works
                <ArrowDownRight size={15} aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <div className="services__list">
            <Reveal>
              <span className="eyebrow text-teal-dark">What we make</span>
            </Reveal>

            <div className="services__items">
              {services.map((service, index) => {
                const isOpen = openIndex === index;
                const panelId = `service-panel-${index}`;
                const triggerId = `service-trigger-${index}`;

                return (
                  <Reveal
                    key={service.title}
                    className="service-item"
                    delay={70 + index * 50}
                    data-open={isOpen}
                  >
                    <button
                      type="button"
                      id={triggerId}
                      className="service-item__trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span className="service-item__num" aria-hidden="true">
                        0{index + 1}
                      </span>
                      <span className="service-item__name">
                        {service.title}
                      </span>
                      <span className="service-item__plus" aria-hidden="true">
                        <Plus size={15} />
                      </span>
                    </button>

                    <div
                      id={panelId}
                      className="service-item__panel"
                      role="region"
                      aria-labelledby={triggerId}
                    >
                      <div className="service-item__panel-inner">
                        <div className="service-item__body">
                          <p>{service.description}</p>
                          <ul className="service-item__tags">
                            {service.tags.map((tag) => (
                              <li key={tag}>{tag}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={320}>
              <p className="services__note">
                <Sparkles
                  size={17}
                  className="mt-0.5 shrink-0 text-teal-dark"
                  aria-hidden="true"
                />
                Not sure where your project fits? That is what the first
                conversation is for.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
