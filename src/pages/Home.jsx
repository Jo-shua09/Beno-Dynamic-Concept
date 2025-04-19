import React from "react";
import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import Service from "./sections/Service";
import TargetAudience from "./sections/TargetAudience";
import Testimonials from "./sections/Testimonials";
import ContactUs from "./sections/ContactUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Service />
      <TargetAudience />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
