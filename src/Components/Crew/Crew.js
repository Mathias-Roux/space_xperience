import './Crew.css'

import React, { useState } from "react";

import data from '../../Data/data.json'


export function Crew({step: number}) {
  const [index, setIndex] = useState(0);

  const contents = data.crew[index]

  return (
    <>
      <section className="crew">

        <div className="title__wrap">
          <p className="title">
            <strong>02</strong>
            <span>meet you crew</span>
          </p> 
        </div>
        
        <div className="crew__content">
          <div className="crew__left">
            <img src={contents.images.png} alt={contents.name} />
          </div>

          <div className="crew__right">
            <ul className="persons">
              <li className={"dot " + (index===0?" active__person":"")} onClick={() => {setIndex(0)}}></li>
              <li className={"dot " + (index===1?" active__person":"")} onClick={() => {setIndex(1)}}></li>
              <li className={"dot " + (index===2?" active__person":"")} onClick={() => {setIndex(2)}}></li>
              <li className={"dot " + (index===3?" active__person":"")} onClick={() => {setIndex(3)}}></li>
            </ul>
            <div className="crew__infos">
              <span className="info__role">{contents.role}</span>
              <span className="info__names">{contents.name}</span>
              <p className="crew__bio">{contents.bio}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}