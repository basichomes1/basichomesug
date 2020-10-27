import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import logo from "../../images/svg/logo.svg";
import "../../css/styl.css";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <section class="hero is-fullheight">
        <div class="hero-body has-text-centered">
          <div class="login">
            <img src={logo} width="325px" alt="logo" />

            <form onSubmit={this.handleSubmit}>
              <div class="field">
                <div class="control">
                  <label htmlFor="email">EMAIL</label>
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
                  <label htmlFor="firstname">FIRSTNAME</label>
                  <input
                    class="input is-medium is-rounded"
                    type="text"
                    id="firstname"
                    onChange={this.handleChange}
                    placeholder="firstname"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <label htmlFor="lastname">LASTNAME</label>
                  <input
                    class="input is-medium is-rounded"
                    type="text"
                    id="lastname"
                    onChange={this.handleChange}
                    placeholder="lastname"
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
                SIGNUP
              </button>
            </form>
            <br />
            <nav class="level">
              <div class="level-item has-text-centered">
                <div>
                  <a href="/signin">ALREADY HAVE AN ACCOUNT?</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
