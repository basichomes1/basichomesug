import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    accomodation,
    location,
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  let accomodations = getUnique(rooms, "accomodation");
  let locations = getUnique(rooms, "location");
  // add all

  types = ["all", ...types];

  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  accomodations = ["all", ...accomodations];
  accomodations = accomodations.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  locations = ["all", ...locations];
  locations = locations.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="SEARCH ROOMS" span="feature" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="location">LOCATION</label>
          <select
            name="location"
            id="location"
            onChange={handleChange}
            className="form-control"
            value={location}
          >
            {locations}
          </select>
        </div>

        {/* select type */}
        <div className="form-group">
          <label htmlFor="accomodation">ACCOMODATION TYPE</label>
          <select
            name="accomodation"
            id="accomodation"
            onChange={handleChange}
            className="form-control"
            value={accomodation}
          >
            {accomodations}
          </select>
        </div>

        {/* ROOM TYPE */}
        <div className="form-group">
          <label htmlFor="type">ROOM TYPE</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>

        {/* select type */}
        <div className="form-group">
          <label htmlFor="capacity">NUMBER OF PEOPLE</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>

        {/* ROOM PRICE */}
        <div className="form-group">
          <label htmlFor="price">ROOM PRICE: {price} (UGX)</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control range"
          />
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
