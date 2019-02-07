import React, { Component } from "react";
import "../css/login.scss";
import { RunfinityNavbar } from "./Navbar";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoginOpen: true, isRegisterOpen: false };
  }

  showLoginBox() {
    this.setState({ isRegisterOpen: false, isLoginOpen: true });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {
    return (
      <div>
        <RunfinityNavbar />

        <div className="root-container">
          <div className="box-controller">
            <div
              className={
                "controller " +
                (this.state.isLoginOpen ? "selected-controller" : "")
              }
              onClick={this.showLoginBox.bind(this)}
            >
              Log in
            </div>

            <div
              className={
                "controller " +
                (this.state.isRegisterOpen ? "selected-controller" : "")
              }
              onClick={this.showRegisterBox.bind(this)}
            >
              Register
            </div>
          </div>

          <div className="box-container">
            {this.state.isLoginOpen && <LoginBox />}
            {this.state.isRegisterOpen && <RegisterBox />}
          </div>
        </div>
      </div>
    );
  }
}

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">Login</div>
        <div className="box">
          <div className="input-group">
            <label className="label-text" htmlFor="username">
              Username
            </label>
            <input name="username" className="sign-in" placeholder="Username" />
          </div>

          <div className="input-group">
            <label className="label-text" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="sign-in"
              placeholder="Password"
            />
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitLogin.bind(this)}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

class RegisterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div className="box">
          <div className="input-group">
            <label className="label-text" htmlFor="username">
              Username
            </label>
            <input name="username" className="sign-in" placeholder="Username" />
          </div>

          <div className="input-group">
            <label className="label-text" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="sign-in"
              placeholder="Password"
            />
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister.bind(this)}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
