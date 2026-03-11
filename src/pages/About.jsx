import React from "react";
import "./About.css";
import { Image } from "react-bootstrap";

function About() {
  return (
    <section className="about min-vh-100" id="about">
      <div className="about-container">
        {/* IMAGE */}
        <div className="about-image">
          <Image src="/IMG_2305.jpg" alt="Amal Das" />
        </div>

        {/* CONTENT */}
        <div className="about-content">
          <h2>
            About <span>Me</span>
          </h2>

          <p>
            I am a creative Video Editor & Videographer based in Kozhikode,
            Kerala. I specialize in cinematic video editing, Instagram reels,
            wedding highlights, and engaging social media content. With strong
            skills in storytelling, smooth transitions, beat-sync editing, and
            color grading, I focus on transforming raw footage into visually
            appealing videos that capture attention and connect with audiences.
            I am passionate about creating high-quality content that helps
            brands, creators, and businesses grow their online presence through
            impactful visuals.
          </p>

          <a href="/AMAL DAS.pdf" download className="about-btn text-decoration-none text-dark">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
