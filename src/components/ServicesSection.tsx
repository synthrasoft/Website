import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import AnimatedSection from "@/components/animations/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const featuredServices = services.slice(0, 6);

const ServicesSection = () => {
  return (
    <AnimatedSection id="services" className="border-b border-border py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          number="01 SERVICES"
          title="What we actually do"
          description="Six practice areas. Most clients start with one and expand once the numbers prove out."
        />

        <div className="divide-y divide-border border-y border-border">
          {featuredServices.map((service, i) => (
            <div key={service.slug} data-reveal-card>
              <Link
                to={`/services/${service.slug}`}
                className="group flex items-start gap-3 py-4 transition-colors hover:bg-secondary/40 sm:items-center sm:gap-6 sm:px-3 sm:py-5"
              >
                <span className="w-8 shrink-0 text-xs tabular-nums text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-xl sm:text-2xl">{service.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-6">
          <Link to="/services" className="link-arrow">
            All {services.length} services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;
