import React, { useState } from "react";
import "./HomeNavbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function HomeNavbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <NavLink to="/home" className="logo" onClick={() => setMenuOpen(false)}>
        A<span>D</span>
      </NavLink>

      {/* MENU ICON */}
      <button
        className="menu-icon"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* NAV LINKS */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/works" onClick={() => setMenuOpen(false)}>
           Works
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>
            Service
          </NavLink>
        </li>


        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/hire-me" className="nav-btn " onClick={() => setMenuOpen(false)}>
            Hire Me
          </NavLink>
        </li>

      </ul>

      {menuOpen && (
        <button
          className="menu-backdrop"
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

    </nav>
  );
}

export default HomeNavbar;
