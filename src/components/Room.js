import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/bg/bg.jpg";
import PropTypes from "prop-types";

function Room({ room }) {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="SINGLE ROOM" />

        <div className="price-top">
          <h6>{price}-(UGX)</h6>
          <p>PER SEMESTER</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          FEATURES
        </Link>
        <p className="room-info">{name.toUpperCase()}</p>
      </div>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
export default Room;
