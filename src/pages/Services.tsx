import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Grid3X3, LayoutList, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { siteImages } from "@/data/images";

const categories = [
  "All",
  "Growth",
  "Brand",
  "Development",
  "Paid",
  "Operations",
] as const;

type Category = (typeof categories)[number];

const getCategory = (slug: string): Exclude<Category, "All"> => {
  if (slug.includes("web-development") || slug.includes("app-development")) return "Development";
  if (slug.includes("branding") || slug.includes("brand-strategy")) return "Brand";
  if (slug.includes("performance") || slug.includes("influencer")) return "Paid";
  if (slug.includes("analytics") || slug.includes("ai-services")) return "Operations";
  return "Growth";
};

const categoryColors: Record<Exclude<Category, "All">, string> = {
  Growth: "bg-primary/10 text-primary",
  Brand: "bg-violet-500/10 text-violet-500",
  Development: "bg-blue-500/10 text-blue-500",
  Paid: "bg-amber-500/10 text-amber-500",
  Operations: "bg-rose-500/10 text-rose-500",
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? services
        : services.filter((service) => getCategory(service.slug) === activeCategory),
    [activeCategory],
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="border-b border-border pt-2 pb-6 sm:pt-4 sm:pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">Services Hub</p>
              <h1 className="mb-3 font-heading text-3xl sm:mb-4 sm:text-4xl lg:text-5xl">
                Built for <span className="gradient-text">Momentum</span>
              </h1>
              <p className="mb-5 max-w-xl text-sm text-muted-foreground sm:mb-6 sm:text-base">
                Pick a category, compare service strengths, and jump into details. Find the right growth path faster.
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {[
                  { label: "Services", value: services.length, suffix: "" },
                  { label: "Categories", value: categories.length - 1, suffix: "" },
                  { label: "Industries", value: 50, suffix: "+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-heading text-2xl">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        trigger={false}
                        className="gradient-text"
                      />
                    </div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border sm:aspect-[4/3]">
              <img
                src={siteImages.services}
                alt="Strategy and planning session"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <div className="mb-3 flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-secondary text-muted-foreground hover:border-primary/60 hover:text-foreground"
                  }`}
                >
                  {category}
                  {category !== "All" && (
                    <span className="ml-2 opacity-60">
                      ({services.filter((s) => getCategory(s.slug) === category).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 pb-12 sm:py-10 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div>
              <h2 className="font-heading text-2xl">
                {activeCategory === "All" ? "All Services" : `${activeCategory} Services`}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {filtered.length} service{filtered.length !== 1 ? "s" : ""} available
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <LayoutList className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + viewMode}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={viewMode === "grid" ? "grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3" : "flex flex-col gap-3 sm:gap-4"}
            >
              {filtered.map((service, index) => (
                <motion.div
                  layout
                  key={service.slug}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2, type: "spring", stiffness: 400 }
                  }}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                    viewMode === "list" ? "flex flex-col gap-4 p-5 sm:flex-row sm:gap-6 sm:p-6" : "p-5 sm:p-6"
                  }`}
                >
                  {/* Animated corner glow */}
                  <motion.div
                    className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/0 blur-3xl transition-all duration-500"
                    whileHover={{ backgroundColor: "hsl(var(--primary) / 0.15)" }}
                  />

                  <div className={viewMode === "list" ? "flex items-start gap-6 w-full" : ""}>
                    <div className={`mb-5 flex items-center gap-4 ${viewMode === "list" ? "mb-0 shrink-0" : ""}`}>
                      <motion.div
                        className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <service.icon className="h-7 w-7 text-primary" />
                      </motion.div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold ${categoryColors[getCategory(service.slug)]}`}>
                          {getCategory(service.slug)}
                        </span>
                      </div>

                      <h3 className="mb-2 font-heading text-xl transition-colors group-hover:text-primary">
                        {service.title}
                      </h3>
                      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                        {service.desc}
                      </p>

                      {viewMode === "grid" && (
                        <ul className="mb-6 space-y-2">
                          {service.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-foreground/90">
                              <span className="text-primary mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}

                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary group/link"
                      >
                        Explore Service
                        <motion.span
                          className="inline-block"
                          whileHover={{ x: 3, y: -3 }}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Services;
