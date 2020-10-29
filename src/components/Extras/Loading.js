import React from "react";
import loadingGif from "../../images/gif/718.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h4>LOADING</h4>
      <img src={loadingGif} alt="LOADING..." />
    </div>
  );
}
