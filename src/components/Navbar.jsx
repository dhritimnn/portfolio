import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  let [isMenu, setMenu] = useState(false);
  let toggleMenu = () => {
    setMenu(!isMenu);
  };

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <nav>
        <h3>DHRITIMAN</h3>
        <div id="nav-links">
          <Link to="/">Home</Link>
          <Link to="#about">About</Link>
          <Link to="#experties">Experties</Link>
          <Link to="#footer">Contact</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
        <button
          id="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          type="button"
        >
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m0 13.5V21m9-9h-2.25M5.25 12H3m14.4 6.6-1.59-1.59M8.19 8.19 6.6 6.6m0 10.8 1.59-1.59M15.81 8.19l1.59-1.59M12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Z"
              />
            </svg>
          )}
        </button>
        <svg
          className="menu-svg"
          id="menu-svg"
          viewBox="0 0 40 40"
          width="50"
          height="30"
          onClick={toggleMenu}
        >
          <line
            className="line top"
            x1="4"
            y1="12"
            x2="36"
            y2="12"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            className="line mid"
            x1="4"
            y1="20"
            x2="36"
            y2="20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            className="line bot"
            x1="4"
            y1="28"
            x2="36"
            y2="28"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
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
