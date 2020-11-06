import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import logo from "../../images/svg/logo.svg";
import "../../css/style.css";
import { Button } from "../Button/Button";

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
        <section className="hero is-fullheight">
          <div className="hero-body has-text-centered">
            <div className="login">
              <img src={logo} width="325px" alt="logo" />

              <form onSubmit={this.handleSubmit} style={{ color: "white" }}>
                <div className="field">
                  <div className="control">
                    <label htmlFor="email">EMAIL</label>
                    <input
                      className="input is-medium is-rounded"
                      type="email"
                      id="email"
                      onChange={this.handleChange}
                      placeholder="Basic@example.com"
                      autoComplete="username"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label htmlFor="password">PASSWORD</label>
                    <input
                      className="input is-medium is-rounded"
                      type="password"
                      id="password"
                      onChange={this.handleChange}
                      placeholder="**********"
                      autoComplete="current-password"
                      required
                    />
                  </div>
                </div>

                <br />

                <div className="red-text center">
                  {authError ? <p>{authError}</p> : null}
                </div>

                <button
                  className="button is-block is-fullwidth is-primary is-medium is-rounded"
                  type="submit"
                >
                  LOGIN
                </button>
              </form>
              <br />
              <nav className="level">
                <div className="level-item has-text-centered">
                  <div>
                    <p style={{ color: "dark", fontSize: "20px" }}>
                      Don't Have An Account ?
                    </p>
                    <a href="/signup">
                      <Button
                        buttonStyle="btn--outline "
                        buttonSize="btn--large"
                        buttonColor="red"
                      >
                        <p className="move">CLICK TO REGISTER</p>
                      </Button>
                    </a>
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
