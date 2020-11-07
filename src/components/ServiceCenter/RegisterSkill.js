import React from "react";
import { Link } from "react-router-dom";

class RegisterSkill extends React.Component {
  render() {
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
            <form name="contact" method="post">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-control">
                <label htmlFor="name">NAME</label>
                <input type="text" name="name" placeholder="FULL NAME" />
              </div>
              <div className="form-control">
                <label htmlFor="skills">SKILLS: </label>
                <select name="skills">
                  <option name="skillsoption" value="SKILLS">
                    HAIR DRESSER
                  </option>
                  <option name="skillsoption" value="SKILLS">
                    HOUSE CLEANER
                  </option>
                  <option name="skillsoption" value="SKILLS">
                    PROPOSAL WRITING & DESERTATIONS
                  </option>
                  <option name="skillsoption" value="SKILLS">
                    ELECTRICIAN
                  </option>
                  <option name="skillsoption" value="SKILLS">
                    LAUNDRYMAN
                  </option>
                </select>
              </div>
              <div className="form-control">
                <label htmlFor="university">UNIVERSITY: </label>
                <select name="university">
                  <option name="universityoption" value="university">
                    KIU
                  </option>
                  <option name="universityoption">IUEA</option>
                  <option vname="universityoption">MAKERERE</option>
                  <option name="universityoption">KYAMBOGO</option>
                </select>
              </div>
              <div className="form-control">
                <label htmlFor="regno">REG NO:</label>
                <input type="text" name="regno" placeholder="REGISTRATION NO" />
              </div>
              <div className="form-control">
                <label htmlFor="email">EMAIL</label>
                <input type="email" name="email" placeholder="EMAIL" />
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
