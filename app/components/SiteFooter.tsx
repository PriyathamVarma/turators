import Link from "next/link";
import { Logo } from "./Logo";

export default function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1240px] px-[clamp(16px,4vw,40px)] pb-10 pt-20">
      <div className="flex flex-wrap justify-between gap-8 border-t-[1.5px] border-ink pt-8">
        <div className="max-w-[320px]">
          <Logo size={30} className="text-2xl" />
          <p className="mt-3 text-[15px] text-muted">A community for people building India&apos;s tourism ecosystem. Started in Visakhapatnam.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-2 font-medium">
          <Link href="/events" className="py-2.5 transition hover:text-sun">Events</Link>
          <Link href="/#how" className="py-2.5 transition hover:text-sun">How it works</Link>
          <Link href="/#join" className="py-2.5 transition hover:text-sun">Join</Link>
        </nav>
      </div>
      <p className="mt-8 text-sm text-muted">© Turator. Made on the Bay of Bengal.</p>
    </footer>
  );
}
