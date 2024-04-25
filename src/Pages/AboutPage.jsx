// import "./AboutPage.css";

import React from "react";
import "../App.css";
import ecem from "../assets/ecem.png";

function AboutPage() {
  return (
    <div>
      <div className="parent-container">
        <div className="user-card">
          <img className="me" src={ecem} alt="ecemichu" />
          <div className="product-details">
            <h2>Ecem Onkol</h2>
            <div className="ecem-links">
              <a href="https://github.com/ecemonkol">
                gitHub<span>///</span>
              </a>
              <a href="https://www.linkedin.com/in/ecemonkol/">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-container"></div>
    </div>
  );
}

export default AboutPage;
