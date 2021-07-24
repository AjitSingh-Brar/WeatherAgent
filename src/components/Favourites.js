import React, { useEffect, useState } from "react";
import "./Favourites.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Loading from "./Loading";
const Favourites = () => {
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
                <div className="favourites__cityTile">
                  <div className="top">
                    <div className="favourites__cityName">
                      <h3>London</h3>
                    </div>
                    <div className="favourites__temperature">
                      <span>15 &deg;</span>
                      <img src="../logo/sun.png" alt="weather-types" />
                    </div>
                  </div>

                  <div className="favourites__tempDescription">
                    <div className="favourites__weatherType">
                      <p>Type</p>
                      <p>Clear</p>
                    </div>
                    <div className="favourites__maxTemperature">
                      <p>Maximum Temperature</p>
                      <p>28</p>
                    </div>
                    <div className="favourites__minTemperature">
                      <p>Minimum Temperature</p>
                      <p>28</p>
                    </div>
                    <div className="favourites__humidity">
                      <p>Humidity</p>
                      <p>28</p>
                    </div>
                  </div>
                  <div className="favourites__button">
                    <div className="favourites__removeButton">Remove</div>
                  </div>
                </div>

                {/* ------------------------------ */}
                <div className="favourites__cityTile">
                  <div className="top">
                    <div className="favourites__cityName">
                      <h3>London</h3>
                    </div>
                    <div className="favourites__temperature">
                      <span>15 &deg;</span>
                      <img src="../logo/sun.png" alt="weather-types" />
                    </div>
                  </div>

                  <div className="favourites__tempDescription">
                    <div className="favourites__weatherType">
                      <p>Type</p>
                      <p>Clear</p>
                    </div>
                    <div className="favourites__maxTemperature">
                      <p>Maximum Temperature</p>
                      <p>28</p>
                    </div>
                    <div className="favourites__minTemperature">
                      <p>Minimum Temperature</p>
                      <p>28</p>
                    </div>
                    <div className="favourites__humidity">
                      <p>Humidity</p>
                      <p>28</p>
                    </div>
                  </div>
                  <div className="favourites__button">
                    <div className="favourites__removeButton">Remove</div>
                  </div>
                </div>

                {/* ------------------------------ */}
                <div className="favourites__cityTile">
                  <div className="top">
                    <div className="favourites__cityName">
                      <h3>London</h3>
                    </div>
                    <div className="favourites__temperature">
                      <span>15 &deg;</span>
                      <img src="../logo/sun.png" alt="weather-types" />
                    </div>
                  </div>

                  <div className="favourites__tempDescription">
                    <div className="favourites__weatherType">
                      <p>Type</p>
                      <p>Clear</p>
                    </div>
                    <div className="favourites__maxTemperature">
                      <p>Maximum Temperature</p>
                      <p>28</p>
                    </div>
                    <div className="favourites__minTemperature">
                      <p>Minimum Temperature</p>
                      <p>28</p>
                    </div>
                    <div className="favourites__humidity">
                      <p>Humidity</p>
                      <p>28</p>
                    </div>
                  </div>
                  <div className="favourites__button">
                    <div className="favourites__removeButton">Remove</div>
                  </div>
                </div>
                {/* ------------------------------ */}
                <div className="favourites__cityTile">
                  <div className="top">
                    <div className="favourites__cityName">
                      <h3>London</h3>
                    </div>
                    <div className="favourites__temperature">
                      <span>15 &deg;</span>
                      <img src="../logo/sun.png" alt="weather-types" />
                    </div>
                  </div>

                  <div className="favourites__tempDescription">
                    <div className="favourites__weatherType">
                      <p>Type</p>
                      <p>Clear</p>
                    </div>
                    <div className="favourites__maxTemperature">
                      <p>Maximum Temperature</p>
                      <p>28</p>
                    </div>
                    <div className="favourites__minTemperature">
                      <p>Minimum Temperature</p>
                      <p>28</p>
                    </div>
                    <div className="favourites__humidity">
                      <p>Humidity</p>
                      <p>28</p>
                    </div>
                  </div>
                  <div className="favourites__button">
                    <div className="favourites__removeButton">Remove</div>
                  </div>
                </div>

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
