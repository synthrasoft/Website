import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
  trigger?: boolean;
}

const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
  decimals = 0,
  trigger = true,
}: AnimatedCounterProps) => {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    const obj = { val: 0 };

    const animate = () => {
      gsap.to(obj, {
        val: value,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          if (el) {
            el.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
          }
        },
      });
    };

    const ctx = gsap.context(() => {
      if (trigger) {
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          onEnter: animate,
          once: true,
        });
      } else {
        animate();
      }
    }, el);

    return () => ctx.revert();
  }, [value, suffix, prefix, duration, decimals, trigger]);

  return (
    <span ref={counterRef} className={cn("tabular-nums", className)}>
      {prefix}0{suffix}
    </span>
  );
};

export default AnimatedCounter;
