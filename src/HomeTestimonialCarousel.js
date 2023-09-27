import React, { useState, useEffect, useRef } from "react";
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
  const carouselWrapperRef = useRef();

  useEffect(() => {
    carouselWrapperRef.current.children[currentIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentIndex]);

  // useEffect(() => {
  //   const element = carouselWrapperRef.current.children[currentIndex];
  //   element.scrollIntoView({ behavior: "smooth", block: "start" });
  // }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % homeTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      currentIndex === 0 ? homeTestimonials.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="testimonial-carousel">
      <div className="testimonial ">
        <div className="carousel-wrapper" ref={carouselWrapperRef}>
          {homeTestimonials.map((testimonial, index) => (
            <div className="carousel-card-wrapper" key={index}>
              <img src={quoteLeft} alt="quote-left" className="quotes" />
              <div className="quote-container">
                <p className="quote">{testimonial.quote}</p>
              </div>
              <img src={quoteRight} alt="quote-right" className="quotes" />
              <p className="name-age">
                {testimonial.name} {testimonial.age}
              </p>
            </div>
          ))}
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
    </div>
  );
}

export default HomeTestimonialCarousel;
