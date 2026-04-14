"use client";

import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Founder, QuickServe India",
    avatar: "RS",
    avatarBg: "bg-blue-100 text-blue-700",
    rating: 4.5,
    text: "NiroTechs built our entire website from scratch in under 2 weeks. The design was clean, modern, and exactly what we envisioned. Our leads doubled within the first month of launch. Highly recommend!",
    service: "Website Development",
  },
  {
    id: 2,
    name: "Priya Mehra",
    role: "CEO, StyleHive Boutique",
    avatar: "PM",
    avatarBg: "bg-rose-100 text-rose-700",
    rating: 5,
    text: "We needed an e-commerce site that actually converts. NiroTechs delivered a lightning-fast store with smooth UX. Our online sales went up by 40% in the first quarter. Great team to work with.",
    service: "E-commerce Website",
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Co-founder, LogiTrack App",
    avatar: "AV",
    avatarBg: "bg-green-100 text-green-700",
    rating: 3.5,
    text: "They took our rough idea and turned it into a polished Flutter app in about 4 weeks. The code quality is excellent and the UI feels premium. We've already got 500+ downloads and great user reviews.",
    service: "Mobile App Development",
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "Marketing Head, FitLife Studio",
    avatar: "SP",
    avatarBg: "bg-purple-100 text-purple-700",
    rating: 4.5,
    text: "The AI chatbot they built for us is incredible. It handles customer queries 24/7, books trial classes automatically, and has cut our response time to zero. Best ROI investment we've made.",
    service: "AI & Automation",
  },
  {
    id: 5,
    name: "Karan Joshi",
    role: "Director, TechBridge Solutions",
    avatar: "KJ",
    avatarBg: "bg-amber-100 text-amber-700",
    rating: 4,
    text: "Professional, fast, and genuinely cares about the outcome. NiroTechs redesigned our corporate website and the results speak for themselves — better SEO, more inquiries, and a brand we're proud of.",
    service: "Website Revamp",
  },
  {
    id: 6,
    name: "Neha Gupta",
    role: "Owner, GreenLeaf Organics",
    avatar: "NG",
    avatarBg: "bg-teal-100 text-teal-700",
    rating: 5,
    text: "I was nervous about going digital but the team guided me through everything. Our website went live smoothly and even customers in their 50s find it easy to use. Sales from the website now cover 30% of our revenue.",
    service: "Website Development",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const isFull = i + 1 <= count;
        const isHalf = i < count && i + 1 > count;

        return (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke={isFull || isHalf ? "#111" : "#d4d4d4"}
          >
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="#111" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>

            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              fill={
                isFull
                  ? "#111"
                  : isHalf
                  ? `url(#half-${i})`
                  : "none"
              }
            />
          </svg>
        );
      })}
    </div>
  );
}

export default function Reviews() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-5" id="reviews">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-5xl font-extrabold tracking-widest uppercase text-neutral-500 mb-3">
            Reviews
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight max-w-xl mx-auto">
            What our clients{" "}
            <span className="text-neutral-400">say about us</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base font-normal max-w-lg mx-auto">
            Don't take our word for it — here's what the people we've worked with have to say.
          </p>
        </div>

        {/* Summary bar */}
        <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold text-neutral-900">4.5</span>
            <div>
              <StarRating count={4.5} />
              <p className="text-xs text-neutral-400 mt-1">
                Average rating
              </p>
            </div>
          </div>

          <div className="w-px h-10 bg-neutral-200 hidden sm:block" />

          <div>
            <p className="text-2xl font-bold text-neutral-900">
              {reviews.length}+
            </p>
            <p className="text-xs text-neutral-400">Happy clients</p>
          </div>

          <div className="w-px h-10 bg-neutral-200 hidden sm:block" />

          <div>
            <p className="text-2xl font-bold text-neutral-900">100%</p>
            <p className="text-xs text-neutral-400">Would recommend</p>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
            >
              <StarRating count={review.rating} />

              <p className="text-neutral-600 leading-relaxed text-sm flex-1">
                "{review.text}"
              </p>

              <div className="border-t border-neutral-100 pt-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${review.avatarBg}`}
                  >
                    {review.avatar}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-neutral-900 truncate">
                      {review.name}
                    </p>
                    <p className="text-xs text-neutral-400 truncate">
                      {review.role}
                    </p>
                  </div>

                  <span className="text-xs bg-neutral-100 text-neutral-500 px-2.5 py-1 rounded-full font-medium whitespace-nowrap hidden sm:inline">
                    {review.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-neutral-500 mb-4 text-sm">
            Join our growing list of satisfied clients
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-neutral-700 transition-colors duration-200"
          >
            Get a free consultation
          </a>
        </div>
      </div>
    </section>
  );
}