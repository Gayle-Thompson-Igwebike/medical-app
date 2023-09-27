import React from "react";
import "./App.css";
import Header from "./Header";
import { HomeHero } from "./HomeHero";
import HomeTestimonialCarousel from "./HomeTestimonialCarousel";
import Footer from "./Footer"





function App() {
  return (
    <div className="App">
      <Header />
      <HomeHero />
      <HomeTestimonialCarousel />
      <Footer/>
    </div>
  );
}

export default App;
