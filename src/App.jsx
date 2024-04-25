import React, { useState } from "react";
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

import "./App.css";

function App() {
  const [recipes, setRecipes] = useState(recipeData);

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [newRecipe, ...prevRecipes]);
  };

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/recipes"
            element={<RecipesPage recipes={recipes} setRecipes={setRecipes} />}
          />
          <Route
            path="/recipes/:recipeId"
            element={<RecipeDetailsPage recipes={recipes} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/add-recipe"
            element={
              <AddRecipePage
                recipes={recipes}
                handleAddRecipe={handleAddRecipe}
              />
            }
          />
          <Route path="/feeling-lucky" element={<RandomRecipePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
