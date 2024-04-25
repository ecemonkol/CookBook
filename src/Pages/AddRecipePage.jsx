import React from "react";
import { useState } from "react";
// import recipeData from "../assets/recipes.json";
import "../App.css";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";

// import "./AddRecipePage.css";

function AddRecipePage({ handleAddRecipe, recipes }) {
  // const [recipes, setRecipes] = useState(recipeData);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [serving, setServing] = useState(1);
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleNameInput = (e) => setName(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleServingInput = (e) => setServing(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleIngredientsInput = (e) => setIngredients(e.target.value);

  const handleInstructionsInput = (e) => setInstructions(e.target.value);

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
      ingredients,
      instructions,
    };

    // Add new student to students array
    handleAddRecipe(newRecipe);

    setName("");
    setImage("");
    setServing("");
    setCalories("");
  };
  console.log(image);

  return (
    <div>
      <div className="add-recipe-card">
        <h4>Add a Recipe</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group-small">
              <label>Title:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameInput}
              />
            </div>
            <div className="input-group-small">
              <label>Calories:</label>
              <input
                type="number"
                name="calories"
                value={calories}
                onChange={handleCaloriesInput}
              />
            </div>
            <div className="input-group-small">
              <label>Serving:</label>
              <input
                type="number"
                name="serving"
                value={serving}
                onChange={handleServingInput}
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group-triple">
              <label>Image:</label>
              <input
                type="text"
                name="image"
                value={image}
                onChange={handleImageInput}
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group-triple">
              <label>Ingredients:</label>
              <textarea
                name="ingredients"
                value={ingredients}
                onChange={handleIngredientsInput}
                rows="4"
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group-triple">
              <label>Instructions:</label>
              <textarea
                name="instructions"
                value={instructions}
                onChange={handleInstructionsInput}
                rows="4"
              />
            </div>
          </div>

          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="arrow-container">
        <Link className="arrow" to={"/"}>
          <img className="arrow" src={arrow} alt="Arrow" />
        </Link>
      </div>
    </div>
  );
}

export default AddRecipePage;
