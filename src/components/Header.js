import React from 'react'
import logoType from '../assets/images/Logotype.svg'

const Header = () => {
  return (
   <>
      <header>
        <div className="container">
          <button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button>
          <div className="logotype">
            <a href="index.html">
              <img src={logoType} alt="crito logotype"/>
            </a>
          </div>
          <div className="contactinformation-bar">
            <div className="content-box transition">
              <a href="tel:+46812147050"><i className="fa-light fa-phone-volume"></i> 
                +46 (8) 121 470 50</a>
            </div>
            <div className="content-box transition">
              <a href="mailto:info@crito.com"><i className="fa-light fa-envelope"></i>info@crito.com</a>
            </div>
            <div className="content-box last transition">
              <a href="https://maps.app.goo.gl/wX6Ene3Z18Sfc3NE7"><i className="fa-light fa-location-dot"></i>
                Sveavägen 31, 111 34 STOCKHOLM</a>
            </div>
          </div>
          <div className="socialmedia-bar">
            <div className="animation">
              <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <div className="animation">
              <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            </div>
            <div className="animation">
              <a href="https://x.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
            </div>
            <div className="animation">
              <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <div className="menu">
            <nav>
              <a className="active" href="index.html">Home</a>
              <a href="service.html">Service</a>
              <a href="news.html">News</a>
              <a href="contact.html">Contact</a>
            </nav>
            <div className="login">
              <a className="btn-yellow btn-login" href="login.html">login <i className="fa-light fa-arrow-up-right"></i></a>
            </div>
          </div>
        </div>
      </header>
   </>
  )
}

export default Header