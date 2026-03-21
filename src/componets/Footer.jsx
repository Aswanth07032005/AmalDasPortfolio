import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaUserShield
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ABOUT */}

        <div className="footer-about">
          <h2>Amal Das</h2>
          <p>
            Creative Video Editor & Videographer from Kerala. I create cinematic
            videos, Instagram reels, wedding highlights and engaging social media
            content with smooth transitions and strong storytelling.
          </p>
        </div>

        {/* LINKS */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>

        {/* CONTACT */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon"/>
            <span>Vadakara, Kerala, India</span>
          </div>

          <div className="contact-item">
            <FaPhone className="icon"/>
            <span>+91 6282300667</span>
          </div>

          <div className="contact-item">
            <FaEnvelope className="icon"/>
            <span>ad7727808@gmail.com</span>
          </div>

          {/* SOCIAL ICONS */}

          <div className="social-icons">

            <a
              href="https://www.instagram.com/z_eno__?igsh=MW1lZDdpcGprZGhmdw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram/>
            </a>

          

            <a
              href="https://wa.me/916282300667"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp/>
            </a>

            {/* ADMIN ICON */}

            <NavLink to="/adminAcc">
              <FaUserShield/>
            </NavLink>

          </div>

        </div>

      </div>

      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">
        <p>© 2026 AswHub. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;