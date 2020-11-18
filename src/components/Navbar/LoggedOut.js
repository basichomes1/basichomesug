import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";

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
      <div className="home-btn">
        <NavLink to="/" className=" home-btn-floating ">
          <MdHome className="global-class-name" />
        </NavLink>
      </div>
      <div className="navbars-container containers">
        <div className="menu-btn" onClick={handleClick}>
          {click ? (
            <>
              <span className="burger-one"></span>
              <span className="burger-two"></span>
              <span className=" burger-three"></span>
            </>
          ) : (
            <>
              <span className="menu-btn-burger top"></span>
              <span className="menu-btn-burger "></span>
              <span className="menu-btn-burger "></span>
            </>
          )}
        </div>
        <ul className={click ? "navs-menu active " : "navs-menu"}>
          <li className="navs-item pad-block">
            <Link
              to="/"
              className="navs-links"
              onClick={() => {
                closeMobileMenu();
                toggleHome();
              }}
            >
              Home
            </Link>
          </li>
          <li className="navs-item pad-block">
            <Link
              to="/rooms"
              className="navs-links"
              onClick={() => {
                closeMobileMenu();
                toggleHome();
              }}
            >
              Rooms
            </Link>
          </li>
          <li className="navs-item pad-block">
            <Link
              to="/jobs"
              className="navs-links"
              onClick={() => {
                closeMobileMenu();
                toggleHome();
              }}
            >
              Skills Area
            </Link>
          </li>

          <li className="navs-item pad-block">
            <Link
              to="/contact"
              className="navs-links"
              onClick={() => {
                closeMobileMenu();
                toggleHome();
              }}
            >
              Contact
            </Link>
          </li>

          <li className="navs-item pad-block">
            <Link
              to="/aboutus"
              className="navs-links"
              onClick={() => {
                closeMobileMenu();
                toggleHome();
              }}
            >
              About
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
                    <p className="move">Login</p>
                  </Button>
                </Link>
                <Link to="/signup" className="btn-link">
                  <Button
                    buttonStyle="btn--outline "
                    buttonSize="btn--large"
                    buttonColor="red"
                    onClick={closeMobileMenu}
                  >
                    <p className="move">Sign Up</p>
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
                    <p className="move">Login</p>
                  </Button>
                </Link>
                <Link to="/signup" className="btn-link">
                  <Button
                    buttonStyle="btn--outline "
                    buttonSize="btn--large"
                    buttonColor="red"
                    onClick={closeMobileMenu}
                  >
                    <p className="move">Sign Up</p>
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
