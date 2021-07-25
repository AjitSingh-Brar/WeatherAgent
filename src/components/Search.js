import React, { useEffect, useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Loading from "./Loading";
import {
  selectId,
  selectCityTitle,
  selectCurrentTemperature,
  selectHumidity,
  selectMaxTemperature,
  selectMinTemperature,
  selectType,
  setWeatherDetails,
  selectIcon,
} from "../slices/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { setFavouritesWeatherList } from "../slices/favouritesSlice";

const Search = () => {
  const dispatch = useDispatch();

  //state variables
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(true);
  const API_KEY = "d51d22197acefcaf0745a433c4383151";

  // values taken from store via useSelector Hook
  const id = useSelector(selectId);
  const cityTitle = useSelector(selectCityTitle);
  const currentTemperature = useSelector(selectCurrentTemperature);
  const maxTemperature = useSelector(selectMaxTemperature);
  const minTemperature = useSelector(selectMinTemperature);
  const humidity = useSelector(selectHumidity);
  const type = useSelector(selectType);
  const icon = useSelector(selectIcon);

  //useEffect fires the loading component
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // asynchronus function to handle promises
  const getCityWeatherDetails = async (e) => {
    e.preventDefault();

    if (cityName) {
      const URL = "https://api.openweathermap.org/data/2.5/weather";
      const FULL_URL = `${URL}?q=${cityName}&appid=${API_KEY}&units=imperial`;

      try {
        const response = await fetch(FULL_URL);
        const data = await response.json();
        receivedData(data);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      alert("Sorry, please add a city name!");
    }
  };

  // handles data in the state  management after dispatching the action from the store
  const receivedData = (data) => {
    dispatch(
      setWeatherDetails({
        id: data.id,
        cityTitle: data.name,
        currentTemperature: data.main.temp,
        maxTemperature: data.main.temp_max,
        minTemperature: data.main.temp_min,
        humidity: data.main.humidity,
        type: data.weather[0].main,
        icon: data.weather[0].icon,
      })
    );
  };

  // favourites addign function: Adds the current city's weather details in the store
  const addingFavourites = () => {
    if (cityName) {
      let item = {
        id: id,
        cityTitle: cityName,
        currentTemperature: currentTemperature,
        maxTemperature: maxTemperature,
        minTemperature: minTemperature,
        humidity: humidity,
        type: type,
        icon: icon,
      };
      dispatch(setFavouritesWeatherList(item));
      alert("Sucessfully added");
    } else {
      alert("Not added in the list");
    }
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
                <h1>
                  {currentTemperature === 0 ? "" : currentTemperature + "F"}
                </h1>
              </div>
              <div className="search__leftDetails">
                <span>
                  {cityTitle === null
                    ? "Welcome to the Weather Agent"
                    : cityTitle}
                </span>
                <div>
                  <span>{type}</span>
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
                  placeholder="Enter a city name"
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
                <p>{maxTemperature === 0 ? 0 : maxTemperature + " F"}</p>
              </div>
              <div className="search__minTemperature">
                <h3>Minimum Temperature</h3>
                <p>{minTemperature === 0 ? 0 : minTemperature + " F"}</p>
              </div>
              <div className="search__humidity">
                <h3>Humidity</h3>
                <p>{humidity}</p>
              </div>
            </div>
            <div className="search__buttons">
              <div className="search__addFavourites" onClick={addingFavourites}>
                <span>Add to Favourites</span>
              </div>

              <div className="search__showFavourites">
                <Link to="/favourites">
                  <span>Show my Favourites</span>
                </Link>
              </div>
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
