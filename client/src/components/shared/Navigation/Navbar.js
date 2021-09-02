import React from "react";
import style from "../Navigation/Nav.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styleLink = {
    color: "#fafafa",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };
  return (
    <nav className={`${style.navbar} container`}>
      <Link to="/" style={styleLink}>
        <img src="/images/logo.png" alt="logo" />
        <span style={logoText}>Dumb Club</span>
      </Link>
    </nav>
  );
};

export default Navbar;
