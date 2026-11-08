"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavLink = { href: string; label: string };

export default function HeaderNav({ links, current, logo }: { links: NavLink[]; current?: string; logo: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const cta = "inline-flex min-h-11 items-center rounded-full bg-ink px-5 py-3 text-[15px] font-bold text-white transition hover:-translate-y-0.5";
  return (
    <div className="site-nav relative z-10 text-white">
      <header className="mx-auto max-w-[1240px] px-[clamp(16px,4vw,40px)] py-4 md:py-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" aria-label="Turators home" onClick={() => setOpen(false)}>{logo}</Link>
          <nav aria-label="Primary" className="hidden gap-x-7 text-[15px] font-medium md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} aria-current={current === l.href ? "page" : undefined} className={`py-2.5 underline-offset-8 transition hover:underline hover:decoration-2 ${current === l.href ? "font-bold underline decoration-2" : ""}`}>{l.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/links" className={`${cta} hidden sm:inline-flex`}>Join the community</Link>
            <Link href="/links" className={`${cta} sm:hidden`}>Join</Link>
            <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)} className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-ink md:hidden">
              {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="mt-3 flex flex-col rounded-3xl bg-ink p-2 md:hidden">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center rounded-2xl px-4 text-[17px] font-medium text-white transition hover:bg-navy">{l.label}</Link>
            ))}
          </nav>
        )}
      </header>
    </div>
  );
}
