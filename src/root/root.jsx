import React, { useEffect } from "react";
import Hero from "../components/hero/hero";
import Navbar from "../components/narvbar/navbar";
import Footer from "../components/footer/footer";
import "./style.css";
import Services from "../Pages/Services/Services";
import Product from "../Pages/About/Product";
import Ingredients from "../Pages/Ingredients/Ingredients";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "../components/form/form";
import "antd/dist/reset.css"; // To'g'ri CSS import
const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Product />
      <Ingredients />
      <Form />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Root;
