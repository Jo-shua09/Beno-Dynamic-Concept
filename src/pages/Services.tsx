import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Users, Calendar, Zap, Shield, Clock, MapPin, CheckCircle, ArrowRight, Building, Plane, Heart } from "lucide-react";
import fleetImage from "@/assets/fleet.jpg";

const mainServices = [
  {
    icon: Car,
    title: "Executive Driver Placement",
    description:
      "Top-tier professional drivers for executives, diplomats, and high-profile individuals. We provide the driver, you provide the vehicle.",
    features: [
      "VIP protocol expertise",
      "Defensive driving trained",
      "Diplomatic service experience",
      "Background verified",
      "Available short or long-term",
    ],
  },
  {
    icon: Users,
    title: "Corporate Driver Staffing",
    description: "Reliable, professional drivers for your corporate fleet. Scale your driver workforce without the hiring hassle.",
    features: ["Staff shuttle drivers", "Executive driver pool", "Fleet driver management", "Flexible contracts", "Replacement driver coverage"],
  },
  {
    icon: Calendar,
    title: "Event Driver Services",
    description: "Professional drivers for conferences, weddings, and special events. We handle the driving so you can focus on the event.",
    features: [
      "Wedding motorcade drivers",
      "Conference shuttle drivers",
      "VIP guest transport",
      "Multi-vehicle coordination",
      "On-call availability",
    ],
  },
  {
    icon: Zap,
    title: "On-Demand Drivers",
    description: "Rapid deployment of trained drivers when you need them most. Quick response times for urgent staffing needs.",
    features: ["Same-day availability", "24/7 emergency coverage", "Temporary placements", "Last-minute requests", "Reliable standby drivers"],
  },
];

const additionalServices = [
  {
    icon: Plane,
    title: "Airport Pickup Drivers",
    description: "Professional drivers for airport transfers, always punctual, always professional.",
  },
  {
    icon: Building,
    title: "Hotel & Hospitality",
    description: "Trained drivers for hotels and hospitality businesses requiring quality transport staff.",
  },
  {
    icon: Heart,
    title: "Personal Drivers",
    description: "Dedicated personal drivers for families and individuals who need reliable transportation.",
  },
  {
    icon: MapPin,
    title: "City Tour Drivers",
    description: "Knowledgeable drivers who can navigate Lagos and surrounding areas with expertise.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Tell us about your transportation needs and we'll recommend the best solution.",
  },
  {
    step: "02",
    title: "Customization",
    description: "We tailor our services to match your specific requirements and preferences.",
  },
  {
    step: "03",
    title: "Confirmation",
    description: "Receive confirmation with driver details and vehicle information.",
  },
  {
    step: "04",
    title: "Experience",
    description: "Enjoy a seamless, professional transportation experience.",
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-10 flex justify-center items-center h-full md:py-16 min-h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="relative container-custom px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs md:text-sm font-medium mb-6 animate-fade-up opacity-0 delay-100">
              <Car className="w-4 h-4" />
              Our Services
            </span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up opacity-0 delay-200">
              Professional Driver <span className="text-gradient-gold">Solutions</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up opacity-0 delay-300">
              We provide highly trained, professional drivers for companies, executives, and VIPs. You supply the vehicle, we supply the expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-10 md:space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-6 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`animate-slide-right opacity-0 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-base md:text-lg mb-8">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-foreground md:text-base text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="gold" size="lg" asChild>
                    <Link to="/contact">
                      Hire Drivers for This
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className={`animate-slide-left opacity-0 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Card variant="glass" className="p-6 lg:p-12">
                    <CardContent className="p-0 text-center">
                      <div className="w-24 h-24 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                        <service.icon className="w-12 h-12 text-gold" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Why Choose This Service?</h3>
                      <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="glass-card p-4">
                          <Shield className="w-6 h-6 text-gold mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Fully Vetted</p>
                        </div>
                        <div className="glass-card p-4">
                          <Clock className="w-6 h-6 text-gold mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Always Punctual</p>
                        </div>
                        <div className="glass-card p-4">
                          <Car className="w-6 h-6 text-gold mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Any Vehicle Type</p>
                        </div>
                        <div className="glass-card p-4">
                          <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Lagos & Ogun</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-1 md:mb-4 block">Additional Services</span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              More Ways We Can <span className="text-gradient-gold">Serve You</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={service.title}
                variant="service"
                className="p-6 animate-fade-up opacity-0"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <CardContent className="p-0 text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-1 md:mb-4 block">How It Works</span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Simple <span className="text-gradient-gold">Four-Step</span> Process
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative animate-fade-up opacity-0" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6 relative z-10">
                    <span className="font-serif text-xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Excellence Section */}
      <section className="relative py-10 md:py-16">
        <div className="absolute inset-0">
          <img src={fleetImage} alt="Professional drivers" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        <div className="relative container-custom px-4 md:px-8">
          <div className="max-w-2xl">
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-1 md:mb-4 block">Driver Excellence</span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Trained for <span className="text-gradient-gold">Any Vehicle</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8">
              Our drivers are trained to handle vehicles from all major manufacturers with professionalism and care. They adapt seamlessly to your
              fleet requirements.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Sedans", "SUVs", "Luxury Vehicles", "Minibuses", "Commercial Vehicles"].map((type) => (
                <span key={type} className="px-4 py-2 rounded-full glass text-foreground text-sm">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card p-6 md:p-16 text-center relative overflow-hidden">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Ready to <span className="text-gradient-gold">Hire Drivers?</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10">
              Contact us today to discuss your driver staffing needs. Our team will match you with the perfect professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+2348133902855">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
