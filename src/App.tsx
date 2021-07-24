import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import Favourites from "./components/Favourites";
import Loading from "./components/Loading";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 2200);
  // }, []);
  return (
    // <>
    //   {loading === false ? (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          {/* Remove this loading and apply loading via conditonal rendering */}
          {/* <Route path="/loading">
                <Loading />
              </Route> */}
        </Switch>
      </Router>
    </div>
    // ) : (
    //   <Loading />
    //   // )}
    // </>
  );
}

export default App;
