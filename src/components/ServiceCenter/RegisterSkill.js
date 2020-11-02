import React from "react";
import { Link } from "react-router-dom";

const RegisterSkill = () => {
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>BASIC HOMES UG</h1>

          <blockquote>
            Our major role is to Link up students to available accomodation
            facilities with just a single click as well as promotion of student
            skills to those who demand for them to help the students earn a
            living ......
          </blockquote>

          <Link to="/aboutus" className="btnn btnn-outline">
            READ MORE
          </Link>
        </div>

        <div className="showcase-form card">
          <h2>REGISTER YOUR SKILL</h2>
          <form
            name="contact"
            netlify-honeypot="bot-field"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <div className="form-control">
              <input type="text" name="name" placeholder="NAME" required />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="company"
                placeholder="SKILL TYPE"
                required
              />
            </div>
            <div className="form-control">
              <input type="email" name="email" placeholder="EMAIL" required />
            </div>
            <input type="submit" value="Send" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterSkill;
