import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Button } from "../Button/Button";
import Title from "../Extras/Title";

const Contactdetails = () => {
  return (
    <>
      <Title title="LET'S START A CONVERSATION" />
      <div className="new-section-bg">
        <section className="new-section">
          <div className="working-hours">
            <h1>WORKING HOURS</h1>
          </div>
          <div className="new-container">
            <div className="newform">
              <form action="">
                <h2>SEND MESSAGE</h2>
                <div className="newinputbox">
                  <input type="text" name="name" required />
                  <span>NAME</span>
                </div>
                <div className="newinputbox">
                  <input type="email" name="email" required />
                  <span>EMAIL </span>
                </div>
                <div className="newinputbox">
                  <textarea name="message" required></textarea>
                  <span>MESSAGE...</span>
                </div>

                <Button type="submit">SUBMIT</Button>
              </form>
            </div>
          </div>
        </section>
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
