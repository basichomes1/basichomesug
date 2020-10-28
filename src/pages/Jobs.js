import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";
import StyledHero from "../components/StyledHero";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

class Job extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <>
        <Hero>
          <Banner
            title="REGISTER A SKILL"
            subtitle="WORK AND STILL BE A STUDENT"
          >
            <Link to="/" className="btn-primary">
              GET STARTED
            </Link>
          </Banner>
        </Hero>
        <StyledHero />
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
