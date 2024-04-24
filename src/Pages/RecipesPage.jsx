import React from "react";
import RecipeCard from "../Components/RecipeCard/RecipeCard";
// import receipeData from "../assets/recipes.json";
import "./RecipesPage.css";
// import { useState } from "react";

function RecipesPage({ recipes, setRecipes }) {
  // const [recipes, setRecipes] = useState(receipeData);
  console.log(recipes);
  const deleteItem = (id) => {
    const newRecipe = recipes.filter((recipe) => recipe.id !== id);
    console.log(newRecipe, "filtered");
    setRecipes(newRecipe);
  };
  return (
    <div className="recipe-cards">
      {recipes.map((recipe) => (
        <RecipeCard
          id={recipe.id}
          key={recipe.id}
          name={recipe.name}
          calories={recipe.calories}
          image={recipe.image}
          deleteItem={deleteItem}
          //   servings={recipe.servings}
        />
      ))}
    </div>
  );
}

export default RecipesPage;
