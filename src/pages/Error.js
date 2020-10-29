import React from "react";
import Hero from "../components/dashboard/Hero";
import Banner from "../components/dashboard/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="PAGE NOT FOUND">
        <Link to="/" className="btn-primary">
          RETURN TO HOME PAGE
        </Link>
      </Banner>
    </Hero>
  );
}
