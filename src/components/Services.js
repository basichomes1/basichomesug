import React, { Component } from "react";
import Title from "./Title";
import { FaHiking, FaShuttleVan } from "react-icons/fa";

export default class componentName extends Component {
  state = {
    services: [
      {
        icon: <FaHiking />,
        title: "HOUSE RESERVATIONS",
        info: "BOOK FOR A ROOM ONLINE",
      },
      {
        icon: <FaHiking />,
        title: "JOB CREATION",
        info: "REGISTER YOUR JOB SKILLS",
      },
      {
        icon: <FaShuttleVan />,
        title: "TRANSPORTATION",
        info: "CAN'T MOVE YOUR THINGS?? WE GOT YOU COVERED",
      },

      {
        icon: <FaHiking />,
        title: "ACCOUNT CREATION",
        info: "REGISTER WITH US AND EXPLORE ",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="SERVICES" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services-article">
                <span>{item.icon}</span>
                <h5>{item.title}</h5>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
