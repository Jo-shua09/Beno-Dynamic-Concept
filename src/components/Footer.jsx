import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-12 px-4 md:px-8"
    >
      <div className="max-w-[100rem]  mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-3xl font-bold mb-4">Beno Dynamic Concept Nig.</h3>
          <p className="text-2xl">
            Your trusted partner in professional driver outsourcing.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
          <p className="text-2xl normal-case">Email: onyekaaigbaze@gmail.com</p>
          <p className="text-2xl normal-case">Phone: 07060443225</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-2xl hover:text-blue-400"
            >
              Facebook
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-2xl hover:text-blue-400"
            >
              Twitter
            </motion.a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-8">
        <p className="text-2xl">
          © 2024 Beno Dynamic Concept Nig. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
