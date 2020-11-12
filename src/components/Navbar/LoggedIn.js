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
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <>
              <FaTimes />
            </>
          ) : (
            <>
              <FaBars />
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
          <li className="navs-links">SERVICES</li>

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
              <Link to="/signup" className="btn-link" onClick={props.signOut}>
                <Button
                  buttonStyle="btn--outline "
                  buttonSize="btn--large"
                  buttonColor="red"
                  // onClick={closeMobileMenu}
                >
                  <p className="move">LOGOUT</p>
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
                  <p className="move">LOGOUT</p>
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
