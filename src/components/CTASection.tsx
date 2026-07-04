import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { siteImages } from "@/data/images";

const CTASection = () => {
  return (
    <AnimatedSection className="py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          data-reveal
          className="grid overflow-hidden rounded-lg border border-border md:grid-cols-[1.2fr_1fr]"
        >
          <div className="flex flex-col justify-center gap-4 p-5 sm:gap-5 sm:p-6 lg:p-8">
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl">Have a project in mind?</h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              30-minute call. No pitch deck. We'll tell you honestly if we're not the right fit.
            </p>
            <Link to="/contact" className="btn-primary w-full sm:w-fit">
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[16/10] min-h-[160px] md:aspect-auto md:min-h-[200px]">
            <img
              src={siteImages.team}
              alt="Schedule a call with Synthrasoft Solutions"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CTASection;
