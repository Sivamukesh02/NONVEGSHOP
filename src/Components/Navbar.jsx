// Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/Style/navbar.css";
import gril from "../assets/Image/gril.png";

function Navbar() {
  return (
    <nav className="navbar" data-aos="fade-down" data-aos-duration="1000">
      {/* Logo + Website name */}
      <div className="nav-logo">
        <h1 className="nav-title">G<img src={gril} alt="logo" className="nav-logo-img" />AT</h1>
      </div>

      {/* Menu links */}
      <ul className="nav-links">
        <li data-aos="fade-down" data-aos-delay="100">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>

        <li data-aos="fade-down" data-aos-delay="200">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </li>

        <li data-aos="fade-down" data-aos-delay="300">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>

        <li data-aos="fade-down" data-aos-delay="400">
          <NavLink
            to="/items"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Items
          </NavLink>
        </li>
      </ul>

      {/* Login button - separate look */}
      <NavLink
        to="/login"
        className="nav-login"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        Login
      </NavLink>
    </nav>
  );
}

export default Navbar;