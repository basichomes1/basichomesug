import React from "react";
import { IconContext } from "react-icons/lib";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <LoggedIn profile={profile} /> : <LoggedOut />;

  return (
    <>
      <IconContext.Provider value={{ color: "var(--orange)" }}>
        {links}
      </IconContext.Provider>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default compose(firebaseConnect(), connect(mapStateToProps))(Navbar);
