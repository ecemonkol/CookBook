import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./RecipeCard.css";

export default function RecipeCard({ id, name, calories, image, deleteItem }) {
  return (
    <div className="product-card" key={id}>
      <Link to={`/recipes/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div className="product-details">
        <h2>{name}</h2>
      </div>
      <button className="delete-button" onClick={() => deleteItem(id)}>
        delete
      </button>
    </div>
  );
}
