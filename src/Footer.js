import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";



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
    <div className="footer">
      <ul className="footer-address">
        <li>{Name}</li>
        <li>{Address}</li>
        <li>{PostCode}</li>
        <li>{Email}</li> <br></br>
        <li>Telephone: {Tel}</li>
      </ul>
      <SocialMediaIcons />
    </div>
  );
}

export default Footer;