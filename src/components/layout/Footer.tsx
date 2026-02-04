import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container-custom py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="space-y-6 col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-foreground leading-tight">Beno Dynamic</span>
                <span className="text-[10px] text-gold tracking-widest uppercase">Concept Nig.</span>
              </div>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Nigeria's premier executive transportation service. Where safety, punctuality, and unparalleled professionalism are our top priorities.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/onyeka-aigbaze-8047572b0?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://web.facebook.com/beno.dynamic.concerts/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4 md:mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["Executive Chauffeur", "Corporate Fleet", "Event Logistics", "Emergency Response"].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full md:col-span-1 col-span-2">
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4 md:mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-1" />
                <div className="text-sm">
                  <p className="text-muted-foreground">Call us 24/7</p>
                  <a href="tel:+2348133902855" className="text-foreground hover:text-gold transition-colors">
                    +2347060443225
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-1" />
                <div className="text-sm">
                  <p className="text-muted-foreground">Email us</p>
                  <a href="mailto:onyekaaigbaze@gmail.com" className="text-foreground hover:text-gold transition-colors">
                    onyekaaigbaze@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1" />
                <div className="text-sm">
                  <p className="text-muted-foreground">Location</p>
                  <span className="text-foreground">Lagos & Ogun State, Nigeria</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-center text-center md:justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Beno Dynamic Concept Nig. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
