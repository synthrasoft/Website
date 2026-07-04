import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useSectionAnimations } from "@/hooks/useSectionAnimations";

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  stagger?: number;
}

const AnimatedSection = ({ children, id, className, stagger }: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionAnimations(sectionRef, { stagger });

  return (
    <section ref={sectionRef} id={id} className={cn("relative", className)}>
      {children}
    </section>
  );
};

export default AnimatedSection;
