import React from "react";
import { useState } from "react";
// import recipeData from "../assets/recipes.json";

import "./AddRecipePage.css";

function AddRecipePage({ handleAddRecipe, recipes }) {
  // const [recipes, setRecipes] = useState(recipeData);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [serving, setServing] = useState(1);
  const [image, setImage] = useState("");

  const handleNameInput = (e) => setName(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleServingInput = (e) => setServing(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  // function handleAddRecipe(recipe) {
  //   setRecipes((prevRecipes) => [recipe, ...prevRecipes]);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: Date.now(),
      recipes,
      name,
      image,
      calories,
      serving,
    };

    // Add new student to students array
    handleAddRecipe(newRecipe);

    setName("");
    setImage("");
    setServing("");
    setCalories("");
  };

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />

        <label>CALORIES:</label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />

        <label>SERVING</label>
        <input
          type="number"
          name="serving"
          value={serving}
          onChange={handleServingInput}
        />

        <label>Image:</label>
        <input
          type="text"
          name="hasOscars"
          value={image}
          onChange={handleImageInput}
        />
        <button type="submit">Add a Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipePage;
