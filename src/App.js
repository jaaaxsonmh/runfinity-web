import React, { Component } from "react";
import { Home } from "./views/Home";
import { BrowserRouter, Route } from "react-router-dom";

/* Legality section imports */

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path="/"
            render={() => (
              <div className="App">
                <Home />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
