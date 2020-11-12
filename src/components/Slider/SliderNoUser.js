import React, { Component } from "react";
import { FaBlackTie, FaWarehouse } from "react-icons/fa";

class SliderNoUser extends Component {
  render() {
    return (
      <div className="service-container">
        <div className="service-card first-card">
          <div className="service-box">
            <span className="service-card-span">
              <FaWarehouse />
            </span>
            <div className="service-text">
              <p>HOUSE </p>
              <p> RESERVATIONS</p>
            </div>
          </div>
          <a href="/rooms">
            <button className="service-btn">BOOK</button>
          </a>
        </div>

        <div className="service-card second-card">
          <div className="service-box">
            <span className="service-card-span">
              <FaBlackTie />
            </span>
            <div className="service-text">
              <p>SERVICE </p>
              <p> CENTER</p>
            </div>
          </div>
          <a href="/jobs">
            <button className="service-btn">REGISTER</button>
          </a>
        </div>
      </div>
    );
  }
}
export default SliderNoUser;
