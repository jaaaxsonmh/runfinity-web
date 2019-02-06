import React, { Component } from "react";

import tiers from "./images/track_tiers.jpg";
import data from "./images/track_data.jpg";
import run from "./images/track_run.jpg";
import { RunfinityFooter } from "./components/Footer.js";
import { RunfinityNavbar } from "./components/Navbar.js";
import "./css/home.css";

import { Testimonials } from "./components/Testimonals";
import { RotatingText } from "./components/Rotating-text";
import "./css/rotating-text.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <RunfinityNavbar />
        <section>
          <div class="bg-img">
            <section>
              <div class="container">
                <div class="information">
                  <div class="title">
                    <strong class="motivation">TRACK EVERYTHING</strong>
                    <p class="motivation-detail">
                      Log any kind of workout using just your android phone.
                    </p>
                    <strong class="motivation">COMPETE WITH FRIENDS</strong>
                    <p class="motivation-detail">
                      Level up, and gain experience.
                    </p>
                    <strong class="motivation">TRAIN SMARTER</strong>
                    <p class="motivation-detail">
                      Analyze your data and conquer the new-year resolutions.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div class="sign-up">
                <div class="container-small">
                  <div class="card border-0">
                    <h5 class="card-title text-center py-4">
                      <strong>Sign-up for Runfinity</strong>
                    </h5>

                    <div class="card-body px-lg-5">
                      <form class="text-center">
                        <p class="text-color-orange">
                          Closed-access beta, sign-ups have to be approved.
                        </p>

                        <div class="md-form mt-3">
                          <input
                            type="text"
                            id="materialSubscriptionFormPasswords"
                            class="form-control"
                            placeholder="Name"
                            required
                          />
                        </div>

                        <div class="md-form">
                          <input
                            type="email"
                            id="materialSubscriptionFormEmail"
                            class="form-control"
                            placeholder="Email"
                            required
                          />
                          <small
                            id="emailHelp"
                            class="form-text text-muted padding"
                          >
                            We'll never share your email.
                          </small>
                        </div>

                        <button class="submit-btn" type="submit">
                          Let's get that bread
                        </button>

                        <p class="padding">
                          <a href="/login" target="_blank">
                            Already have access? click here
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section>
          <div class="row no-gutters">
            <div class="polaroid">
              <img
                class="card-header-image"
                src={data}
                alt="Track your run history"
              />
              <div class="card-body-orange">
                <p>Track your run history</p>
              </div>
            </div>
            <div class="polaroid">
              <img class="card-header-image" src={run} alt="" />
              <div class="card-body-orange">
                <p>Keep coming back</p>
              </div>
            </div>
            <div class="polaroid">
              <img
                class="card-header-image"
                src={tiers}
                alt="Easily view your progress"
              />
              <div class="card-body-orange">
                <p>Enjoy your progress</p>
              </div>
            </div>
          </div>
        </section>
        <RotatingText />
        <Testimonials />
        <div>
          <RunfinityFooter />
        </div>
      </div>
    );
  }
}
