import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import recipes from "../assets/recipes.json";
import arrow from "../assets/arrow.png";
import "./RecipeDetailsPage.css";

function RecipeDetailsPage() {
  const { recipeId } = useParams();
  console.log(recipeId);

  const recipeProfile = recipes.find((recipe) => recipe.id === recipeId);
  return (
    <>
      <div className="detailed-recipe-card">
        <div className="centered-content">
          <img src={recipeProfile.image} alt={recipeProfile.name} />
          <div className="product-details">
            <h2>{recipeProfile.name}</h2>
            <p className="text-calories">calories: {recipeProfile.calories}</p>
          </div>
        </div>
      </div>

      <Link to={"/"}>
        <img className="arrow" src={arrow} alt="Arrow" />
      </Link>
    </>
  );
}

export default RecipeDetailsPage;
