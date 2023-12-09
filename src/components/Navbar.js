import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../App.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to="/" className="nav__logo">
           <span>  Mastery </span> Institute
          </Link>

          <div
            className={`nav__menu ${showMenu ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/about" className="nav__link">
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/courses" className="nav__link">
                  Courses
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/contact" className="nav__link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
            <i className="bx bx-menu" style={{ color: "black" }}></i>
          </div>
        </nav>
      </header>
    </div>
  );
}
