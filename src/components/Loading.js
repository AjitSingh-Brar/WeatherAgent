import React from "react";
import "./Loading.css";
import SearchIcon from "@material-ui/icons/Search";
const Loading = () => {
  const currentTime = new Date();
  const time = currentTime.getHours() + ":" + currentTime.getMinutes();
  const amOrPm = currentTime.getHours() >= 12 ? "PM" : "AM";
  const displayedTime = time + " " + amOrPm;

  const currentDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day =
    currentTime.getDate() +
    " " +
    currentMonth[currentTime.getMonth()] +
    "," +
    currentTime.getFullYear();

  const dayName = currentDay[currentTime.getDay()];

  const currentDateTime =
    displayedTime.toString() +
    " - " +
    dayName.toString() +
    " " +
    day.toString();
  return (
    <div className="loading">
      <div className="loading__top">
        <div className="loading__logo">
          <img src="../logo/weather-logo.png" alt="Logo" />
        </div>
        <div className="loading__searchIcon">
          <SearchIcon />
        </div>
      </div>

      <div className="loading__main">
        <div className="loading__heading">
          <h2>What's the Weather ?</h2>
          <div className="loading__image">
            <span className="bar">
              <span className="progress"></span>
            </span>
          </div>
        </div>
        <div className="loading__bottom">
          <div className="loading__bottomTime">{currentDateTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
