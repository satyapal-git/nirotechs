"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/Container";
import { processSteps, testimonials } from "@/lib/content";

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

export default function AboutUsPage() {
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
                About Us
              </h1>
              <p className="mt-4 text-base text-foreground/70">
                We build websites, apps & AI solutions that help businesses grow. Transparent
                process, premium delivery.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-black/5">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-3 inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-foreground/70 shadow-sm">
                How we work
              </div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                A simple, reliable process
              </h2>
              <p className="mt-3 text-base text-foreground/70">
                Transparent communication, premium UI, and production-ready engineering.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {processSteps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 0.05}>
                <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">{step.title}</div>
                    <div className="text-xs font-semibold text-foreground/55">0{idx + 1}</div>
                  </div>
                  <p className="mt-3 text-sm text-foreground/70">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="border-t border-black/5">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-3 inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-foreground/70 shadow-sm">
                Testimonials
              </div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Trusted by growing businesses
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={`${t.name}-${i}`} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                  <p className="text-sm text-foreground/75">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative size-10 overflow-hidden rounded-full border border-black/10">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-foreground/60">{t.role}</div>
                    </div>
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
              Get in touch
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
