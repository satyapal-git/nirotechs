export const siteConfig = {
  name: "NiroTechs",
  tagline: "Websites, Mobile Apps & AI Solutions",
  description:
    "We design and build fast, modern websites, mobile apps, and AI-powered automations that help businesses grow.",
  /**
   * Set this to your real domain (used for SEO metadata, sitemap, robots).
   * Example: https://nirotechs.com
   */
  url: "https://example.com",
  contact: {
    /** Inquiries from Contact Us form will be sent to this email */
    email: "satyarajyadav3x@gmail.com",
    phone: "+91 7408363507",
    /**
     * Use the wa.me format.
     * Example: https://wa.me/919000000000
     */
    whatsapp: "https://wa.me/917408363507",
  },
  location: {
    city: "India",
  },
  socials: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-services", label: "Our Services" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

