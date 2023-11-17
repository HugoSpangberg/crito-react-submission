import React from 'react'
import logoType from '../assets/images/Logotype.svg'
import { NavLink, Link } from 'react-router-dom'
import Buttons from './generics/Buttons'

const Header = () => {
  return (
   <>
      <header>
        <div className="container">
          <button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button>
          <div className="logotype">
            <Link to="/">
              <img src={logoType} alt="crito logotype"/>
            </Link>
          </div>
          <div className="contactinformation-bar">
            <div className="content-box transition">
              <NavLink to="tel:+46812147050"><i className="fa-light fa-phone-volume"></i> 
                +46 (8) 121 470 50</NavLink>
            </div>
            <div className="content-box transition">
              <NavLink to="mailto:info@crito.com"><i className="fa-light fa-envelope"></i>info@crito.com</NavLink>
            </div>
            <div className="content-box last transition">
              <NavLink to="https://maps.app.goo.gl/wX6Ene3Z18Sfc3NE7"><i className="fa-light fa-location-dot"></i>
                Sveavägen 31, 111 34 STOCKHOLM</NavLink>
            </div>
          </div>
          <div className="socialmedia-bar">
            <div className="animation">
              <NavLink to="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></NavLink>
            </div>
            <div className="animation">
              <NavLink to="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></NavLink>
            </div>
            <div className="animation">
              <NavLink to="https://x.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></NavLink>
            </div>
            <div className="animation">
              <NavLink to="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></NavLink>
            </div>
          </div>
          <div className="menu">
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/Services">Services</NavLink>
              <NavLink to="/News">News</NavLink>
              <NavLink to="/Contacts">Contact</NavLink>
            </nav>
            <div className="login">
              <Buttons type='yellow' title='Login' url="*"/>
            </div>
          </div>
        </div>
      </header>
   </>
  )
}

export default Header