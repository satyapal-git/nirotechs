"use client";

import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";
import { navLinks, siteConfig } from "@/lib/site";

function LogoMark({ className }: { className?: string }) {
  return (
    <div className={cn("grid size-9 place-items-center", className)} aria-hidden="true">
      <div className="logo-spin relative h-8 w-8 -rotate-6 rounded-[1rem] bg-gradient-to-br from-indigo-500 to-sky-400 shadow-[0_12px_30px_rgba(15,23,42,0.25)] ring-1 ring-indigo-200/80">
        <div className="absolute inset-px rounded-[0.9rem] bg-white" />
        <div className="relative m-[3px] flex h-[calc(100%-6px)] w-[calc(100%-6px)] items-center justify-center rounded-[0.75rem] bg-slate-900 text-white">
          <span className="text-sm font-semibold tracking-tight">N</span>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <Container className="flex h-16 min-w-0 items-center justify-between gap-2 sm:gap-3">
        <Link
          href="/"
          className="group flex min-w-0 shrink items-center gap-2 sm:gap-3"
          onClick={closeMenu}
        >
          <LogoMark className="shrink-0" />
          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-semibold tracking-tight text-slate-900">{siteConfig.name}</div>
            <div className="hidden truncate text-xs text-slate-500 sm:block">{siteConfig.tagline}</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex size-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            Call
          </a>
          <Link
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
          >
            WhatsApp
          </Link>
        </div>
      </Container>

      {/* Mobile nav dropdown */}
      <div className={cn("md:hidden", menuOpen ? "block" : "hidden")}>
        <nav className="border-t border-slate-200 bg-white/90 px-4 py-4 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-black/5 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

