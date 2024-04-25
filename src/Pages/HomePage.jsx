import React from "react";
import { Link } from "react-router-dom";
// import "./HomePage.css";
import tomato from "../assets/tomato.png"; // Adjusted import path
import "../App.css";

function HomePage() {
  return (
    <div className="home-buttons">
      <Link to="/recipes">
        <button className="button-see">See Recipes</button>
      </Link>
      {/* <img className="tomato" src={tomato} alt="dghfh" /> */}

      <Link to="/add-recipe">
        <button className="button-add">Add a Recipe</button>
      </Link>
      <Link to="/feeling-lucky">
        <button className="button-roulette">Recipe Roulette</button>
      </Link>
    </div>
  );
}

export default HomePage;
