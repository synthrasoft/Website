import { motion } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing and using the Synthrasoft Solutions website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and clients who access or use our services.`
  },
  {
    title: "Services Description",
    content: `Synthrasoft Solutions provides digital marketing, web development, branding, and related services. The scope, deliverables, timelines, and pricing for specific projects will be outlined in separate service agreements or proposals.

We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.`
  },
  {
    title: "Client Responsibilities",
    content: `As a client, you agree to:

- Provide accurate and complete information required for project execution
- Respond to communications and feedback requests in a timely manner
- Ensure you have the rights to any materials you provide to us
- Make payments according to agreed-upon terms
- Review and approve deliverables within specified timeframes`
  },
  {
    title: "Intellectual Property",
    content: `Unless otherwise specified in a written agreement:

- We retain ownership of all pre-existing intellectual property
- Upon full payment, clients receive a license to use deliverables for intended purposes
- We may showcase completed work in our portfolio unless confidentiality is agreed upon
- Client materials remain the property of the client

All trademarks, logos, and brand elements of Synthrasoft Solutions are our exclusive property.`
  },
  {
    title: "Payment Terms",
    content: `Payment terms will be specified in individual service agreements. General terms include:

- Deposits may be required before project commencement
- Invoices are due within the timeframe specified (typically 14-30 days)
- Late payments may incur additional fees
- All prices are subject to applicable taxes
- Refund policies will be outlined in specific service agreements`
  },
  {
    title: "Confidentiality",
    content: `Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our business relationship. This includes but is not limited to:

- Business strategies and plans
- Financial information
- Customer data
- Technical specifications
- Marketing strategies`
  },
  {
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by law, Synthrasoft Solutions shall not be liable for:

- Any indirect, incidental, special, or consequential damages
- Loss of profits, revenue, data, or business opportunities
- Damages arising from third-party actions or services
- Results or outcomes of marketing campaigns

Our total liability shall not exceed the amount paid by the client for the specific service in question.`
  },
  {
    title: "Warranties and Disclaimers",
    content: `We strive to deliver high-quality services but do not guarantee:

- Specific results from marketing or SEO services
- Uninterrupted or error-free website performance
- Compatibility with all devices or browsers
- Achievement of specific business objectives

Services are provided "as is" without warranties of any kind, express or implied.`
  },
  {
    title: "Termination",
    content: `Either party may terminate services:

- With written notice as specified in service agreements
- Immediately if the other party breaches material terms
- If payment obligations are not met

Upon termination, clients are responsible for payment of all work completed. We will provide reasonable assistance in transitioning services.`
  },
  {
    title: "Indemnification",
    content: `You agree to indemnify and hold harmless Synthrasoft Solutions, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:

- Your use of our services
- Your violation of these terms
- Your violation of any third-party rights
- Any materials you provide to us`
  },
  {
    title: "Governing Law",
    content: `These Terms and Conditions shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or our services shall be resolved through good-faith negotiation, and if necessary, through appropriate legal channels.`
  },
  {
    title: "Changes to Terms",
    content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new terms.

We encourage you to review these terms periodically for updates.`
  },
  {
    title: "Contact Information",
    content: `For questions about these Terms and Conditions, please contact us at:

Email: info@synthrasoft.com<br/>
Phone: (609) 222-4172
Email: contact@synthrasoft.com

We will respond to inquiries within 2-3 business days.`
  }
];

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-2 sm:pt-4 pb-12 sm:pb-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-1/2 top-1/4 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-4 inline-flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FileText className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Legal
              </span>
            </motion.div>

            <motion.h1
              className="mb-4 sm:mb-6 font-heading text-3xl sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Terms & <span className="gradient-text">Conditions</span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Please read these terms carefully before using our services. By using our services, you agree to these terms.
            </motion.p>

            <motion.p
              className="mt-4 text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Last Updated: April 6, 2026
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-8 sm:space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card rounded-xl p-6 sm:p-8"
              >
                <h2 className="font-heading text-xl sm:text-2xl mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold">
                    {i + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default TermsConditions;
