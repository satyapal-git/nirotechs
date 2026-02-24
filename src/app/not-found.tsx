import Link from "next/link";

import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-xl rounded-3xl border border-black/10 bg-white p-8 text-center shadow-sm">
        <div className="text-sm font-semibold text-foreground/60">404</div>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-3 text-sm text-foreground/70">
          The page you’re looking for doesn’t exist. Use the links below to continue.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-foreground px-5 text-sm font-semibold text-background shadow-sm transition hover:opacity-90"
          >
            Go home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-black/10 bg-white px-5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-zinc-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </Container>
  );
}

