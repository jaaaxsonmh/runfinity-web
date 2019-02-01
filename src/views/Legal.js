import React, { Component } from "react";

import { RunfinityFooter } from "./components/Footer.js";
import { RunfinityNavbar } from "./components/Navbar.js";
import "./css/legal.css";
import "./images/logo.png";

export class Legal extends Component {
  render() {
    return (
      <div>
        <div>
          <RunfinityNavbar />
        </div>
        <div class="container-fluid">
          <h1>hello</h1>
        </div>
        <div>
          <RunfinityFooter />
        </div>
      </div>
    );
  }
}
