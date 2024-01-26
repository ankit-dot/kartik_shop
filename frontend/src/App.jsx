import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./App.css";
import About from "./components/about/About";
import Pricing from "./components/pricing/Pricing";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import FooterComponent from "./components/footer/Footer";
import ContactPage from "./components/contactPage/ContactPage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-container">
        <Navbar />
        <Home />
      </div>
      <About />
      <Pricing/>
      <TestimonialsSection/>
      <ContactPage/>
      <FooterComponent/>
    </>
  );
}

export default App;
