import React from "react";

type ServiceIconProps = {
  name: string;
  className?: string;
};

function PaintingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      <path
        d="M18 22h12v-8c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v8z"
        fill="#0EA5E9"
      />
      <rect x="18" y="22" width="12" height="6" rx="1" fill="#0284C7" />
      <line
        x1="24"
        y1="28"
        x2="24"
        y2="36"
        stroke="#0EA5E9"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="38" r="2" fill="#0284C7" />
      <rect x="16" y="14" width="4" height="6" rx="1" fill="#0284C7" opacity="0.4" />
      <rect x="22" y="12" width="4" height="8" rx="1" fill="#0284C7" opacity="0.6" />
      <rect x="28" y="16" width="4" height="4" rx="1" fill="#0284C7" opacity="0.3" />
    </svg>
  );
}

function PlumbingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      <path
        d="M24 14c-4 0-7 4-7 8s3 7 7 14c4-7 7-10 7-14s-3-8-7-8z"
        fill="#0284C7"
        opacity="0.3"
      />
      <path
        d="M24 18c-2.5 0-4 2-4 4.5S21.5 26 24 30c2.5-4 4-5.5 4-7.5S26.5 18 24 18z"
        fill="#0284C7"
      />
      <path
        d="M24 30c-1 1.5-2 3-2 4h4c0-1-1-2.5-2-4z"
        fill="#0EA5E9"
      />
      <path d="M18 40h12" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CeilingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      <rect x="14" y="16" width="20" height="4" rx="1" fill="#0EA5E9" />
      <rect x="14" y="28" width="20" height="4" rx="1" fill="#0EA5E9" />
      <line
        x1="18"
        y1="20"
        x2="18"
        y2="28"
        stroke="#0284C7"
        strokeWidth="1.5"
      />
      <line
        x1="24"
        y1="20"
        x2="24"
        y2="28"
        stroke="#0284C7"
        strokeWidth="1.5"
      />
      <line
        x1="30"
        y1="20"
        x2="30"
        y2="28"
        stroke="#0284C7"
        strokeWidth="1.5"
      />
      <rect x="20" y="22" width="8" height="4" rx="0.5" fill="#0284C7" opacity="0.25" />
      <circle cx="24" cy="24" r="1.5" fill="#0284C7" />
    </svg>
  );
}

function WaterproofingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      <path
        d="M16 32V24l8-8 8 8v8"
        fill="#0284C7"
        opacity="0.15"
      />
      <path
        d="M16 32V24l8-8 8 8v8"
        stroke="#0284C7"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20 32v-6h8v6"
        fill="#0EA5E9"
        stroke="#0284C7"
        strokeWidth="1.5"
      />
      <path d="M22 20l-2-2M26 20l2-2" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="18" r="1.5" fill="#0EA5E9" />
    </svg>
  );
}

function HandymanIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      <path d="M20 36L24 18l4 18H20z" fill="#0EA5E9" opacity="0.2" />
      <rect x="22" y="24" width="4" height="10" rx="1" fill="#0284C7" />
      <rect x="20" y="20" width="8" height="4" rx="1" fill="#0EA5E9" />
      <circle cx="24" cy="18" r="2" fill="#0284C7" />
      <path d="M22 36v-3h4v3" fill="#0284C7" />
      <line
        x1="16"
        y1="40"
        x2="32"
        y2="40"
        stroke="#0284C7"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M19 30l-2 2M29 30l2 2" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ServiceIcon({ name, className = "w-6 h-6" }: ServiceIconProps) {
  switch (name) {
    case "paint-brush":
      return <PaintingIcon className={className} />;
    case "droplet":
      return <PlumbingIcon className={className} />;
    case "layout-grid":
      return <CeilingIcon className={className} />;
    case "shield":
      return <WaterproofingIcon className={className} />;
    case "wrench":
      return <HandymanIcon className={className} />;
    default:
      return <HandymanIcon className={className} />;
  }
}
