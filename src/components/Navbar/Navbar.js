import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { MdHome } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#f15a24" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link
              to="/"
              className="navbar-logo navbr-brand"
              onClick={closeMobileMenu}
            >
              <MdHome className="navbar-icon" />
              BASIC HOMES
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active " : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/rooms"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  ROOMS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/jobs"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  JOB CENTER
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/signup" className="btn-link">
                    <Button buttonStyle="btn--outline">LOGIN</Button>
                  </Link>
                ) : (
                  <Link to="/signup" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      LOGIN
                    </Button>
                  </Link>
                )}
              </li>

              <li className="nav-btn">
                {button ? (
                  <Link to="/signup" className="btn-link">
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to="/signup" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
