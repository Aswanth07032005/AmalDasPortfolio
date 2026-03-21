import React from "react";
import "./Works.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Works({ works }) {
  return (
    <section className="works-section" id="works">
      <div className="container">

        <div className="works-title">
          <h2>My Works</h2>
          <p>Some of my recent creative video editing works</p>
        </div>

        <Row>
          {works.map((item) => (
            <Col lg={4} md={6} xs={6} key={item.id}>
              <div className="work-card">

                <Link to={`/work-details/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="work-image"
                  />
                </Link>

                <div className="work-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                </div>

              </div>
            </Col>
          ))}
        </Row>

      </div>
    </section>
  );
}

export default Works;