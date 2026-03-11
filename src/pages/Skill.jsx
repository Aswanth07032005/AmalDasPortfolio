import React from "react";
import "./Skill.css";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function Skill({ skillItems = [] }) {
  return (
    <section className="skills" id="skills">
      {/* Floating Shapes */}
      <span className="shape circle1"></span>
      <span className="shape square1"></span>
      <span className="shape triangle"></span>

      <div className="skills-container">
        <div className="skills-title">
          <h2>
            My<span className="text-warning"> Skills</span>{" "}
          </h2>
          <p>Creative video editing and storytelling skills</p>
        </div>

        <div className="skills-grid">
         {skillItems.map((item,index)=>(
         
           <article className="skill-card" key={index}>

           <Link to={`/skill-details/${item.id}`} >
            <Image src={item.image} alt="Transitions"/>
           </Link>

            <h4>{item.name}</h4>
          </article>
         
         ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
