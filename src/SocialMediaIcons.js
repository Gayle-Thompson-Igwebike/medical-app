import React from "react";
import facebookIcon from "./facebookicon.png";
import twitterIcon from "./twitter.png";
import instagramIcon from "./instagram.png";
import linkedinIcon from "./linkedin.png";


function SocialMediaIcons() {
  return (
    <div className="social-icons">
      <ul className="footericons">

        <div id="linkedin">
            <img src={linkedinIcon} alt="linkedin" />
        </div>

        <div id="insta">
            <img src={instagramIcon} alt="instagram" />
        </div>

        <div id="twitter">
            <img src={twitterIcon} alt="twitter" />
        </div>

        <div id="facebook">
            <img src={facebookIcon} alt="facebook" />
        </div>
        
      </ul>
    </div>
  );
}

export default SocialMediaIcons;
