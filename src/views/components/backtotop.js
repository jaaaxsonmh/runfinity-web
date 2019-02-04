import React, { Component } from "react";
import BackToTop from "react-back-to-top-button";
import "../css/backtotop.css";

export class BackButton extends Component {
  render() {
    return (
      <BackToTop
        class="no-margin"
        showAt={200}
        speed={1500}
        easing="easeInOutSine"
      >
        <img
          alt="back to top ^"
          src="https://4.bp.blogspot.com/-Tnfozuf__DA/VBmQiClBDOI/AAAAAAAAAw8/r08g-QjgsQI/s1600/back%2Bto%2Btop%2Bbutton%2Bfor%2Bblogger.png"
        />
      </BackToTop>
    );
  }
}
