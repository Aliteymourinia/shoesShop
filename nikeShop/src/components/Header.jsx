import React from "react";
import { AppBar, Card, Toolbar, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Nike.jsx";
const Header = () => {
  return (
    <div className="HeaderContainer flex p-6 mx-3 justify-center items-center w-full h-12 my-3 relative">
      <Logo />
      <nav className="flex-1 flex justify-center ">
        <ul className="flex items-center gap-6">
          <li
            className="hover:underline underline-offset- hover:cursor-pointer"
            href="#men"
          >
            Men
          </li>
          <li
            className="hover:underline underline-offset- hover:cursor-pointer transition-shadow"
            href="#women"
          >
            Women
          </li>
          <li
            className="hover:underline underline-offset- hover:cursor-pointer transition-shadow"
            href="#kids"
          >
            Kids
          </li>
          <li
            className="hover:underline underline-offset-4 transition-shadow hover:cursor-pointer"
            href="#customize"
          >
            Customize
          </li>
        </ul>
      </nav>
      <div className="iconContainer flex gap-4 text-lg">
        <a href="/search">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <a href="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
      </div>
    </div>
  );
};

export default Header;
