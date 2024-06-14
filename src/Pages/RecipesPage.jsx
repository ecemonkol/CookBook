import React, { useState, useEffect } from "react";
import RecipeCard from "../Components/RecipeCard/RecipeCard";
import "../App.css";

function RecipesPage({
  recipes,
  setRecipes,
  toggleVegi,
  showOnlyVegi,
  sortName,
  sortCal,
}) {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const deleteItem = (id) => {
    const newRecipe = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(newRecipe);
  };

  function moveTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="recipe-page">
      <div className="recipes-button-container">
        <button className="filter-button" onClick={sortCal}>
          Sort by Calories (Low to High)
        </button>
        <button className="filter-button" onClick={sortName}>
          Sort by Name
        </button>
        <button className="filter-button" onClick={toggleVegi}>
          {showOnlyVegi ? "Show All" : "Only Vegetarian"}
        </button>
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
            isVegetarian={recipe.isVegetarian}
            servings={recipe.servings}
          />
        ))}
      </div>
      {showTopButton && (
        <button onClick={moveTop} className="up-button">
          Up!
        </button>
      )}
    </div>
  );
}

export default RecipesPage;
