import React from "react";
import RecipeCard from "../Components/RecipeCard/RecipeCard";
import recipes from "../assets/recipes.json";

function HomePage() {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          name={recipe.name}
          calories={recipe.calories}
          image={recipe.image}
        />
      ))}
    </>
  );
}

export default HomePage;
