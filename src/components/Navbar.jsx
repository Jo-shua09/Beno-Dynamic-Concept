import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="w-full px-4 md:px-10 py-5 bg-white backdrop-blur-xl fixed top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="w-fit">
          <img src="logo.webp" alt="logo icon" className="w-28 md:w-28  h-16 md:h-28 object-cover" />
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-black hover:text-gray-700" onClick={toggleMenu}>
          {isOpen ? (
            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex items-center gap-x-12  text-xl lg:text-2xl font-medium">
            <li className="list-none">
              <button
                className="capitalize text-nowrap hover:underline underline-offset-4 transition-all duration-200 cursor-pointer hover:font-semibold"
                onClick={() => scrollToSection("about")}
              >
                about us
              </button>
            </li>
            <li className="list-none">
              <button
                className="capitalize text-nowrap hover:underline underline-offset-4 transition-all duration-200 cursor-pointer hover:font-semibold"
                onClick={() => scrollToSection("service")}
              >
                our services
              </button>
            </li>
            <li className="list-none">
              <button
                className="capitalize text-nowrap hover:underline underline-offset-4 transition-all duration-200 cursor-pointer hover:font-semibold"
                onClick={() => scrollToSection("whychoose")}
              >
                why choose us
              </button>
            </li>
            <li className="list-none">
              <button
                className="capitalize text-nowrap hover:underline underline-offset-4 transition-all duration-200 cursor-pointer hover:font-semibold"
                onClick={() => scrollToSection("testimonial")}
              >
                testimonials
              </button>
            </li>
          </ul>
        </div>

        {/* Desktop contact button */}
        <div className="hidden md:flex flex-1 justify-end">
          <button
            onClick={() => scrollToSection("contact")}
            className="border-secondary border  rounded-xl py-3 md:py-4 px-5 md:px-7 text-nowrap text-xl md:text-2xl font-semibold uppercase hover:scale-95 transition-all"
          >
            contact us
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center gap-y-10 pt-4 pb-6 text-xl">
            <li className="list-none ">
              <button
                className="text-nowrap hover:underline underline-offset-4 transition-all duration-200 cursor-pointer hover:font-semibold capitalize text-2xl font-semibold"
                onClick={() => scrollToSection("about")}
              >
                about us
              </button>
            </li>
            <li className="list-none ">
              <button
                className="text-nowrap hover:underline underline-offset-4 transition-all duration-200 cursor-pointer hover:font-semibold capitalize text-2xl font-semibold"
                onClick={() => scrollToSection("service")}
              >
                our services
              </button>
            </li>
            <li className="list-none ">
              <button
                className="text-nowrap hover:underline underline-offset-4 transition-all duration-200 cursor-pointer hover:font-semibold capitalize text-2xl font-semibold"
                onClick={() => scrollToSection("whychoose")}
              >
                why choose us
              </button>
            </li>
            <li className="list-none ">
              <button
                className="text-nowrap hover:underline underline-offset-4 transition-all duration-200 cursor-pointer hover:font-semibold capitalize text-2xl font-semibold"
                onClick={() => scrollToSection("testimonial")}
              >
                testimonials
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-secondary  border rounded-xl py-4 px-7 text-nowrap text-xl font-semibold uppercase hover:scale-95 transition-all"
              >
                contact us
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
