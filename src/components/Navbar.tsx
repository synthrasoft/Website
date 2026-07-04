import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/case-studies" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-background/95" : "border-transparent bg-background/80"
      } backdrop-blur-sm`}
    >
      <div className={`mx-auto grid max-w-7xl grid-cols-[5.75rem_1fr_5.75rem] items-center gap-2 px-4 sm:px-6 lg:flex lg:justify-between lg:gap-3 transition-all duration-300 ${
        scrolled ? "py-3 sm:py-3.5" : "py-5 sm:py-8"
      }`}>
        <div className="flex items-center justify-start gap-2 sm:gap-3 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link
          to="/"
          className="min-w-0 justify-self-center flex items-center gap-2 text-center font-heading text-lg tracking-tight sm:text-xl lg:justify-self-auto lg:text-lg"
        >
          <img src="/logo.png" alt="Synthrasoft Logo" className="h-6 w-auto sm:h-7" />
          <span className="sm:hidden">Synthrasoft</span>
          <span className="hidden sm:inline">Synthrasoft Solutions</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              activeClassName="text-foreground"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex lg:gap-4">
          <ThemeToggle />
          <Link to="/contact" className="btn-primary py-2.5 text-sm">
            Contact <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-2 sm:gap-3 lg:hidden">
          <ThemeToggle />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed left-0 top-0 z-50 h-dvh w-[82vw] max-w-xs border-r border-border bg-background p-4 shadow-2xl lg:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="flex items-center gap-2 font-heading text-lg tracking-tight">
                  <img src="/logo.png" alt="Synthrasoft Logo" className="h-5 w-auto" />
                  Synthrasoft
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    activeClassName="text-foreground"
                    className="rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary mt-4 w-full">
                  Contact
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
