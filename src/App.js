import React, { Component } from "react";
import { Home } from "./views/Home";
import { BrowserRouter, Route } from "react-router-dom";
import { Legal } from "./views/Legal.js";
import { MemberPortal } from "./views/MemberPortal.js";
import { Premium } from "./views/Premium.js";
import { Training } from "./views/Training.js";

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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
