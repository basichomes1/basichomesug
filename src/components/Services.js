import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class componentName extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "FREE DRINKS",
        info: "GREAT BAR WITH QUALITY PRODUCTS",
      },
      {
        icon: <FaHiking />,
        title: "ENDLESS FUN",
        info: "WONDERFUL VIEW AND SUPERB ENJOYMENT",
      },
      {
        icon: <FaShuttleVan />,
        title: "FREE RIDES",
        info: "TIRED OF WALKING?? WE GOT YOU COVERED",
      },

      {
        icon: <FaBeer />,
        title: "FREE BOOZE",
        info: "OUTDOOR EXPERIENCE WITH FRIENDS",
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
              <article key={index} className="services">
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
