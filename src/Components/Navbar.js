import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    if (newTheme === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.body.classList.remove("dark-mode");
    } else {
      document.body.style.backgroundColor = "#1E1E1E";
      document.body.style.color = "white";
      document.body.classList.add("dark-mode");
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-md bg-${theme} navbar-${theme}`}>
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            Text-WebTool
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  style={{ color: theme === "dark" ? "white" : "black" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ color: theme === "dark" ? "white" : "black" }}
                >
                  About Us
                </Link>
              </li>
            </ul>

            <div className="form-check form-switch ms-md-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={handleClick}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                style={{ color: theme === "dark" ? "white" : "black" }}
              >
                {theme} mode
              </label>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar theme={theme} />
    </>
  );
}
