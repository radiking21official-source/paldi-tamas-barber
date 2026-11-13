import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

// Instagram + Facebook: inline SVG (a lucide-react v1-ből hiányoznak a brand ikonok).
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-text-primary/10 bg-bg-primary py-12 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Brand + helyszín */}
        <div>
          <p className="font-serif text-xl text-text-primary">
            {site.name}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-accent-gold">
            {site.tagline}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-text-secondary">
            <MapPin className="h-4 w-4 text-accent-gold" strokeWidth={1.5} />
            <span>
              {site.venue.name} · {site.venue.street}, {site.venue.city}
            </span>
          </div>
        </div>

        {/* Social */}
        <div className="flex gap-4 md:justify-center">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-3 border border-text-primary/15 text-text-secondary hover:border-accent-gold hover:text-accent-gold transition-colors"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-3 border border-text-primary/15 text-text-secondary hover:border-accent-gold hover:text-accent-gold transition-colors"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright + credit */}
        <div className="md:text-right">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="mt-2 text-xs text-text-muted">
            Weboldalt készítette:{" "}
            <a
              href={site.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-gold hover:text-accent-gold-hover transition-colors"
            >
              {site.credit.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
