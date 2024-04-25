import React from "react";
import recipes from "../assets/recipes.json";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import "../App.css";

function RandomRecipePage() {
  const randomNumber = Math.floor(Math.random() * recipes.length);
  const randomRecipe = recipes[randomNumber];

  return (
    <>
      <div className="random-card">
        <div className="product-card" key={randomRecipe.id}>
          <Link to={`/recipes/${randomRecipe.id}`}>
            <img
              className="recipe-card-img"
              src={randomRecipe.image}
              alt={randomRecipe.name}
            />
          </Link>
          <div className="name-delete">
            <div className="product-details">
              <h2>{randomRecipe.name}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-container">
        <Link className="arrow" to={"/"}>
          <img className="arrow" src={arrow} alt="Arrow" />
        </Link>
      </div>
    </>
  );
}

export default RandomRecipePage;
