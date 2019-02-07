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
    this.state = { username: "", password: "", errors: [] };
  }

  submitLogin(e) {}

  showValidationErr(elm, msg) {
    this.setState(prevState => ({
      errors: [...prevState.errors, { elm, msg }]
    }));
  }

  clearValidaitonErr(elm) {
    this.setState(prevState => {
      let newErr = [];
      for (let err of prevState.errors) {
        if (elm != err.elem) {
          newErr.push(err);
        }
      }
      return newErr;
    });
  }

  onUsernameChange(e) {
    this.setState({
      Username: e.target.value
    });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="inner-container">
        <div className="header">Login</div>
        <div className="box">
          <div className="input-group">
            <label className="label-text" htmlFor="Email">
              Email
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
              onChange={this.onPasswordChange.bind(this)}
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
    this.state = { email: "", name: "", errors: [] };
  }

  submitRegister(e) {
    if (this.state.name == "") {
      return this.showValidationErr("register-name", "Name cannot be empty!");
    } else if (this.state.email == "") {
      return this.showValidationErr("email", "Email cannot be empty!");
    }
  }

  showValidationErr(elm, msg) {
    this.setState(prevState => ({
      errors: [...prevState.errors, { elm, msg }]
    }));
  }

  clearValidaitonErr(elm) {
    this.setState(prevState => {
      let newErr = [];
      for (let err of prevState.errors) {
        if (elm != err.elem) {
          newErr.push(err);
        }
      }
      return newErr;
    });
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  onNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    let emailErr = null,
      nameErr = null;

    for (let err of this.state.errors) {
      if (err.elm == "register-name") {
        nameErr = err.msg;
      }
      if (err.elm == "email") {
        emailErr = err.msg;
      }
    }

    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div className="box">
          <div className="input-group">
            <label className="label-text" htmlFor="Email">
              Email
            </label>
            <input
              name="email"
              className="sign-in"
              placeholder="Email"
              onChange={this.onEmailChange.bind(this)}
            />
            <small className="danger-error">{emailErr ? emailErr : ""}</small>
          </div>

          <div className="input-group">
            <label className="label-text" htmlFor="Name">
              Name
            </label>
            <input
              name="register-name"
              className="sign-in"
              placeholder="Name"
              onChange={this.onNameChange.bind(this)}
            />
            <small className="danger-error">{nameErr ? nameErr : ""}</small>
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
