import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface OrbConfig {
  className: string;
  speed: number;
  floatDuration: number;
}

const orbs: OrbConfig[] = [
  {
    className:
      "absolute -left-32 top-[10%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]",
    speed: -120,
    floatDuration: 8,
  },
  {
    className:
      "absolute right-[-10%] top-[30%] h-[350px] w-[350px] rounded-full bg-accent/8 blur-[100px]",
    speed: 80,
    floatDuration: 10,
  },
  {
    className:
      "absolute left-[20%] bottom-[15%] h-[300px] w-[300px] rounded-full bg-primary/6 blur-[90px]",
    speed: -60,
    floatDuration: 12,
  },
  {
    className:
      "absolute right-[25%] bottom-[5%] h-[250px] w-[250px] rounded-full bg-accent/10 blur-[80px]",
    speed: 100,
    floatDuration: 9,
  },
];

const ParallaxOrbs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const orbElements = Array.from(container.querySelectorAll<HTMLElement>("[data-orb]"));

    const ctx = gsap.context(() => {
      orbElements.forEach((orb, i) => {
        const config = orbs[i];
        if (!config) return;

        gsap.to(orb, {
          y: "+=40",
          x: "+=20",
          duration: config.floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(orb, {
          scale: 1.15,
          duration: config.floatDuration * 0.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        onUpdate: (self) => {
          orbElements.forEach((orb, i) => {
            const config = orbs[i];
            if (!config) return;
            gsap.set(orb, {
              y: self.progress * config.speed,
            });
          });
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <div key={i} data-orb className={orb.className} />
      ))}
    </div>
  );
};

export default ParallaxOrbs;
