import React from "react";

export default function Homebanner({ children, title, subtitle }) {
  return (
    <div className="Homebanner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
