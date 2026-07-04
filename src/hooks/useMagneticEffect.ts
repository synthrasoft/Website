import { useEffect, type RefObject } from "react";
import { gsap } from "@/lib/gsap";

interface MagneticOptions {
  strength?: number;
  maxDistance?: number;
}

export const useMagneticEffect = (
  ref: RefObject<HTMLElement | null>,
  options: MagneticOptions = {}
) => {
  const { strength = 0.4, maxDistance = 80 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      if (distance < maxDistance) {
        gsap.to(el, {
          x: deltaX * strength,
          y: deltaY * strength,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    const handleLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)",
      });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref, strength, maxDistance]);
};
