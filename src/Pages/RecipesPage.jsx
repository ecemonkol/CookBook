import React from "react";
import RecipeCard from "../Components/RecipeCard/RecipeCard";
// import receipeData from "../assets/recipes.json";
// import "./RecipesPage.css";
// import { useState } from "react";
import "../App.css";

function RecipesPage({ recipes, setRecipes }) {
  // const [recipes, setRecipes] = useState(receipeData);
  console.log(recipes);
  const deleteItem = (id) => {
    const newRecipe = recipes.filter((recipe) => recipe.id !== id);
    console.log(newRecipe, "filtered");
    setRecipes(newRecipe);
  };

  // function sortCalories() {

  // }

  // function sortName() {

  // }

  // function filterVegi() {

  // }

  return (
    <div className="recipe-page">
      <div className="recipes-button-container">
        <button className="filter-button">
          Sort by Calories (Low to High)
        </button>
        <button className="filter-button">Sort by Name</button>
        <button className="filter-button">Show Only Vegetarian</button>
      </div>
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
    </div>
  );
}

export default RecipesPage;
