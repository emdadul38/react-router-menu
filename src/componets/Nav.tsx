import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white",
    textDecorationLine: "none",
    textDecorationStyle: "solid"
  };

  return (
    <nav>
      <Link to="/" style={navStyle}>
        <h3>Logo</h3>
      </Link>
      <ul className="nav-line">
        <Link to="/home" style={navStyle}>
          <li>Home</li>
        </Link>
        <Link to="/product" style={navStyle}>
          <li>Product</li>
        </Link>
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
