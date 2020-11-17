import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import { Button } from "../Button/Button";
import Title from "../Extras/Title";

const Contactdetails = () => {
  return (
    <>
      <Title title="LET'S START A CONVERSATION" />
      <div className="new-section-bg">
        <div className="contact-wrapper">
          <div className="contact-form-wrapper">
            <h1>Message Us </h1>
            <form action="">
              <div className="form-text">
                <textarea rows="4" cols="50">
                  Write your message here...
                </textarea>
              </div>
              <div className="contact-name">
                <input
                  type="text"
                  name="fname"
                  placeholder="Name.."
                  style={{ backgroundColor: "red" }}
                />
              </div>

              <div className="contact-email">
                <input placeholder="Email.." type="email" name="cemail" />
              </div>

              <div className="sendmessage">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>

          <div className="working-hours-wrapper">
            <div className="working-hours-content">
              <h1>WORKING HOURS</h1>
              <div className="working-hours-time">
                <p>7:30am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Title title="FIND US ON" />
      <div className="contact-frame">
        <a href="facebook.com" className="contact-frame-btn">
          <FaFacebookF style={{ color: "#000000" }} />
        </a>
        <a href="facebook.com" className="contact-frame-btn middle">
          <FaTwitter style={{ color: "#000000" }} />
        </a>
        <a href="facebook.com" className="contact-frame-btn">
          <FaInstagram style={{ color: "#000000" }} />
        </a>
      </div>
    </>
  );
};

export default Contactdetails;
