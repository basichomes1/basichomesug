import React, { Component } from "react";
import Hero from "../components/dashboard/Hero";
import Banner from "../components/dashboard/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/dashboard/Footer";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

class Profile extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <>
        <Hero>
          <Banner title="USER PROFILE" subtitle="">
            <Link to="/rooms" className="btn-primary">
              OUR ROOMS
            </Link>
          </Banner>
        </Hero>

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
export default connect(mapStateToProps)(Profile);
