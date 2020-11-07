import React from "react";
import { Link } from "react-router-dom";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class RegisterSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email } = this.state;
    return (
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>BASIC HOMES UG</h1>

            <blockquote>
              Our major role is to Link up students to available accomodation
              facilities with just a single click as well as promotion of
              student skills to those who demand for them to help the students
              earn a living ......
            </blockquote>

            <Link to="/aboutus" className="btn btn-outline">
              READ MORE
            </Link>
          </div>

          <div className="showcase-form card">
            <h2>REGISTER YOUR SKILL</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-control">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="FULL NAME"
                  onChange={this.handleChange}
                />
              </div>
              {/* <div className="form-control">
                <label htmlFor="skills">SKILLS</label>
                <select name="skills" className="form-control">
                  <option value="SKILLS">HAIR DRESSER</option>
                  <option value="SKILLS">HOUSE CLEANER</option>
                  <option value="SKILLS">PROPOSAL WRITING & DESERTATIONS</option>
                  <option value="SKILLS">ELECTRICIAN</option>
                  <option value="SKILLS">LAUNDRYMAN</option>
                </select>
              </div> */}
              <div className="form-control">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="EMAIL"
                  onChange={this.handleChange}
                />
              </div>
              <input type="submit" value="Send " class="btn btn-primary" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default RegisterSkill;
