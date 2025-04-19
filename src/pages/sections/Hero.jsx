import React from "react";
import Navbar from "../../components/Navbar";

const Hero = () => {
  return (
    <div className="bg-center bg-no-repeat bg-cover bg-hero w-full h-full">
      <Navbar />
      <div className="w-full section text-white bg-transparent h-screen backdrop-blur-md flex flex-col justify-center">
        <div className=" w-full">
          <h1 className=" md:w-1/2 sm:text-[5rem] w-[90%] text-[3.7rem] my-5 sm:my-8 leading-[4.5rem] font-bold capitalize">
            Experience the difference of professionally trained defensive drivers
          </h1>
          <p className="sm:text-4xl md:w-1/2 w-full text-3xl normal-case text-white font-medium">
            Elivate your transportatiion experience with Beno Dynamic Concept - where safety, punctuality, and unparalled professionalism are our top
            priorities.
          </p>
          <div className="mt-8">
            <button className="bg-white text-secondary font-semibold px-10 py-4 rounded-lg uppercase text-2xl hover:scale-95 transition-all">
              hire a driver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
