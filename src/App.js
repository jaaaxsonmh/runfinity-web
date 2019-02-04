import React, { Component } from "react";
import { Home } from "./views/Home";
import { BrowserRouter, Route } from "react-router-dom";

import { MemberPortal } from "./views/MemberPortal.js";
import { Premium } from "./views/Premium.js";
import { Training } from "./views/Training.js";

/* Legality section imports */

import { Legal } from "./views/legality-section/Legal.js";
import { Privacy } from "./views/legality-section/privacy";
import { Tos } from "./views/legality-section/Termsofservice.js";

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
          <Route
            exact={true}
            path="/legal"
            render={() => (
              <div className="App">
                <Legal />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/tos"
            render={() => (
              <div className="App">
                <Tos />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/privacy"
            render={() => (
              <div className="App">
                <Privacy />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
