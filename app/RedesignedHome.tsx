import { ArrowRight, BedDouble, Compass, GraduationCap, Landmark, MessageSquare, Users } from "lucide-react";
import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import JoinForm from "./components/JoinForm";
import HeroArt from "./components/HeroArt";

const audiences = [
  { title: "Guides & tour operators", body: "Get discovered, share routes, find partners for transport, stays and group trips.", cta: "Join as a guide", Icon: Compass, className: "role-saffron", icon: "text-ink" },
  { title: "Stays, cafes & startups", body: "Meet the people who send you guests. Swap ideas, tools and collaborations.", cta: "Join as a business", Icon: BedDouble, className: "role-indigo", icon: "text-sea" },
  { title: "Students & newcomers", body: "Find mentors, internships and your first real projects in the industry.", cta: "Start learning", Icon: GraduationCap, className: "role-cream", icon: "text-sun" },
  { title: "Government & tourism bodies", body: "Hear from the ground, share schemes and policy, and co-host local events.", cta: "Partner with us", Icon: Landmark, className: "role-teal", icon: "text-ink" },
];
const steps = [
  { n: "01", title: "Join", body: "Create a profile in two minutes. Tell us what you do and what you need.", Icon: Users },
  { n: "02", title: "Meet", body: "Browse the directory and come to local meetups to meet people in person.", Icon: Compass },
  { n: "03", title: "Collaborate", body: "Post what you need on the collab board. Find partners for trips, products and pilots.", Icon: MessageSquare },
  { n: "04", title: "Grow", body: "Share what worked. Help open the next city chapter with the playbook we build together.", Icon: ArrowRight },
];
const events = [
  { date: "TBD", title: "Founding members meetup", body: "Tourism community meetup · Visakhapatnam" },
  { date: "TBD", title: "Guides & stays mixer", body: "Coastal routes planning session · Visakhapatnam" },
  { date: "TBD", title: "Tourism students open house", body: "Student projects showcase · Visakhapatnam" },
];
const h2 = "font-display text-[clamp(36px,4.7vw,66px)] font-extrabold leading-[0.96] tracking-[-0.045em]";
const wrap = "mx-auto max-w-[1240px] px-[clamp(18px,4vw,40px)]";
const arrowBtn = "inline-flex min-h-11 items-center gap-2 font-bold";

export default function RedesignedHome() {
  return (
    <main className="overflow-x-clip">
      <section className="hero-shell overflow-hidden rounded-b-[28px] md:rounded-b-[42px]">
        <SiteHeader />
        <div className={wrap}>
          <div id="top" className="grid items-center gap-12 pb-16 pt-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(400px,1.08fr)] lg:gap-6 lg:pb-20 lg:pt-24">
            <div className="relative z-[1] min-w-0">
              <div className="live-pill inline-flex items-center gap-2.5 rounded-full px-2.5 py-2 pr-4 text-sm"><span className="rounded-full bg-sea px-2.5 py-[3px] text-xs font-bold text-ink">LIVE</span>Chapter one: Visakhapatnam</div>
              <h1 className="font-display mt-7 max-w-[760px] text-[clamp(46px,6.8vw,94px)] font-extrabold leading-[0.92] tracking-[-0.055em]">Where India&apos;s tourism people <span className="text-sun">build together.</span></h1>
              <p className="mt-7 max-w-[600px] text-[clamp(17px,1.5vw,20px)] leading-relaxed text-mist">Turators connects guides, stays, startups, students and tourism bodies in one community. We begin on the Vizag coast and grow city by city.</p>
              <div className="mt-9 flex flex-wrap gap-3.5"><a href="#join" className="primary-btn inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full px-7 py-4 sm:w-auto text-[17px] font-bold">Join the Vizag circle <ArrowRight size={20} strokeWidth={2.4} aria-hidden /></a><a href="#vizag" className="secondary-btn inline-flex min-h-12 w-full items-center justify-center rounded-full px-7 py-[15px] sm:w-auto text-[17px] font-bold">See what&apos;s happening</a></div>
              <div className="mt-12 flex items-center gap-3 text-sm text-mist"><span className="avatar-stack" aria-hidden><span /><span /><span /></span><span>Founding members from the Bay of Bengal</span></div>
            </div>
            <div className="hero-mascot relative min-w-0"><Image src="/indian-low-poly-tourism-mascot.png" alt="Indian Turators travel storyteller mascot" width={620} height={720} priority className="relative z-[1] mx-auto block w-full max-w-[620px] rounded-[34px] object-cover object-top mix-blend-screen" /></div>
          </div>
        </div>
      </section>

      <section id="who" className={`${wrap} section-pad`}><div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"><div><p className="eyebrow text-sun">A shared table</p><h2 className={`${h2} mt-4 max-w-[760px]`}>One table for everyone who makes a trip happen.</h2></div><p className="max-w-[380px] justify-self-end text-[17px] leading-relaxed text-muted">The best trips are built by many hands. Turators puts them in the same room.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2">{audiences.map(({ title, body, cta, Icon, className, icon }) => <article key={title} className={`role-card group ${className}`}><Icon size={42} strokeWidth={1.8} className={icon} aria-hidden /><div className="relative z-[1] mt-7 max-w-[410px]"><h3 className="font-display text-[clamp(25px,2.3vw,34px)] font-bold leading-[1.02] tracking-[-0.03em]">{title}</h3><p className="mt-4 max-w-[410px] text-[17px] leading-relaxed">{body}</p></div><a href="#join" className={`${arrowBtn} relative z-[1] mt-9`}>{cta} <ArrowRight size={18} strokeWidth={2.4} aria-hidden /></a><span className="role-mark" aria-hidden /></article>)}</div></section>

      <section id="how" className="journey-section section-pad"><div className={wrap}><p className="eyebrow text-sun">The Turators way</p><h2 className={`${h2} mt-4 max-w-[760px]`}>From hello to a real project in four steps.</h2><ol className="journey-list mt-14 grid gap-5 lg:grid-cols-4">{steps.map((s) => <li key={s.n} className="journey-step"><div className="journey-number">{s.n}</div><div className="journey-dot" aria-hidden /><h3 className="font-display mt-6 text-2xl font-bold tracking-[-0.03em]">{s.title}</h3><p className="mt-2 text-muted">{s.body}</p><s.Icon className="journey-icon" size={42} strokeWidth={1.8} aria-hidden /></li>)}</ol></div></section>

      <section id="vizag" className={`${wrap} section-pad`}><div className="chapter-panel grid gap-8 overflow-hidden rounded-[34px] p-6 text-white sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-14"><div className="relative z-[1]"><p className="eyebrow text-sea">Chapter 01 · Andhra Pradesh</p><h2 className={`${h2} mt-5 max-w-[560px]`}>Visakhapatnam <span className="text-sun">goes first.</span></h2><p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-mist">Beaches, hills, caves, heritage and a growing city between them. Vizag has the range. We are building the community to match.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#join" className="primary-btn inline-flex min-h-11 items-center rounded-full px-6 py-3.5 font-bold">Join the Vizag circle</a><a href="#join" className="secondary-btn inline-flex min-h-11 items-center rounded-full px-6 py-[13px] font-bold">Request your city</a></div></div><div className="relative z-[1] flex min-w-0 flex-col justify-end gap-3.5"><p className="eyebrow text-mist">Upcoming in Vizag</p>{events.map((e) => <article key={e.title} className="event-row"><div className="event-date"><span>DATE</span>{e.date}</div><div><h3 className="font-display text-lg font-bold">{e.title}</h3><p className="mt-0.5 text-sm text-mist">{e.body}</p></div><ArrowRight className="ml-auto text-sun" size={19} aria-hidden /></article>)}</div><div className="chapter-art" aria-hidden><HeroArt /></div></div></section>

      <section id="join" className={`${wrap} section-pad pt-4 md:pt-8`}><div className="join-panel relative overflow-hidden rounded-[34px] p-6 sm:p-10 lg:p-14"><div className="relative z-[1] grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="eyebrow text-ink">Start the next chapter</p><h2 className="font-display mt-4 max-w-[540px] text-[clamp(42px,5.5vw,74px)] font-extrabold leading-[0.93] tracking-[-0.055em]">Be a founding member.</h2><p className="mt-5 max-w-[440px] text-lg">Free to join. Help shape how tourism people in Vizag work together, and how India follows.</p></div><JoinForm /></div></div></section>
      <SiteFooter />
    </main>
  );
}
