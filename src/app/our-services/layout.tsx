import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: `${siteConfig.name} — Website development, mobile apps, AI & automation. Full-stack services for startups & businesses.`,
};

export default function OurServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
