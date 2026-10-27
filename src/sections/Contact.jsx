import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Copy, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(copyTimerRef.current);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.clearTimeout(copyTimerRef.current);
      copyTimerRef.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact__arcs" aria-hidden="true" />

      <div className="container-kk relative z-10">
        <Reveal>
          <span className="eyebrow text-ink/80">Let&apos;s make something</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 id="contact-title" className="display contact__title">
            Have an idea?
            <br />
            <em className="serif-accent">Let&apos;s create it.</em>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="contact__lede">
            Tell me what you are working on — a new brand, an event, a
            publication, or something that does not fit a category yet. Good
            projects usually start with a simple conversation.
          </p>
        </Reveal>

        <Reveal className="contact__actions" delay={200}>
          <Button
            as="a"
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            variant="ink"
            size="lg"
          >
            <Facebook size={17} aria-hidden="true" />
            Message on Facebook
            <ArrowUpRight size={16} aria-hidden="true" />
          </Button>
          <Button
            as="a"
            href={`mailto:${site.email}?subject=Project%20inquiry%20%E2%80%94%20Kenvas%20Kreatives`}
            variant="outline"
            size="lg"
          >
            <Mail size={16} aria-hidden="true" />
            Email the studio
          </Button>
        </Reveal>

        <Reveal className="contact__details" delay={260}>
          <div>
            <p className="contact__detail-label">Email</p>
            <div className="mt-1.5 flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="contact__email"
                onClick={copyEmail}
                aria-label={`Copy email address ${site.email}`}
              >
                {site.email}
                <Copy size={13} aria-hidden="true" />
              </button>
              <span className="contact__copied" aria-live="polite">
                {copied ? "Copied" : ""}
              </span>
            </div>
          </div>

          <div>
            <p className="contact__detail-label">Based in</p>
            <p className="contact__detail-value">
              Philippines · working worldwide
            </p>
          </div>

          <div>
            <p className="contact__detail-label">Availability</p>
            <p className="contact__detail-value">
              Open for select freelance projects
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
