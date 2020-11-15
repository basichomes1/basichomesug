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
            <div className="working-one">
              <h1>WORKING HOURS</h1>
              <p>7:30am - 6pm</p>
            </div>
            <div className="working-two">
              <h1>CEO</h1>
              <p>0784816982</p>
            </div>
          </div>

          <div className="new-container">
            <div className="newform">
              <form action="">
                <h2>Send Message</h2>
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
