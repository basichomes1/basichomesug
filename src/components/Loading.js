import React from "react";
import loadingGif from "../images/gif/1.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h4>DATA loading.....</h4>
      <img src={loadingGif} alt="LOADING..." />
    </div>
  );
}
