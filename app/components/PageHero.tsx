import SiteHeader from "./SiteHeader";

export default function PageHero({ current, eyebrow, title, accent, children }: { current?: string; eyebrow: string; title: string; accent: string; children?: React.ReactNode }) {
  return (
    <section className="overflow-hidden rounded-b-[28px] md:rounded-b-[40px] bg-ink text-white">
      <SiteHeader current={current} />
      <div className="mx-auto max-w-[1240px] px-[clamp(16px,4vw,40px)]">
        <div className="pb-12 pt-14 md:pb-16 md:pt-20">
          <p className="inline-block rounded-full bg-sea px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.06em] text-ink">{eyebrow}</p>
          <h1 className="font-display mt-5 max-w-[860px] text-[clamp(40px,5.6vw,80px)] font-extrabold leading-[0.98] tracking-[-0.035em]">{title} <span className="text-sun">{accent}</span></h1>
          {children}
        </div>
      </div>
    </section>
  );
}
