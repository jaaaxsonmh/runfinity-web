import React, { Component } from "react";
import { Home } from "./views/Home";
import { BrowserRouter, Route } from "react-router-dom";

import { MemberPortal } from "./views/MemberPortal.js";
import { Premium } from "./views/Premium.js";
import { Training } from "./views/Training.js";

import fire from "./config/Firebase";

/* Legality section imports */

import { Legal } from "./views/legality-section/Legal.js";
import { Privacy } from "./views/legality-section/privacy";
import { Tos } from "./views/legality-section/Termsofservice.js";

import "./App.css";
import { Login } from "./views/components/Login";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user:{},
        }
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        console.log(this.state.user);

        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({user});
            } else {
                this.setState({user: null});
            }
        });
    }


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

          <Route
            exact={true}
            path="/login"

            render={() => (
              <div className="App">
                  {this.state.user ? (<MemberPortal/>) : (<Login/>)}
              </div>
                )}
        />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
