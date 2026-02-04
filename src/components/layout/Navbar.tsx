import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-3 backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-lg" : "py-6 bg-transparent"
        )}
      >
        <div className="container-custom flex items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(43_74%_49%/0.4)] transition-all duration-300">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-foreground leading-tight">Beno Dynamic</span>
              <span className="text-[10px] text-gold tracking-widest uppercase">Concept Nig.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-300 py-2",
                  location.pathname === link.href ? "text-gold" : "text-foreground/80 hover:text-gold"
                )}
              >
                {link.name}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="gold" asChild>
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                Hire Professional Drivers
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-gold transition-colors z-50 relative"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Full Screen Mobile Menu Overlay */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out",
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Background with blur */}
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />

          {/* Content Container */}
          <div
            className={cn(
              "absolute inset-0 flex flex-col h-full space-y-12 pt-24 pb-32 px-6 transition-transform duration-500 ease-in-out",
              isMobileMenuOpen ? "translate-y-0" : "translate-y-4"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-semibold py-1 transition-all duration-300 transform hover:scale-105",
                    location.pathname === link.href ? "text-gold" : "text-foreground/90 hover:text-gold",
                    isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Animated CTA Button at Bottom */}
            <div className="flex justify-end flex-col">
              <div
                className={cn("w-full transition-all duration-700", isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${navLinks.length * 100 + 200}ms` : "0ms",
                }}
              >
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Phone className="w-5 h-5 mr-2" />
                    Hire Professional Drivers
                  </Link>
                </Button>
              </div>

              {/* Quick Call Button */}
              <div
                className={cn("mt-6 transition-all duration-700", isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${navLinks.length * 100 + 400}ms` : "0ms",
                }}
              >
                <a
                  href="tel:+2348133902855"
                  className="block w-full py-4 text-center text-sm text-foreground/80 hover:text-gold transition-colors border border-border/50 rounded-lg hover:border-gold/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Or call now: <span className="font-semibold text-gold">+234 813 390 2855</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Call Button (Mobile) */}
      <a
        href="tel:+2348133902855"
        className={cn(
          "lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-gold to-gold-light flex items-center justify-center shadow-lg transition-all duration-300",
          isMobileMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100 animate-pulse-gold"
        )}
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
    </>
  );
};

export default Navbar;
