import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import RecipesPage from "./Pages/RecipesPage";
import RecipeDetailsPage from "./Pages/RecipeDetailsPage";
import AboutPage from "./Pages/AboutPage";
import AddRecipePage from "./Pages/AddRecipePage";
import RandomRecipePage from "./Pages/RandomRecipePage";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />

          <Route path="/products/:productId" element={<RecipeDetailsPage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/add-recipe" element={<AddRecipePage />} />
          <Route path="/feeling-lucky" element={<RandomRecipePage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
