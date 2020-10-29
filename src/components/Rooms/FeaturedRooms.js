import React, { Component } from "react";
import Title from "../Extras/Title";
import { RoomContext } from "../../Context";
import Room from "./Room";
import Loading from "../Extras/Loading";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms ">
        <Title title="POPULAR ROOMS" span="serviceColor" />
        <div className="featured-rooms-center">
          {loading ? <Loading say="LOADING" /> : rooms}
        </div>
      </section>
    );
  }
}
