import React, { Component } from "react";
import "./css/home.css";

export class RunfinityFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 ">
              <h5 class="text-uppercase orange-text padding">
                Runfinity.co.nz
              </h5>
              <p class="black-text">
                This was a Research and Development project for the final year
                in our Bachelor of Computer and Information Sciences (Software
                Engineering) at Auckland University of Technology we learnt a
                lot about how mobile phones interact and can communicate clearly
                across API's and other data streams overall we are happy with
                our progress in multiple areas of development and the research
                that went on behind the scenes and lead to the creation of
                Runfinity.
              </p>
            </div>

            <div class="col-md-3">
              <h5 class="text-uppercase orange-text padding">Home</h5>

              <ul class="list-unstyled">
                <li>
                  <a class="black-link" href="#!">
                    Premium
                  </a>
                </li>
                <li>
                  <a class="black-link" href="#!">
                    Training
                  </a>
                </li>
                <li>
                  <a class="black-link" href="#!">
                    Github
                  </a>
                </li>
                <li>
                  <a class="black-link" href="#!">
                    Log in
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5 class="text-uppercase orange-text padding">about</h5>

              <ul class="list-unstyled">
                <li>
                  <a class="black-link" href="#!">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a class="black-link" href="#!">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a class="black-link" href="#!">
                    Legal
                  </a>
                </li>
                <li>
                  <a class="black-link" href="#!">
                    Help and Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright py-3 orange-text">
          © 2019 Copyright:{" "}
          <a class="black-link" href="http://www.runfinity.co.nz/">
            Runfinity.co.nz
          </a>
        </div>
      </footer>
    );
  }
}
