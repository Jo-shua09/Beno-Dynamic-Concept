import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="max-w-[150rem] w-full mx-auto m-auto ">
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
