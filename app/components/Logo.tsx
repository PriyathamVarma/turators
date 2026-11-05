export function LogoMark({ size = 34, bg = "#FF5B2E", fg = "#0A1A2F" }: { size?: number; bg?: string; fg?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" aria-hidden="true">
      <circle cx="17" cy="17" r="17" fill={bg} />
      <path d="M8 21c3-4 6-4 9 0s6 4 9 0" fill="none" stroke={fg} strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="17" cy="12" r="3.2" fill={fg} />
    </svg>
  );
}

export function Logo({ size = 34, className = "", bg, fg }: { size?: number; className?: string; bg?: string; fg?: string }) {
  return (
    <span className={`font-display flex items-center gap-2.5 font-extrabold tracking-tight ${className}`}>
      <LogoMark size={size} bg={bg} fg={fg} />
      turator
    </span>
  );
}
