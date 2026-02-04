import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, Car, Users, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+234 7060443225"],
    action: { label: "Call Now", href: "tel:+2347060443225" },
  },
  {
    icon: Mail,
    title: "Email",
    details: ["onyekaaigbaze@gmail.com"],
    action: { label: "Send Email", href: "mailto:onyekaaigbaze@gmail.com" },
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Lagos State, Nigeria", "Ogun State, Nigeria"],
    action: null,
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["24/7 Availability", "Always at your service"],
    action: null,
  },
];

const serviceTypes = [
  { id: "executive", label: "Executive Drivers", icon: Car },
  { id: "corporate", label: "Corporate Staffing", icon: Users },
  { id: "event", label: "Event Drivers", icon: Calendar },
  { id: "ondemand", label: "On-Demand Drivers", icon: Clock },
];

const Contact = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    driverCount: "",
    duration: "",
    startDate: "",
    location: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, serviceType: serviceId });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message
    const message = `
*New Driver Hiring Request*

*Contact Information*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || "Individual"}

*Driver Requirements*
Service Type: ${formData.serviceType}
Number of Drivers: ${formData.driverCount || "1"}
Duration: ${formData.duration || "To be discussed"}
Start Date: ${formData.startDate}
Location: ${formData.location}

*Additional Notes*
${formData.message || "None"}
    `.trim();

    const whatsappUrl = `https://wa.me/2348133902855?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Request Submitted!",
      description: "You'll be redirected to WhatsApp to complete your inquiry.",
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-10 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="relative container-custom px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs md:text-sm font-medium mb-6 animate-fade-up opacity-0 delay-100">
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up opacity-0 delay-200">
              Hire Professional <span className="text-gradient-gold">Drivers</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up opacity-0 delay-300">
              Tell us about your driver staffing needs and we'll get back to you within minutes. Or reach out directly through any of our contact
              channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="container-custom px-4 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={info.title} variant="glass" className="p-6 animate-fade-up opacity-0" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                  {info.action && (
                    <a href={info.action.href} className="inline-flex items-center gap-2 mt-4 text-gold text-sm font-medium hover:underline">
                      {info.action.label}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom md:px-8">
          <div className="max-w-4xl mx-auto">
            <Card variant="glass" className="p-6 md:p-12">
              <CardContent className="p-0">
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-6 md:mb-12">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center">
                      <div
                        className={`md:w-10 md:h-10 h-5 w-5 text-xs md:text-sm  rounded-full flex items-center justify-center font-semibold transition-all ${
                          step >= s ? "bg-gradient-to-r from-gold to-gold-light text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                      </div>
                      {s < 3 && (
                        <div className={`w-full h-1 mx-2 rounded transition-all ${step > s ? "bg-gold" : "bg-muted"}`} style={{ width: "80px" }} />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Info */}
                  {step === 1 && (
                    <div className="space-y-6 animate-fade-up">
                      <div className="text-center mb-4 md:mb-8">
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Personal Information</h2>
                        <p className="text-muted-foreground">Tell us a bit about yourself</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                            className="bg-muted/50 border-border/50 h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            required
                            className="bg-muted/50 border-border/50 h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+234 800 000 0000"
                            required
                            className="bg-muted/50 border-border/50 h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Company (Optional)</label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your Company Ltd."
                            className="bg-muted/50 border-border/50 h-12"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end mt-8">
                        <Button
                          type="button"
                          variant="gold"
                          size="lg"
                          onClick={nextStep}
                          disabled={!formData.name || !formData.email || !formData.phone}
                        >
                          Next Step
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Service Selection */}
                  {step === 2 && (
                    <div className="space-y-6 animate-fade-up">
                      <div className="text-center mb-4 md:mb-8">
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Driver Requirements</h2>
                        <p className="text-muted-foreground">Tell us about your driver needs</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {serviceTypes.map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => handleServiceSelect(service.id)}
                            className={`p-6 rounded-xl border-2 transition-all text-left ${
                              formData.serviceType === service.id ? "border-gold bg-gold/10" : "border-border/50 hover:border-gold/50"
                            }`}
                          >
                            <service.icon className={`w-8 h-8 mb-3 ${formData.serviceType === service.id ? "text-gold" : "text-muted-foreground"}`} />
                            <p className="font-semibold text-foreground">{service.label}</p>
                          </button>
                        ))}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Number of Drivers Needed *</label>
                          <Input
                            name="driverCount"
                            type="number"
                            min="1"
                            value={formData.driverCount}
                            onChange={handleInputChange}
                            placeholder="1"
                            required
                            className="bg-muted/50 border-border/50 h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Work Location *</label>
                          <Input
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="Lagos, Ogun, etc."
                            required
                            className="bg-muted/50 border-border/50 h-12"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between mt-8">
                        <Button type="button" variant="outline" size="lg" onClick={prevStep}>
                          Back
                        </Button>
                        <Button
                          type="button"
                          variant="gold"
                          size="lg"
                          onClick={nextStep}
                          disabled={!formData.serviceType || !formData.driverCount || !formData.location}
                        >
                          Next Step
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Schedule & Submit */}
                  {step === 3 && (
                    <div className="space-y-6 animate-fade-up">
                      <div className="text-center mb-8">
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Timeline & Details</h2>
                        <p className="text-muted-foreground">When do you need the driver(s)?</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Start Date *</label>
                          <Input
                            name="startDate"
                            type="date"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            required
                            className="bg-muted/50 border-border/50 h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Duration</label>
                          <Input
                            name="duration"
                            value={formData.duration}
                            onChange={handleInputChange}
                            placeholder="e.g., 3 months, Ongoing, 1 week"
                            className="bg-muted/50 border-border/50 h-12"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Additional Requirements</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Vehicle types to be driven, special skills required, working hours, etc."
                          rows={4}
                          className="bg-muted/50 border-border/50"
                        />
                      </div>

                      <div className="flex justify-between mt-8">
                        <Button type="button" variant="outline" size="lg" onClick={prevStep}>
                          Back
                        </Button>
                        <Button type="submit" variant="hero" size="lg" disabled={!formData.startDate}>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Request
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card p-6 md:p-16 text-center relative overflow-hidden">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Prefer to <span className="text-gradient-gold">Chat?</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10">
              Reach us directly on WhatsApp for immediate assistance. Our team typically responds within minutes.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/2348133902855" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
