import './Technology.css'

import React, { useState } from "react";


import vehicle from '../assets/technology/image-launch-vehicle-landscape.jpg'
import port from '../assets/technology/image-spaceport-landscape.jpg'
import capsule from '../assets/technology/image-space-capsule-landscape.jpg'

export function Technology() {

  const vehicles = [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
    { id: 3, text: "3" }
  ];

  const [activeId, setActiveId] = useState(vehicles[0].id);

  return (
    <>
      <section className="technology">
        <p className="line">
            <strong>03</strong>
            <span>space launch 101</span>
        </p>
        <img src={vehicle} alt="launch vehicle" />
        <ul className="vehicles">
          {vehicles.map((vehicle) => (
            <li className={"circle " + (activeId === vehicle.id ? "active__vehicle" : "") } onClick={() => setActiveId(vehicle.id)}>
              <div>{vehicle.text}</div>
            </li>
          ))}
        </ul>
        <div className="infos">
          <span className="info__title">the technology...</span>
          <span className="info__type">vehicle name</span>
          <div className="description">
            <p className="text">text</p>
          </div>
        </div>
      </section>
    </>
  );
}