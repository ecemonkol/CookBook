import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      {/* Wrap the button inside the Link component */}
      <Link to="/recipes">
        <button>See Recipes</button>
      </Link>

      {/* Add Links for other buttons */}
      <Link to="/add-recipe">
        <button>Add a Recipe</button>
      </Link>
      <Link to="/feeling-lucky">
        <button>Feeling lucky today</button>
      </Link>
    </>
  );
}

export default HomePage;
