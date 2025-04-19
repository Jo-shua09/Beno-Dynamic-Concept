import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="!font-FamilyFont">
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
