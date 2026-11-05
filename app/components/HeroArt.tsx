export default function HeroArt() {
  return (
    <svg viewBox="0 0 600 680" role="img" aria-label="Illustration of Visakhapatnam at dusk: a large sun setting behind the Eastern Ghats, a lighthouse on a headland and a sailboat on the Bay of Bengal" className="block h-auto w-full">
      <defs>
        <clipPath id="hero-arch">
          <rect width="600" height="680" rx="44" />
        </clipPath>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0F2742" />
          <stop offset="0.55" stopColor="#1D4470" />
          <stop offset="1" stopColor="#3C6C98" />
        </linearGradient>
        <linearGradient id="hero-sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FF8A4A" />
          <stop offset="1" stopColor="#FF5B2E" />
        </linearGradient>
        <linearGradient id="hero-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1C7491" />
          <stop offset="0.6" stopColor="#124066" />
          <stop offset="1" stopColor="#0E3254" />
        </linearGradient>
      </defs>

      <g clipPath="url(#hero-arch)">
        <rect width="600" height="470" fill="url(#hero-sky)" />

        {/* sun and halo */}
        <circle cx="300" cy="330" r="250" fill="#FF5B2E" opacity=".06" />
        <circle cx="300" cy="330" r="190" fill="#FF5B2E" opacity=".1" />
        <circle cx="300" cy="330" r="120" fill="url(#hero-sun)" />

        {/* gulls */}
        <g fill="none" stroke="#F3F5F7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M112 170q9-10 18 0q9-10 18 0" />
          <path d="M168 138q6-7 12 0q6-7 12 0" />
          <path d="M470 204q6-7 12 0q6-7 12 0" />
        </g>

        {/* Eastern Ghats, three smooth layers */}
        <path d="M0 395C70 360 130 340 200 362C270 384 320 350 390 336C460 322 520 346 600 372V480H0Z" fill="#335F8A" />
        <path d="M0 430C80 398 160 384 240 404C320 424 380 398 450 392C520 386 565 402 600 416V490H0Z" fill="#214E78" />
        <path d="M0 455C100 430 200 436 300 450C400 464 500 440 600 446V500H0Z" fill="#174465" />

        {/* sea */}
        <rect y="462" width="600" height="218" fill="url(#hero-sea)" />
        <rect y="462" width="600" height="2" fill="#8FD8E3" opacity=".35" />

        {/* sun reflection */}
        <g fill="#FF5B2E">
          <rect x="225" y="478" width="150" height="6" rx="3" opacity=".75" />
          <rect x="241" y="494" width="118" height="6" rx="3" opacity=".65" />
          <rect x="255" y="512" width="90" height="6" rx="3" opacity=".55" />
          <rect x="268" y="532" width="64" height="6" rx="3" opacity=".45" />
          <rect x="279" y="556" width="42" height="6" rx="3" opacity=".35" />
        </g>

        {/* gentle waves */}
        <g fill="none" stroke="#12B5CB" strokeWidth="3" strokeLinecap="round" opacity=".5">
          <path d="M340 622q16-9 32 0t32 0t32 0" />
          <path d="M470 594q12-7 24 0t24 0" />
          <path d="M230 646q16-9 32 0t32 0" />
        </g>

        {/* sailboat */}
        <path d="M419 542V470Q448 500 462 542Z" fill="#FF5B2E" />
        <path d="M413 542V484Q392 508 380 542Z" fill="#F3F5F7" opacity=".92" />
        <path d="M372 548H462Q452 566 436 566H398Q382 566 372 548Z" fill="#F3F5F7" />
        <rect x="392" y="576" width="50" height="5" rx="2.5" fill="#F3F5F7" opacity=".25" />

        {/* headland and lighthouse */}
        <path d="M0 520C50 506 110 504 150 530C182 552 196 600 188 680H0Z" fill="#0F2B47" />
        <path d="M62 510L67 410H85L90 510Z" fill="#F3F5F7" />
        <path d="M65.4 440H86.6L87.2 452H64.8Z" fill="#FF5B2E" />
        <path d="M63.6 476H88.4L89 488H63Z" fill="#FF5B2E" />
        <rect x="62" y="402" width="28" height="8" fill="#0F2B47" />
        <rect x="67" y="380" width="18" height="22" rx="2" fill="#FFC98A" />
        <path d="M65 380Q76 358 87 380Z" fill="#FF5B2E" />
      </g>
      <rect x=".75" y=".75" width="598.5" height="678.5" rx="43.5" fill="none" stroke="#3A5578" strokeOpacity=".6" strokeWidth="1.5" />
    </svg>
  );
}
