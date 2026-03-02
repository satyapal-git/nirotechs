import Link from "next/link";

import { Container } from "@/components/Container";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-sm font-semibold tracking-tight text-slate-900">{siteConfig.name}</div>
            <p className="text-sm text-slate-600">{siteConfig.description}</p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-slate-900">Quick links</div>
            <ul className="space-y-2 text-sm text-slate-600">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link className="hover:text-slate-900" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-slate-900">Contact</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a className="hover:text-slate-900" href={`mailto:${siteConfig.contact.email}`}>
                  info@nirotechs.com
                </a>
              </li>
              <li>
                <a className="hover:text-slate-900" href={`tel:${siteConfig.contact.phone}`}>
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-slate-900"
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp chat
                </a>
              </li>
              <li className="text-slate-500">{siteConfig.location.city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/5 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-900" href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="hover:text-slate-900" href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

