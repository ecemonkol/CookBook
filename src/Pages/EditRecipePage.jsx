import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditRecipePage({ recipes, handleUpdateRecipe }) {
  const { recipeId } = useParams();
  const recipeToEdit = recipes.find((recipe) => recipe.id == recipeId);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [serving, setServing] = useState(1);
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (recipeToEdit) {
      setName(recipeToEdit.name);
      setCalories(recipeToEdit.calories);
      setServing(recipeToEdit.serving);
      setImage(recipeToEdit.image);
      setIngredients(recipeToEdit.ingredients);
      setInstructions(recipeToEdit.instructions);
      setIsVegetarian(recipeToEdit.isVegetarian);
    }
  }, [recipeToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRecipe = {
      ...recipeToEdit,
      name,
      calories,
      serving,
      image,
      ingredients,
      instructions,
      isVegetarian,
    };

    handleUpdateRecipe(updatedRecipe);
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <div>
      <div className="add-recipe-card">
        <h4>Edit Recipe</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-row-mini">
            <div className="input-group-small">
              <label>Title:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group-small">
              <label>Calories:</label>
              <input
                type="number"
                name="calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
              />
            </div>
            <div className="input-group-small">
              <label>Serving:</label>
              <input
                type="number"
                name="serving"
                value={serving}
                onChange={(e) => setServing(e.target.value)}
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
                onChange={(e) => setImage(e.target.value)}
                className="image-input"
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group-triple">
              <label>Ingredients:</label>
              <textarea
                name="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
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
                onChange={(e) => setInstructions(e.target.value)}
                rows="4"
              />
            </div>
          </div>

          <div className="input-row-vege">
            <div className="checkbox-veg">
              <input
                type="checkbox"
                name="vegetarian"
                checked={isVegetarian}
                onChange={(e) => setIsVegetarian(e.target.checked)}
              />
              <label className="vegetarian-label">Vegetarian</label>
            </div>
          </div>
          <button className="submit-button" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditRecipePage;
