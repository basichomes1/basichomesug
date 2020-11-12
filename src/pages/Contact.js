import React from "react";
import Hero from "../components/dashboard/Hero";
import Banner from "../components/dashboard/Banner";
import "../css/Contact.css";
import Title from "../components/Extras/Title";
import Contactdetails from "../components/Contact/Contactdetails";

export default function Contact() {
  return (
    <>
      <div>
        <Hero hero="contactHero">
          <Banner title="CONTACT US" subtitle=""></Banner>
        </Hero>
      </div>
      <Contactdetails />
      <Title title="LOCATION" />
    </>
  );
}
