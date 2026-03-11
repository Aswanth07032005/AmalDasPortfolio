import React from "react";
import "./HireMe.css";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

function HireMe() {
  return (
    <section className="hire" id="hire">
      <div className="hire-container">
        <h2>
          Let's <span>Work Together</span>
        </h2>

        <p>
          I'm available for video editing projects, Instagram reels, cinematic
          edits, wedding highlights and creative social media content. If you
          have an idea, let's turn it into something amazing.
        </p>

        <div className="hire-buttons">
          <a href="mailto:ad7727808@gmail.com" className="hire-btn">
            <FaEnvelope /> Hire Me
          </a>

          <a
            href="https://wa.me/916282300667"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default HireMe;
