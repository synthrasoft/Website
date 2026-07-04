import { Loader2, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { sendContactEmail } from "@/lib/sendContactEmail";
import { siteImages } from "@/data/images";

const contactImageSrc = siteImages.contact;
const contactImageFallback = siteImages.contactFallback;

const emails = [
  { label: "General Inquiries", address: "info@synthrasoft.com" },
  { label: "Sales & Partnerships", address: "sales@synthrasoft.com" },
  { label: "Support", address: "contact@synthrasoft.com" },
];

const initialFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactEmail(formData);
      toast.success("Message sent!", {
        description: "We'll get back to you within one business day.",
      });
      setFormData(initialFormData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong. Please try again.";
      toast.error("Could not send message", { description: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero + Contact */}
      <section className="border-b border-border pt-2 pb-8 sm:pt-4 sm:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">Get In Touch</p>
              <h1 className="mb-3 font-heading text-3xl sm:mb-4 sm:text-4xl lg:text-5xl">
                Let's Start Your <span className="gradient-text">Digital Journey</span>
              </h1>
              <p className="max-w-xl text-muted-foreground">
                Ready to transform your digital presence? Tell us about your project and we'll get back within one business day.
              </p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border sm:aspect-[4/3]">
              <img
                src={contactImageSrc}
                alt="Team collaboration at Synthrasoft Solutions"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = contactImageFallback;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 lg:p-8">
              <h2 className="mb-4 font-heading text-2xl sm:text-3xl">Send us a message</h2>
              <p className="mb-5 text-sm text-muted-foreground">
                Fill out the form and we'll email your request directly to our team.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center py-4 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <div>
                <h2 className="mb-3 font-heading text-2xl sm:text-3xl">Contact Information</h2>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:mb-5">
                  Prefer to reach out directly? Use any of the email addresses below to get in touch with our team.
                </p>
              </div>

              <div className="space-y-4">
                {emails.map((email) => (
                  <a
                    key={email.address}
                    href={`mailto:${email.address}`}
                    className="glass-card group block cursor-pointer rounded-xl p-5 transition-all hover:glow-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-heading text-lg">{email.label}</h3>
                        <span className="text-muted-foreground transition-colors group-hover:text-primary">
                          {email.address}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}

                <a
                  href="tel:6092224172"
                  className="glass-card group block cursor-pointer rounded-xl p-5 transition-all hover:glow-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-heading text-lg">Direct Line</h3>
                      <span className="text-muted-foreground transition-colors group-hover:text-primary">
                        (609) 222-4172
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="glass-card mt-2 rounded-xl p-6">
                <h3 className="mb-4 font-heading text-xl">Office Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl border-primary/20 bg-primary/5 p-6">
                <h3 className="mb-2 font-heading text-xl">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please email us at <a href="mailto:info@synthrasoft.com" className="text-primary hover:underline">info@synthrasoft.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;
