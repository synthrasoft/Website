import { Link } from "react-router-dom";
import { services } from "@/data/services";

const footerServices = services.slice(0, 5);

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="font-heading text-2xl">Synthrasoft Solutions</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Digital strategy and execution for companies that need results, not reports.
            </p>
            <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
              107 Hunters Glen Dr<br />
              Plainsboro, NJ 08536<br />
              <a href="tel:6092224172" className="hover:text-foreground transition-colors">(609) 222-4172</a>
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">Services</p>
            <ul className="space-y-2">
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-muted-foreground hover:text-foreground">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">Company</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/case-studies" className="hover:text-foreground">Work</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><a href="mailto:info@synthrasoft.com" className="hover:text-foreground">info@synthrasoft.com</a></li>
              <li><a href="mailto:sales@synthrasoft.com" className="hover:text-foreground">sales@synthrasoft.com</a></li>
              <li><a href="mailto:contact@synthrasoft.com" className="hover:text-foreground">contact@synthrasoft.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© 2026 Synthrasoft Solutions</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms-conditions" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
