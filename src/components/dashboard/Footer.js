import React from "react";
import "../../css/Footer.css";
import logo from "../../images/svg/logo.svg";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="frame">
      <img src={logo} alt="basic homes" width="200px" />
      <a href="facebook.com" className="footer-btn">
        <FaFacebookF style={{ color: "#000000" }} />
      </a>
      <a href="facebook.com" className="footer-btn">
        <FaTwitter style={{ color: "#000000" }} />
      </a>
      <a href="facebook.com" className="footer-btn">
        <FaInstagram style={{ color: "#000000" }} />
      </a>
    </div>
  );
};

export default Footer;
