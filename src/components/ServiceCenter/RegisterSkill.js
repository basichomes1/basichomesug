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
            method="POST"
            name="contact"
            action="/contact"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact">
            <div className="form-control">
              <label htmlFor="name">NAME</label>
              <input type="text" name="name" placeholder="NAME" required />
            </div>
            <div className="form-control">
              <label htmlFor="skills">SKILLS</label>
              <select name="skills" id="skills" className="form-control">
                <option value="SKILLS">HAIR DRESSER</option>
                <option value="SKILLS">HOUSE CLEANER</option>
                <option value="SKILLS">PROPOSAL WRITING & DESERTATIONS</option>
                <option value="SKILLS">ELECTRICIAN</option>
                <option value="SKILLS">LAUNDRYMAN</option>
              </select>
            </div>
            <div className="form-control">
              <input type="email" name="email" placeholder="EMAIL" required />
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterSkill;
