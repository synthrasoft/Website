import { useEffect, useRef, type ElementType } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface StaggeredTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  splitBy?: "words" | "chars";
  delay?: number;
  trigger?: boolean;
  highlight?: string;
  highlightClassName?: string;
}

const StaggeredText = ({
  text,
  as: Tag = "span",
  className,
  splitBy = "words",
  delay = 0,
  trigger = true,
  highlight,
  highlightClassName = "gradient-text",
}: StaggeredTextProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  const hasGradient = className?.includes("gradient-text");
  const outerClassName = hasGradient
    ? className?.replace(/\bgradient-text\b/g, "").trim()
    : className;
  const innerClassName = hasGradient ? "gradient-text" : undefined;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll("[data-char]");

    const ctx = gsap.context(() => {
      gsap.set(spans, { y: "110%", opacity: 0, rotateX: -40 });

      let hasAnimated = false;
      const animate = () => {
        if (hasAnimated) return;
        hasAnimated = true;
        gsap.to(spans, {
          y: "0%",
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: splitBy === "chars" ? 0.03 : 0.06,
          delay,
          ease: "power4.out",
        });
      };

      if (trigger) {
        ScrollTrigger.create({
          trigger: container,
          start: "top 85%",
          onEnter: animate,
          once: true,
        });

        // Fire immediately if already in viewport (e.g. on refresh mid-page)
        ScrollTrigger.refresh();
        const rect = container.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          animate();
        }
      } else {
        animate();
      }
    }, container);

    return () => ctx.revert();
  }, [text, splitBy, delay, trigger]);

  const renderParts = () => {
    if (highlight && text.includes(highlight)) {
      const [before, after] = text.split(highlight);
      return (
        <>
          {renderSplit(before)}
          <span className={cn("inline-block", highlightClassName)}>
            {renderSplit(highlight, true)}
          </span>
          {renderSplit(after)}
        </>
      );
    }
    return renderSplit(text);
  };

  const renderSplit = (str: string, isHighlight = false) => {
    if (!str) return null;

    const charClass = cn(
      "inline-block",
      innerClassName,
      isHighlight && highlightClassName
    );

    if (splitBy === "chars") {
      return str.split("").map((char, i) => (
        <span key={`${str}-${i}`} className="inline-block overflow-hidden align-bottom">
          <span data-char className={charClass} style={{ transformOrigin: "bottom center" }}>
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ));
    }

    return str.split(" ").map((word, i, arr) => (
      <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
        <span data-char className={charClass} style={{ transformOrigin: "bottom center" }}>
          {word}
          {i < arr.length - 1 ? "\u00A0" : ""}
        </span>
      </span>
    ));
  };

  return (
    <Tag className={cn("inline", outerClassName)}>
      <span ref={containerRef} className="inline">
        {renderParts()}
      </span>
    </Tag>
  );
};

export default StaggeredText;
