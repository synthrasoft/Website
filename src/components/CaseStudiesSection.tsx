import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/animations/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { siteImages } from "@/data/images";

const caseStudies = [
  {
    title: "Local Business Digital Transformation",
    result: "5× ROI on paid social",
    detail: "Plainsboro retail group, 14 locations",
    image: siteImages.caseStudyRetail,
  },
  {
    title: "SaaS Lead Generation",
    result: "150% more qualified leads",
    detail: "B2B software, Series A stage",
    image: siteImages.caseStudySaas,
  },
];

const CaseStudiesSection = () => {
  return (
    <AnimatedSection id="case-studies" className="border-b border-border py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          number="02 WORK"
          title="Recent results"
          description="Specific engagements, specific numbers. No vanity metrics."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <Link
              key={i}
              to="/case-studies"
              data-reveal-card
              className="group overflow-hidden rounded-lg border border-border bg-background"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="p-4 sm:p-5">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{cs.detail}</p>
                  <h3 className="mt-1.5 font-heading text-lg leading-snug sm:text-xl lg:text-2xl">{cs.title}</h3>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="font-heading text-2xl text-primary sm:text-3xl">{cs.result}</p>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div data-reveal className="mt-6">
          <Link to="/case-studies" className="link-arrow">
            More case studies <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CaseStudiesSection;
