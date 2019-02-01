import React, { Component } from "react";
import "./css/home.css";
import Logo from "./images/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export class RunfinityNavbar extends Component {
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
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">
          <img src={Logo} height="35" alt="Runfinity" />
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
    );
  }
}
