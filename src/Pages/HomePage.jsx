import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import tomato from "../assets/tomato.png"; // Adjusted import path

function HomePage() {
  return (
    <div className="home-buttons">
      <Link to="/recipes">
        <button>See Recipes</button>
      </Link>
      <img className="tomato" src={tomato} alt="dghfh" />

      <Link to="/add-recipe">
        <button>Add a Recipe</button>
      </Link>
      <p className="dot">•</p>
      <Link to="/feeling-lucky">
        <button>Recipe Roulette</button>
      </Link>
    </div>
  );
}

export default HomePage;
