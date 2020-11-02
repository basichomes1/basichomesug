import React from "react";

export default function AboutTeam({ title, position }) {
  return (
    <div className="aboutteam">
      <h1 className="md">{title}</h1>
      <h2>{position}</h2>
    </div>
  );
}
