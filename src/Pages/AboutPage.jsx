// import "./AboutPage.css";

import React from "react";
import "../App.css";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";
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
      <div className="arrow-container">
        <Link className="arrow" to={"/"}>
          <img className="arrow" src={arrow} alt="Arrow" />
        </Link>
      </div>
    </div>
  );
}

export default AboutPage;
