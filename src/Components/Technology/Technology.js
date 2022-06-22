import './Technology.css'

import React, { useState } from "react";

import data from '../../Data/data.json'

import useWindowSize from '../../Hooks/WindowResize'

export function Technology() {
  const [index, setIndex] = useState(0);

  const contents = data.technology[index]

  const size = useWindowSize()
  const width = size.width

  return (
    <>
      <section className="technology">
        
        <div className="title__wrap">
          <p className="title">
            <strong>03</strong>
            <span>space launch 101</span>
          </p> 
        </div>

        <div className="technology__content">
          <div className="technology__left">
            <img src={width>848 ? contents.images.portrait : contents.images.landscape} alt={contents.name} />
          </div>

          <div className="technology__right">
            <ul className="vehicles">
              <li className={"circle " + (index === 0 ? "active__vehicle" : "") } onClick={() => setIndex(0)}>1</li>
              <li className={"circle " + (index === 1 ? "active__vehicle" : "") } onClick={() => setIndex(1)}>2</li>
              <li className={"circle " + (index === 2 ? "active__vehicle" : "") } onClick={() => setIndex(2)}>3</li>
            </ul>
            <div className="infos">
              <span className="info__title">the technology...</span>
              <span className="info__names">{contents.name}</span>
              <p className="technology__text">{contents.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}