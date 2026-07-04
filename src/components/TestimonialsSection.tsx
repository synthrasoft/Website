import AnimatedSection from "@/components/animations/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { siteImages } from "@/data/images";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechNova",
    text: "They didn't hand us a deck and disappear. Six months in, organic traffic was up 4× and we finally had a channel mix we could explain to our board.",
  },
  {
    name: "James O'Brien",
    role: "Director, UrbanEdge Realty",
    text: "We went from page three to the top three on Google Maps in one quarter. The phone actually rang that was the metric that mattered.",
  },
  {
    name: "Lisa Park",
    role: "Founder, ScaleUp AI",
    text: "Clear reporting, fast turnarounds, and a team that actually understands B2B. Our cost per lead dropped 40% in the first two months.",
  },
];

const TestimonialsSection = () => {
  return (
    <AnimatedSection id="testimonials" className="border-b border-border py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader number="03 CLIENTS" title="In their words" />

        <div className="grid gap-4 lg:grid-cols-2 lg:items-start lg:gap-6">
          <div
            data-reveal
            className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border lg:sticky lg:top-24 lg:aspect-[4/5]"
          >
            <img
              src={siteImages.testimonial}
              alt="Client strategy session"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                data-reveal-card
                className="rounded-lg border border-border p-5 sm:p-6"
              >
                <p className="font-heading text-base leading-relaxed sm:text-lg">"{t.text}"</p>
                <footer className="mt-4 border-t border-border pt-3">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground sm:text-sm">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
