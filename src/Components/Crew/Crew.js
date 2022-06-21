import './Crew.css'

import React, { useState } from "react";

import data from '../../Data/data.json'


export function Crew({step: number}) {
  const [index, setIndex] = useState(0);

  const contents = data.crew[index]

  return (
    <>
      <section className="crew">
        <p className="title">
            <strong>02</strong>
            <span>meet you crew</span>
        </p>
        <img src={contents.images.png} alt={contents.name} />
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