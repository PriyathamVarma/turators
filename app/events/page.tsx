import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SampleNotice from "../components/SampleNotice";
import EventsClient from "./EventsClient";

export const metadata: Metadata = { title: "Events — Turator", description: "Meetups, workshops and walks for the Visakhapatnam tourism community." };

export default function EventsPage() {
  return (
    <main className="overflow-x-clip">
      <PageHero current="/events" eyebrow="Events and meetups" title="Meet in person," accent="build together.">
        <div className="mt-10 flex max-w-[640px] flex-wrap items-center gap-6 rounded-[28px] bg-navy p-6">
          <div className="font-display min-w-[76px] rounded-[18px] bg-sun py-3 text-center font-extrabold leading-[1.1] text-ink"><span className="block text-xs tracking-[0.08em]">DATE</span><span className="text-[25px]">TBD</span></div>
          <div className="min-w-0 flex-1 basis-[240px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-sea">Next up</p>
            <h2 className="font-display mt-1 text-2xl font-bold leading-tight tracking-[-0.02em]">Founding members meetup</h2>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-mist"><MapPin size={16} aria-hidden /> [VENUE], Visakhapatnam</p>
          </div>
          <Link href="/#join" className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-sun px-6 py-3 sm:w-auto font-bold text-ink transition hover:-translate-y-0.5">Save my spot</Link>
        </div>
      </PageHero>
      <section className="mx-auto max-w-[1240px] px-[clamp(16px,4vw,40px)] pt-10 md:pt-14">
        <EventsClient />
        <SampleNotice />
      </section>
      <SiteFooter />
    </main>
  );
}
