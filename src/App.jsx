import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import RecipeDetailsPage from "./Pages/RecipeDetailsPage";
import AboutPage from "./Pages/AboutPage";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/products/:productId" element={<RecipeDetailsPage />} />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
