import { BarChart3, Lightbulb, Eye, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";
import MagneticButton from "@/components/animations/MagneticButton";
import StaggeredText from "@/components/animations/StaggeredText";

const features = [
  {
    icon: BarChart3,
    title: "Data-Driven Approach",
    desc: "Every decision is backed by real-time analytics, ensuring smarter strategies and measurable results.",
  },
  {
    icon: Lightbulb,
    title: "Creative & Innovative",
    desc: "Cutting-edge marketing techniques and fresh creative strategies to keep your brand ahead of the curve.",
  },
  {
    icon: Eye,
    title: "Transparent Reporting",
    desc: "Clear, honest insights and detailed performance tracking, so you always know where your investment goes.",
  },
];

const WhyChooseSection = () => {
  return (
    <AnimatedSection id="about" className="relative overflow-hidden py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div data-reveal className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 hover-lift">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Why Choose Us
            </span>
          </div>
          <h2 className="perspective-text font-heading text-4xl sm:text-5xl">
            <StaggeredText text="Everything You " as="span" />
            <StaggeredText text="Need" as="span" className="gradient-text" delay={0.2} />
          </h2>
          <p className="mt-5 text-muted-foreground">Built for teams that move fast.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              data-reveal-card
              className="glass-panel group p-8 transition-all duration-500 hover:border-primary/30"
            >
              <div className="gradient-icon mb-6 flex h-12 w-12 items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                {feature.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-16 text-center">
          <MagneticButton to="/contact" variant="primary" className="rounded-full px-8 py-4">
            Let's Talk Strategy
          </MagneticButton>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhyChooseSection;
