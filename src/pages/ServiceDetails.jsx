import React from "react";
import { useParams } from "react-router-dom";
import { FaVideo, FaFilm, FaInstagram, FaMagic } from "react-icons/fa";
import "./ServiceDetails.css";

function ServiceDetails() {

  const { id } = useParams();

  const servicesData = [
    {
      id: "1",
      icon: FaVideo,
      title: "Video Editing",
      description:
        "Professional video editing with smooth cuts, transitions and storytelling to create engaging content.",
      details:
        "I provide professional video editing services including trimming, cutting, transitions, sound design, subtitles and storytelling to make videos more engaging."
    },
    {
      id: "2",
      icon: FaInstagram,
      title: "Instagram Reels Editing",
      description:
        "Creative short-form editing for Instagram Reels and social media.",
      details:
        "Short-form editing optimized for Instagram Reels, TikTok and YouTube Shorts including beat sync cuts, captions, emojis and trendy transitions."
    },
    {
      id: "3",
      icon: FaFilm,
      title: "Cinematic Editing",
      description:
        "Cinematic storytelling with color grading and smooth transitions.",
      details:
        "Cinematic editing with film-style color grading, dramatic pacing, storytelling techniques and smooth transitions."
    },
    {
      id: "4",
      icon: FaMagic,
      title: "Creative Video Effects",
      description:
        "Creative visual effects and transitions.",
      details:
        "Adding VFX, beat sync transitions, motion graphics and creative visual effects to make videos more attractive."
    }
  ];

  const service = servicesData.find((item) => item.id === id);
  if (!service) {
    return (
      <section className="service-details">
        <p className="service-not-found">Service not found</p>
      </section>
    );
  }

  

  const Icon = service.icon;

  return (
    <section className="service-details">

      <div className="service-details-container">

        <Icon className="service-details-icon" />

        <h1 className="service-details-title">{service.title}</h1>

        <p className="service-details-description">
          {service.description}
        </p>

        <p className="service-details-text">
          {service.details}
        </p>

      </div>

    </section>
  );
}

export default ServiceDetails;
