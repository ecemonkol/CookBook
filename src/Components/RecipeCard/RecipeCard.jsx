import React from "react";

export default function RecipeCard({ key, name, calories, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={key} />
      <div className="product-details">
        <h2>{name}</h2>
        <p>calories: {calories}</p>
      </div>
    </div>
  );
}
