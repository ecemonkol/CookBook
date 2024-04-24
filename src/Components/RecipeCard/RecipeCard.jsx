import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./RecipeCard.css";

export default function RecipeCard({ id, name, image, deleteItem }) {
  return (
    <div className="product-card" key={id}>
      <Link to={`/recipes/${id}`}>
        <img className="recipe-card-img" src={image} alt={name} />
      </Link>
      <div className="name-delete">
        <div className="product-details">
          <h2>{name}</h2>
        </div>
        <button className="delete-button" onClick={() => deleteItem(id)}>
          X
        </button>
      </div>
    </div>
  );
}
