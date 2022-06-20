import './Home.css'
import * as React from "react";
import { Link } from "react-router-dom";


export function Home() {
  return (
    <>
      <section className="home">
        <div className="left">
          <p className="line"><span className="inner__line">so, you want to reavel to</span></p>
          <p className="line"><span className="inner__line">space</span></p>
          <p className="line">
            <span className="inner__line">Let's face it: if you want to go to space, you might as well</span>
            <span className="inner__line">genuinely go to outer space and not hover kind of on the</span>
            <span className="inner__line">edge of it. Well sit back, and relax because we'll give you </span>
            <span className="inner__line">a truly out this world experience!</span>
          </p>
        </div>
        <div className="right">
          <div className="btn-round">
            <Link to={"./Destination"} className="btn-explore">explore</Link>
          </div>
        </div>
      </section>
    </>
  );
}