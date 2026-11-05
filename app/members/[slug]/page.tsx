import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Languages, MapPin } from "lucide-react";
import { members, roleMeta } from "../../data/community";
import Avatar from "../../components/Avatar";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import SampleNotice from "../../components/SampleNotice";

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const m = members.find((x) => x.slug === slug);
  return { title: m ? `${m.name} — Turator` : "Member — Turator" };
}

export default async function MemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = members.find((x) => x.slug === slug);
  if (!m) notFound();
  const similar = members.filter((x) => x.role === m.role && x.slug !== m.slug).slice(0, 2);

  return (
    <main className="overflow-x-clip">
      <section className="overflow-hidden rounded-b-[40px] bg-ink text-white">
        <SiteHeader />
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,4vw,40px)]">
          <div className="pb-14 pt-12 md:pt-16">
            <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-[15px] font-bold text-mist transition hover:text-sun"><ArrowLeft size={18} aria-hidden /> Back home</Link>
            <div className="mt-4 flex flex-wrap items-center gap-6">
              <Avatar name={m.name} role={m.role} size={88} />
              <div className="min-w-0 flex-1 basis-[320px]">
                <span className={`inline-block rounded-full px-3.5 py-1.5 text-[13px] font-bold ${roleMeta[m.role].chip}`}>{roleMeta[m.role].label}</span>
                <h1 className="font-display mt-3 text-[clamp(36px,5vw,64px)] font-extrabold leading-none tracking-[-0.035em]">{m.name}</h1>
                <p className="mt-3 text-lg text-mist">{m.headline}</p>
              </div>
              <button type="button" className="min-h-12 w-full cursor-pointer rounded-full bg-sun px-8 sm:w-auto py-3.5 text-[17px] font-bold text-ink transition hover:-translate-y-0.5">Connect</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-[clamp(16px,4vw,40px)] pt-10 md:pt-14">
        <div className="flex flex-wrap gap-6">
          <div className="min-w-0 flex-[2_1_520px] space-y-6">
            <article className="rounded-[24px] border border-line bg-white p-6 sm:rounded-[28px] sm:p-8">
              <h2 className="font-display text-[28px] font-bold tracking-[-0.02em]">About</h2>
              <p className="mt-3 text-[17px] text-muted">{m.about}</p>
            </article>
            <div className="flex flex-wrap gap-6">
              <article className="min-w-0 flex-1 basis-[260px] rounded-[24px] bg-sun p-6 sm:rounded-[28px] sm:p-8 text-ink">
                <h2 className="font-display text-[28px] font-bold tracking-[-0.02em]">Can offer</h2>
                <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0">{m.offers.map((o) => <li key={o} className="rounded-full bg-white/70 px-3.5 py-1.5 text-[15px] font-medium">{o}</li>)}</ul>
              </article>
              <article className="min-w-0 flex-1 basis-[260px] rounded-[24px] bg-sea p-6 sm:rounded-[28px] sm:p-8 text-ink">
                <h2 className="font-display text-[28px] font-bold tracking-[-0.02em]">Looking for</h2>
                <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0">{m.looking.map((o) => <li key={o} className="rounded-full bg-white/70 px-3.5 py-1.5 text-[15px] font-medium">{o}</li>)}</ul>
              </article>
            </div>
          </div>
          <aside className="min-w-0 flex-1 basis-[300px] space-y-6">
            <div className="rounded-[24px] bg-ink p-6 sm:rounded-[28px] sm:p-8 text-white">
              <h2 className="font-display text-[24px] font-bold tracking-[-0.02em]">Details</h2>
              <p className="mt-4 flex items-center gap-2.5 text-mist"><MapPin size={18} aria-hidden /> {m.area}, Visakhapatnam</p>
              <p className="mt-3 flex items-center gap-2.5 text-mist"><Languages size={18} aria-hidden /> {m.languages.join(", ")}</p>
            </div>
            {similar.length > 0 && (
              <div className="rounded-[24px] border border-line bg-white p-6 sm:rounded-[28px] sm:p-8">
                <h2 className="font-display text-[24px] font-bold tracking-[-0.02em]">Also in this group</h2>
                <ul className="m-0 mt-4 flex list-none flex-col gap-3 p-0">
                  {similar.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/members/${s.slug}`} className="flex min-h-11 items-center gap-3 rounded-2xl bg-background px-3.5 py-3 transition hover:-translate-y-0.5">
                        <Avatar name={s.name} role={s.role} size={40} />
                        <span className="min-w-0"><span className="block text-[15px] font-bold">{s.name}</span><span className="block text-[13px] text-muted">{s.area}</span></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
        <SampleNotice />
      </section>
      <SiteFooter />
    </main>
  );
}
