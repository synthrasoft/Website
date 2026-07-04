import { BarChart3, Lightbulb, Eye, TrendingUp, Target, Users, Award, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/animations/AnimatedSection";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { companyStats } from "@/data/stats";
import { siteImages } from "@/data/images";

const features = [
  {
    icon: BarChart3,
    title: "Data-Driven Approach",
    desc: "Every decision is backed by real-time analytics, ensuring smarter strategies, optimized performance, and measurable results.",
  },
  {
    icon: Lightbulb,
    title: "Creative & Innovative",
    desc: "We leverage cutting-edge marketing techniques and fresh creative strategies to keep your brand ahead of the curve.",
  },
  {
    icon: Eye,
    title: "Transparent Reporting",
    desc: "Clear, honest insights and detailed performance tracking, so you always know where your investment is going.",
  },
];

const values = [
  { icon: Target, title: "Mission-Driven", desc: "Your success is our success. We're committed to delivering measurable results." },
  { icon: Users, title: "Client-Centric", desc: "We build lasting partnerships through transparent communication and dedication." },
  { icon: Award, title: "Excellence First", desc: "We maintain the highest standards in every project we undertake." },
  { icon: Zap, title: "Innovation Always", desc: "We stay ahead of industry trends to provide cutting-edge solutions." },
];

const About = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />

      <AnimatedSection className="relative overflow-hidden border-b border-border pt-2 pb-8 sm:pt-4 sm:pb-10">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
            <div data-reveal>
              <div className="mb-4 inline-flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium uppercase tracking-widest text-primary">
                  About Synthrasoft Solutions
                </span>
              </div>

              <h1 className="mb-4 font-heading text-4xl lg:text-5xl">
                Your Revenue Is <span className="gradient-text">Our Mission</span>
              </h1>

              <p className="max-w-xl leading-relaxed text-muted-foreground">
                Businesses lose billions every year due to poor marketing strategies.
                At Synthrasoft Solutions, we craft strategies that deliver measurable success and long-term growth.
              </p>
            </div>

            <div data-reveal className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border sm:aspect-[4/3]">
              <img
                src={siteImages.team}
                alt="Synthrasoft team collaborating"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative overflow-hidden py-8 sm:py-10">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div data-reveal className="mb-6">
            <h2 className="mb-2 font-heading text-3xl lg:text-4xl">
              Why Choose <span className="gradient-text">Synthrasoft</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {features.map((feature, i) => (
              <div
                key={i}
                data-reveal-card
                className="glass-card group relative cursor-pointer overflow-hidden rounded-xl p-5 transition-all hover:glow-border sm:p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 transition-all duration-500 group-hover:from-primary/10 group-hover:via-transparent group-hover:to-accent/5" />
                <div className="relative">
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl transition-colors duration-300 group-hover:text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative bg-card/50 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div data-reveal className="mb-6">
            <h2 className="mb-2 font-heading text-3xl lg:text-4xl">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The principles that drive everything we do
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <div
                key={i}
                data-reveal-card
                className="glass-card cursor-pointer rounded-xl p-5 text-center transition-all hover:glow-border sm:p-6"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-transform duration-500 hover:rotate-12 hover:scale-110">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-heading text-lg">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div data-reveal className="mb-6">
            <h2 className="font-heading text-3xl lg:text-4xl">
              Our <span className="gradient-text">Impact</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {companyStats.map((stat, i) => (
              <div
                key={i}
                data-reveal-card
                className="glass-card cursor-pointer rounded-xl p-5 text-center transition-all hover:glow-border sm:p-6"
              >
                <div className="mb-2 font-heading text-4xl sm:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="gradient-text"
                  />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;
