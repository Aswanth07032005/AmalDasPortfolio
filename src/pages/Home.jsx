import React from "react";
import "./Home.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero" id="home" style={{ minHeight: "100vh" }}>
      {/* Floating Shapes */}
      <span className="shape circle1"></span>
      <span className="shape circle2"></span>
      <span className="shape square1"></span>
      <span className="shape square2"></span>
      <span className="shape triangle"></span>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-text">
          <h1>
            I'm <span className="name">Amal Das</span>
          </h1>

          <h3>
            <span className="highlight">Video Editor</span> & Videographer
          </h3>

          <p>
            Creative video editor and videographer from Kozhikode, Kerala. I
            specialize in cinematic video editing, wedding videos, Instagram
            reels and engaging social media content with smooth transitions and
            storytelling.
          </p>

          <Link to={"/hire-me"} className="text-decoration-none">
            <button className="hire-btn m-1 ">Hire Me</button>
          </Link>
          <Link to={"/works"} className="text-decoration-none">
            <button className="hire-btn m-1 bg-warning">Works</button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <Image src="/AmalDasPortfolio/IMG_4124.jpg" alt="profile" fluid />
        </div>
      </div>
    </section>
  );
}

export default Home;
