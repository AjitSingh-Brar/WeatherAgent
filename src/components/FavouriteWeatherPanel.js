import React from "react";
import { useDispatch } from "react-redux";
import { setRemoveItem } from "../slices/favouritesSlice";
import "./FavouriteWeatherPanel.css";

const FavouriteWeatherPanel = ({
  id,
  cityTitle,
  currentTemperature,
  maxTemperature,
  minTemperature,
  humidity,
  type,
  icon,
}) => {
  const dispatch = useDispatch();

  // remove function: Removing a specific weather data on button click
  const removeData = () => {
    dispatch(setRemoveItem(id));
  };
  return (
    <div className="favourites__cityTile" id={id} key={id}>
      <div className="top">
        <div className="favourites__cityName">
          <h3>{cityTitle}</h3>
        </div>
        <div className="favourites__temperature">
          <span>{currentTemperature} F</span>
          <img
            src={"https://openweathermap.org/img/wn/" + icon + "@2x.png"}
            alt="weather-types"
          />
        </div>
      </div>

      <div className="favourites__tempDescription">
        <div className="favourites__weatherType">
          <p>Type</p>
          <p>{type}</p>
        </div>
        <div className="favourites__maxTemperature">
          <p>Maximum Temperature</p>
          <p>{maxTemperature} F</p>
        </div>
        <div className="favourites__minTemperature">
          <p>Minimum Temperature</p>
          <p>{minTemperature} F</p>
        </div>
        <div className="favourites__humidity">
          <p>Humidity</p>
          <p>{humidity}</p>
        </div>
      </div>
      <div className="favourites__button">
        <div className="favourites__removeButton" onClick={removeData}>
          Remove
        </div>
      </div>
    </div>
  );
};

export default FavouriteWeatherPanel;
