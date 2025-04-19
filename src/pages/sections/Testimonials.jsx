import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Beno's drivers are more than chauffeurs — they're professionals. Always punctual, courteous, and discreet. Perfect for our executive team.",
      role: "HR Executive, Fortune 500 Company",
    },
    {
      text: "We used Beno for our VIP guests during a corporate event. Smooth coordination, clean vehicles, and impressive drivers. Will definitely use them again.",
      role: "Senior Event Coordinator, Global Events Company",
    },
    {
      text: "As a private client, I value privacy and safety. Beno delivered both — with class. I now request their drivers exclusively.",
      role: "Distinguished Private Client",
    },
    {
      text: "The level of professionalism and attention to detail is unmatched. Every ride feels like a premium experience.",
      role: "Corporate Executive",
    },
  ];

  return (
    <section className="section w-full" id="testimonial">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-2xl text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xl">{testimonial.role[0]}</span>
                </div>
                <p className="ml-4 text-gray-600 font-medium">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
