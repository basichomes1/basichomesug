import React from "react";
import "../../css/Loading.css";

const Loading = ({ title }) => {
  return (
    <>
      <div class="wrap">
        <div class="loading">
          <div class="bounceball"></div>
          <div class="bounceball"></div>
          <div class="bounceball"></div>
          <div class="text">{title}</div>
        </div>
      </div>
    </>
  );
};

export default Loading;
