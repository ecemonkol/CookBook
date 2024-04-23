import React from "react";

export default function ProductCard({
  design,
  designer,
  year,
  style,
  designType,
  image,
}) {
  return (
    <div className="product-card">
      <img src={image} alt={design} />
      <div className="product-details">
        <h2>{design}</h2>
        <p>Designer: {designer}</p>
        <p>Year: {year}</p>
        <p>Style: {style}</p>
        <p>Type: {designType}</p>
      </div>
    </div>
  );
}
