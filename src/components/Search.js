import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  return (
    <div className="search">
      <div className="search__leftContainer">
        <div className="search__leftTop">
          <img src="../logo/weather-logo.png" alt="Logo" />
        </div>
        <div className="search__leftBottom">
          <div className="search__leftHeading">
            <h1>16&deg;</h1>
          </div>
          <div className="search__leftDetails">
            <span>London</span>
            <div>
              <span>Clear Sky</span>
            </div>
          </div>
        </div>
      </div>

      <div className="search__rightContainer">
        <div className="search__temperature">
          <div className="search__Input">
            <input
              type="text"
              className="location"
              placeholder="Enter Location"
            />
            <span className="focus-border"></span>
          </div>
          <div className="icon">
            <SearchIcon />
          </div>
        </div>

        <div className="search__Result">
          <h2>Weather Details</h2>
          <div className="search__maxTemperature">
            <h3>Maximum Temperature</h3>
            <p>28</p>
          </div>
          <div className="search__minTemperature">
            <h3>Minimum Temperature</h3>
            <p>28</p>
          </div>
          <div className="search__humidity">
            <h3>Humidity</h3>
            <p>28</p>
          </div>
        </div>

        <div className="search__addFavourites">
          <span>Add to Favourites</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
