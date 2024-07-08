import React from "react";
import { AppBar, Card, Toolbar, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../assets/Nike.jsx";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="HeaderContainer flex p-6 mx-3 justify-center items-center w-full h-12 my-3 relative">
      <div className="logoContainer hover:cursor-pointer">
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <nav className="flex-1 flex justify-center ">
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
          <li>
            <Link to="/customize">Customize</Link>
          </li>
        </ul>
      </nav>
      <div className="iconContainer text-lg hover:cursor-pointer flex gap-3 items-center">
        <Link to="/search">
          <FontAwesomeIcon icon={faSearch} />
        </Link>

        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
