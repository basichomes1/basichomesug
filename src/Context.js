import React, { Component } from "react";
import Client from "./Contentful";
const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "Room Type",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    pets: false,
    accomodation: "Accomodation Type",
    location: "Choose Location",
  };
  GETDATA;
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "basichomesug",
        order: "fields.price",
      });
      let rooms = this.formatData(response.items);

      let featuredRooms = rooms.filter((room) => room.featured === true);

      let maxPrice = Math.max(...rooms.map((item) => item.price));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };

      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let { rooms, type, capacity, price, accomodation, location } = this.state;
    let tempRooms = [...rooms];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);

    if (accomodation !== "Accomodation Type") {
      tempRooms = tempRooms.filter(
        (room) => room.accomodation === accomodation
      );
    }

    // filter by location
    if (location !== "Choose Location") {
      tempRooms = tempRooms.filter((room) => room.location === location);
    }

    // filter by type
    if (type !== "Room Type") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    //FILTER BY PRICE

    tempRooms = tempRooms.filter((room) => room.price <= price);

    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
