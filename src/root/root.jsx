import React from "react";
import Hero from "../components/hero/hero";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/narvbar/navbar";
import Footer from "../components/footer/footer";
import "./style.css";

const Root = () => {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* boshqa sahifalar */}
      </Routes>
      <Footer />
    </div>
  );
};

export default Root;
