import React from "react";
import "./App.css";
import { HomeHero } from "./HomeHero";
import HomeTestimonialCarousel from "./HomeTestimonialCarousel";
import Footer from "./Footer"





function App() {
  return (
    <div className="App">
      <HomeHero />
      <HomeTestimonialCarousel />
      <Footer/>
    </div>
  );
}

export default App;
