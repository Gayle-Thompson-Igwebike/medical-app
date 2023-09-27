import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import "./Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((s) => !s);

  const handleClose = () => setShowMenu(false);

  return (
    <header>
      {!showMenu && (
        <aside className="menu">
          <aside className="login">
            <FontAwesomeIcon
              icon={faCircleUser}
              style={{ color: "#b6d1d9" }}
              className="user-icon"
            />
            <a href="/login" className="login-btn">Log In</a>
          </aside>
          <button onClick={toggleMenu} className="menu-btn">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <section className="header-menu-items">
            <a href="/home" className="list-item">
              Home
            </a>
            <a href="/about" className="list-item">
              About Us
            </a>
            <a href="/team" className="list-item">
              The Team
            </a>
            <a href="/testimonials" className="list-item">
              Testimonials
            </a>
            <a href="/contact" className="list-item">
              Contact Us
            </a>
          </section>
        </aside>
      )}
      {showMenu && <NavBar showMenu={showMenu} handleClose={handleClose} />}
    </header>
  );
}

export default Header;
