import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import recipes from "../assets/recipes.json";
import arrow from "../assets/arrow.png";
import "./RecipeDetailsPage.css";

function RecipeDetailsPage() {
  const { recipeId } = useParams();
  const recipeProfile = recipes.find((recipe) => recipe.id === recipeId);

  return (
    <>
      <div className="card">
        <div className="image-container">
          <img
            className="recipe-img"
            src={recipeProfile.image}
            alt={recipeProfile.name}
          />
        </div>
        <div className="recipe-details">
          <h2 className="recipe-title">{recipeProfile.name}</h2>
          <p className="text-calories">Calories: {recipeProfile.calories}</p>
          <div className="ingredients">
            <h3>Ingredients:</h3>
            <p>{recipeProfile.ingredients}</p>
          </div>
          <div className="instructions">
            <h3>Instructions:</h3>
            <p>{recipeProfile.instructions}</p>
          </div>
        </div>
      </div>

      <div className="arrow-container">
        <Link to={"/"}>
          <img className="arrow" src={arrow} alt="Arrow" />
        </Link>
      </div>
    </>
  );
}

export default RecipeDetailsPage;
