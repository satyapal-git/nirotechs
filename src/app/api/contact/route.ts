import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site";

/**
 * Contact form API endpoint.
 * Sends email to siteConfig.contact.email using Resend.
 * Set RESEND_API_KEY in .env.local (get from resend.com - free tier available).
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      service?: string;
      message?: string;
    };

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured. Add RESEND_API_KEY to .env.local" },
        { status: 503 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL ?? `Contact Form <onboarding@resend.dev>`,
        to: siteConfig.contact.email,
        // Resend expects reply_to (not replyTo) for Reply-To header
        reply_to: email,
        subject: `[Contact] ${service ?? "Inquiry"} — ${name ?? "Unknown"}`,
        html: `
          <h2>New Contact Form Inquiry</h2>
          <p><strong>Name:</strong> ${name ?? ""}</p>
          <p><strong>Email:</strong> ${email ?? ""}</p>
          <p><strong>Phone:</strong> ${phone ?? "Not provided"}</p>
          <p><strong>Service:</strong> ${service ?? ""}</p>
          <p><strong>Message:</strong></p>
          <p>${(message ?? "").replace(/\n/g, "<br>")}</p>
        `,
        text: [
          `Name: ${name ?? ""}`,
          `Email: ${email ?? ""}`,
          `Phone: ${phone ?? "Not provided"}`,
          `Service: ${service ?? ""}`,
          "",
          message ?? "",
        ].join("\n"),
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Resend error:", data);
      return NextResponse.json(
        { error: data?.message ?? "Failed to send email" },
        { status: res.status }
      );
    }

    return NextResponse.json({ ok: true, id: data.id });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
