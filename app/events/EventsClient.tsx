"use client";

import Link from "next/link";
import { useState } from "react";
import { MapPin, Users } from "lucide-react";
import { events } from "../data/community";

const types = ["All", "Meetup", "Workshop", "Mixer", "Walk"] as const;

export default function EventsClient() {
  const [type, setType] = useState<(typeof types)[number]>("All");
  const list = events.filter((e) => type === "All" || e.type === type);
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by type">
        {types.map((t) => (
          <button key={t} type="button" aria-pressed={type === t} onClick={() => setType(t)} className={`min-h-11 cursor-pointer rounded-full border-[1.5px] px-4 py-2.5 text-[15px] font-bold transition ${type === t ? "border-ink bg-ink text-white" : "border-[#8a99ab] bg-white text-ink hover:border-ink"}`}>{t === "All" ? "All events" : t + "s"}</button>
        ))}
      </div>
      <ul className="m-0 mt-8 flex list-none flex-col gap-4 p-0">
        {list.map((e) => (
          <li key={e.title}>
            <article className="flex flex-wrap items-center gap-4 rounded-[24px] border border-line bg-white p-5 sm:gap-6 sm:rounded-[28px] sm:p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(10,26,47,0.14)]">
              <div className={`font-display min-w-[76px] rounded-[18px] py-3 text-center font-extrabold leading-[1.1] text-ink ${e.accent} ${e.accent === "bg-[#f3f5f7]" ? "border border-line" : ""}`}><span className="block text-xs tracking-[0.08em]">[MON]</span><span className="text-[32px]">[DD]</span></div>
              <div className="min-w-0 flex-1 basis-[300px]">
                <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-muted">{e.type}</p>
                <h2 className="font-display mt-1 text-2xl font-bold leading-tight tracking-[-0.02em]">{e.title}</h2>
                <p className="mt-2 text-muted">{e.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                  <span className="inline-flex items-center gap-1.5"><MapPin size={16} aria-hidden /> {e.area}</span>
                  <span className="inline-flex items-center gap-1.5"><Users size={16} aria-hidden /> {e.who}</span>
                </div>
              </div>
              <Link href="/#join" className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-ink px-6 py-3 sm:w-auto font-bold text-white transition hover:-translate-y-0.5">Save my spot</Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
