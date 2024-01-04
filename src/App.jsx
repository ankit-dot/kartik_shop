import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./App.css";
import About from "./components/about/About";
import Pricing from "./components/pricing/Pricing";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import FooterComponent from "./components/footer/Footer";

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
      <FooterComponent/>
    </>
  );
}

export default App;
