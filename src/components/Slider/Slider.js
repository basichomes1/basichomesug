import React from "react";
import SliderUser from "./SliderUser";

import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";

const SimpleSlider = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SliderUser /> : <SliderUser />;

  return <>{links}</>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};
export default compose(
  firebaseConnect(),
  connect(mapStateToProps)
)(SimpleSlider);
