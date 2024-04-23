import React from "react";
import "./RecipeCard.css";

export default function RecipeCard({ id, name, calories, image, servings }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-details">
        <h2>{name}</h2>
        {/* <p>{servings} portion</p> */}
        <p className="text-calories">calories: {calories}</p>
      </div>
      <button>X</button>
    </div>
  );
}
