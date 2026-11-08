import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { Logo } from "../components/Logo";

export const metadata = {
  title: "Join Turators",
  description: "Join the Turators community on WhatsApp.",
};

export default function LinksPage() {
  return (
    <main className="links-page min-h-screen bg-ink text-white">
      <header className="mx-auto flex max-w-[860px] items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/" aria-label="Back to Turators home" className="transition hover:opacity-80">
          <Logo className="text-[26px] text-white" bg="#FFB321" fg="#0A1A2F" />
        </Link>
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-mist transition hover:text-sun"><ArrowLeft size={17} aria-hidden /> Home</Link>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-92px)] max-w-[860px] items-center px-6 pb-16 pt-10 sm:px-10 sm:pt-0">
        <div className="w-full">
          <p className="eyebrow text-sea">The next chapter starts here</p>
          <h1 className="font-display mt-5 max-w-[760px] text-[clamp(52px,9vw,108px)] font-extrabold leading-[0.9] tracking-[-0.06em]">Join the Turators community.</h1>
          <p className="mt-7 max-w-[560px] text-lg leading-relaxed text-mist">Meet guides, hosts, food lovers, heritage enthusiasts, students and tourism builders from across India.</p>

          <a href="https://chat.whatsapp.com/GsfEe3ZlVoL86RcGvoILZr" target="_blank" rel="noreferrer" className="group mt-10 flex max-w-[620px] items-center gap-5 rounded-[28px] border border-[#3e5876] bg-navy p-5 transition hover:-translate-y-1 hover:border-sea hover:bg-[#1a3c60] sm:p-7">
            <span className="grid size-14 flex-none place-items-center rounded-2xl bg-[#25D366] text-ink"><MessageCircle size={30} strokeWidth={2.2} aria-hidden /></span>
            <span className="min-w-0"><strong className="font-display block text-2xl font-bold tracking-[-0.03em]">Join us on WhatsApp</strong><span className="mt-1 block text-sm text-mist">Enter the Turators community chat</span></span>
            <ArrowUpRight className="ml-auto flex-none text-sun transition group-hover:translate-x-1 group-hover:-translate-y-1" size={23} aria-hidden />
          </a>

          <p className="mt-8 text-sm text-[#91a7bd]">Starting in Visakhapatnam. Growing city by city.</p>
        </div>
      </section>
    </main>
  );
}
