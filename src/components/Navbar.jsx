import { useState } from "react";

function Navbar() {
  let [isMenu, setMenu] = useState(false);
  let toggleMenu = () => {
    setMenu(!isMenu);
  };
  return (
    <>
      <nav>
        <h3>DHRITIMAN</h3>
        <div id="nav-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experties">Experties</a>
          <a href="#footer">Contact</a>
        </div>
        <a href="https://github.com/dhritimnn/">Github</a>
        <svg
          className="menu-svg"
          id="menu-svg"
          viewBox="0 0 40 40"
          width="50"
          height="30"
          onClick={toggleMenu}
        >
          <line className="line top" x1="4" y1="12" x2="36" y2="12" />
          <line className="line mid" x1="4" y1="20" x2="36" y2="20" />
          <line className="line bot" x1="4" y1="28" x2="36" y2="28" />
        </svg>
      </nav>

      <div
        id="nav-menu"
        className="nmenuanimation"
        style={{
          display: isMenu ? "flex" : "none",
          animation: isMenu ? "menuon 0.2s ease-in" : "",
        }}
        onClick={toggleMenu}
      >
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#experties">Experties</a>
        <a href="#footer">Contact</a>
        <a href="https://github.com/dhritimnn/">Github</a>
      </div>
    </>
  );
}

export default Navbar;
