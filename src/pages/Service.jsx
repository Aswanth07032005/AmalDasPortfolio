import React from "react";
import "./Service.css";
import { FaVideo, FaFilm, FaInstagram, FaMagic } from "react-icons/fa";
import { Link } from "react-router-dom";

function Service() {
const servicesData = [
  {
    id: 1,
    icon: FaVideo,
    title: "Video Editing",
    description:
      "Professional video editing with smooth cuts, transitions and storytelling to create engaging content.",

    details:
      "I provide professional video editing services for YouTube videos, promotional content and social media. My focus is on smooth storytelling, clean transitions and high quality output.",

    features: [
      "Smooth cuts and transitions",
      "Color correction and color grading",
      "Sound design and background music",
      "Subtitles and captions",
      "High quality export"
    ],

    tools: ["Adobe Premiere Pro", "After Effects", "CapCut"],

    delivery: "2 - 3 Days",

    category: "Long Form Content"
  },

  {
    id: 2,
    icon: FaInstagram,
    title: "Instagram Reels Editing",
    description:
      "Creative short-form video editing designed for Instagram reels, TikTok and other social media platforms.",

    details:
      "Short-form editing optimized for social media platforms like Instagram, TikTok and YouTube Shorts. Focused on high engagement, trending styles and fast-paced editing.",

    features: [
      "Beat sync cuts",
      "Trendy transitions",
      "Animated captions",
      "Emojis and social media effects",
      "Vertical video optimization"
    ],

    tools: ["CapCut", "Premiere Pro", "After Effects"],

    delivery: "1 - 2 Days",

    category: "Short Form Content"
  },

  {
    id: 3,
    icon: FaFilm,
    title: "Cinematic Editing",
    description:
      "Cinematic style editing with color grading, smooth transitions and dramatic storytelling.",

    details:
      "Cinematic editing focused on storytelling with film-style color grading, dramatic pacing and professional transitions. Perfect for travel videos, wedding highlights and cinematic reels.",

    features: [
      "Cinematic color grading",
      "Film style transitions",
      "Story based editing",
      "Sound design",
      "High quality cinematic output"
    ],

    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],

    delivery: "3 - 5 Days",

    category: "Cinematic Content"
  },

  {
    id: 4,
    icon: FaMagic,
    title: "Creative Video Effects",
    description:
      "Adding visual effects, beat sync cuts and creative transitions to make your videos stand out.",

    details:
      "Advanced creative video editing with motion graphics, VFX, beat sync effects and modern visual transitions to create eye-catching videos.",

    features: [
      "Motion graphics",
      "Visual effects (VFX)",
      "Beat sync editing",
      "Creative transitions",
      "Animated text effects"
    ],

    tools: ["After Effects", "Premiere Pro"],

    delivery: "2 - 4 Days",

    category: "Creative Editing"
  }
];
 

  return (
    <section className="services" id="services">

      <div className="services-container">

        <div className="services-title">
          <h2>My Services</h2>
          <p>What I can do for you</p>
        </div>

        <div className="services-grid">

         {servicesData.map((item,index) => {
          const Icon = item.icon;

          return (
            <article className="service-card" key={index}>
             <Link to={`/service-details/${item.id}`} className="text-decoration-none text-black">
              <Icon className="service-icon"/>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
             </Link>
            </article>
          );
         })}

        </div>

      </div>

    </section>
  );
}

export default Service;
