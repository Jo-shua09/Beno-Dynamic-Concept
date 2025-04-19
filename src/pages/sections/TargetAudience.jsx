import React from "react";
import { motion } from "framer-motion";

const TargetAudience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-11/12  section mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold text-center mb-8 text-gray-800"
      >
        Who We Serve
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="sm:text-2xl text-3xl font-semibold mb-4 text-gray-700">Corporate Organizations</h3>
          <p className="sm:text-xl text-2xl font-medium normal-case text-gray-600">
            From daily staff transport to VIP guest logistics, we provide reliable drivers for businesses that value professionalism and punctuality.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="sm:text-2xl text-3xl font-semibold mb-4 text-gray-700">High-Level Executives & VIPs</h3>
          <p className="sm:text-xl text-2xl font-medium normal-case text-gray-600">
            Discreet, trusted, and trained to handle security-conscious environments, our drivers ensure comfort and confidentiality at all times.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="sm:text-2xl text-3xl font-semibold mb-4 text-gray-700">Event Planners & Coordinators</h3>
          <p className="sm:text-xl text-2xl font-medium normal-case text-gray-600">
            Need punctual drivers for your VIP guests, weddings, or high-profile gatherings? We've got the fleet and finesse.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TargetAudience;
