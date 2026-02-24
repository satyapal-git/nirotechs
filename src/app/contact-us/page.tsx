"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

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

export default function ContactUsPage() {
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
                Contact Us
              </h1>
              <p className="mt-4 text-base text-foreground/70">
                Tell us what you want to build. We'll reply with a timeline, budget estimate, and
                next steps.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Contact form + info */}
      <section className="border-t border-black/5">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold">Send an inquiry</div>
                <p className="mt-2 text-sm text-foreground/70">
                  Share your requirements and we'll get back quickly.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold">Direct contact</div>
                <p className="mt-2 text-sm text-foreground/70">
                  Prefer a quick chat? Call us or message on WhatsApp.
                </p>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-black/10 bg-zinc-50/50 p-4">
                    <div className="text-xs font-semibold text-foreground/55">Email</div>
                    <a
                      className="mt-1 block text-sm font-semibold hover:underline"
                      href={`mailto:${siteConfig.contact.email}`}
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-zinc-50/50 p-4">
                    <div className="text-xs font-semibold text-foreground/55">Phone</div>
                    <a
                      className="mt-1 block text-sm font-semibold hover:underline"
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-zinc-50/50 p-4">
                    <div className="text-xs font-semibold text-foreground/55">WhatsApp</div>
                    <a
                      className="mt-1 inline-flex text-sm font-semibold hover:underline"
                      href={siteConfig.contact.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Start chat
                    </a>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-zinc-50/50 p-4">
                    <div className="text-xs font-semibold text-foreground/55">Location</div>
                    <div className="mt-1 text-sm font-semibold">{siteConfig.location.city}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
