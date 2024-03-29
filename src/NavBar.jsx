import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import "./NavBar.css";

function NavBar({ showMenu, handleClose }) {
  return (
    <nav
      showMenu={showMenu}
      className="navbar animate__animated animate__slideInRight"
    >
      <section className="btn">
        <button onClick={handleClose} className="close-btn">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </section>
      <section className="menu-items">
        <a href="/home" className="list-item" id="home">
          Home
        </a>
        <a href="/about" className="list-item">
          About Us
        </a>
        <a href="/team" className="list-item">
          Meet the Team
        </a>
        <a href="/testimonials" className="list-item">
          Testimonials
        </a>
        <a href="/contact" className="list-item">
          Contact Us
        </a>
      </section>
    </nav>
  );
}

export default NavBar;
