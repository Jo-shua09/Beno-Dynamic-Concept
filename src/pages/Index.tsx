import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, Users, Car, Calendar, Zap, CheckCircle, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";
import fleetImage from "@/assets/fleet.jpg";

const stats = [
  { number: "200+", label: "Drivers Deployed", icon: Users },
  { number: "80+", label: "Corporate Clients", icon: Shield },
  { number: "50+", label: "Elite Drivers", icon: Car },
  { number: "24/7", label: "Availability", icon: Clock },
];

const services = [
  {
    icon: Car,
    title: "Executive Drivers",
    description: "Top-tier professional drivers trained in VIP protocol, defensive driving, and discretion.",
  },
  {
    icon: Users,
    title: "Corporate Driver Staffing",
    description: "Skilled drivers for your corporate fleet, we supply the talent, you provide the vehicles.",
  },
  {
    icon: Calendar,
    title: "Event Drivers",
    description: "Reliable drivers for conferences, weddings, and special events, coordinated seamlessly.",
  },
  {
    icon: Zap,
    title: "On-Demand Drivers",
    description: "Rapid deployment of trained drivers when you need them most.",
  },
];

const whyChooseUs = [
  {
    title: "Rigorous Training",
    description: "Our drivers undergo extensive 'Spy Driver' training including defensive driving, VIP protocol, and situational awareness.",
  },
  {
    title: "Vetted Professionals",
    description: "All drivers are thoroughly background-checked, verified, and maintain the highest professional standards.",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support and driver availability for your convenience.",
  },
  {
    title: "Flexible Staffing",
    description: "Short-term or long-term driver placements tailored to your organization's needs.",
  },
];

const testimonials = [
  {
    name: "Anonymous Person",
    role: "Citizen",
    content: "Beno Dynamic Concept has been our trusted partner for executive transportation. Their professionalism is unmatched.",
    rating: 5,
  },
  {
    name: "Anonymous Person",
    role: "Citizen",
    content: "The level of discretion and professionalism from their drivers is exactly what we need for our VIP clients.",
    rating: 5,
  },
  {
    name: "Anonymous Person",
    role: "Citizen",
    content: "Reliable, punctual, and professional. They understand the importance of time in our line of work.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury executive vehicle" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        {/* Content */}
        <div className="container-custom relative w-full px-4 md:px-8 pt-24 md:pt-32 pb-10 md:pb-16">
          <div className="max-w-5xl">
            <div className="animate-fade-up opacity-0 delay-100">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs md:text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Nigeria's Premier Professional Driver Provider
              </span>
            </div>

            <h1 className="animate-fade-up opacity-0 delay-200 font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-4 md:mb-6">
              Experience the Difference of <span className="text-gradient-gold">Professionally Trained</span> Drivers
            </h1>

            <p className="animate-fade-up opacity-0 delay-300 text-base md:text-xl text-muted-foreground max-w-2xl mb-6">
              Elevate your transportation experience with Beno Dynamic Concept, where safety, punctuality, and unparalleled professionalism are our
              top priorities.
            </p>

            <div className="animate-fade-up opacity-0 delay-400 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Hire Professional Drivers
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar / Stats */}
      <section className="relative z-10">
        <div className="container-custom px-4 md:px-8">
          <div className="glass-card p-6 md:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center animate-fade-up opacity-0" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                  <div className="w-12 h-12 mx-auto md:mb-4 rounded-lg bg-gold/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-gold" />
                  </div>
                  <p className="font-serif text-2xl md:text-4xl font-bold text-gradient-gold mb-1">{stat.number}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-1 md:mb-4 block">Why Choose Us</span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-6">
              The Executive <span className="text-gradient-gold">Standard</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              We don't just provide drivers, we deliver peace of mind, professionalism, and an elevated experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={item.title} className="flex gap-3 md:gap-4 animate-fade-up opacity-0" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-1 md:mb-4 block">Our Services</span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-6">
              Professional Driver <span className="text-gradient-gold">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              We provide highly trained drivers to companies, executives, and VIPs, you supply the vehicle, we supply the expertise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                variant="service"
                className="p-6 animate-fade-up opacity-0"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <CardContent className="p-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="goldOutline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative animate-slide-right opacity-0">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
                <Shield className="w-32 h-32 md:w-48 md:h-48 text-gold/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-3 md:bottom-8 md:-right-8 glass-card p-4 md:p-6 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-8 h-8 text-gold" />
                  <span className="font-serif text-2xl font-bold text-foreground">10+</span>
                </div>
                <p className="text-muted-foreground text-sm">Years of Excellence</p>
              </div>
            </div>

            <div className="animate-slide-left opacity-0">
              <span className="text-gold text-sm font-medium tracking-widest uppercase mb-1 md:mb-4 block">About Us</span>
              <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                Setting the <span className="text-gradient-gold">Gold Standard</span> in Executive Transport
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-6">
                Beno Dynamic Concept Nig. was founded with a singular vision: to provide Nigeria's finest professional drivers to companies,
                executives, and VIPs who demand excellence.
              </p>
              <p className="text-muted-foreground mb-8">
                Our drivers aren't just chauffeurs, they're trained specialists who understand the nuances of VIP protocol, defensive driving, and
                situational awareness. We call them "Spy Drivers" because of their exceptional training and discretion.
              </p>

              <Button variant="gold" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
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
              Trained Drivers for <span className="text-gradient-gold">Your Fleet</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8">
              We specialize in providing professionally trained drivers for your existing vehicles. Our drivers are experts in handling all vehicle
              types with the utmost care and professionalism.
            </p>
            <ul className="space-y-3 mb-8 md:mb-10">
              {[
                "Defensive driving certified",
                "VIP protocol & etiquette trained",
                "Background checked & verified",
                "Adaptable to any vehicle type",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Hire a Driver Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-1 md:mb-4 block">Testimonials</span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Trusted by <span className="text-gradient-gold">Industry Leaders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                variant="glass"
                className="p-6 animate-fade-up opacity-0"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground/90 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <p className="font-serif font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card p-6 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                Ready to Hire <span className="text-gradient-gold">Elite Drivers?</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10">
                Contact us today to discuss your driver staffing needs. Our team is ready to provide you with skilled, professional drivers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Hire Professional Drivers
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="tel:+2348133902855">Call: +234 706 044 3225 </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
