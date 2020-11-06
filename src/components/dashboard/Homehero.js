import React from "react";

export default function Homehero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

Homehero.defaultProps = {
  hero: "homehero",
};
