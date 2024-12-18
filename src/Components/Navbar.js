import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dark, light] = useState("dark");

  const handleClick = () => {
    let text = dark;

    if (text === "dark") {
      light("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }

    if (text === "light") {
      light("dark");
      document.body.style.backgroundColor = "#1E1E1E";
      document.body.style.color = "white";
    }
  };

  return (
    <nav className={`navbar navbar-expand-md bg-${dark} navbar-${dark}`}>
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{ color: dark === "dark" ? "white" : "black" }}
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
                style={{ color: dark === "dark" ? "white" : "black" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{ color: dark === "dark" ? "white" : "black" }}
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
              style={{ color: dark === "dark" ? "white" : "black" }}
            >
               {dark} mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
