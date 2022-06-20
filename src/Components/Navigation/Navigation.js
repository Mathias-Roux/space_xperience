import './Navigation.css'

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from '../../Images/logo.svg'
import icon_hamburger from '../../Images/icon-hamburger.svg'
import icon_close from '../../Images/icon-close.svg'

export function Navigation() {

  const [navbar, setNavbar] = useState(false)

  const handleToggle = () => {
    setNavbar(!navbar)
  }

  return (
    <>
      <section className="navigation">
        <Link to={'./'}>
           <img src={logo} alt="logo" />
        </Link>
        <img 
          className="burger"
          src={icon_hamburger}
          alt="menu"
          onClick={handleToggle}
        />
      </section>
      <div className={`menu ${navbar ? 'open' : ''}`}>
          <img 
            className="close" 
            src={icon_close} 
            alt="close" 
            onClick={handleToggle}
          />
          <ul className="list">
            <li>
              <NavLink to='./' activeClassName="active__menu" className="link">
                <strong>00</strong><span>home</span>
              </NavLink>
            </li>
            <li >
              <NavLink to='./Destination' activeClassName="active__menu" className="link">
                <strong>01</strong><span>destination</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='./Crew' activeClassName="active__menu" className="link">
                <strong>02</strong><span>crew</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='./Technology' activeClassName="active__menu" className="link">
                <strong>03</strong><span>technology</span>
              </NavLink>
            </li>
          </ul>
      </div>
    </>
  );
}