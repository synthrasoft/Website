import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { caseStudiesData } from "./CaseStudyDetail";
import { caseStudyImages } from "@/data/images";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="border-b border-border pt-2 pb-6 sm:pt-4 sm:pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">Case Studies</p>
          <h1 className="mb-3 font-heading text-3xl sm:mb-4 sm:text-4xl lg:text-5xl">
            See How We Help Businesses <span className="gradient-text">Thrive</span>
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Real stories of measurable success from businesses across industries, not vanity metrics.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {caseStudiesData.map((cs) => (
              <Link
                key={cs.slug}
                to={`/case-studies/${cs.slug}`}
                className="group overflow-hidden rounded-lg border border-border bg-background"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={caseStudyImages[cs.slug]}
                    alt={cs.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {cs.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{cs.company}</p>
                  <h3 className="mt-1 font-heading text-xl transition-colors group-hover:text-primary sm:text-2xl">
                    {cs.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{cs.description}</p>

                  <div className="my-4 grid grid-cols-3 gap-3 border-y border-border/50 py-4">
                    {Object.entries(cs.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-heading text-lg text-primary">{value}</div>
                        <div className="text-xs capitalize text-muted-foreground">{key}</div>
                      </div>
                    ))}
                  </div>

                  <p className="mb-4 text-sm font-medium">{cs.result}</p>

                  <span className="link-arrow inline-flex items-center gap-1 text-sm">
                    View Details <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default CaseStudies;
