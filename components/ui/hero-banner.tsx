import React from "react";

type HeroBannerProps = {
  service: string;
  title: string;
  subtitle?: string;
};

const serviceConfigs: Record<string, { colors: string[]; icon: React.ReactNode }> = {
  painting: {
    colors: ["#0EA5E9", "#0284C7", "#075985"],
    icon: (
      <g>
        <path d="M120 80 L160 40 L200 80 L200 120 L120 120Z" fill="#fff" opacity="0.2"/>
        <rect x="145" y="100" width="30" height="40" rx="4" fill="#fff" opacity="0.9"/>
        <rect x="138" y="90" width="44" height="14" rx="4" fill="#fff" opacity="0.8"/>
        <line x1="160" y1="140" x2="160" y2="165" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="160" cy="172" r="4" fill="#fff" opacity="0.7"/>
      </g>
    ),
  },
  plumbing: {
    colors: ["#0284C7", "#0369A1", "#075985"],
    icon: (
      <g>
        <path d="M160 50 C160 50 120 90 120 120 C120 140 138 150 160 180 C182 150 200 140 200 120 C200 90 160 50 160 50Z" fill="#fff" opacity="0.9"/>
        <path d="M160 70 C160 70 135 100 135 118 C135 130 147 138 160 155 C173 138 185 130 185 118 C185 100 160 70 160 70Z" fill="#fff" opacity="0.4"/>
      </g>
    ),
  },
  ceiling: {
    colors: ["#075985", "#0EA5E9", "#0284C7"],
    icon: (
      <g>
        <rect x="100" y="60" width="120" height="8" rx="2" fill="#fff" opacity="0.9"/>
        <rect x="100" y="140" width="120" height="8" rx="2" fill="#fff" opacity="0.9"/>
        <line x1="120" y1="68" x2="120" y2="140" stroke="#fff" strokeWidth="3" opacity="0.8"/>
        <line x1="160" y1="68" x2="160" y2="140" stroke="#fff" strokeWidth="3" opacity="0.8"/>
        <line x1="200" y1="68" x2="200" y2="140" stroke="#fff" strokeWidth="3" opacity="0.8"/>
        <circle cx="160" cy="100" r="10" fill="#fff" opacity="0.6"/>
        <circle cx="160" cy="100" r="4" fill="#fff" opacity="0.9"/>
      </g>
    ),
  },
  waterproofing: {
    colors: ["#0EA5E9", "#075985", "#0284C7"],
    icon: (
      <g>
        <path d="M110 150 L110 90 L160 50 L210 90 L210 150Z" fill="#fff" opacity="0.15"/>
        <path d="M110 150 L110 90 L160 50 L210 90 L210 150" stroke="#fff" strokeWidth="3" strokeLinejoin="round" fill="none"/>
        <path d="M130 150 L130 115 L190 115 L190 150Z" fill="#fff" opacity="0.3" stroke="#fff" strokeWidth="2"/>
      </g>
    ),
  },
  handyman: {
    colors: ["#0284C7", "#0EA5E9", "#075985"],
    icon: (
      <g>
        <path d="M130 160 L160 50 L190 160Z" fill="#fff" opacity="0.2"/>
        <rect x="150" y="100" width="20" height="50" rx="3" fill="#fff" opacity="0.9"/>
        <rect x="142" y="85" width="36" height="18" rx="3" fill="#fff" opacity="0.8"/>
        <circle cx="160" cy="72" r="10" fill="#fff" opacity="0.6"/>
        <line x1="130" y1="160" x2="190" y2="160" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      </g>
    ),
  },
};

export function HeroBanner({ service, title, subtitle }: HeroBannerProps) {
  const config = serviceConfigs[service] || serviceConfigs.painting;
  const [c1, c2, c3] = config.colors;

  return (
    <svg
      viewBox="0 0 1200 400"
      className="w-full h-full rounded-3xl"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${title} service banner`}
    >
      <defs>
        <linearGradient id={`bg-${service}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c1} />
          <stop offset="50%" stopColor={c2} />
          <stop offset="100%" stopColor={c3} />
        </linearGradient>
      </defs>
      <rect width="1200" height="400" fill={`url(#bg-${service})`} />
      {/* Decorative elements */}
      <circle cx="1050" cy="80" r="180" fill="#fff" opacity="0.05" />
      <circle cx="150" cy="320" r="120" fill="#fff" opacity="0.04" />
      <rect x="0" y="0" width="1200" height="400" fill="url(#bg-painting)" opacity="0" />
      {config.icon}
    </svg>
  );
}
