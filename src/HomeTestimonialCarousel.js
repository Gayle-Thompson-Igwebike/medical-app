import React, { useState, useEffect } from "react";
import "./HomeTestimonial.css";
import quoteLeft from "./quote-left.png";
import quoteRight from "./quote-right.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

const homeTestimonials = [
  {
    quote: ` I had a great experience with "NAME OF WEBSITE". The staff was friendly and professional, and I felt like I was in good hands. It's great to be treated by a Doctor who knows so much about a condition other Doctors were not familiar with `,
    name: "John Smith",
    age: "Age 32",
  },
  {
    quote: ` I was really impressed with the level of care I received here. The doctors and nurses were knowledgeable and made me feel comfortable. `,
    name: "Jane Doe",
    age: "Age 62",
  },
  {
    quote: ` I've been to many clinics over the years, but this one stands out for its exceptional service and attention to detail. Highly recommended! `,
    name: "Bob Johnson",
    age: "Age 57",
  },
];

function HomeTestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % homeTestimonials.length);
    }, 5000);
    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % homeTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? homeTestimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-carousel">
      <div className="testimonial">
        <div className="carousel-wrapper">
          <div className="carousel-card-wrapper">
            <img src={quoteLeft} alt="quote-left" className="quotes" />
            <div className="quote-container">
              <p className="quote">{homeTestimonials[currentIndex].quote}</p>
            </div>
            <img src={quoteRight} alt="quote-right" className="quotes" />
          </div>
          <p className="name-age">
            {homeTestimonials[currentIndex].name}{" "}
            {homeTestimonials[currentIndex].age}
          </p>
        </div>
      </div>
      <div className="before-after">
        <button className="before-button" onClick={prevTestimonial}>
          <FontAwesomeIcon
            icon={faCircle}
            size="2xs"
            style={{ color: "#ffffff" }}
          />
        </button>
        <button className="after-button" onClick={nextTestimonial}>
          <FontAwesomeIcon
            icon={faCircle}
            size="2xs"
            style={{ color: "#ffffff" }}
          />
        </button>
      </div>
    </div>
  );
}

export default HomeTestimonialCarousel;
