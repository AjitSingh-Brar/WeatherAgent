import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import Favourites from "./components/Favourites";

function App() {
  return (
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
  );
}

export default App;
