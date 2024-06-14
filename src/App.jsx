import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import RecipesPage from "./Pages/RecipesPage";
import RecipeDetailsPage from "./Pages/RecipeDetailsPage";
import AboutPage from "./Pages/AboutPage";
import AddRecipePage from "./Pages/AddRecipePage";
import RandomRecipePage from "./Pages/RandomRecipePage";
import { Routes, Route } from "react-router-dom";
import recipeData from "./assets/recipes.json";
import EditRecipePage from "./Pages/EditRecipePage";

import "./App.css";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  const handleAddRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [newRecipe, ...prevRecipes]);
  };

  const handleUpdateRecipe = (updatedRecipe) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

  const [recipes, setRecipes] = useState(() => {
    const storedRecipes = localStorage.getItem("recipes");
    return storedRecipes ? JSON.parse(storedRecipes) : recipeData;
  });

  // localStorage.clear();

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const [showOnlyVegi, setShowOnlyVegi] = useState(false);

  function toggleVegi() {
    setShowOnlyVegi((prevShowOnlyVegi) => !prevShowOnlyVegi);
  }

  function sortName() {
    setRecipes((prevRecipes) =>
      [...prevRecipes].sort((a, b) => a.name.localeCompare(b.name))
    );
  }

  function sortCal() {
    setRecipes((prevRecipes) =>
      [...prevRecipes].sort((a, b) => a.calories - b.calories)
    );
  }

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/recipes"
            element={
              <RecipesPage
                recipes={
                  showOnlyVegi
                    ? recipes.filter((recipe) => recipe.isVegetarian)
                    : recipes
                }
                setRecipes={setRecipes}
                toggleVegi={toggleVegi}
                showOnlyVegi={showOnlyVegi}
                sortName={sortName}
                sortCal={sortCal}
              />
            }
          />
          <Route
            path="/recipes/:recipeId"
            element={<RecipeDetailsPage recipes={recipes} />}
          />
          <Route
            path="/edit-recipe/:recipeId"
            element={
              <EditRecipePage
                recipes={recipes}
                handleUpdateRecipe={handleUpdateRecipe}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/add-recipe"
            element={<AddRecipePage handleAddRecipe={handleAddRecipe} />}
          />
          <Route path="/feeling-lucky" element={<RandomRecipePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
