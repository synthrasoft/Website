import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "@/lib/gsap";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const container = containerRef.current;
    const overlay = overlayRef.current;
    const progress = progressRef.current;
    if (!container || !overlay || !progress) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.set(overlay, { pointerEvents: "all" })
        .fromTo(
          progress,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.5, ease: "power2.inOut" }
        )
        .fromTo(
          container,
          { opacity: 0, y: 40, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" },
          "-=0.2"
        )
        .to(overlay, {
          opacity: 0,
          duration: 0.4,
          pointerEvents: "none",
          onComplete: () => {
            gsap.set(progress, { scaleX: 0 });
          },
        });
    });

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[150] opacity-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
          <div
            ref={progressRef}
            className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-accent to-primary"
          />
        </div>
      </div>
      <div ref={containerRef}>{children}</div>
    </>
  );
};

export default PageTransition;
