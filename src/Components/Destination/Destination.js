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

        <div className="title__wrap">
          <p className="title">
            <strong>01</strong>
            <span>pick your destination</span>
          </p> 
        </div>

        <div className="content">
          <div className="destination__left">
            <img src={contents.images.png} alt={contents.name} />
          </div>

          <div className="destination__right">
            <ul className="planets">
              <li className={index === 0 ? "active__planet" : ""} onClick={() => setIndex(0)}>moon</li>
              <li className={index === 1 ? "active__planet" : ""} onClick={() => setIndex(1)}>mars</li>
              <li className={index === 2 ? "active__planet" : ""} onClick={() => setIndex(2)}>europa</li>
              <li className={index === 3 ? "active__planet" : ""} onClick={() => setIndex(3)}>titan</li>
            </ul>

            <p className="planet">{contents.name}</p>

            <p className="destination__description">{contents.description}</p>

            <div className="hr"></div>

            <div className="destination__infos">
              <div className="destination__infos--frame">
                <p className="info__title">avg. distance</p>
                <span className="info__number">{contents.distance}</span>
              </div>
              
              <div className="destination__infos--frame">
                <p className="info__title">est. travel time</p>
                <span className="info__number">{contents.travel}</span>
              </div>   
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}