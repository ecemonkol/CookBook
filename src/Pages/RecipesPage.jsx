import React from "react";
import RecipeCard from "../Components/RecipeCard/RecipeCard";
import recipes from "../assets/recipes.json";
import "./RecipesPage.css";

function RecipesPage() {
  return (
    <div className="recipe-cards">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          name={recipe.name}
          calories={recipe.calories}
          image={recipe.image}
          //   servings={recipe.servings}
        />
      ))}
    </div>
  );
}

export default RecipesPage;
