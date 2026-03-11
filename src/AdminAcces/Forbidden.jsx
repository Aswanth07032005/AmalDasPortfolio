import React from "react";
import "./Forbidden.css";
import { Link } from "react-router-dom";

function Forbidden() {
  return (
    <div className="forbidden-container">

      <h1 className="error-code">403</h1>

      <p className="error-text">
        ADMIN ACCESS ONLY
      </p>

      <Link to="/" className="back-home">
        Go Back
      </Link>

    </div>
  );
}

export default Forbidden;