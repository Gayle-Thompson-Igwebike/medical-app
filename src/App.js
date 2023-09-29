import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import { HomeHero } from "./HomeHero";
import HomeTestimonialCarousel from "./HomeTestimonialCarousel";
import Footer from "./Footer";
import DoctorCards from "./DoctorCards";

function App() {
  const [doctors, setDoctors] = useState([]);

  function fetchData() {
    fetch("https://medic-app-server-dthm.onrender.com/doctors")
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <HomeHero />
      <DoctorCards doctors={doctors} />
      <HomeTestimonialCarousel />
      <Footer />
    </div>
  );
}

export default App;
