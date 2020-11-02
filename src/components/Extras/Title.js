import React from "react";
import "../../css/Title.css";

export default function Title({ title, span }) {
  return (
    <div className={span}>
      <h4>{title}</h4>
      <div></div>
    </div>
  );
}

Title.defaultProps = {
  span: "section-title",
};
