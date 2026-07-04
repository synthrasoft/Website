import { useRef, type ReactNode, type ComponentPropsWithoutRef } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  magneticStrength?: number;
}

type MagneticButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: never; to?: never };

type MagneticButtonAsLink = BaseProps & LinkProps & { href?: never };

type MagneticButtonAsAnchor = BaseProps &
  ComponentPropsWithoutRef<"a"> & { to?: never };

type MagneticButtonProps =
  | MagneticButtonAsButton
  | MagneticButtonAsLink
  | MagneticButtonAsAnchor;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground glow-border hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.6)]",
  secondary:
    "border border-border bg-secondary text-foreground hover:border-primary/50 hover:bg-muted",
  outline:
    "border-2 border-primary/30 bg-primary/5 text-foreground hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20",
  ghost: "text-muted-foreground hover:text-primary",
};

const MagneticButton = ({
  children,
  variant = "primary",
  className,
  magneticStrength = 0.35,
  ...props
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useMagneticEffect(ref, { strength: magneticStrength });

  const baseClass = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300",
    variantStyles[variant],
    className
  );

  const shimmer = (
    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
  );

  const inner = (
    <div ref={ref} className={baseClass}>
      {variant === "primary" && shimmer}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </div>
  );

  if ("to" in props && props.to) {
    const { to, ...linkProps } = props as MagneticButtonAsLink;
    return (
      <Link to={to} {...linkProps} className="inline-block">
        {inner}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as MagneticButtonAsAnchor;
    return (
      <a href={href} {...anchorProps} className="inline-block">
        {inner}
      </a>
    );
  }

  const buttonProps = props as MagneticButtonAsButton;
  return (
    <button type="button" {...buttonProps} className="inline-block border-0 bg-transparent p-0">
      {inner}
    </button>
  );
};

export default MagneticButton;
