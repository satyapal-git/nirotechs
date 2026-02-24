"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function MobileFooterBar() {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] flex flex-col border-t border-black/10 bg-white/95 shadow-[0_-8px_30px_rgba(15,23,42,0.18)] md:hidden" style={{ transform: "translateZ(0)" }}>
      <div className="flex items-center justify-center gap-6 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={phoneHref}
          className="flex size-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition hover:scale-[1.05] hover:brightness-110 active:scale-[0.95]"
        >
          <svg className="size-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.25 4.5C2.25 3.672 2.922 3 3.75 3h2.35c.576 0 1.08.39 1.215.95l.74 2.96a1.25 1.25 0 01-.649 1.422l-1.37.685a.75.75 0 00-.353.994 11.04 11.04 0 005.19 5.19.75.75 0 00.994-.353l.685-1.37a1.25 1.25 0 011.422-.649l2.96.74c.56.135.95.639.95 1.215v2.35c0 .828-.672 1.5-1.5 1.5h-.75C8.55 21 3 15.45 3 8.25v-.75z" />
          </svg>
        </a>
        <Link
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex size-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-[1.05] hover:brightness-110 active:scale-[0.95]"
        >
          <svg className="size-7" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
