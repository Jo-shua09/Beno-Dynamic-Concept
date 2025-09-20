import React from "react";
import Navbar from "../../components/Navbar";

const Hero = () => {
  return (
    <div className="bg-center bg-no-repeat bg-cover bg-hero w-full h-full">
      <Navbar />
      <div className="w-full section text-white bg-transparent h-screen backdrop-blur-md flex flex-col justify-center">
        <div className=" w-full">
          <h1 className=" md:w-1/2 sm:text-[5rem] w-[95%] text-[3.7rem] my-5 sm:my-8 leading-[4.5rem] font-bold capitalize">
            Experience the difference of professionally trained spy drivers
          </h1>
          <p className="sm:text-4xl my-6 mb-16 md:w-1/2 w-full text-3xl normal-case text-white font-medium">
            Elevate your transportatiion experience with Beno Dynamic Concept - where safety, punctuality, and unparalled professionalism are our top
            priorities.
          </p>
          <div className="">
            <a
              href="https://wa.me/2348133902855"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-secondary font-semibold px-10 py-5 rounded-xl uppercase text-2xl hover:scale-95 transition-all"
            >
              hire a driver
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
