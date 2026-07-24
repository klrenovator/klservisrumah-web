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

function RenovationIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      <path d="M14 36V20l10-8 10 8v16H14z" fill="#0284C7" opacity="0.15" />
      <path d="M14 36V20l10-8 10 8v16H14z" stroke="#0284C7" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 26h20" stroke="#0284C7" strokeWidth="1.5" />
      <rect x="20" y="28" width="4" height="8" fill="#0EA5E9" />
      <rect x="26" y="28" width="4" height="4" fill="#0EA5E9" opacity="0.5" />
      <path d="M24 12l-3 3h6l-3-3z" fill="#0284C7" />
    </svg>
  );
}

function ElectricalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      <path d="M26 12L16 28h8l-2 8 10-16h-8l2-8z" fill="#0284C7" />
      <path d="M26 12L16 28h8l-2 8 10-16h-8l2-8z" fill="#0EA5E9" opacity="0.4" />
    </svg>
  );
}

function WaterHeaterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      <rect x="18" y="12" width="12" height="22" rx="2" fill="#0284C7" opacity="0.2" />
      <rect x="18" y="12" width="12" height="22" rx="2" stroke="#0284C7" strokeWidth="1.5" fill="none" />
      <rect x="20" y="14" width="8" height="2" rx="1" fill="#0EA5E9" />
      <rect x="20" y="20" width="8" height="2" rx="1" fill="#0EA5E9" />
      <rect x="20" y="26" width="8" height="2" rx="1" fill="#0EA5E9" />
      <path d="M24 34v3" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
      <path d="M21 38h6" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="36" r="1" fill="#0284C7" />
    </svg>
  );
}

function CeilingFanIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      <circle cx="24" cy="14" r="3" fill="#0284C7" />
      <path d="M14 18c2-1 6-2 10-2s8 1 10 2" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" fill="none" />
      <ellipse cx="14" cy="22" rx="5" ry="2" fill="#0284C7" opacity="0.4" transform="rotate(-15 14 22)" />
      <ellipse cx="34" cy="22" rx="5" ry="2" fill="#0284C7" opacity="0.4" transform="rotate(15 34 22)" />
      <ellipse cx="24" cy="32" rx="2" ry="5" fill="#0284C7" opacity="0.4" />
      <line x1="24" y1="14" x2="24" y2="28" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="1.5" fill="#0EA5E9" />
    </svg>
  );
}

function LightingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      <path d="M24 14c-4 0-7 3-7 7 0 3 2 5 3 6h8c1-1 3-3 3-6 0-4-3-7-7-7z" fill="#0284C7" opacity="0.25" />
      <path d="M24 14c-4 0-7 3-7 7 0 3 2 5 3 6h8c1-1 3-3 3-6 0-4-3-7-7-7z" stroke="#0284C7" strokeWidth="1.5" fill="none" />
      <rect x="20" y="27" width="8" height="3" fill="#0EA5E9" />
      <path d="M22 30v3M26 30v3" stroke="#0284C7" strokeWidth="1.5" />
      <line x1="20" y1="33" x2="28" y2="33" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 12v-2" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 18l-1.5-1.5M32 18l1.5-1.5" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TilingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      <rect x="14" y="14" width="8" height="8" rx="0.5" fill="#0284C7" opacity="0.3" />
      <rect x="22" y="14" width="8" height="8" rx="0.5" fill="#0EA5E9" opacity="0.4" />
      <rect x="30" y="14" width="4" height="8" rx="0.5" fill="#0284C7" opacity="0.3" />
      <rect x="14" y="22" width="8" height="8" rx="0.5" fill="#0EA5E9" opacity="0.4" />
      <rect x="22" y="22" width="8" height="8" rx="0.5" fill="#0284C7" opacity="0.3" />
      <rect x="14" y="30" width="8" height="4" rx="0.5" fill="#0EA5E9" opacity="0.4" />
      <rect x="22" y="30" width="8" height="4" rx="0.5" fill="#0284C7" opacity="0.3" />
      <rect x="30" y="22" width="4" height="12" rx="0.5" fill="#0EA5E9" opacity="0.4" />
    </svg>
  );
}

function PlasterCeilingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      <rect x="12" y="16" width="24" height="2" rx="0.5" fill="#0EA5E9" />
      <rect x="12" y="20" width="24" height="4" rx="0.5" fill="#0284C7" opacity="0.4" />
      <rect x="14" y="26" width="20" height="2" rx="0.5" fill="#0EA5E9" />
      <rect x="14" y="30" width="20" height="4" rx="0.5" fill="#0284C7" opacity="0.4" />
      <circle cx="20" cy="23" r="1" fill="#0284C7" />
      <circle cx="24" cy="23" r="1" fill="#0284C7" />
      <circle cx="28" cy="23" r="1" fill="#0284C7" />
      <circle cx="22" cy="33" r="1" fill="#0284C7" />
      <circle cx="26" cy="33" r="1" fill="#0284C7" />
    </svg>
  );
}

function SkimCoatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      <rect x="14" y="14" width="20" height="20" rx="1" fill="#fff" stroke="#0284C7" strokeWidth="1.5" />
      <path d="M14 22h20M14 26h20M14 30h20" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.4" />
      <rect x="20" y="10" width="2" height="20" rx="1" fill="#0284C7" />
      <ellipse cx="21" cy="32" rx="6" ry="3" fill="#0EA5E9" opacity="0.3" />
      <path d="M30 30l4 4-2 2-4-4v-2h2z" fill="#0284C7" />
    </svg>
  );
}

function FlooringIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* Wood plank pattern */}
      <rect x="12" y="20" width="11" height="4" rx="0.5" fill="#0284C7" opacity="0.5" />
      <rect x="25" y="20" width="11" height="4" rx="0.5" fill="#0EA5E9" opacity="0.5" />
      <rect x="12" y="25" width="11" height="4" rx="0.5" fill="#0EA5E9" opacity="0.4" />
      <rect x="25" y="25" width="11" height="4" rx="0.5" fill="#0284C7" opacity="0.4" />
      <rect x="12" y="30" width="11" height="4" rx="0.5" fill="#0284C7" opacity="0.45" />
      <rect x="25" y="30" width="11" height="4" rx="0.5" fill="#0EA5E9" opacity="0.45" />
      {/* Wood grain hint */}
      <line x1="13" y1="22" x2="22" y2="22" stroke="#fff" strokeWidth="0.4" opacity="0.6" />
      <line x1="26" y1="27" x2="35" y2="27" stroke="#fff" strokeWidth="0.4" opacity="0.6" />
      <line x1="13" y1="32" x2="22" y2="32" stroke="#fff" strokeWidth="0.4" opacity="0.6" />
    </svg>
  );
}

function EpoxyFlooringIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* Floor with glossy reflection */}
      <rect x="10" y="22" width="28" height="14" rx="1" fill="#0284C7" opacity="0.4" />
      <rect x="10" y="22" width="28" height="14" rx="1" stroke="#0284C7" strokeWidth="1.5" fill="none" />
      {/* Flake decorations */}
      <circle cx="14" cy="26" r="1" fill="#0EA5E9" />
      <circle cx="18" cy="29" r="0.8" fill="#fff" opacity="0.8" />
      <circle cx="22" cy="27" r="1.2" fill="#0284C7" />
      <circle cx="26" cy="30" r="0.8" fill="#0EA5E9" />
      <circle cx="30" cy="28" r="1" fill="#fff" opacity="0.7" />
      <circle cx="34" cy="32" r="0.8" fill="#0EA5E9" />
      {/* Glossy highlight */}
      <path d="M11 22 Q24 18 37 22" stroke="#fff" strokeWidth="1.2" fill="none" opacity="0.6" />
      <path d="M11 23 Q24 19 37 23" stroke="#fff" strokeWidth="0.6" fill="none" opacity="0.4" />
    </svg>
  );
}

function RoofRepairIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* House silhouette with roof */}
      <path d="M10 22 L24 12 L38 22 L38 38 L10 38 Z" fill="#fff" stroke="#0284C7" strokeWidth="1.5" />
      {/* Roof tiles */}
      <path d="M10 22 L24 12 L38 22" stroke="#0284C7" strokeWidth="2" fill="none" />
      <line x1="14" y1="20" x2="20" y2="14" stroke="#0EA5E9" strokeWidth="1" />
      <line x1="20" y1="20" x2="26" y2="14" stroke="#0EA5E9" strokeWidth="1" />
      <line x1="26" y1="20" x2="32" y2="14" stroke="#0EA5E9" strokeWidth="1" />
      <line x1="11" y1="22" x2="37" y2="22" stroke="#0EA5E9" strokeWidth="0.8" />
      {/* Chimney */}
      <rect x="28" y="14" width="4" height="6" fill="#0284C7" />
      {/* Window */}
      <rect x="20" y="26" width="8" height="8" fill="#0EA5E9" opacity="0.5" />
      <rect x="20" y="26" width="8" height="8" stroke="#0284C7" strokeWidth="1" fill="none" />
    </svg>
  );
}

function KitchenCabinetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* Countertop */}
      <rect x="10" y="22" width="28" height="3" fill="#0284C7" />
      {/* Lower cabinets */}
      <rect x="10" y="25" width="9" height="13" rx="0.5" fill="#0EA5E9" opacity="0.5" />
      <rect x="19.5" y="25" width="9" height="13" rx="0.5" fill="#0EA5E9" opacity="0.4" />
      <rect x="29" y="25" width="9" height="13" rx="0.5" fill="#0EA5E9" opacity="0.5" />
      {/* Handles */}
      <line x1="14" y1="32" x2="14.5" y2="32" stroke="#075985" strokeWidth="1" />
      <line x1="23.5" y1="32" x2="24" y2="32" stroke="#075985" strokeWidth="1" />
      <line x1="33" y1="32" x2="33.5" y2="32" stroke="#075985" strokeWidth="1" />
      {/* Upper cabinet line */}
      <rect x="10" y="16" width="28" height="5" rx="0.5" fill="#0EA5E9" opacity="0.3" />
      {/* Cooker hood */}
      <rect x="22" y="10" width="4" height="6" fill="#0284C7" />
    </svg>
  );
}

function CarpentryIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* Wardrobe */}
      <rect x="10" y="12" width="28" height="28" rx="1" fill="#fff" stroke="#0284C7" strokeWidth="1.5" />
      {/* Doors split */}
      <line x1="24" y1="12" x2="24" y2="40" stroke="#0284C7" strokeWidth="1" />
      {/* Door panels */}
      <rect x="13" y="16" width="8" height="20" rx="0.5" fill="#0EA5E9" opacity="0.2" />
      <rect x="27" y="16" width="8" height="20" rx="0.5" fill="#0EA5E9" opacity="0.2" />
      {/* Handles */}
      <line x1="22" y1="26" x2="22" y2="28" stroke="#075985" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26" y1="26" x2="26" y2="28" stroke="#075985" strokeWidth="1.5" strokeLinecap="round" />
      {/* Drawers at bottom */}
      <rect x="13" y="36" width="8" height="3" fill="#0EA5E9" opacity="0.4" />
      <rect x="27" y="36" width="8" height="3" fill="#0EA5E9" opacity="0.4" />
    </svg>
  );
}

function DoorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* Door frame */}
      <rect x="13" y="10" width="22" height="32" rx="1" fill="#fff" stroke="#0284C7" strokeWidth="1.5" />
      {/* Door panel divisions */}
      <rect x="16" y="14" width="16" height="11" rx="0.5" fill="#0EA5E9" opacity="0.25" />
      <rect x="16" y="27" width="16" height="11" rx="0.5" fill="#0EA5E9" opacity="0.25" />
      {/* Door handle */}
      <circle cx="30" cy="26" r="1.5" fill="#0284C7" />
      <rect x="29.5" y="22" width="1" height="6" fill="#0284C7" />
      {/* Hinges */}
      <rect x="13" y="14" width="1.5" height="2.5" fill="#0284C7" />
      <rect x="13" y="36" width="1.5" height="2.5" fill="#0284C7" />
    </svg>
  );
}

function WindowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* Window outer frame */}
      <rect x="11" y="10" width="26" height="28" rx="1" fill="#fff" stroke="#0284C7" strokeWidth="1.5" />
      {/* Window panes (4-grid) */}
      <line x1="24" y1="10" x2="24" y2="38" stroke="#0284C7" strokeWidth="1.5" />
      <line x1="11" y1="24" x2="37" y2="24" stroke="#0284C7" strokeWidth="1.5" />
      {/* Glass reflection */}
      <rect x="13" y="12" width="9" height="10" fill="#0EA5E9" opacity="0.3" />
      <rect x="26" y="26" width="9" height="10" fill="#0EA5E9" opacity="0.3" />
      {/* Handle */}
      <circle cx="24" cy="24" r="1" fill="#0284C7" />
    </svg>
  );
}

function LocksmithIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* Key body */}
      <circle cx="18" cy="24" r="7" fill="none" stroke="#0284C7" strokeWidth="2" />
      <circle cx="18" cy="24" r="3" fill="#0EA5E9" opacity="0.3" />
      {/* Key shaft */}
      <rect x="24" y="23" width="14" height="2" fill="#0284C7" />
      {/* Key teeth */}
      <rect x="32" y="25" width="2" height="3" fill="#0284C7" />
      <rect x="36" y="25" width="2" height="4" fill="#0284C7" />
    </svg>
  );
}

function GlassAluminiumIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* Glass panel */}
      <rect x="12" y="10" width="24" height="28" rx="1" fill="#fff" opacity="0.6" stroke="#0284C7" strokeWidth="1.5"/>
      {/* Frame divisions */}
      <line x1="12" y1="24" x2="36" y2="24" stroke="#0284C7" strokeWidth="1.2" opacity="0.6"/>
      {/* Glass reflection */}
      <path d="M14 12 L34 32 M22 12 L34 22" stroke="#0EA5E9" strokeWidth="0.8" opacity="0.5"/>
      {/* Door handle */}
      <circle cx="32" cy="24" r="1.5" fill="#0284C7"/>
    </svg>
  );
}

function CleaningIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* Spray bottle */}
      <rect x="14" y="14" width="14" height="22" rx="1.5" fill="#0EA5E9" opacity="0.4" stroke="#0284C7" strokeWidth="1.2"/>
      <rect x="16" y="10" width="6" height="6" rx="1" fill="#0284C7"/>
      <rect x="20" y="11" width="2" height="3" fill="#075985"/>
      {/* Spray droplets */}
      <circle cx="32" cy="20" r="1" fill="#0EA5E9" opacity="0.7"/>
      <circle cx="34" cy="16" r="0.8" fill="#0EA5E9" opacity="0.6"/>
      <circle cx="36" cy="22" r="0.6" fill="#0EA5E9" opacity="0.5"/>
      {/* Sparkle */}
      <path d="M30 12 L31 14 L33 15 L31 16 L30 18 L29 16 L27 15 L29 14 Z" fill="#fff" opacity="0.8"/>
    </svg>
  );
}

function DeepCleaningIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* Sparkle stars */}
      <path d="M14 12 L15 15 L18 16 L15 17 L14 20 L13 17 L10 16 L13 15 Z" fill="#fff" stroke="#0284C7" strokeWidth="0.8"/>
      <path d="M34 24 L35 27 L38 28 L35 29 L34 32 L33 29 L30 28 L33 27 Z" fill="#fff" stroke="#0284C7" strokeWidth="0.8"/>
      <path d="M16 32 L17 34 L19 35 L17 36 L16 38 L15 36 L13 35 L15 34 Z" fill="#fff" stroke="#0284C7" strokeWidth="0.6"/>
      {/* Sponge */}
      <rect x="20" y="20" width="14" height="10" rx="1" fill="#0EA5E9" opacity="0.5" stroke="#0284C7" strokeWidth="1"/>
      <rect x="20" y="20" width="14" height="3" fill="#0284C7" opacity="0.7"/>
      {/* Bubbles */}
      <circle cx="22" cy="32" r="1" fill="#0EA5E9" opacity="0.5"/>
      <circle cx="26" cy="34" r="0.8" fill="#0EA5E9" opacity="0.4"/>
    </svg>
  );
}

function PostRenovationIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* House being cleaned */}
      <path d="M12 28 L24 16 L36 28 L36 36 L12 36 Z" fill="#fff" opacity="0.3" stroke="#0284C7" strokeWidth="1.5"/>
      <rect x="20" y="28" width="4" height="8" fill="#0EA5E9" opacity="0.5"/>
      <rect x="28" y="22" width="4" height="4" fill="#0EA5E9" opacity="0.4"/>
      {/* Dust particles */}
      <circle cx="14" cy="14" r="1" fill="#0284C7" opacity="0.6"/>
      <circle cx="20" cy="10" r="0.8" fill="#0284C7" opacity="0.5"/>
      <circle cx="30" cy="12" r="1" fill="#0284C7" opacity="0.5"/>
      <circle cx="36" cy="8" r="0.6" fill="#0284C7" opacity="0.4"/>
      {/* Broom */}
      <line x1="32" y1="36" x2="38" y2="42" stroke="#0284C7" strokeWidth="1.5"/>
      <path d="M30 36 L38 44 L40 42 L32 34 Z" fill="#0EA5E9" opacity="0.6"/>
    </svg>
  );
}

function CCTVIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* Camera body */}
      <rect x="11" y="18" width="20" height="12" rx="2" fill="#0EA5E9" opacity="0.5" stroke="#0284C7" strokeWidth="1.5"/>
      {/* Lens */}
      <circle cx="21" cy="24" r="4" fill="#fff" stroke="#0284C7" strokeWidth="1.5"/>
      <circle cx="21" cy="24" r="2" fill="#0EA5E9"/>
      {/* LED dot */}
      <circle cx="28" cy="21" r="1" fill="#075985"/>
      {/* Mounting arm */}
      <rect x="29" y="22" width="3" height="4" fill="#0284C7"/>
      {/* Recording light */}
      <circle cx="34" cy="14" r="1.5" fill="#0284C7"/>
      <circle cx="34" cy="14" r="3" fill="#0284C7" opacity="0.3"/>
    </svg>
  );
}

function AutogateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* Gate posts */}
      <rect x="10" y="14" width="3" height="24" fill="#0EA5E9" opacity="0.5"/>
      <rect x="35" y="14" width="3" height="24" fill="#0EA5E9" opacity="0.5"/>
      {/* Gate panels */}
      <rect x="13" y="18" width="9" height="14" fill="none" stroke="#0284C7" strokeWidth="1.5"/>
      <rect x="26" y="18" width="9" height="14" fill="none" stroke="#0284C7" strokeWidth="1.5"/>
      {/* Vertical bars */}
      <line x1="16" y1="20" x2="16" y2="30" stroke="#0EA5E9" strokeWidth="1"/>
      <line x1="19" y1="20" x2="19" y2="30" stroke="#0EA5E9" strokeWidth="1"/>
      <line x1="29" y1="20" x2="29" y2="30" stroke="#0EA5E9" strokeWidth="1"/>
      <line x1="32" y1="20" x2="32" y2="30" stroke="#0EA5E9" strokeWidth="1"/>
      {/* Motor on top */}
      <rect x="20" y="11" width="8" height="3" rx="0.5" fill="#0284C7"/>
      {/* Wheels */}
      <circle cx="16" cy="34" r="1.5" fill="#0EA5E9"/>
      <circle cx="32" cy="34" r="1.5" fill="#0EA5E9"/>
    </svg>
  );
}

function WeldingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect x="8" y="8" width="32" height="32" rx="8" fill="#E0F2FE" />
      {/* Welding mask */}
      <path d="M16 14 L32 14 L34 22 L34 32 L14 32 L14 22 Z" fill="#0EA5E9" opacity="0.4" stroke="#0284C7" strokeWidth="1.5"/>
      <rect x="18" y="20" width="12" height="6" rx="1" fill="#075985"/>
      <rect x="19" y="22" width="10" height="2" fill="#fff" opacity="0.7"/>
      {/* Sparks */}
      <path d="M14 38 L18 36 M16 40 L20 36 M34 38 L30 36 M32 40 L28 36" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="14" cy="36" r="1" fill="#fff"/>
      <circle cx="34" cy="36" r="1" fill="#fff"/>
      {/* Welding rod */}
      <line x1="24" y1="32" x2="24" y2="40" stroke="#0284C7" strokeWidth="1.5"/>
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
    case "house":
      return <RenovationIcon className={className} />;
    case "zap":
      return <ElectricalIcon className={className} />;
    case "flame":
      return <WaterHeaterIcon className={className} />;
    case "fan":
      return <CeilingFanIcon className={className} />;
    case "lightbulb":
      return <LightingIcon className={className} />;
    case "grid-3x3":
      return <TilingIcon className={className} />;
    case "layers":
      return <PlasterCeilingIcon className={className} />;
    case "paint-roller":
      return <SkimCoatIcon className={className} />;
    case "square":
      return <FlooringIcon className={className} />;
    case "circle-dot":
      return <EpoxyFlooringIcon className={className} />;
    case "home":
      return <RoofRepairIcon className={className} />;
    case "utensils":
      return <KitchenCabinetIcon className={className} />;
    case "ruler":
      return <CarpentryIcon className={className} />;
    case "door-open":
      return <DoorIcon className={className} />;
    case "square-stack":
      return <WindowIcon className={className} />;
    case "key":
      return <LocksmithIcon className={className} />;
    case "panel-top":
      return <GlassAluminiumIcon className={className} />;
    case "spray-can":
      return <CleaningIcon className={className} />;
    case "brush":
      return <DeepCleaningIcon className={className} />;
    case "hammer":
      return <PostRenovationIcon className={className} />;
    case "camera":
      return <CCTVIcon className={className} />;
    case "move":
      return <AutogateIcon className={className} />;
    case "welding-spark":
      return <WeldingIcon className={className} />;
    default:
      return <HandymanIcon className={className} />;
  }
}
