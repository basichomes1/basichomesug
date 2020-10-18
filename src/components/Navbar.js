import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

// NAVBAR COMPONENT AND A STATE FUNCTION FOR HANDLING TOGGLE
export default class Navbar extends Component {
  // STATE FUNCTION
  state = {
    isOpen: false,
  };

  // STATE HANDLE TOGGLE FUNCTION
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} className="logobh" alt="BASIC HOMES" />
            </Link>

            {/* BUTTON TOGGLE FUNCTION ONCLICK CALL */}
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <MenuIcon className="nav-icon" />
            </button>
          </div>

          {/* RENDERING STATE DEPENDING ON THE VALUE OF THE STATE AT A CERTAIN POINT */}
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/rooms">ROOMS</Link>
            </li>
            <li>
              <Link to="/jobs">JOBS</Link>
            </li>

            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
