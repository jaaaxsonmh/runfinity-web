import React, { Component } from "react";
import Logo from "./images/logo.png";
import "./css/home.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export class Home extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/">
            <div class="row">
              <img src={Logo} height="30" />
              <p>Runfinity</p>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="navbar-custom ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Premium</NavLink>
              </NavItem>
              <NavItem background-color="red">
                <NavLink href="/components/">Training</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.github.com/jaaaxsonmh/runfinity-web">
                  GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Log in</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <div class="bg-img">
          <div class="container-small">
            <div class="card">
              <h5 class="card-title text-center py-4">
                <strong>Sign-up for Runfinity</strong>
              </h5>

              <div class="card-body px-lg-5">
                <form class="text-center">
                  <p class="orange-text">
                    Closed-access beta, sign-ups have to be approved.
                  </p>

                  <div class="md-form mt-3">
                    <input
                      type="text"
                      id="materialSubscriptionFormPasswords"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>

                  <div class="md-form">
                    <input
                      type="email"
                      id="materialSubscriptionFormEmail"
                      class="form-control"
                      placeholder="Email"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>

                  <button
                    class="btn btn-outline-warning btn-rounded btn-block  my-4 waves-effect"
                    type="button"
                  >
                    Request Access
                  </button>

                  <p>
                    <a href="" target="_blank">
                      Already have access? click here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
