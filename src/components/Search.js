import React from "react";
import "./Search.css";

import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  return (
    <div className="search">
      <div className="search__leftContainer"></div>
      <div className="search__rightContainer">
        <input type="text" />
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
