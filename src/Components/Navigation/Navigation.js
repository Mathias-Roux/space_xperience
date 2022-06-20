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
          <div className="list">
            <NavLink to='./' className={({ isActive }) => "link" + (isActive ? " active__menu" : "")}>
              <strong>00</strong><span>home</span>
            </NavLink>
          
            <NavLink to='./Destination' className={({ isActive }) => "link" + (isActive ? " active__menu" : "")}>
              <strong>01</strong><span>destination</span>
            </NavLink>
          
            <NavLink to='./Crew' className={({ isActive }) => "link" + (isActive ? " active__menu" : "")}>
              <strong>02</strong><span>crew</span>
            </NavLink>
    
            <NavLink to='./Technology' className={({ isActive }) => "link" + (isActive ? " active__menu" : "")}>
              <strong>03</strong><span>technology</span>
            </NavLink>
          </div>
      </div>
    </>
  );
}