import { Logo } from "./Logo";
import HeaderNav from "./HeaderNav";

const links = [
  { href: "/#who", label: "Who it's for" },
  { href: "/#how", label: "How it works" },
  { href: "/#vizag", label: "Vizag chapter" },
  { href: "/events", label: "Events" },
];

export default function SiteHeader({ current }: { current?: string }) {
  return <HeaderNav links={links} current={current} logo={<Logo className="text-[27px] text-white" bg="#FFB321" fg="#0A1A2F" />} />;
}
