import './Home.css'
import * as React from "react";
import { Link } from "react-router-dom";


export function Home() {
  return (
    <>
      <section className="home">
        <div className="home__content">
          <div className="home__left">
            <p className="line"><span className="inner__line">so, you want to reavel to</span></p>
            <p className="line"><span className="inner__line">space</span></p>
            <p className="line">
              <span className="inner__line">Let's face it: if you want to go to space, you might as well</span>
              <span className="inner__line"> genuinely go to outer space and not hover kind of on the</span>
              <span className="inner__line"> edge of it. Well sit back, and relax because we'll give you </span>
              <span className="inner__line">a truly out this world experience!</span>
            </p>
          </div>
          <div className="home__right">
            <Link to={"./Destination"} className="round__btn">explore</Link>
          </div>
        </div>
      </section>
    </>
  );
}