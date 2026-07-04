import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/animations/AnimatedSection";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { companyStats } from "@/data/stats";
import { siteImages } from "@/data/images";

const HeroSection = () => {
  return (
    <AnimatedSection
      id="home"
      className="relative border-b border-border pt-2 pb-8 sm:pt-4 sm:pb-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
          <div data-reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground leading-relaxed">
              107 HUNTERS GLEN DR <br /> PLAINSBORO, NJ 08536
            </p>

            <h1 className="text-[2.25rem] leading-[1.08] sm:text-5xl lg:text-6xl">
              We build digital systems that turn attention into{" "}
              <em className="accent-word">revenue.</em>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Synthrasoft Solutions is a small senior team of strategists, designers, and engineers
              working with companies that have outgrown DIY marketing.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Book a call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/case-studies" className="btn-ghost">
                See our work
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5 sm:grid-cols-4 sm:gap-6 sm:pt-6">
              {companyStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-2xl text-foreground sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} trigger={false} />
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal className="relative overflow-hidden rounded-lg border border-border lg:order-none">
            <img
              src={siteImages.hero}
              alt="Synthrasoft Solutions team collaborating"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/11] lg:aspect-[5/4]"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HeroSection;
