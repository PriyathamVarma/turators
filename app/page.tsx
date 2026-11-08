import { ArrowRight, BedDouble, BookOpen, Calendar, Compass, GraduationCap, Landmark, MessageSquare } from "lucide-react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import JoinForm from "./components/JoinForm";
import HeroArt from "./components/HeroArt";

const places = ["RK Beach", "Kailasagiri", "Rushikonda", "Araku Valley", "Borra Caves", "Submarine Museum", "Simhachalam", "Yarada Beach", "Bheemili"];

const audiences = [
  { title: "Guides & tour operators", body: "Get discovered, share routes, find partners for transport, stays and group trips.", cta: "Join as a guide", Icon: Compass, card: "bg-sun text-ink", iconColor: "text-ink", ctaColor: "text-ink", bodyColor: "text-ink" },
  { title: "Stays, cafes & startups", body: "Meet the people who send you guests. Swap ideas, tools and collaborations.", cta: "Join as a business", Icon: BedDouble, card: "bg-ink text-white", iconColor: "text-sea", ctaColor: "text-sea", bodyColor: "text-mist" },
  { title: "Students & newcomers", body: "Find mentors, internships and your first real projects in the industry.", cta: "Start learning", Icon: GraduationCap, card: "border border-line bg-white text-ink", iconColor: "text-sun", ctaColor: "text-ink", bodyColor: "text-muted" },
  { title: "Government & tourism bodies", body: "Hear from the ground, share schemes and policy, and co-host local events.", cta: "Partner with us", Icon: Landmark, card: "bg-sea text-ink", iconColor: "text-ink", ctaColor: "text-ink", bodyColor: "text-ink" },
];

const steps = [
  { n: "01", title: "Join", body: "Create a profile in two minutes. Tell us what you do and what you need." },
  { n: "02", title: "Meet", body: "Browse the directory and come to local meetups to meet people in person." },
  { n: "03", title: "Collaborate", body: "Post what you need on the collab board. Find partners for trips, products and pilots." },
  { n: "04", title: "Grow", body: "Share what worked. Help open the next city chapter with the playbook we build together." },
];

const events = [
  { title: "Founding members meetup", bg: "bg-sun" },
  { title: "Guides & stays mixer", bg: "bg-sea" },
  { title: "Tourism students open house", bg: "bg-[#f3f5f7]" },
];

const members = [
  { role: "Local guide · Araku", dot: "bg-sun" },
  { role: "Homestay host · Rushikonda", dot: "bg-sea" },
  { role: "Travel startup · Dwaraka Nagar", dot: "bg-ink" },
];

const h2 = "font-display text-[clamp(34px,4.6vw,60px)] font-extrabold leading-none tracking-[-0.03em]";
const wrap = "mx-auto max-w-[1240px] px-[clamp(16px,4vw,40px)]";
const card = "transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(10,26,47,0.14)]";
const arrowBtn = "inline-flex min-h-11 items-center gap-2 font-bold";

export function OriginalHome() {
  return (
    <main className="overflow-x-clip">
      {/* HERO */}
      <section className="overflow-hidden rounded-b-[28px] md:rounded-b-[40px] bg-ink text-white">
        <SiteHeader />
        <div className={wrap}>

          <div id="top" className="flex flex-wrap items-center gap-10 pb-14 pt-14 md:pb-22 md:pt-20">
            <div className="min-w-0 flex-1 basis-[520px]">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2a4260] py-2 pl-2.5 pr-4 text-sm text-mist">
                <span className="rounded-full bg-sea px-2.5 py-[3px] text-xs font-bold text-ink">LIVE</span>
                Chapter one: Visakhapatnam
              </div>
              <h1 className="font-display mt-6 text-[clamp(44px,6.4vw,92px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
                Where India&apos;s tourism people <span className="text-sun">build together.</span>
              </h1>
              <p className="mt-6 max-w-[540px] text-[clamp(17px,1.5vw,20px)] text-mist">
                Turator connects guides, stays, startups, students and tourism bodies in one community. We begin on the Vizag coast and grow city by city.
              </p>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <a href="#join" className="inline-flex min-h-11 w-full items-center justify-center gap-2.5 rounded-full bg-sun px-7 py-4 sm:w-auto text-[17px] font-bold text-ink transition hover:-translate-y-0.5">
                  Join the Vizag circle <ArrowRight size={20} strokeWidth={2.4} aria-hidden />
                </a>
                <a href="#vizag" className="inline-flex min-h-11 w-full items-center justify-center rounded-full border-[1.5px] border-[#3a5578] px-7 py-[15px] sm:w-auto text-[17px] font-bold transition hover:-translate-y-0.5">See what&apos;s happening</a>
              </div>
            </div>
            <div className="relative min-w-0 flex-1 basis-[400px]">
              <HeroArt />
            </div>
          </div>
        </div>
      </section>

      {/* PLACES */}
      <section aria-label="Places around Visakhapatnam" className={`${wrap} pt-10`}>
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-muted">The coast we start from</p>
        <div className="flex flex-wrap gap-2.5">
          {places.map((p) => <span key={p} className="rounded-full border border-line bg-white px-[18px] py-2.5 font-medium">{p}</span>)}
        </div>
      </section>

      {/* WHO */}
      <section id="who" className={`${wrap} pt-20 md:pt-28`}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className={`${h2} max-w-[640px]`}>One table for everyone who makes a trip happen.</h2>
          <p className="max-w-[380px] text-[17px] text-muted">The best trips are built by many hands. Turator puts them in the same room.</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-5">
          {audiences.map(({ title, body, cta, Icon, card: c, iconColor, ctaColor, bodyColor }) => (
            <article key={title} className={`${card} flex min-h-[240px] sm:min-h-[300px] flex-1 basis-[280px] flex-col gap-4 rounded-[28px] p-6 sm:p-8 ${c}`}>
              <Icon size={44} strokeWidth={1.8} className={iconColor} aria-hidden />
              <h3 className="font-display text-2xl font-bold leading-[1.1] sm:text-[28px] tracking-[-0.02em]">{title}</h3>
              <p className={bodyColor}>{body}</p>
              <a href="#join" className={`${arrowBtn} mt-auto ${ctaColor}`}>{cta} <ArrowRight size={18} strokeWidth={2.4} aria-hidden /></a>
            </article>
          ))}
        </div>
      </section>

      {/* HOW */}
      <section id="how" className={`${wrap} pt-20 md:pt-28`}>
        <h2 className={`${h2} max-w-[700px]`}>From hello to a real project in four steps.</h2>
        <ol className="m-0 mt-12 flex list-none flex-wrap gap-5 p-0">
          {steps.map((s) => (
            <li key={s.n} className="flex-1 basis-[240px] border-t-[3px] border-ink pt-5">
              <div className="font-display text-[56px] font-extrabold leading-none text-sun">{s.n}</div>
              <h3 className="font-display mb-2 mt-3 text-2xl font-bold tracking-[-0.02em]">{s.title}</h3>
              <p className="text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* VIZAG */}
      <section id="vizag" className={`${wrap} pt-20 md:pt-28`}>
        <div className="flex flex-wrap gap-12 rounded-[28px] md:rounded-[40px] bg-ink p-[clamp(24px,4vw,56px)] text-white">
          <div className="min-w-0 flex-1 basis-[400px]">
            <div className="inline-block rounded-full bg-sea px-3.5 py-1.5 text-[13px] font-bold tracking-[0.06em] text-ink">CHAPTER 01</div>
            <h2 className={`${h2} mt-5`}>Visakhapatnam<br /><span className="text-sun">goes first.</span></h2>
            <p className="mt-5 max-w-[460px] text-[17px] text-mist">Beaches, hills, caves, heritage and a growing city between them. Vizag has the range. We are building the community to match.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#join" className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-sun px-6 py-3.5 sm:w-auto font-bold text-ink transition hover:-translate-y-0.5">Join the Vizag circle</a>
              <a href="#join" className="inline-flex min-h-11 w-full items-center justify-center rounded-full border-[1.5px] border-[#3a5578] px-6 py-[13px] sm:w-auto font-bold transition hover:-translate-y-0.5">Request your city</a>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 basis-[400px] flex-col gap-3.5">
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#a9b8ca]">Coming up in Vizag</p>
            {events.map((e) => (
              <article key={e.title} className="flex items-center gap-[18px] rounded-[20px] bg-navy px-5 py-[18px]">
                <div className={`font-display min-w-[60px] rounded-[14px] py-2 text-center font-extrabold leading-[1.1] text-ink ${e.bg}`}><span className="block text-xs tracking-[0.08em]">[MON]</span><span className="text-[26px]">[DD]</span></div>
                <div className="min-w-0"><h3 className="text-lg font-bold">{e.title}</h3><p className="mt-0.5 text-sm text-[#a9b8ca]">[VENUE], Visakhapatnam</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSIDE */}
      <section id="inside" className={`${wrap} pt-20 md:pt-28`}>
        <h2 className={`${h2} max-w-[700px]`}>Everything the community needs, in one place.</h2>
        <div className="mt-12 flex flex-wrap gap-5">
          <article className={`${card} flex flex-[2_1_520px] flex-wrap items-center gap-7 rounded-[28px] border border-line bg-white p-6 sm:p-8`}>
            <div className="min-w-0 flex-1 basis-[260px]">
              <h3 className="font-display mb-2.5 text-[26px] font-bold leading-[1.1] sm:text-[30px] tracking-[-0.02em]">People directory</h3>
              <p className="text-muted">Search by role, neighbourhood or skill. Every profile shows what someone offers and what they are looking for.</p>
            </div>
            <div className="flex min-w-0 flex-1 basis-[260px] flex-col gap-2.5" aria-hidden>
              {members.map((m) => (
                <div key={m.role} className="flex items-center gap-3 rounded-2xl bg-background px-3.5 py-3">
                  <span className={`size-10 flex-none rounded-full ${m.dot}`} />
                  <div><div className="text-[15px] font-bold">[NAME]</div><div className="text-[13px] text-muted">{m.role}</div></div>
                </div>
              ))}
            </div>
          </article>
          {[
            { t: "Events & meetups", b: "Join local gatherings or host your own with our toolkit.", Icon: Calendar, cls: "bg-sun text-ink", ic: "text-ink", bc: "" },
            { t: "Collab board", b: "Post a need or an offer. Find a driver, a venue, a designer, a partner.", Icon: MessageSquare, cls: "bg-sea text-ink", ic: "text-ink", bc: "" },
            { t: "Knowledge library", b: "Guides, templates and local know-how written by members.", Icon: BookOpen, cls: "bg-ink text-white", ic: "text-sun", bc: "text-mist" },
          ].map(({ t, b, Icon, cls, ic, bc }) => (
            <article key={t} className={`${card} flex flex-1 basis-[300px] flex-col gap-3 rounded-[28px] p-6 sm:p-8 ${cls}`}>
              <Icon size={40} strokeWidth={1.8} className={ic} aria-hidden />
              <h3 className="font-display text-[26px] font-bold leading-[1.1] sm:text-[30px] tracking-[-0.02em]">{t}</h3>
              <p className={bc}>{b}</p>
            </article>
          ))}
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className={`${wrap} pt-20 md:pt-28`}>
        <div className="flex flex-wrap items-center gap-10 rounded-[28px] md:rounded-[40px] bg-sun p-[clamp(24px,4vw,64px)] text-ink">
          <div className="min-w-0 flex-1 basis-[360px]">
            <h2 className="font-display text-[clamp(36px,5vw,68px)] font-extrabold leading-[0.98] tracking-[-0.035em]">Be a founding member.</h2>
            <p className="mt-4 max-w-[420px] text-lg">Free to join. Help shape how tourism people in Vizag work together, and how India follows.</p>
          </div>
          <JoinForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

export { default } from "./RedesignedHome";
