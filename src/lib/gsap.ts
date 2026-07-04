import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const ease = {
  smooth: "power3.out",
  elastic: "elastic.out(1, 0.5)",
  expo: "expo.out",
  cinematic: "power4.inOut",
} as const;

export const revealDefaults = {
  y: 80,
  opacity: 0,
  duration: 1.1,
  ease: ease.smooth,
  stagger: 0.08,
};
