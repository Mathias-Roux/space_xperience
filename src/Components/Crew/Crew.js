import './Crew.css'

import React, { useState } from "react";
import { divnk } from "react-router-dom";

import data from '../../data.json'


export function Crew() {
  const [index, setIndex] = useState(0);

  const contents = data.crew[0]

  return (
    <>
      <section className="crew">
        <p className="line">
            <strong>02</strong>
            <span>meet you crew</span>
        </p>
        <img src={photo} alt={contents.name} />
        <ul className="persons">
          <li className={"dot " + (index===0?" active__person":"")} onClick={() => {setIndex(0)}}></li>
          <li className={"dot " + (index===1?" active__person":"")} onClick={() => {setIndex(1)}}></li>
          <li className={"dot " + (index===2?" active__person":"")} onClick={() => {setIndex(2)}}></li>
          <li className={"dot " + (index===3?" active__person":"")} onClick={() => {setIndex(3)}}></li>
        </ul>
        <div className="infos">
          <span className="info__role">{contents.role}</span>
          <span className="info__names">{contents.name}</span>
          <div className="description">
            <p className="text">{contents.bio}</p>
          </div>
        </div>
      </section>
    </>
  );
}