import React, { useEffect, useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Loading from "./Loading";

const Search = () => {
  const [cityName, setCityName] = useState("");
  const [weatherInfo, setWeatherInfo] = useState();
  console.log(cityName);

  const API_KEY = "d51d22197acefcaf0745a433c4383151";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const getCityWeatherDetails = async () => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";

    const FULL_URL = `${URL}?q=${cityName}&appid=${API_KEY}&units=imperial`;

    try {
      const response = await fetch(FULL_URL);
      const data = await response.json();
      receivedData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const receivedData = (data) => {
    console.log(data);
    setWeatherInfo(data);
    console.log(weatherInfo);
  };

  return (
    <>
      {loading === false ? (
        <div className="search">
          <div className="search__leftContainer">
            <div className="search__leftTop">
              <Link to="/">
                <img
                  src="../logo/weather-logo.png"
                  alt="Logo"
                  className="weather-logo"
                />
              </Link>
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
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                />
                <span className="focus-border"></span>
              </div>
              <button
                type="submit"
                className="icon"
                onClick={getCityWeatherDetails}
              >
                <SearchIcon />
              </button>
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Search;
