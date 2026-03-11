import { useParams } from "react-router-dom";
import "./SkillDetails.css";
import { Image } from "react-bootstrap";

function SkillDetails({ skillItems }) {
  const { id } = useParams();

  const findSkill = skillItems.find((item) => item.id === Number(id));
  if (!findSkill) {
    return (
      <section className="skill-details">
        <div className="skill-container">
          <h1 className="skill-title">Skill not found</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="skill-details">
      <div className="skill-container">
        {/* TITLE */}
        <h1 className="skill-title">{findSkill.name}</h1>

        {/* INTRO */}
        <p className="skill-intro">{findSkill.shortDesc}</p>

        {/* IMAGE */}
        <div className="skill-image">
          <Image src={findSkill.image} alt="uplode" />
        </div>

        {/* FEATURES */}
        <div className="skill-section">
          {findSkill.features.map((feature, index) => (
            <p key={index}>{feature}</p>
          ))}

          <ul className="skill-features"></ul>
          <p>{findSkill.description}</p>
        </div>

        
       
        {/* TOOLS */}
        <div className="skill-section">
          <p>
            {findSkill.tools[0]} , {findSkill.tools[1]}
          </p>

          <div className="skill-tools"></div>
        </div>
      </div>
    </section>
  );
}

export default SkillDetails;
