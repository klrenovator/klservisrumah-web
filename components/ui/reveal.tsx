"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay before the reveal animation kicks in, in ms. */
  delay?: number;
  /** Vertical distance travelled by the fade, in px. */
  distance?: number;
  /** Trigger threshold (0-1). Defaults to 0.12. */
  threshold?: number;
  /** Root margin passed to IntersectionObserver. */
  rootMargin?: string;
  /** Optional class to merge onto the wrapping div. */
  className?: string;
  /** Wrap in a specific tag rather than div. */
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * <Reveal> — cheap, self-contained scroll-triggered fade-up wrapper.
 *
 * Uses a single IntersectionObserver per instance and disconnects itself
 * once the element has been revealed. No animation library (framer-motion,
 * gsap, etc.) is imported so the client bundle stays tiny.
 *
 * Design mirrors the KLRenovator <Reveal> component so section-level
 * animation timing feels consistent between the two sites.
 */
export function Reveal({
  children,
  delay = 0,
  distance = 16,
  threshold = 0.12,
  rootMargin = "0px 0px -8% 0px",
  className,
  as = "div"
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect the visitor's reduced-motion preference.
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0)" : `translate3d(0,${distance}px,0)`,
    transitionProperty: "opacity, transform",
    transitionDuration: "600ms",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform"
  };

  const Tag = as as React.ElementType;

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={className} style={style}>
      {children}
    </Tag>
  );
}
