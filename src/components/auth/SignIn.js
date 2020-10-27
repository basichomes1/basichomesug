import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import logo from "../../images/svg/logo.svg";
import "../../css/styl.css";

class SigIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <>
        <section class="hero is-fullheight">
          <div class="hero-body has-text-centered">
            <div class="login">
              <img src={logo} width="325px" alt="logo" />

              <form onSubmit={this.handleSubmit}>
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-medium is-rounded"
                      type="email"
                      id="email"
                      onChange={this.handleChange}
                      placeholder="Basic@example.com"
                      autocomplete="username"
                      required
                    />
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <label htmlFor="password">PASSWORD</label>
                    <input
                      className="input is-medium is-rounded"
                      type="password"
                      id="password"
                      onChange={this.handleChange}
                      placeholder="**********"
                      autocomplete="current-password"
                      required
                    />
                  </div>
                </div>

                <br />

                <div className="red-text center">
                  {authError ? <p>{authError}</p> : null}
                </div>

                <button
                  class="button is-block is-fullwidth is-primary is-medium is-rounded"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <br />
              <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <a href="/">Forgot Password?</a>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <a href="/signup">Create an Account</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SigIn);
