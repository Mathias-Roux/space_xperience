import './Destination.css'

import React, { useState } from "react";

import data from '../../Data/data.json'


export function Destination() {
  
  const [index, setIndex] = useState(0);

  const contents = data.destinations[index]
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
          <li className={index === 0 ? "active__planet" : ""} onClick={() => setIndex(0)}>moon</li>
          <li className={index === 1 ? "active__planet" : ""} onClick={() => setIndex(1)}>mars</li>
          <li className={index === 2 ? "active__planet" : ""} onClick={() => setIndex(2)}>europa</li>
          <li className={index === 3 ? "active__planet" : ""} onClick={() => setIndex(3)}>titan</li>
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