import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Target, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const caseStudiesData = [
  {
    slug: "local-business-digital-transformation",
    title: "Local Business Digital Transformation",
    company: "TechCorp Solutions",
    industry: "Technology Services",
    result: "5x ROI on social media campaigns",
    tags: ["Social", "Influencer", "Retargeting", "Google"],
    metrics: { traffic: "+400%", conversion: "+250%", roi: "5x" },
    description: "Transformed a local business into a digital powerhouse through strategic social media marketing and targeted advertising campaigns.",
    challenge: "TechCorp Solutions, a local IT services provider, struggled with limited online visibility and relied heavily on word-of-mouth referrals. Their outdated marketing approach resulted in inconsistent lead flow and missed growth opportunities in a competitive market.",
    solution: "We implemented a comprehensive digital transformation strategy including social media optimization, influencer partnerships, targeted retargeting campaigns, and Google Ads optimization. Our approach focused on building brand awareness while driving qualified leads through multiple touchpoints.",
    results: [
      "Increased website traffic by 400% within 6 months",
      "Achieved 250% improvement in conversion rates",
      "Generated 5x return on investment across all campaigns",
      "Built a social media following of 50,000+ engaged users",
      "Reduced customer acquisition cost by 60%",
      "Established thought leadership in the local tech community"
    ],
    testimonial: {
      quote: "The transformation has been incredible. We went from struggling to get noticed to becoming the go-to tech solutions provider in our region. The ROI speaks for itself.",
      author: "Sarah Chen",
      position: "CEO, TechCorp Solutions"
    }
  },
  {
    slug: "saas-lead-generation-success",
    title: "SaaS Lead Generation Success",
    company: "InnovateLab",
    industry: "SaaS Platform",
    result: "150% increase in qualified leads",
    tags: ["Content", "LinkedIn Ads", "Email", "CRM"],
    metrics: { leads: "+150%", cost: "-35%", revenue: "+200%" },
    description: "Developed a comprehensive lead generation strategy that dramatically increased qualified leads while reducing acquisition costs.",
    challenge: "InnovateLab's existing lead generation efforts were producing high volumes but low quality leads, resulting in wasted sales resources and poor conversion rates. Their marketing and sales teams were misaligned, leading to inefficiencies.",
    solution: "We created an integrated content marketing and demand generation engine, leveraging LinkedIn Ads for precise targeting, implementing marketing automation workflows, and integrating CRM systems for better lead tracking and nurturing.",
    results: [
      "150% increase in marketing qualified leads (MQLs)",
      "35% reduction in cost per lead",
      "200% increase in pipeline revenue",
      "Improved lead-to-customer conversion rate by 85%",
      "Decreased sales cycle length by 30%",
      "Achieved 92% marketing and sales alignment score"
    ],
    testimonial: {
      quote: "Finally, marketing and sales are working together seamlessly. The quality of leads has improved dramatically, and our sales team is closing deals faster than ever.",
      author: "Michael Rodriguez",
      position: "VP of Marketing, InnovateLab"
    }
  },
  {
    slug: "ecommerce-growth-boost",
    title: "E-Commerce Growth Boost",
    company: "NexGen Retail",
    industry: "E-Commerce",
    result: "3x increase in organic traffic",
    tags: ["SEO", "CRO", "Analytics"],
    metrics: { traffic: "3x", sales: "+180%", rank: "Top 3" },
    description: "Implemented advanced SEO strategies and conversion optimization techniques to triple organic traffic and boost sales.",
    challenge: "NexGen Retail was losing market share to larger competitors, with poor search visibility and a website that converted at only 1.2%. High reliance on paid advertising was eating into profit margins.",
    solution: "We executed a comprehensive SEO overhaul including technical optimization, content strategy, and backlink building. Simultaneously, we implemented data-driven CRO strategies including A/B testing, user experience improvements, and checkout optimization.",
    results: [
      "Tripled organic search traffic within 9 months",
      "Achieved top 3 rankings for 150+ competitive keywords",
      "Increased conversion rate from 1.2% to 3.8%",
      "Boosted overall sales by 180%",
      "Reduced customer acquisition cost by 45%",
      "Improved average order value by 32%"
    ],
    testimonial: {
      quote: "The combination of SEO and conversion optimization has been a game-changer. We're now competing with industry giants and winning on organic search.",
      author: "Jennifer Park",
      position: "Founder, NexGen Retail"
    }
  },
  {
    slug: "startup-brand-awareness",
    title: "Startup Brand Awareness",
    company: "DataFlow AI",
    industry: "Artificial Intelligence",
    result: "70% lower customer acquisition cost",
    tags: ["Viral", "PR", "UGC", "Branding"],
    metrics: { cac: "-70%", reach: "+500%", engagement: "+320%" },
    description: "Built a viral brand awareness campaign that significantly reduced customer acquisition costs while expanding market reach.",
    challenge: "As a new entrant in the competitive AI space, DataFlow AI faced the challenge of building brand recognition from scratch with a limited marketing budget. They needed to punch above their weight to compete with established players.",
    solution: "We developed a creative viral marketing strategy leveraging user-generated content, strategic PR placements, and community-driven growth tactics. The campaign focused on authentic storytelling and thought leadership to build credibility.",
    results: [
      "Reduced customer acquisition cost by 70%",
      "Expanded brand reach by 500%",
      "Increased social media engagement by 320%",
      "Secured coverage in 25+ top-tier publications",
      "Generated 1M+ organic impressions monthly",
      "Built a community of 100,000+ followers"
    ],
    testimonial: {
      quote: "They helped us build a brand that resonates. The viral campaigns not only increased awareness but also positioned us as innovators in the AI space.",
      author: "David Kim",
      position: "CMO, DataFlow AI"
    }
  },
  {
    slug: "enterprise-saas-expansion",
    title: "Enterprise SaaS Expansion",
    company: "CloudPeak Systems",
    industry: "Enterprise Software",
    result: "250% increase in enterprise deals",
    tags: ["ABM", "Content", "Webinars", "Email"],
    metrics: { deals: "+250%", pipeline: "+400%", close: "+45%" },
    description: "Executed an account-based marketing strategy that accelerated enterprise sales and expanded market presence.",
    challenge: "CloudPeak Systems wanted to move upmarket and close larger enterprise deals, but their marketing efforts were too broad and failed to resonate with C-level decision-makers at target accounts.",
    solution: "We implemented a sophisticated ABM program targeting 100 high-value accounts with personalized content, executive webinars, and multi-touch email campaigns. Each account received customized messaging aligned with their specific pain points.",
    results: [
      "250% increase in closed enterprise deals",
      "400% growth in qualified pipeline value",
      "45% improvement in close rates",
      "Shortened sales cycle for enterprise deals by 40%",
      "Increased average deal size by 180%",
      "Achieved 85% account engagement rate"
    ],
    testimonial: {
      quote: "The ABM strategy transformed how we approach enterprise sales. We're now having conversations with the right people at the right accounts, and the results are phenomenal.",
      author: "Robert Chang",
      position: "VP of Sales, CloudPeak Systems"
    }
  },
  {
    slug: "mobile-app-user-acquisition",
    title: "Mobile App User Acquisition",
    company: "FitPulse",
    industry: "Health & Fitness",
    result: "300% increase in app downloads",
    tags: ["ASO", "Paid Social", "Influencer", "PR"],
    metrics: { downloads: "+300%", retention: "+85%", rating: "4.8★" },
    description: "Launched a multi-channel user acquisition campaign that dramatically increased app downloads and user retention.",
    challenge: "FitPulse was struggling to stand out in the crowded fitness app market. Poor app store visibility and high user churn were preventing sustainable growth.",
    solution: "We executed a comprehensive app growth strategy including app store optimization (ASO), targeted paid social campaigns, influencer partnerships with fitness creators, and strategic PR to build credibility and drive organic downloads.",
    results: [
      "300% increase in app downloads",
      "Improved user retention by 85%",
      "Achieved 4.8-star average rating",
      "Reduced cost per install by 55%",
      "Increased daily active users by 270%",
      "Generated 500,000+ organic app store impressions monthly"
    ],
    testimonial: {
      quote: "We went from being lost in the app stores to becoming one of the top fitness apps. The combination of ASO, influencer marketing, and paid campaigns was perfect.",
      author: "Lisa Martinez",
      position: "Head of Growth, FitPulse"
    }
  }
];

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const caseStudy = caseStudiesData.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl mb-4">Case Study Not Found</h1>
            <Link to="/case-studies" className="text-primary hover:underline">
              ← Back to Case Studies
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-2 sm:pt-4 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="mx-auto max-w-5xl px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>

            <div className="mb-6 flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {caseStudy.company} • {caseStudy.industry}
            </p>

            <h1 className="font-heading text-4xl md:text-5xl mb-6">
              {caseStudy.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">{caseStudy.description}</p>

            <div className="grid grid-cols-3 gap-6 p-6 rounded-xl border border-border bg-card/50">
              {Object.entries(caseStudy.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="font-heading text-3xl text-primary mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground capitalize">{key}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl">The Challenge</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl">Our Solution</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl">The Results</h2>
              </div>
              <ul className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{result}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-xl border border-border bg-card/50 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl">Client Testimonial</h2>
              </div>
              <blockquote className="mb-6">
                <p className="text-lg text-foreground italic leading-relaxed">
                  "{caseStudy.testimonial.quote}"
                </p>
              </blockquote>
              <div>
                <p className="font-semibold">{caseStudy.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{caseStudy.testimonial.position}</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center pt-8"
            >
              <h3 className="font-heading text-2xl mb-4">
                Ready to achieve similar results?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help transform your business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default CaseStudyDetail;
export { caseStudiesData };
