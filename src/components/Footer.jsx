import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/data/site";

const serviceLinks = [
  "Logo & branding",
  "Social media",
  "Print & editorial",
  "Events",
  "Merchandise",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-kk">
        <div className="site-footer__top">
          <div>
            <a href="#top" aria-label="Kenvas Kreatives — back to top">
              <Logo light />
            </a>
            <p className="site-footer__tagline">
              Every idea deserves a canvas.
            </p>
            <p className="site-footer__note">
              An independent design practice for branding, print, social
              media, events, and merchandise. Based in the Philippines,
              working with clients everywhere.
            </p>
          </div>

          <div className="site-footer__columns">
            <div>
              <h2 className="site-footer__heading">Explore</h2>
              <ul className="site-footer__links">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`}>{link.label}</a>
                  </li>
                ))}
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="site-footer__heading">Services</h2>
              <ul className="site-footer__links">
                {serviceLinks.map((service) => (
                  <li key={service}>
                    <a href="#services">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="site-footer__heading">Connect</h2>
              <ul className="site-footer__links">
                <li>
                  <a href={`mailto:${site.email}`}>
                    Email
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={site.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Design portfolio
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} Kenvas Kreatives. All rights reserved.
          </p>
          <p>
            Designed &amp; built by{" "}
            <a href={site.portfolio} target="_blank" rel="noopener noreferrer">
              Ivan Ken Chua
            </a>
            .
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
