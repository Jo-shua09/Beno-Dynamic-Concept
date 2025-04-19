import React from "react";
import { motion } from "framer-motion";
import { DirectionsCar, Settings, Psychology, BusinessCenter, WidthFull } from "@mui/icons-material";

const Benefits = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const benefitCards = [
    {
      Icon: DirectionsCar,
      title: "Elevated Transportation Experience",
      description:
        "We provide more than just a ride. Expect a premium experience characterized by professionalism, attention to detail, and a commitment to exceeding your expectations.",
    },
    {
      Icon: Settings,
      title: "Tailored Solutions for Your Needs",
      description:
        "Whether you require executive protection transport, corporate travel arrangements, or personal chauffeur services, we customize our solutions to fit your specific requirements.",
    },
    {
      Icon: Psychology,
      title: "Peace of Mind and Reduced Stress",
      description:
        "Reclaim your time and eliminate the stress of navigating traffic and ensuring your safety. With Beno Dynamic Concept, you can relax and focus on what matters most.",
    },
    {
      Icon: BusinessCenter,
      title: "Commitment to Professionalism",
      description:
        "From appearance to demeanor, our drivers embody the highest standards of professionalism, representing you and your organization with excellence.",
    },
  ];

  return (
    <motion.div className="w-full section" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
      <div className="mx-auto px-4 sm:px-6 w-full lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-16 uppercase tracking-wide text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h2>

        <motion.div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8" variants={containerVariants}>
          {benefitCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col gap-6 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <card.Icon className="!text-6xl text-secondary self-center transform transition-transform duration-300 hover:scale-110" />
              <h3 className="text-2xl md:text-[1.7rem] font-bold capitalize text-center text-gray-800">{card.title}</h3>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed normal-case text-center">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Benefits;
