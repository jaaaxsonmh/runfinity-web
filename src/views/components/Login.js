import React, {Component} from "react";
import "../css/login.scss";
import {RunfinityNavbar} from "./Navbar";
import * as firebase from "firebase";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoginOpen: true, isRegisterOpen: false};
    }

    showLoginBox() {
        this.setState({isRegisterOpen: false, isLoginOpen: true});
    }

    showRegisterBox() {
        this.setState({isRegisterOpen: true, isLoginOpen: false});
    }

    render() {
        return (
            <div>
                <RunfinityNavbar/>

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
                        {this.state.isLoginOpen && <LoginBox/>}
                        {this.state.isRegisterOpen && <RegisterBox/>}
                    </div>
                </div>
            </div>
        );
    }
}

class LoginBox extends Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: "", errors: []};
    }

    submitLogin(e) {
        if (this.state.email === "") {
            this.showValidationErr("email", "Email cannot be empty!");
        } else if (this.state.password === "") {
            this.showValidationErr("password", "Password cannot be empty!");
        } else {
            e.preventDefault();
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            }).catch((error) => {
               this.showValidationErr("password", "Incorrect email or password")
            });
        }
    }

    showValidationErr(elm, msg) {
        this.setState(prevState => ({
            errors: [...prevState.errors, {elm, msg}]
        }));
    }

    clearValidaitonErr(elm) {
        this.setState(prevState => {
            let newErr = [];
            for (let err of prevState.errors) {
                if (elm !== err.elm) {
                    newErr.push(err);
                }
            }
            return {errors: newErr};
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
        this.clearValidaitonErr("email");
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
        this.clearValidaitonErr("password");
    }

    render() {
        let emailErr = null,
            pwdErr = null;

        for (let err of this.state.errors) {
            if (err.elm === "password") {
                pwdErr = err.msg;
            }
            if (err.elm === "email") {
                emailErr = err.msg;
            }
        }

        return (
            <div className="inner-container">
                <div className="header">Login</div>
                <div className="box">
                    <div className="input-group">
                        <label className="label-text" htmlFor="Email">
                            Email
                        </label>
                        <input
                            name="email"
                            className="sign-in"
                            placeholder="email"
                            onChange={this.onEmailChange.bind(this)}
                        />
                        <small className="danger-error label-text">
                            {emailErr ? emailErr : ""}
                        </small>
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
                        <small className="danger-error label-text">
                            {pwdErr ? pwdErr : ""}
                        </small>
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
        this.state = {email: "", name: "", password: "", errors: []};
    }

    // when submitted check validation TODO: redirect page and request from server (nikita)
    submitRegister(e) {
        if (this.state.name === "") {
            this.showValidationErr("name", "Name cannot be empty!");
        }
        if (this.state.email === "") {
            this.showValidationErr("email", "Email cannot be empty!");
        }
        if (this.state.password === "") {
            this.showValidationErr("password", "Password cannot be empty!");
        }
    }

    // add error objects to the array
    showValidationErr(elm, msg) {
        this.setState(prevState => ({
            errors: [...prevState.errors, {elm, msg}]
        }));
    }

    // remove element from the array
    clearValidaitonErr(elm) {
        this.setState(prevState => {
            let newErr = [];

            // add emelments from prev array to new one
            for (let err of prevState.errors) {
                if (elm !== err.elm) {
                    newErr.push(err);
                }
            }
            return {errors: newErr};
        });
    }

    //update values on change of events
    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
        //clear the error when something new is typed

        this.clearValidaitonErr("email");
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
        //clear the error when something new is typed


        this.clearValidaitonErr("name");
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
        this.clearValidaitonErr("password");

        this.setState({pwdStrength: "weak"});
        if (e.target.value.length > 8 && e.target.value.length < 12) {
            this.setState({pwdStrength: "medium"});
        } else if (e.target.value.length >= 12) {
            this.setState({pwdStrength: "strong"});
        }
    }

    render() {
        let emailErr = null,
            nameErr = null,
            pwdErr = null;

        for (let err of this.state.errors) {
            if (err.elm === "name") {
                nameErr = err.msg;
            }
            if (err.elm === "email") {
                emailErr = err.msg;
            }
            if (err.elm === "password") {
                pwdErr = err.msg;
            }
        }

        let pwdWeak = false,
            pwdMedium = false,
            pwdStrong = false;

        if (this.state.pwdStrength === "weak") {
            pwdWeak = true;
        } else if (this.state.pwdStrength === "medium") {
            pwdWeak = true;
            pwdMedium = true;
        } else if (this.state.pwdStrength === "strong") {
            pwdWeak = true;
            pwdMedium = true;
            pwdStrong = true;
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
                        <small className="danger-error label-text">
                            {emailErr ? emailErr : ""}
                        </small>
                    </div>

                    <div className="input-group">
                        <label className="label-text" htmlFor="Name">
                            Name
                        </label>
                        <input
                            name="name"
                            className="sign-in"
                            placeholder="Name"
                            onChange={this.onNameChange.bind(this)}
                        />
                        <small className="danger-error label-text">
                            {nameErr ? nameErr : ""}
                        </small>
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
                        <small className="danger-error label-text">
                            {pwdErr ? pwdErr : ""}
                        </small>

                        {this.state.password && (
                            <div className="password-state">
                                <div className={"pwd pwd-weak " + (pwdWeak ? "show" : "")}/>
                                <div
                                    className={"pwd pwd-medium " + (pwdMedium ? "show" : "")}
                                />
                                <div
                                    className={"pwd pwd-strong " + (pwdStrong ? "show" : "")}
                                />
                            </div>
                        )}
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
