import AnimatedSection from "@/components/animations/AnimatedSection";

const clients = [
  "TechNova", "UrbanEdge", "GreenLeaf", "CloudSync", "FitPulse", "ScaleUp AI",
  "DataFlow", "BrightEdge", "CoreSync", "VeloCity",
];

const ClientsMarquee = () => {
  return (
    <AnimatedSection className="overflow-hidden border-b border-border py-4 sm:py-5">
      <div className="relative" data-reveal>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={i}
              className="mx-10 text-sm uppercase tracking-wide text-muted-foreground/50"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ClientsMarquee;
