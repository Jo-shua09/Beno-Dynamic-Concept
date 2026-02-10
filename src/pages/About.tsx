import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Eye, Award, Users, CheckCircle, ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import driverImage from "@/assets/driver-portrait.jpg";
import fleetImage from "@/assets/fleet.jpg";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Your security is our paramount concern. Every decision we make prioritizes your wellbeing.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Punctuality and attention to detail define our service. We value your time as much as you do.",
  },
  {
    icon: Eye,
    title: "Discretion",
    description: "Complete confidentiality and professionalism in every interaction. Your privacy is sacred.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We continuously strive to exceed expectations and set new standards in executive transportation.",
  },
];

const trainingModules = [
  "Defensive Driving Techniques",
  "VIP Protocol & Etiquette",
  "Situational Awareness",
  "Emergency Response Procedures",
  "First Aid & Medical Response",
  "Route Planning & Security",
  "Communication & Discretion",
  "Vehicle Maintenance Checks",
];

const milestones = [
  { year: "2014", title: "Founded", description: "Beno Dynamic Concept was established in Lagos with a vision for excellence." },
  {
    year: "2016",
    title: "First Corporate Client",
    description: "Secured our first major corporate partnership, marking our entry into executive services.",
  },
  { year: "2018", title: "Fleet Expansion", description: "Expanded our fleet to include premium luxury vehicles from top manufacturers." },
  { year: "2020", title: "Training Academy", description: "Launched our proprietary '  Driver' training program for all personnel." },
  { year: "2023", title: "Regional Expansion", description: "Extended services to cover the entire Lagos-Ogun corridor and beyond." },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-10 flex justify-center items-center h-full md:py-16 min-h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="relative container-custom px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs md:text-sm font-medium mb-6 animate-fade-up opacity-0 delay-100">
              <Shield className="w-4 h-4" />
              About Beno Dynamic Concept
            </span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up opacity-0 delay-200">
              Redefining Executive <span className="text-gradient-gold">Transportation</span> in Nigeria
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up opacity-0 delay-300">
              We are more than a transportation company. We are your trusted partners in safety, discretion, and unparalleled professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-slide-right opacity-0">
              <span className="text-gold text-sm font-medium tracking-widest uppercase mb-1 md:mb-4 block">Our Story</span>
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Built on a Foundation of <span className="text-gradient-gold">Excellence</span>
              </h2>
              <div className="space-y-4 text-sm md:text-base text-muted-foreground">
                <p>
                  Beno Dynamic Concept Nig. was born from a simple observation: Nigeria's executives and VIPs deserved better. They deserved drivers
                  who understood not just the roads, but the nuances of security, protocol, and professionalism.
                </p>
                <p>
                  Our founder, with a background in security services and executive protection, assembled a team of like-minded professionals who
                  shared a vision: to create the gold standard in Nigerian executive transportation.
                </p>
                <p>
                  Today, we serve some of Nigeria's most prominent business leaders, diplomats, and organizations. But our mission remains unchanged,
                  to deliver an experience that exceeds expectations, every single time.
                </p>
              </div>
            </div>

            <div className="relative animate-slide-left opacity-0">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
                <Shield className="w-32 h-32 md:w-48 md:h-48 text-gold/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-bold text-foreground">50+</p>
                    <p className="text-muted-foreground text-sm">Trained Professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-1 md:mb-4 block">Our Values</span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              The Principles That <span className="text-gradient-gold">Guide Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} variant="service" className="p-6 animate-fade-up opacity-0" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/*   Driver Training */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 animate-slide-right opacity-0">
              <span className="text-gold text-sm font-medium tracking-widest uppercase mb-1 md:mb-4 block">
                <GraduationCap className="w-4 h-4 inline mr-2" />
                Driver Program
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                The Making of a <span className="text-gradient-gold"> Driver</span>
              </h2>
              <p className="text-muted-foreground md:text-lg text-base mb-8">
                Our proprietary training program transforms ordinary drivers into extraordinary professionals. Each candidate undergoes rigorous
                training covering:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {trainingModules.map((module) => (
                  <div key={module} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground text-sm md:text-base">{module}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-slide-left opacity-0">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <img src={fleetImage} alt="Beno fleet and training" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-1 md:mb-4 block">Our Journey</span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Milestones of <span className="text-gradient-gold">Excellence</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row gap-8 animate-fade-up opacity-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gold border-4 border-background -translate-x-1.5 md:-translate-x-2 mt-2" />

                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="text-gold font-serif text-2xl font-bold">{milestone.year}</span>
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mt-1">{milestone.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm md:text-base">{milestone.description}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card p-6 md:p-16 text-center relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Briefcase className="w-6 h-6 text-gold" />
            </div>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Partner with <span className="text-gradient-gold">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10">
              Whether you need a single driver or a complete fleet solution, we're ready to exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
