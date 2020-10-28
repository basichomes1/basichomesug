import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button/Button";
import { animateScroll as scroll } from "react-scroll";
export default function Logout() {
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

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="navbars">
      <div className="navbars-container containers">
        <Link
          to="/"
          className="navbars-logo "
          onClick={() => {
            closeMobileMenu();
            toggleHome();
          }}
        >
          <MdHome className="navbars-icon" />
          BASIC HOMES
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "navs-menu active " : "navs-menu"}>
          <li className="navs-item">
            <Link
              to="/"
              className="navs-links"
              onClick={() => {
                closeMobileMenu();
                toggleHome();
              }}
            >
              HOME
            </Link>
          </li>
          <li className="navs-item">
            <Link
              to="/rooms"
              className="navs-links"
              onClick={() => {
                closeMobileMenu();
                toggleHome();
              }}
            >
              ROOMS
            </Link>
          </li>

          <li className="navs-item">
            <Link
              to="/contact"
              className="navs-links"
              onClick={() => {
                closeMobileMenu();
                toggleHome();
              }}
            >
              CONTACT
            </Link>
          </li>

          <li className="navs-item">
            <Link
              to="/aboutus"
              className="navs-links"
              onClick={() => {
                closeMobileMenu();
                toggleHome();
              }}
            >
              ABOUT US
            </Link>
          </li>
          <li className="navs-btn">
            {button ? (
              <>
                <Link to="/signin" className="btn-link">
                  <Button
                    buttonStyle="btn--outline "
                    buttonSize="btn--large"
                    buttonColor="red"
                    onClick={closeMobileMenu}
                  >
                    <p className="move">LOGIN</p>
                  </Button>
                </Link>
                <Link to="/signup" className="btn-link">
                  <Button
                    buttonStyle="btn--outline "
                    buttonSize="btn--large"
                    buttonColor="red"
                    onClick={closeMobileMenu}
                  >
                    <p className="move">SIGN UP</p>
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/signin" className="btn-link">
                  <Button
                    buttonStyle="btn--outline "
                    buttonSize="btn--large"
                    buttonColor="red"
                    onClick={closeMobileMenu}
                  >
                    <p className="move">LOGIN</p>
                  </Button>
                </Link>
                <Link to="/signup" className="btn-link">
                  <Button
                    buttonStyle="btn--outline "
                    buttonSize="btn--large"
                    buttonColor="red"
                    onClick={closeMobileMenu}
                  >
                    <p className="move">SIGNUP</p>
                  </Button>
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
