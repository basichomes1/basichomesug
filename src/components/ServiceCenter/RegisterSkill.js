import React from "react";
import { Link, withRouter } from "react-router-dom";

// import Thanks from "../../pages/Thanks";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class RegisterSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      regno: "",
      phoneno: "",
      skill: "",
      university: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() =>
        alert("YOUR REQUEST HAS BEEN RECEIVED, AND WE ARE WORKING ON IT...")
      )
      .catch((error) => alert(error));
  };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  submitForm(e) {
    e.preventDefault();
    this.props.history.push("/thanks"); // <--- The page you want to redirect your user to.
  }
  render() {
    const { name, email, regno, phoneno, skills, university } = this.state;

    return (
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>BASIC HOMES UG</h1>

            <blockquote className="skillblockquote">
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
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={() => {
                this.handleSubmit();
                this.submitForm.bind(this);
              }}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-control">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  name="name"
                  placeholder="FULL NAME"
                  value={name}
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="skills">SKILLS: </label>
                <select
                  name="skills"
                  value={skills}
                  required
                  onChange={this.handleChange}
                >
                  <option value="">SELECT SKILL----</option>
                  <option>HAIR DRESSER</option>
                  <option>HOUSE CLEANER</option>
                  <option>PROPOSAL WRITING & DESERTATIONS</option>
                  <option>ELECTRICIAN</option>
                  <option>LAUNDRYMAN</option>
                </select>
              </div>
              <div className="form-control">
                <label htmlFor="university">UNIVERSITY: </label>
                <select
                  name="university"
                  value={university}
                  required
                  onChange={this.handleChange}
                >
                  <option value="">SELECT UNIVERSITY----</option>
                  <option>KIU</option>
                  <option>IUEA</option>
                  <option>MAKERERE</option>
                  <option>KYAMBOGO</option>
                </select>
              </div>
              <div className="form-control">
                <label htmlFor="regno">REG NO:</label>
                <input
                  type="text"
                  name="regno"
                  placeholder="REGISTRATION NO"
                  value={regno}
                  required
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-control">
                <label htmlFor="phoneno">MOBILE NUMBER:</label>
                <input
                  type="text"
                  name="phoneno"
                  placeholder="Phone"
                  value={phoneno}
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={email}
                  required
                  onChange={this.handleChange}
                />
              </div>
              <input type="submit" value="SUBMIT " class="btn btn-primary" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(RegisterSkill);
