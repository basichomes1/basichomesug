import React from "react";
import Hero from "../components/dashboard/Hero";
import Banner from "../components/dashboard/Banner";

import Footer from "../components/dashboard/Footer";
import "../css/Contact.css";
import { Button } from "../components/Button/Button";
import { FaFacebookF, FaInstagram, FaMailBulk } from "react-icons/fa";
import Title from "../components/Extras/Title";

export default function Contact() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="CONTACT US" subtitle=""></Banner>
      </Hero>
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-box">
            <div className="contact-content">
              <h2>01</h2>
              <h3>CONTACT US VIA EMAIL</h3>
              <p>BASIC HOMES UGANDA</p>
              <Button
                buttonStyle="btn--outline "
                buttonSize="btn--mobile"
                buttonColor="red"
              >
                <FaMailBulk />
              </Button>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-box">
            <div className="contact-content">
              <h2>02</h2>
              <h3>FIND US ON INSTAGRAM</h3>
              <p>BASIC HOMES UGANDA</p>
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
        <div className="contact-card">
          <div className="contact-box">
            <div className="contact-content">
              <h2>03</h2>
              <h3>FIND US ON FACEBOOK</h3>
              <p>BASIC HOMES UGANDA</p>
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
      <Title title="LOCATION" />
      <Footer />
    </>
  );
}
