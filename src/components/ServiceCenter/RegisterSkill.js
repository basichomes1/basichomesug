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

          <Link to="/aboutus" className="btn btn-outline">
            READ MORE
          </Link>
        </div>

        <div className="showcase-form card">
          <h2>REGISTER YOUR SKILL</h2>
          <form method="POST" data-netlify="true">
            <div class="fields">
              <div class="field half">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div class="field half">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div class="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
            </div>
            <ul class="actions">
              <li>
                <input type="submit" value="Send Message" class="primary" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterSkill;
