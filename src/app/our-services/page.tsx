"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/Container";
import { services } from "@/lib/content";

const reveal = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function OurServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute -top-24 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/15 to-cyan-400/15 blur-3xl" />
        </div>
        <Container className="py-16 sm:py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Our Services
              </h1>
              <p className="mt-4 text-base text-foreground/70">
                Full-stack services for startups & businesses. High-quality delivery with a modern
                tech stack.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Services */}
      <section className="border-t border-black/5">
        <Container className="py-16 sm:py-20">
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full rounded-3xl border border-black/10 bg-gradient-to-b from-white to-zinc-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-lg font-semibold tracking-tight">{s.title}</div>
                  <p className="mt-2 text-sm text-foreground/70">{s.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/75">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/contact-us"
                      className="inline-flex h-10 items-center justify-center rounded-xl bg-foreground px-4 text-sm font-semibold text-background transition hover:opacity-90"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact-us"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-6 text-sm font-semibold text-background shadow-sm transition hover:opacity-90"
            >
              Get a free consultation
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
