import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Job from "./Job";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2017/06/shutterstock_268688447.jpg"
        />
      </Link>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Looking for Jobs??"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      
    </div>
  );
}

export default Header;
