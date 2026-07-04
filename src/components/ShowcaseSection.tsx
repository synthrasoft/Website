import { BarChart3, Layers, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggeredText from "@/components/animations/StaggeredText";

const ShowcaseSection = () => {
  return (
    <AnimatedSection className="relative overflow-hidden pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          data-reveal
          className="glass-panel group p-6 transition-all duration-500 hover:border-primary/30 sm:p-8"
        >
          <div className="flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-primary/15 to-accent/15">
            <div className="grid w-full gap-4 p-6 sm:p-8 md:grid-cols-3">
              {[
                { label: "Revenue", value: "+127%", icon: BarChart3 },
                { label: "Conversions", value: "3.4x", icon: Sparkles },
                { label: "ROI", value: "6.2x", icon: Layers },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-border/40 bg-background/50 p-5 text-center backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1"
                >
                  <div className="gradient-icon mx-auto mb-3 flex h-10 w-10 items-center justify-center">
                    <metric.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="font-heading text-2xl gradient-text">{metric.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
              <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-primary/25 bg-primary/5 py-12">
                <h2 className="font-heading text-2xl sm:text-3xl">
                  <StaggeredText text="Product Dashboard Preview" as="span" />
                </h2>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">
                  Real-time analytics, campaign insights & growth metrics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ShowcaseSection;
