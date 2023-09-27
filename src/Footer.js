import React from "react";
import ContactUsForm from "./ContactUsForm";
import SocialMediaIcons from "./SocialMediaIcons";
import "./Footer.css";
import SubmitButton from "./SubmitButton";


function Footer() {
  const FooterArray = [
    "BWC Medical App",
    "No4 Avenue, London",
    "E1 4UD",
    "hello@bwcma.com",
    "123-456-7890",
  ];
  const [Name, Address, PostCode, Email, Tel] = FooterArray;
  return (
    <div className="footer-page">
      <div className="footer-container">
        <div className="footer-details">
          <ul className="footer-address">
            <li>{Name}</li>
            <li>{Address}</li>
            <li>{PostCode}</li>
            <li>{Email}</li> <br></br>
            <li>Tel: {Tel}</li>
          </ul>
          <SocialMediaIcons />
        </div>
        <div id="contactus-form">
          <ContactUsForm />

          <div id="submit-btn">
            <SubmitButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;