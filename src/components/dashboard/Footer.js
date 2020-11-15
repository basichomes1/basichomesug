import React from "react";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="frame">
      <h1>BASIC HOMES UGANDA</h1>
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
