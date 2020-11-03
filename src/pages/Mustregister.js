import React from "react";
import { Button } from "../components/Button/Button";

export const Mustregister = () => {
  return (
    <div className="card" style={{ marginTop: "60px" }}>
      <h1 style={{ fontSize: "20px" }}>
        YOU HAVE TO BE REGISTERED TO ACCESS THAT PAGE
      </h1>
      <Button>
        <a href="/signup">CLICK HERE TO SIGN UP</a>
      </Button>
    </div>
  );
};
