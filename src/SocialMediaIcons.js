import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { faInstagramSquare } from "@fortawesome/free-regular-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

// <FontAwesomeIcon icon={icon({name: 'user-secret'})} /> // Defaults to the Classic family, Solid style
// <FontAwesomeIcon icon={icon({name: 'coffee', style: 'regular'})} /> // Defaults to Classic family
// <FontAwesomeIcon icon={icon({name: 'coffee', family: 'sharp', style: 'solid'})} /> // Setting both family and style
// <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> // A brand icon

function SocialMediaIcons() {
  return (
    <div className="social-icons">
      <ul className="footericons">
        <div id="linkedin">
          <li>Linkdin</li>
        </div>
        <div id="insta">
          <li>
            {/* Instagram: <FontAwesomeIcon icon={faInstagramSquare} fade />
            <FontAwesomeIcon icon="fa-brands fa-square-instagram" fade /> */}
          </li>
        </div>
        <div id="twitter">
          <li>
            Twitter:
            <FontAwesomeIcon
              icon={icon({ name: "twitter", style: "brands" })}
            />
          </li>
        </div>
        <div id="facebook">
          <li>
            {/* FaceBook: <FontAwesomeIcon icon={faFacebook} /> */}
          </li>
        </div>
      </ul>
    </div>
  );
}

export default SocialMediaIcons;
