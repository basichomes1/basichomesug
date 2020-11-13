import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { Button } from "../Button/Button";

const Contactdetails = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-box">
            <div className="contact-content">
              <p>BASIC HOMES UGANDA</p>
              <div className="contact-container-btn">
                <Button
                  buttonStyle="btn--outline "
                  buttonSize="btn--mobile"
                  buttonColor="red"
                >
                  <FaPhoneAlt />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-box">
            <div className="contact-content">
              <p>BASIC HOMES UGANDA</p>

              <div className="contact-container-btn">
                <Button
                  buttonStyle="btn--outline "
                  buttonSize="btn--mobile"
                  buttonColor="red"
                >
                  <FaInstagram style={{ color: "#000000" }} />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-box">
            <div className="contact-content">
              <p>BASIC HOMES UGANDA</p>
              <div className="contact-container-btn">
                <Button
                  buttonStyle="btn--outline "
                  buttonSize="btn--mobile"
                  buttonColor="red"
                >
                  <FaFacebookF style={{ color: "#000000" }} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="new-section-bg">
        <section className="new-section">
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
    </>
  );
};

export default Contactdetails;
