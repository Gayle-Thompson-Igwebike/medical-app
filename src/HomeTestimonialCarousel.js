import React, { useState, useEffect, useRef } from "react";
import "./HomeTestimonial.css";
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
  const carouselWrapperRef = useRef()

  useEffect(
    () => {
      carouselWrapperRef.current.children[currentIndex].scrollIntoView({behavior: "smooth"})
    },[currentIndex]
  )

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
          <div className="carousel-card-wrapper">
            <div className="quote-container">
              <p className="quote">{homeTestimonials[0].quote}</p>
            </div>
            <p className="name-age">
              {homeTestimonials[0].name}{" "}
              {homeTestimonials[0].age}
            </p>
          </div>

          <div className="carousel-card-wrapper">
            <div className="quote-container">
              <p className="quote">{homeTestimonials[1].quote}</p>
            </div>
            <p className="name-age">
              {homeTestimonials[1].name}{" "}
              {homeTestimonials[1].age}
            </p>
          </div>

          <div className="carousel-card-wrapper">
            <div className="quote-container">
              <p className="quote">{homeTestimonials[2].quote}</p>
            </div>
            <p className="name-age">
              {homeTestimonials[2].name}{" "}
              {homeTestimonials[2].age}
            </p>
          </div>
        </div>

        <div className="before-after">
          <button className="before-button" onClick={prevTestimonial}>
            .
          </button>
          <button className="after-button" onClick={nextTestimonial}>
            .
          </button>
        
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonialCarousel;
