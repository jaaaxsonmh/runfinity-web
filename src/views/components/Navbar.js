import React, { Component } from "react";
import Logo from "../images/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import * as firebase from "firebase";


export class RunfinityNavbar extends Component {
  state = {};

  constructor(props) {
    super(props);

    firebase.auth().onAuthStateChanged((user) => {

      this.setState({
        fireUser: user
      });

    });

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      fireUser: null,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    let userPageTitle = this.state.fireUser ? "Member portal" : "Log in";


    return (
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">
          <img src={Logo} height="35" alt="Runfinity" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="navbar-custom ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Premium</NavLink>
            </NavItem>
            <NavItem background-color="red">
              <NavLink href="/">Training</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.github.com/jaaaxsonmh/runfinity-web">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login" style={{color: '#ff9010', textDecoration: 'none'}}>{userPageTitle}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
