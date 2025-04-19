import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  const services = [
    {
      title: "Executive Chauffeur Services",
      description: "Ride in style with our top-tier drivers, trained in VIP protocol and defensive driving",
      features: [
        "Highly trained professional drivers",
        "VIP protocol expertise",
        "Diplomatic service experience",
        "Luxury vehicle options",
        "24/7 availability",
      ],
    },
    {
      title: "Corporate Fleet Support",
      description: "Professional drivers on demand for all your corporate transportation needs",
      features: [
        "Dedicated staff shuttles",
        "Business meeting transportation",
        "Corporate event coverage",
        "Daily commute solutions",
        "Fleet management support",
      ],
    },
    {
      title: "Event & Occasion Driving",
      description: "Professional chauffeur services for your special moments and celebrations",
      features: ["Wedding transportation", "Special event coverage", "Formal occasion expertise", "Coordinated group transport", "Professional appearance"],
    },
    {
      title: "Emergency On-Demand Drivers",
      description: "24/7 reliable driver service for urgent transportation needs",
      features: ["Immediate response team", "24/7 availability", "Replacement driver service", "Late-night transportation", "Emergency dispatch"],
    },
  ];

  return (
    <section className="w-full section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-2xl font-medium text-gray-600 max-w-3xl mx-auto">
            Premium chauffeur and driver services tailored to meet your professional and personal transportation needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-[1.7rem] font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-xl mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xl font-medium text-gray-700">
                    <svg
                      className="h-7 w-10 text-green-500 mr-3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
