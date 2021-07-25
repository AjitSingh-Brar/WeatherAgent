import React, { useEffect, useState } from "react";
import "./Favourites.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { selectFavouritesList } from "../slices/favouritesSlice";
import { useSelector } from "react-redux";
import FavouriteWeatherPanel from "./FavouriteWeatherPanel";
const Favourites = () => {
  const favouritesList = useSelector(selectFavouritesList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2200);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="favourites">
          <div className="favourites__background">
            <div className="favourites__top">
              <div className="favourites__logo">
                <Link to="/">
                  <img
                    src="../logo/weather-logo.png"
                    alt="Logo"
                    className="weather-img"
                  />
                </Link>
              </div>
              <div className="favourites__searchIcon">
                <SearchIcon />
              </div>
            </div>
            <div className="favourites__bottom">
              <h1>Favourites</h1>

              <div className="favourites__containers">
                {favouritesList.map((favourite) => (
                  <FavouriteWeatherPanel
                    key={favourite.id}
                    id={favourite.id}
                    cityTitle={favourite.cityTitle}
                    currentTemperature={favourite.currentTemperature}
                    maxTemperature={favourite.maxTemperature}
                    minTemperature={favourite.minTemperature}
                    humidity={favourite.humidity}
                    type={favourite.type}
                    icon={favourite.icon}
                  />
                  // <div
                  //   className="favourites__cityTile"
                  //   id={favourite.id}
                  //   key={favourite.id}
                  // >
                  //   <div className="top">
                  //     <div className="favourites__cityName">
                  //       <h3>{favourite.cityTitle}</h3>
                  //     </div>
                  //     <div className="favourites__temperature">
                  //       <span>{favourite.currentTemperature} F</span>
                  //       <img
                  //         src={
                  //           "https://openweathermap.org/img/wn/" +
                  //           favourite.icon +
                  //           "@2x.png"
                  //         }
                  //         alt="weather-types"
                  //       />
                  //     </div>
                  //   </div>

                  //   <div className="favourites__tempDescription">
                  //     <div className="favourites__weatherType">
                  //       <p>Type</p>
                  //       <p>{favourite.type}</p>
                  //     </div>
                  //     <div className="favourites__maxTemperature">
                  //       <p>Maximum Temperature</p>
                  //       <p>{favourite.maxTemperature} F</p>
                  //     </div>
                  //     <div className="favourites__minTemperature">
                  //       <p>Minimum Temperature</p>
                  //       <p>{favourite.minTemperature} F</p>
                  //     </div>
                  //     <div className="favourites__humidity">
                  //       <p>Humidity</p>
                  //       <p>{favourite.humidity}</p>
                  //     </div>
                  //   </div>
                  //   <div className="favourites__button">
                  //     <div
                  //       className="favourites__removeButton"
                  //       onClick={removeData}
                  //     >
                  //       Remove
                  //     </div>
                  //   </div>
                  // </div>
                ))}

                {/* --------------------------------------------------------------------- */}
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

export default Favourites;
