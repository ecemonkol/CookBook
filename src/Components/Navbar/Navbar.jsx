import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <Link to={"/"}>
        <p className="logo">cook book</p>
      </Link>

      <Link to={"/about"} className="about-link">
        About
      </Link>
    </div>
  );
}

export default Navbar;
