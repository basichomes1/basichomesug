import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button/Button";

export default function Thanks() {
  return (
    <>
      <div className="feedbackdisplay">
        <div className="card">
          <h1>
            WE HAVE RECEIVED YOUR REQUEST AND YOUR APPLICATION IS BEING
            PROCESSED
          </h1>
          <Link to="/jobs">
            <Button>BACK TO SITE</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
