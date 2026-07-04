export const siteImages = {
  hero: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  team: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
  workspace: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  services: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  caseStudyRetail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
  caseStudySaas: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  caseStudyEcommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
  caseStudyStartup: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80",
  caseStudyEnterprise: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  caseStudyMobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
  contact: "/images/contact.jpg",
  // Fallback if local file missing (Unsplash team collaboration)
  contactFallback: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
  testimonial: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
} as const;

export const caseStudyImages: Record<string, string> = {
  "local-business-digital-transformation": siteImages.caseStudyRetail,
  "saas-lead-generation-success": siteImages.caseStudySaas,
  "ecommerce-growth-boost": siteImages.caseStudyEcommerce,
  "startup-brand-awareness": siteImages.caseStudyStartup,
  "enterprise-saas-expansion": siteImages.caseStudyEnterprise,
  "mobile-app-user-acquisition": siteImages.caseStudyMobile,
};
