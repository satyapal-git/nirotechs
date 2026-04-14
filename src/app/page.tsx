"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";
import { featuredWork } from "@/lib/content";

import CaseStudies  from "@/components/CaseStudies";
import Reviews from "@/components/Reviews";

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

export default function HomePage() {
  return (
    <div className="bg-transparent">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute -top-32 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/35 via-fuchsia-500/25 to-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-72 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/20 to-emerald-400/15 blur-3xl" />
        </div>

        <Container className="py-16 sm:py-24 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold text-foreground/70 shadow-sm backdrop-blur">
                  <span className="size-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                  Modern web, app & AI for growth
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Build a{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
                    premium brand presence
                  </span>{" "}
                  with fast websites, apps & AI.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-5 text-pretty text-base text-foreground/70 sm:text-lg">
                  {siteConfig.description}
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/contact-us"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-6 text-sm font-semibold text-background shadow-sm transition hover:opacity-90"
                  >
                    Get a free consultation
                  </Link>
                  <Link
                    href="/our-services"
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-black/10 bg-white/80 px-6 text-sm font-semibold text-foreground shadow-sm backdrop-blur transition hover:bg-white"
                  >
                    Our Services
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    { k: "Fast delivery", v: "Clear milestones" },
                    { k: "Premium UI", v: "Modern design system" },
                    { k: "Reliable support", v: "Launch + maintenance" },
                  ].map((item) => (
                    <div
                      key={item.k}
                      className="rounded-2xl border border-black/10 bg-white/70 p-5 text-left shadow-sm backdrop-blur"
                    >
                      <div className="text-sm font-semibold">{item.k}</div>
                      <div className="mt-1 text-sm text-foreground/70">{item.v}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-500/15 via-fuchsia-500/15 to-cyan-400/15 blur-2xl" />
                <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-lg">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                      alt="Team working on product design"
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(min-width: 1024px) 520px, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/35 p-4 text-white backdrop-blur">
                      <div className="text-sm font-semibold">Strategy → Design → Build</div>
                      <div className="mt-1 text-xs text-white/80">
                        Clean UX, strong engineering, measurable results.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Video */}
      <section className="border-t border-black/5">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-foreground/70 shadow-sm">
              Showreel
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A quick look at the quality we deliver
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] border border-black/10 bg-black shadow-lg">
            <div className="relative aspect-video">
              <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                
              >
                <source
                  src="/nirovid.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured work */}
      <section className="border-t border-black/5">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-foreground/70 shadow-sm">
              Proof
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Featured work</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredWork.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      unoptimized
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 360px, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-black/30 p-4 text-white backdrop-blur">
                      <div className="text-sm font-semibold">{p.title}</div>
                      <div className="mt-1 text-xs text-white/80">{p.result}</div>
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
              Start your project
            </Link>
          </div>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="border-t border-black/5">
        <Container className="py-16 sm:py-20">
          <CaseStudies />
        </Container>
      </section>

      {/* Reviews */}
      <section className="border-t border-black/5">
        <Container className="py-16 sm:py-20">
          <Reviews />
        </Container>
      </section>
    </div>
  );
}
