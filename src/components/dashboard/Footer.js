import React from "react";
import "../../css/Footer.css";
import logo from "../../images/svg/logo.svg";

const Footer = () => {
  return (
    <footer className="footer bg-dark py-5">
      <div className="container grid grid-3">
        <div>
          <img src={logo} alt="" />
          <p>Copyright &copy; 2020</p>
        </div>
        {/* <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="features.html">Features</a>
            </li>
            <li>
              <a href="docs.html">Docs</a>
            </li>
          </ul>
        </nav> */}
        <div className="social">
          <a href="/">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="/">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
