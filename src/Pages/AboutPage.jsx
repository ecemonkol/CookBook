// import "./AboutPage.css";

import React from "react";
import arrow from "../assets/arrow.png";
import "../App.css";

function AboutPage() {
  return (
    <div className="parent-container">
      <div className="user-card">
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRemk0pOj3avWb06RvabQarkPJ-BUaZPIT9UjLWrwM6xL8TyRbj"
          alt="Product"
        />
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
  );
}

export default AboutPage;
