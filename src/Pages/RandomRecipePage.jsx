import React from "react";
import recipes from "../assets/recipes.json";
import "./RandomRecipePage.css";
import { Link } from "react-router-dom";

function RandomRecipePage() {
  const randomNumber = Math.floor(Math.random() * recipes.length);
  const randomRecipe = recipes[randomNumber];

  return (
    <Link to={`/recipes/${randomRecipe.id}`}>
      <div className="random-content">
        <div className="product-card" key={randomRecipe.id}>
          <img src={randomRecipe.image} alt={randomRecipe.name} />
          <div className="product-details">
            <h2>{randomRecipe.name}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RandomRecipePage;
