import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function NavBar(props) {
  return (
    <nav showMenu={props.showMenu} className="navbar">
      <section className="btn">
        <button onClick={props.handleClose} className="close-btn">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </section>
      <section className="menu-items">
        <a href="/home" className="list-item">
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
