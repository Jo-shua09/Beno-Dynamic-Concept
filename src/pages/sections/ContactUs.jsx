import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Email, LocationOn, WhatsApp } from "@mui/icons-material";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    window.location.href = `mailto:onyekaaigbazegmail.com?subject=Contact Form Submission&body=Name: ${formData.fullName}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full section mb-16" id="contact">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-[90%] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Get in Touch</h2>
        <p className="text-2xl text-center normal-case text-gray-600 mb-12">
          Ready to book a professional driver or make an inquiry? We're just a message away.
        </p>

        <div className="flex flex-col w-full gap-12 justify-center items-center">
          {/* Contact Information */}
          <div className="w-full grid md:grid-cols-3 grid-cols-1 justify-center gap-10 items-center mx-auto ">
            <div className="flex items-start gap-x-5 w-full bg-white p-7 rounded-xl">
              <Phone className="!text-4xl text-black mt-1" />
              <div>
                <h3 className="text-2xl uppercase font-semibold mb-3">Phone</h3>
                <p className="text-2xl normal-case font-medium">+234 7060443225</p>
                <p className="text-gray-600">(Call us for urgent bookings)</p>
              </div>
            </div>
            <div className="flex items-start gap-x-5 w-full bg-white p-7 rounded-xl">
              <Email className="!text-4xl text-black mt-1" />
              <div>
                <h3 className="text-2xl uppercase font-semibold mb-3">Email</h3>
                <p className="text-2xl normal-case font-medium">onyekaaigbaze@gmail.com</p>
                <p className="text-gray-600">(General inquiries & partnership requests)</p>
              </div>
            </div>
            <div className="flex items-start gap-x-5 w-full bg-white p-7 rounded-xl">
              <LocationOn className="!text-4xl text-black mt-1" />
              <div className="w-full">
                <h3 className="text-2xl font uppercase font-semibold mb-3">Office Address</h3>
                <p className="text-2xl normal-case font-medium">Beno Dynamic Concept,</p>
                <p className="text-xl"> ogijo, ogun state, Nigeria.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 md:w-1/2 w-full"
          >
            <div>
              <label className="block text-2xl mb-2" htmlFor="fullName">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="w-full p-3 border-black/50 h-[5rem] md:h-[4.5rem] rounded-xl bg-transparent focus:border-black text-2xl normal-case border-2"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-2xl mb-2" htmlFor="email">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border-black/50 h-[5rem] md:h-[4.5rem] rounded-xl bg-transparent focus:border-black text-2xl normal-case border-2"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-2xl mb-2" htmlFor="phone">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 border-black/50 h-[5rem] md:h-[4.5rem] rounded-xl bg-transparent focus:border-black text-2xl normal-case border-2"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-2xl mb-2" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                placeholder="Tell us what you need..."
                className="w-full p-3 border-black/50 h-[20rem] rounded-xl bg-transparent focus:border-black text-2xl normal-case border-2"
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between gap-10 w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full h-[5rem] md:h-[4.5rem] uppercase font-bold bg-black text-white py-3 rounded-lg text-xl hover:scale-50 transition-colors"
              >
                Send Message
              </motion.button>

              <a
                href="https://wa.me/2348133902855"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex hover:scale-95 text-2xl normal-case w-full h-[5rem] md:h-[4.5rem] transition-all duration-200 items-center space-x-2 cursor-pointer bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600"
              >
                <WhatsApp className="text-2xl" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.form>
        </div>

        <div className="mt-6 text-center">
          <p className="text-2xl text-green-600 normal-case font-semibold">✓ Response within 24 hours</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
