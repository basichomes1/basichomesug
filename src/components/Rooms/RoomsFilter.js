import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../Context";
import Title from "../Extras/Title";

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

  types = ["Room Type", ...types];

  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  accomodations = ["Accomodation Type", ...accomodations];
  accomodations = accomodations.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  locations = ["Choose Location", ...locations];
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
      <Title title="SEARCH FOR ROOMS" span="feature" />
      <form className="filter-form">
        {/* select type */}

        <div className="form-first-group">
          <div className="form-group first-section-form">
            <label htmlFor="location"></label>
            <select
              name="location"
              id="location"
              onChange={handleChange}
              className="form-control first-group"
              value={location}
            >
              {locations}
            </select>
          </div>

          {/* select type */}
          <div className="form-group first-section-form">
            <label htmlFor="accomodation"> </label>
            <select
              name="accomodation"
              id="accomodation"
              onChange={handleChange}
              className="form-control first-group"
              value={accomodation}
            >
              {accomodations}
            </select>
          </div>

          {/* ROOM TYPE */}
          <div className="form-group first-section-form">
            <label htmlFor="type"> </label>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              className="form-control first-group"
              value={type}
            >
              {types}
            </select>
          </div>
        </div>

        <div className="form-first-group">
          <div className="form-group first-section-form">
            <label htmlFor="capacity">Number Of people</label>
            <select
              name="capacity"
              id="capacity"
              onChange={handleChange}
              className="form-control first-group"
              value={capacity}
            >
              {people}
            </select>
          </div>

          {/* select type */}
          <div className="form-group first-section-form">
            <label htmlFor="price">Price: {price} </label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control first-group"
            />
          </div>

          {/* ROOM TYPE */}
          {/* <div className="form-group first-section-form">
            <label htmlFor="type"> </label>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              className="form-control first-group"
              value={type}
            >
              {types}
            </select>
          </div>
        </div> */}

          {/* <div className="form-second-group">
          {/* select type */}
          {/* <div className="form-group  second-section-form">
            <label htmlFor="capacity">Number Of people</label>
            <select
              name="capacity"
              id="capacity"
              onChange={handleChange}
              className="form-control second-group"
              second
              value={capacity}
            >
              {people}
            </select>
          </div> */}

          {/* ROOM PRICE */}
          {/* {/* <div className="form-group second-section-form">
            <label htmlFor="price">Price: {price}(UGX)</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control second-group"
            />
          </div> */}
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
