import {
  Search, MapPin, Code, Megaphone, Palette, Bot,
  Share2, FileText, Mail, Video, Target,
  TrendingUp, MousePointerClick, BarChart3, Users, Globe, Smartphone,
  type LucideIcon,
} from "lucide-react";

export interface ServiceData {
  icon: LucideIcon;
  title: string;
  slug: string;
  desc: string;
  longDesc: string;
  features: string[];
  benefits: string[];
}

export const services: ServiceData[] = [
  {
    icon: Code, title: "Web Development", slug: "web-development",
    desc: "Custom, responsive websites built with cutting-edge technology to deliver seamless user experiences.",
    longDesc: "We build high-performance, responsive websites that look stunning and convert visitors into customers. Our development team uses the latest technologies and best practices to create websites that are fast, secure, and optimized for search engines.",
    features: ["Custom Website Design", "Responsive Development", "E-Commerce Solutions", "CMS Integration", "Performance Optimization", "Ongoing Maintenance"],
    benefits: ["Professional online presence", "Mobile-first experience", "Fast loading speeds", "Higher conversion rates"],
  },
  {
    icon: Smartphone, title: "App Development", slug: "app-development",
    desc: "Mobile apps designed and built for smooth user experiences, strong performance, and long-term growth.",
    longDesc: "We design and develop mobile apps that are fast, intuitive, and ready to scale. From product planning and UI design to development, launch, and ongoing improvements, we help businesses turn app ideas into reliable digital products.",
    features: ["Mobile App Strategy", "UI/UX Design", "iOS & Android Development", "API Integration", "Performance Optimization", "Launch Support"],
    benefits: ["Stronger mobile presence", "Better user engagement", "Scalable product foundation", "Reliable app performance"],
  },
  {
    icon: Search, title: "SEO", slug: "seo",
    desc: "Boost your search rankings with data-driven SEO strategies that drive organic traffic and sustainable growth.",
    longDesc: "Our comprehensive SEO services combine technical optimization, content strategy, and authority building to help your website rank higher in search engines. We analyze your competitors, identify high-value keywords, and implement proven strategies that deliver long-term organic growth.",
    features: ["Technical SEO Audits", "Keyword Research & Strategy", "On-Page Optimization", "Link Building Campaigns", "Content Gap Analysis", "Monthly Performance Reports"],
    benefits: ["Higher organic search rankings", "Increased website traffic", "Better conversion rates", "Long-term sustainable growth"],
  },
  {
    icon: BarChart3, title: "Performance Marketing", slug: "performance-marketing",
    desc: "Results-driven marketing focused on measurable KPIs, ROAS optimization, and scalable campaign performance.",
    longDesc: "Our performance marketing approach is 100% focused on measurable results. We optimize every campaign for specific KPIs, ensuring your marketing budget delivers maximum impact and scalable growth.",
    features: ["KPI Framework", "ROAS Optimization", "Attribution Modeling", "Campaign Scaling", "Cross-Channel Optimization", "Real-Time Dashboards"],
    benefits: ["Measurable outcomes", "Optimized ad spend", "Scalable growth", "Full transparency"],
  },
  {
    icon: BarChart3, title: "Analytics & Reporting", slug: "analytics-reporting",
    desc: "Comprehensive dashboards and performance reports giving you full visibility into your marketing ROI.",
    longDesc: "Get complete visibility into your marketing performance with our analytics and reporting services. We set up comprehensive tracking, build custom dashboards, and deliver actionable insights that drive smarter marketing decisions.",
    features: ["Analytics Setup", "Custom Dashboards", "Data Visualization", "Attribution Tracking", "Monthly Reports", "Actionable Recommendations"],
    benefits: ["Full performance visibility", "Data-driven decisions", "Identify growth opportunities", "Prove marketing ROI"],
  },
  {
    icon: MapPin, title: "Google My Business", slug: "google-my-business",
    desc: "Optimize your local presence and attract nearby customers through expert GMB management and optimization.",
    longDesc: "Maximize your local visibility with our Google My Business optimization services. We ensure your business profile is fully optimized, actively managed, and consistently generating leads from local searches.",
    features: ["Profile Setup & Optimization", "Review Management", "Local Citation Building", "Google Posts & Updates", "Q&A Management", "Insights & Analytics"],
    benefits: ["Dominate local search results", "Increase foot traffic", "Build local trust & credibility", "Generate more phone calls & inquiries"],
  },
  {
    icon: Megaphone, title: "Digital Marketing", slug: "digital-marketing",
    desc: "Comprehensive digital marketing campaigns that generate leads, boost conversions, and maximize ROI.",
    longDesc: "Our full-funnel digital marketing services cover everything from awareness to conversion. We create integrated campaigns across multiple channels to reach your target audience at every stage of their journey.",
    features: ["Multi-Channel Strategy", "Campaign Management", "A/B Testing", "Audience Segmentation", "Retargeting Campaigns", "ROI Tracking & Optimization"],
    benefits: ["Increased brand awareness", "Higher quality leads", "Better ROI on ad spend", "Data-driven decision making"],
  },
  {
    icon: Palette, title: "Branding & Design", slug: "branding-design",
    desc: "Create memorable brand identities that captivate your audience and drive lasting connections.",
    longDesc: "We craft distinctive brand identities that resonate with your target audience. From logo design to complete brand guidelines, we ensure every touchpoint communicates your brand's unique value proposition.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity Systems", "Packaging Design", "Brand Messaging", "Brand Audit & Strategy"],
    benefits: ["Stand out from competitors", "Build brand recognition", "Create emotional connections", "Consistent brand experience"],
  },
  {
    icon: Bot, title: "AI Services", slug: "ai-services",
    desc: "Leverage artificial intelligence to automate processes, gain insights, and stay ahead of the competition.",
    longDesc: "Harness the power of AI to transform your business operations. From chatbots to predictive analytics, we implement cutting-edge AI solutions that automate workflows, enhance customer experiences, and drive smarter decisions.",
    features: ["AI Chatbots & Assistants", "Predictive Analytics", "Process Automation", "Natural Language Processing", "Computer Vision Solutions", "Custom AI Model Development"],
    benefits: ["Reduce operational costs", "24/7 customer support", "Data-driven insights", "Competitive advantage"],
  },
  {
    icon: Share2, title: "Social Media Marketing", slug: "social-media-marketing",
    desc: "Build a loyal community and boost brand visibility across every major social media platform.",
    longDesc: "Our social media marketing services help you build an engaged community, increase brand awareness, and drive meaningful business results across all major platforms including Instagram, Facebook, LinkedIn, Twitter, and TikTok.",
    features: ["Platform Strategy", "Content Creation", "Community Management", "Paid Social Campaigns", "Influencer Partnerships", "Social Listening"],
    benefits: ["Increased brand visibility", "Engaged community", "Direct customer communication", "Higher website traffic"],
  },
  {
    icon: FileText, title: "Content Marketing", slug: "content-marketing",
    desc: "Valuable, relevant content that educates your audience, builds trust, and drives organic engagement.",
    longDesc: "We create compelling content strategies that attract, engage, and convert your target audience. From blog posts to whitepapers, our content team produces high-quality materials that establish thought leadership and drive organic growth.",
    features: ["Content Strategy", "Blog Writing", "Whitepapers & E-books", "Infographic Design", "Video Content", "Content Distribution"],
    benefits: ["Establish thought leadership", "Drive organic traffic", "Build audience trust", "Generate qualified leads"],
  },
  {
    icon: Mail, title: "Email Marketing", slug: "email-marketing",
    desc: "Nurture leads, drive conversions, and stay top-of-mind with targeted and personalized email campaigns.",
    longDesc: "Our email marketing services help you build and nurture relationships with your subscribers. We create personalized, automated email sequences that drive engagement, conversions, and customer loyalty.",
    features: ["Email Strategy", "Template Design", "Automation Workflows", "List Segmentation", "A/B Testing", "Deliverability Optimization"],
    benefits: ["Highest ROI channel", "Personalized communication", "Automated nurturing", "Increased customer retention"],
  },
  {
    icon: Video, title: "Video Ads Creation", slug: "video-ads-creation",
    desc: "Compelling video content and ads that capture attention and tell your brand story effectively.",
    longDesc: "We produce high-impact video content and advertisements that capture attention and drive action. From concept to final cut, our video team creates compelling visual stories that resonate with your audience.",
    features: ["Video Strategy", "Script Writing", "Video Production", "Motion Graphics", "Video Editing", "Platform Optimization"],
    benefits: ["Higher engagement rates", "Better message retention", "Increased conversions", "Shareable content"],
  },
  {
    icon: Target, title: "Brand Strategy", slug: "brand-strategy",
    desc: "Strategic brand positioning and planning that differentiates you in the market and fuels long-term growth.",
    longDesc: "We develop comprehensive brand strategies that position your business for long-term success. Through market research, competitive analysis, and audience insights, we craft a strategic roadmap that differentiates your brand.",
    features: ["Market Research", "Competitive Analysis", "Brand Positioning", "Messaging Framework", "Go-To-Market Strategy", "Brand Architecture"],
    benefits: ["Clear market positioning", "Competitive differentiation", "Aligned team vision", "Sustainable growth"],
  },
  {
    icon: Share2, title: "Social Media Handling", slug: "social-media-handling",
    desc: "End-to-end social media account management including scheduling, engagement, and community building.",
    longDesc: "Let us handle your social media presence from A to Z. Our team manages daily posting, community engagement, content creation, and performance tracking to ensure your social channels drive real business results.",
    features: ["Daily Posting & Scheduling", "Community Engagement", "Content Calendar", "Crisis Management", "Account Growth", "Monthly Reporting"],
    benefits: ["Consistent online presence", "Engaged followers", "Time savings", "Professional brand voice"],
  },
  {
    icon: TrendingUp, title: "Social Media Growth", slug: "social-media-growth",
    desc: "Accelerate your follower growth and engagement rates with proven organic and paid growth strategies.",
    longDesc: "Accelerate your social media growth with our proven strategies. We combine organic growth tactics with paid amplification to rapidly build your audience and increase engagement across all platforms.",
    features: ["Growth Strategy", "Hashtag Research", "Engagement Pods", "Collaboration Outreach", "Paid Amplification", "Analytics & Optimization"],
    benefits: ["Rapid follower growth", "Higher engagement rates", "Increased brand reach", "Monetization opportunities"],
  },
  {
    icon: MousePointerClick, title: "Conversion Optimization", slug: "conversion-optimization",
    desc: "Turn more visitors into customers with A/B testing, UX improvements, and data-driven CRO strategies.",
    longDesc: "Maximize the value of your existing traffic with our conversion rate optimization services. We use data analysis, user behavior insights, and rigorous A/B testing to identify and fix conversion bottlenecks.",
    features: ["Conversion Audit", "A/B & Multivariate Testing", "Heatmap Analysis", "User Journey Mapping", "Landing Page Optimization", "Funnel Analysis"],
    benefits: ["Higher conversion rates", "Better ROI on traffic", "Improved user experience", "Data-backed decisions"],
  },

  {
    icon: Globe, title: "Local SEO", slug: "local-seo",
    desc: "Dominate local search results and drive foot traffic with hyperlocal SEO and citation management.",
    longDesc: "Our local SEO services help you dominate search results in your geographic area. We optimize your online presence for local searches, manage citations, and build local authority to drive more customers to your doorstep.",
    features: ["Local Keyword Research", "Citation Management", "NAP Consistency", "Local Link Building", "Review Generation", "Local Schema Markup"],
    benefits: ["Top local search rankings", "Increased foot traffic", "More phone calls", "Local market dominance"],
  },

];
