import React, { Component } from "react";

import "./css/rotating-text.css";

export class RotatingText extends Component {
  render() {
    return (
      <div class="testimonials-header">
        <p>Runfinity is </p>
        <b>
          <div class="inner-testimonials-header">
            a community
            <br />
            including everyone <br />
            open development <br />
            seamless design
            <br />
            self-motivating <br />
          </div>
        </b>
      </div>
    );
  }
}
