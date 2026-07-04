import { useEffect, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SectionAnimationOptions {
  stagger?: number;
  start?: string;
}

export const useSectionAnimations = (
  sectionRef: RefObject<HTMLElement | null>,
  options: SectionAnimationOptions = {}
) => {
  const { stagger = 0.1, start = "top 80%" } = options;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const reveals = section.querySelectorAll("[data-reveal]");
      if (reveals.length) {
        gsap.set(reveals, { y: 24, opacity: 0 });
        ScrollTrigger.batch(reveals, {
          start,
          onEnter: (batch) => {
            gsap.to(batch, {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger,
              ease: "power3.out",
              overwrite: true,
            });
          },
          once: true,
        });
      }

      const cards = section.querySelectorAll("[data-reveal-card]");
      if (cards.length) {
        gsap.set(cards, { y: 32, opacity: 0, scale: 0.98 });
        ScrollTrigger.batch(cards, {
          start: "top 85%",
          onEnter: (batch) => {
            gsap.to(batch, {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
              overwrite: true,
            });
          },
          once: true,
        });
      }

      const lines = section.querySelectorAll("[data-reveal-line]");
      lines.forEach((line) => {
        gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
        ScrollTrigger.create({
          trigger: line,
          start: "top 90%",
          onEnter: () => {
            gsap.to(line, {
              scaleX: 1,
              duration: 1.2,
              ease: "power4.inOut",
            });
          },
          once: true,
        });
      });
    }, section);

    return () => ctx.revert();
  }, [sectionRef, stagger, start]);
};
