import React from "react";
import loadingGif from "../../images/gif/718.gif";

export default function Loading({ title, anime }) {
  return (
    <div className={anime}>
      <h4>{title}</h4>
      <img src={loadingGif} alt="LOADING..." />
    </div>
  );
}

Loading.defaultProps = {
  anime: "roomListLoading",
};
