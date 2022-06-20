import './Technology.css'

import React, { useState } from "react";

import data from '../../Data/data.json'


export function Technology() {

  const [index, setIndex] = useState(0);

  const contents = data.technology[index]

  return (
    <>
      <section className="technology">
        <p className="line">
            <strong>03</strong>
            <span>space launch 101</span>
        </p>
        <img src={contents.images.landscape} alt="launch vehicle" />
        <ul className="vehicles">
          <li className={"circle " + (index === 0 ? "active__vehicle" : "") } onClick={() => setIndex(0)}>1</li>
          <li className={"circle " + (index === 1 ? "active__vehicle" : "") } onClick={() => setIndex(1)}>2</li>
          <li className={"circle " + (index === 2 ? "active__vehicle" : "") } onClick={() => setIndex(2)}>3</li>
        </ul>
        <div className="infos">
          <span className="info__title">the technology...</span>
          <span className="info__type">{contents.name}</span>
          <div className="description">
            <p className="text">{contents.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}