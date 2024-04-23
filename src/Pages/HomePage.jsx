import React from "react";
import RecipeCard from "../Components/RecipeCard/RecipeCard";
import products from "../assets/products.json";

function HomePage() {
  return (
    <>
      {products.map((product, index) => (
        <RecipeCard
          key={index}
          design={product.design}
          designer={product.designer}
          year={product.year}
          style={product.style}
          designType={product.design_type}
          image={product.image}
        />
      ))}
    </>
  );
}

export default HomePage;
