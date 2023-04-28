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
              style={{ color: "#b6d1d9", width: "2em", height: "2em" }}
            />
            <a href="/login">Log In</a>
          </aside>
          <button onClick={toggleMenu} className="menu-btn">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </aside>
      )}
      {showMenu && <NavBar showMenu={showMenu} handleClose={handleClose} />}
    </header>
  );
}

export default Header;
