import { BadgeCheck, Rocket, Star, HeartHandshake, type LucideIcon } from "lucide-react";

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon?: LucideIcon;
}

export const companyStats: StatItem[] = [
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: BadgeCheck },
  { value: 80, suffix: "%", label: "Client Retention", icon: Star },
  { value: 20, suffix: "+", label: "Projects Delivered", icon: Rocket },
  { value: 24, suffix: "/7", label: "Consistent Support", icon: HeartHandshake },
];
