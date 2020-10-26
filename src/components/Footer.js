import React from "react";
import "./Footer.css";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="first">
        <h1>CONTACT AREA</h1>
        <h1>BASIC HOMES UG</h1>
      </div>
      <div className="second">
        <img src={logo} alt="logo" width="100px" height="100px" />
      </div>
    </footer>
  );
};

export default Footer;
