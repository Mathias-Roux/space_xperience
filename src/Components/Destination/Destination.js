import './Destination.css'

import React, { useState } from "react";


import data from '../../Data/data.json'


export function Destination() {
  const planets = [
    { id: 1, text: "moon" },
    { id: 2, text: "mars" },
    { id: 3, text: "europa" },
    { id: 4, text: "titan" }
  ];
  const [activeId, setActiveId] = useState(planets[0].id);

  const contents = data.destinations[0]
  // console.log(contents)

  return (
    <>
      <section className="destination">
        <p className="line">
            <strong>01</strong>
            <span>pick your destination</span>
        </p>
        <img src={contents.images.png} alt="moon" />
        <ul className="planets">
          {planets.map((planet) => (
            <li onClick={() => setActiveId(planet.id)}>
              <div className={activeId === planet.id ? "active__planet" : ""}>{planet.text}</div>
            </li>
          ))}
        </ul>
        <p className="planet">{contents.name}</p>
        <div className="description">
          <p className="text">{contents.description}</p>
        </div>
        <div className="hr"></div>
        <div className="infos">
          <p className="info__title">avg. distance</p>
          <span className="info__number">{contents.distance}</span>
        </div>
        <div className="infos">
          <p className="info__title">est. travel time</p>
          <span className="info__number">{contents.travel}</span>
        </div>
      </section>
    </>
  );
}