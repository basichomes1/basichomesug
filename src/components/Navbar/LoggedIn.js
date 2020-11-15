import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import { signOut } from "../../store/actions/authActions";
import { MdHome } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../css/Navbar.css";
import { connect } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

const LoggedIn = (props) => {
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

  const { profile } = props;

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="navbars">
      <div className="profile-btn">
        <NavLink to="/profile/" className=" btn-floating ">
          <p>{profile.initials}</p>
        </NavLink>
      </div>
      <div className="home-btn">
        <NavLink to="/" className=" home-btn-floating ">
          <MdHome className="global-class-name" />
        </NavLink>
      </div>

      <div className="navbars-container containers">
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <>
              <FaTimes
                style={{
                  fontSize: "20px",
                  verticalAlign: "middle",
                  marginTop: "-40px",
                }}
              />
            </>
          ) : (
            <>
              <FaBars
                style={{
                  fontSize: "20px",
                  verticalAlign: "middle",
                  marginTop: "-40px",
                }}
              />
            </>
          )}
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
              <Link to="/signup" className="btn-link" onClick={props.signOut}>
                <Button
                  buttonStyle="btn--outline "
                  buttonSize="btn--large"
                  buttonColor="red"
                  // onClick={closeMobileMenu}
                >
                  <p className="move">Log Out</p>
                </Button>
              </Link>
            ) : (
              <Link to="/signup" className="btns-link" onClick={props.signOut}>
                <Button
                  buttonStyle="btn--outline "
                  buttonSize="btn--large"
                  buttonColor="red"
                  // onClick={closeMobileMenu}
                >
                  <p className="move">Log Out</p>
                </Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(LoggedIn);
