// components/CaseStudies.tsx
// Add this section to your homepage (page.tsx) or create a /case-studies page

import Link from "next/link";
import Image from "next/image";

const caseStudies = [
    {
    id: 1,
    tag: "Web Platform",
    title: "NIITRA Official Website",
    subtitle: "Modern institutional website with scalable architecture",
    description:
        "Developed and deployed the official NIITRA website with a focus on clean UI, structured content delivery, and performance optimization. The platform provides information about services, research, and organizational activities with a responsive, user-friendly interface.",
    results: [
        { label: "Performance", value: "Optimized" },
        { label: "Responsive Design", value: "100%" },
        { label: "SEO Ready", value: "Yes" },
    ],
    image: "/niitra.png",
    link: "https://niitra.in/",
    linkLabel: "niitra.in",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    },
    {
    id: 2,
    tag: "Full Stack Web App",
    title: "Taj Food Bakers & Caterers Website",
    subtitle: "End-to-end food ordering & business website",
    description:
        "Developed a full-stack restaurant website for Taj Food Bakers & Caterers with modern UI and real-world integrations. The platform allows users to explore menus, place orders, and connect directly via WhatsApp. Integrated secure online payments, media management, and scalable backend APIs to support business operations.",
    results: [
        { label: "Online Orders", value: "Enabled" },
        { label: "Payment Integration", value: "Razorpay" },
        { label: "User Experience", value: "Mobile Optimized" },
    ],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
    link: "https://taajfood.nirotechs.com/",
    linkLabel: "View project →",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Cloudinary", "Razorpay", "WhatsApp API"],
    },
    {
    id: 3,
    tag: "Real-time App",
    title: "Konvoo – Language Learning & Social Platform",
    subtitle: "Real-time chat, audio/video calls & global interaction",
    description:
        "Built Konvoo, a real-time communication platform designed to help users learn languages through live interaction. The app enables users to chat, make friends globally, and practice speaking via audio and video calls. Implemented real-time messaging, peer-to-peer communication, and a scalable backend to support seamless user interaction.",
    results: [
        { label: "Real-time Chat", value: "Enabled" },
        { label: "Audio/Video Calls", value: "Integrated" },
        { label: "User Engagement", value: "High Interaction" },
    ],
    image: "/konvoo.png",
    link: "https://konvoo.onrender.com/",
    linkLabel: "konvoo.onrender.com",
    stack: ["React.js", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
    }
];

export default function CaseStudies() {
  return (
    <section className="py-5" id="case-studies">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header — matches site pattern */}
        <div className="mb-16 text-center">
            <p className="text-5xl font-extrabold tracking-widest uppercase text-neutral-500 mb-3">
            Case Studies
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight max-w-xl mx-auto">
            Real work,{" "}
            <span className="text-neutral-400">real results</span>
            </h2>
            <p className="mt-4 text-neutral-400 text-base font-normal max-w-lg mx-auto">
            A deeper look at the projects we've built — strategy, execution, and outcomes.
            </p>
        </div>

        {/* Case study cards */}
        <div className="space-y-5">
          {caseStudies.map((cs, i) => (
            <article
              key={cs.id}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-2xl aspect-video bg-neutral-100"
                style={{ direction: "ltr" }}
              >
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Tag badge */}
                <span className="absolute top-4 left-4 bg-black/80 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  {cs.tag}
                </span>
              </div>

              {/* Content */}
              <div style={{ direction: "ltr" }}>
                <p className="text-sm text-neutral-400 font-medium mb-2">
                  {cs.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  {cs.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-6">
                  {cs.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {cs.results.map((r) => (
                    <div
                      key={r.label}
                      className="bg-neutral-50 rounded-xl p-4 text-center border border-neutral-100"
                    >
                      <p className="text-xl font-bold text-neutral-900">
                        {r.value}
                      </p>
                      <p className="text-xs text-neutral-400 mt-1">{r.label}</p>
                    </div>
                  ))}
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={cs.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 border border-neutral-200 rounded-full px-5 py-2.5 hover:bg-neutral-900 hover:text-white transition-all duration-200"
                >
                  {cs.linkLabel}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-neutral-500 mb-4">
            Want results like these for your business?
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-neutral-700 transition-colors duration-200"
          >
            Start your project
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}