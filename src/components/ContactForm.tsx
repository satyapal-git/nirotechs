"use client";

import { useMemo, useState } from "react";

import { siteConfig } from "@/lib/site";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
const USE_API = !!process.env.NEXT_PUBLIC_USE_CONTACT_API;

function encodeMailto(value: string) {
  return encodeURIComponent(value).replace(/%20/g, "+");
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Website");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = `[Inquiry] ${service} — ${name || "New lead"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      "",
      message ? `Message:\n${message}` : "Message:",
    ].join("\n");
    return `mailto:${siteConfig.contact.email}?subject=${encodeMailto(subject)}&body=${encodeMailto(body)}`;
  }, [email, message, name, phone, service]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setDone(false);

    try {
      // Try API route first (Resend)
      if (USE_API) {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, service, message }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Send failed");
        setDone(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSending(false);
        return;
      }

      // Try Formspree if configured
      if (FORMSPREE_ID) {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone,
            service,
            message,
            _replyto: email,
            _subject: `[Contact] ${service} — ${name}`,
          }),
        });
        if (!res.ok) throw new Error("Send failed");
        setDone(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSending(false);
        return;
      }

      // Fallback: mailto
      window.location.href = mailtoHref;
    } catch (err) {
      setError("Could not send. Try again or use WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium">Your name</span>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="h-11 rounded-xl border border-black/10 bg-white px-3 outline-none ring-0 transition focus:border-black/20"
            required
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-medium">Email</span>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            type="email"
            className="h-11 rounded-xl border border-black/10 bg-white px-3 outline-none ring-0 transition focus:border-black/20"
            required
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium">Phone (optional)</span>
          <input
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 9xxxx xxxxx"
            className="h-11 rounded-xl border border-black/10 bg-white px-3 outline-none ring-0 transition focus:border-black/20"
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-medium">Service</span>
          <select
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="h-11 rounded-xl border border-black/10 bg-white px-3 outline-none ring-0 transition focus:border-black/20"
          >
            <option>Website</option>
            <option>Mobile App</option>
            <option>AI / Automation</option>
            <option>UI/UX Design</option>
            <option>Maintenance</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm">
        <span className="font-medium">Project details</span>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you want to build, timeline, budget, references, etc."
          rows={5}
          className="rounded-xl border border-black/10 bg-white px-3 py-3 outline-none ring-0 transition focus:border-black/20"
        />
      </label>

      {done && (
        <p className="rounded-xl bg-green-100 px-4 py-3 text-sm text-green-800">
          Message sent. We’ll reply to your email soon.
        </p>
      )}
      {error && (
        <p className="rounded-xl bg-red-100 px-4 py-3 text-sm text-red-800">{error}</p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-foreground px-5 text-sm font-semibold text-background shadow-sm transition hover:opacity-90 disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send inquiry"}
        </button>

        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-black/10 bg-white px-5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-zinc-50"
        >
          Or chat on WhatsApp
        </a>
      </div>

      <p className="text-xs text-foreground/55">
        {USE_API || FORMSPREE_ID
          ? `Messages are sent to ${siteConfig.contact.email}`
          : "Clicking Send will open your email app. For direct delivery, set RESEND_API_KEY or NEXT_PUBLIC_FORMSPREE_FORM_ID (see README)."}
      </p>
    </form>
  );
}

