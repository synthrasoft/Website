import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const LOADING_KEY = "synthrasoft-loaded";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(() => !sessionStorage.getItem(LOADING_KEY));
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const curtainLeftRef = useRef<HTMLDivElement>(null);
  const curtainRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem(LOADING_KEY, "true");
          document.body.style.overflow = "";
          setIsVisible(false);
        },
      });

      tl.from(logoRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      })
        .to(
          progressRef.current,
          {
            scaleX: 1,
            duration: 1.8,
            ease: "power2.inOut",
          },
          "-=0.3"
        )
        .to(
          counterRef.current,
          {
            innerText: 100,
            duration: 1.8,
            snap: { innerText: 1 },
            ease: "power2.inOut",
          },
          "-=1.8"
        )
        .to(logoRef.current, {
          y: -30,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        })
        .to(
          [curtainLeftRef.current, curtainRightRef.current],
          {
            scaleX: 0,
            duration: 1,
            ease: "power4.inOut",
            stagger: 0.08,
          },
          "-=0.2"
        )
        .to(
          containerRef.current,
          {
            opacity: 0,
            duration: 0.3,
            pointerEvents: "none",
          },
          "-=0.3"
        );
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
      aria-hidden="true"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div ref={logoRef} className="relative z-10 flex flex-col items-center gap-8">
        <div className="text-center">
          <p className="mb-2 font-heading text-4xl tracking-tight sm:text-5xl">
            Synthra<span className="gradient-text">soft</span>
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-muted-foreground">
            Solutions
          </p>
        </div>

        <div className="flex w-64 flex-col items-center gap-3">
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-border">
            <div
              ref={progressRef}
              className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-accent to-primary"
            />
          </div>
          <span
            ref={counterRef}
            className="font-heading text-sm tabular-nums text-muted-foreground"
          >
            0
          </span>
        </div>
      </div>

      <div
        ref={curtainLeftRef}
        className="absolute inset-y-0 left-0 w-1/2 origin-left bg-background"
      />
      <div
        ref={curtainRightRef}
        className="absolute inset-y-0 right-0 w-1/2 origin-right bg-background"
      />
    </div>
  );
};

export default LoadingScreen;
