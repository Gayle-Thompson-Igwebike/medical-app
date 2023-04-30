import React from "react";
import ContactUsForm from "./ContactUsForm";
import SocialMediaIcons from "./SocialMediaIcons";
import "./Footer.css";
import SubmitButton from "./SubmitButton";




function Footer() {
  const FooterArray = [
    "Black Women Coders Medical App",
    "No4 Women Avenue, London.",
    "E1 4UD",
    "hello@bwcma.com",
    "123-456-7890",
  ];
  const [Name, Address, PostCode, Email, Tel] = FooterArray;
  return (
    <div className="footer-container">
      <div className="footer-details">
        <ul className="footer-address">
          <li>{Name}</li>
          <li>{Address}</li>
          <li>{PostCode}</li>
          <li>{Email}</li> <br></br> <br></br>
          <li>Telephone: {Tel}</li>
        </ul>
      </div>
      
      {/* <div id="operating-hours">
        <OperatingHours />
      </div> */}

      <div id="contactus-form">
        <ContactUsForm />
      </div>

      <div id="socialmedia-icons">
        <SocialMediaIcons />
      </div>

      <div id="submit-btn">
        <SubmitButton/>
      </div>

    </div>
  );
}

export default Footer;