import AnimatedSection from "@/components/animations/AnimatedSection";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { companyStats } from "@/data/stats";

const StatsStrip = () => {
  return (
    <AnimatedSection className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((stat) => (
            <div key={stat.label} data-reveal-card>
              <p className="font-heading text-4xl sm:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="gradient-text"
                />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default StatsStrip;
