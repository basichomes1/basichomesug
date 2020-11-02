import React, { Component } from "react";
import defaultBcg from "../images/bg/bg.jpg";
import Banner from "../components/dashboard/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../components/Extras/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg,
    };
  }

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      type,
      size,
      price,
      extras,
      pets,
      images,
      accomodation,
      location,
    } = room;
    const [mainImg, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} `}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>DETAILS</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>INFO</h3>
              <h6>price : {price}UGX</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? ` ${capacity} people` : ` ${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            </article>

            <article className="info">
              <h3>LOCATION</h3>
              <h5 style={{ textTransform: "uppercase" }}>{location}</h5>
            </article>

            <article className="info">
              <h3>ACCOMODATION TYPE</h3>
              <p style={{ textTransform: "uppercase" }}>{accomodation}</p>
            </article>

            <article className="info">
              <h3>ROOM TYPE</h3>
              <p style={{ textTransform: "uppercase" }}>{type}</p>
            </article>
          </div>
        </section>

        <section className="room-extras">
          <h6>FEATURES </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index} style={{ textTransform: "uppercase" }}>
                - {item}
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
