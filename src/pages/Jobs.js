import React, { Component } from "react";

import Footer from "../components/dashboard/Footer";
import { connect } from "react-redux";

// import { Redirect } from "react-router-dom";
import Hero from "../components/dashboard/Hero";
import Banner from "../components/dashboard/Banner";

import RegisterSkill from "../components/ServiceCenter/RegisterSkill";
import { Mustregister } from "./Mustregister";

class Job extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid)
      return (
        <>
          <Mustregister />

          {/* {
            (setTimeout(() => {
              // <Redirect to="/signin" />;
              this.props.history.push("/signup");
            }),
            5000)
          } */}
        </>
      );

    return (
      <>
        <Hero hero="roomsHero">
          <Banner
            title="REGISTER A SKILL"
            subtitle="WORK AND STILL BE A STUDENT"
          ></Banner>
        </Hero>
        <RegisterSkill />
        <Hero />

        <Footer />
      </>
    );
  }
}

///MAPPINING THE PROPS FROM THE STATE TO THE FIRESTORE COLLECTION
///AND ALSO CONNECTING THE DATA FROM STATE AND FIRESTORE TO FORM A NEW FILE WITH COMPOSE AND CONNECT FUNCTION
const mapStateToProps = (state) => {
  // console.log(state);

  ///RESTURNING THEARRAY OF ITEMS DIRECTLY FROM FIRESTORE
  return {
    auth: state.firebase.auth,
  };
};

///MAPPINING THE PROPS FROM THE STATE TO THE FIRESTORE COLLECTION
///AND ALSO CONNECTING THE DATA FROM STATE AND FIRESTORE TO FORM A NEW FILE WITH COMPOSE AND CONNECT FUNCTION
export default connect(mapStateToProps)(Job);
