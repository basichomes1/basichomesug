import React from "react";

const Loading = ({ title }) => {
  return (
    <div className="wrap">
      <div className="loading">
        <div className="bounceball"></div>
        <div className="bounceball"></div>
        <div className="bounceball"></div>
        <div className="text">{title}</div>
      </div>
    </div>
  );
};

export default Loading;
