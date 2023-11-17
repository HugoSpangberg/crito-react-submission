import React from 'react'
import logoCrito from '../assets/images/Logo.svg'
import element3 from '../assets/images/Element3.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="logo">
            <div className="space">
              <NavLink to="/"><img src={logoCrito} alt="crito-logo"/></NavLink>
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</h6>
            </div> 
          </div>
          <div className="Links">
            <h4>Company</h4>
            <div><NavLink to="/Notfound">About</NavLink></div>
            <div><NavLink to="/Notfound">Features</NavLink></div>
            <div><NavLink to="/Notfound">Works</NavLink></div>
            <div><NavLink to="/Notfound">Career</NavLink></div> 
          </div>
          <div className="Links">
            <h4>Help</h4>
            <div><NavLink to="/Notfound">Customer Support</NavLink></div>
            <div><NavLink to="/Notfound">Delivery Details</NavLink></div>
            <div><NavLink to="/Notfound">Terms & Conditions</NavLink></div>
            <div><NavLink to="/Notfound">Privacy Policy</NavLink></div>
          </div>
          <div className="Links">
            <h4>Resources</h4>
            <div><NavLink to="/Notfound">Free eBooks</NavLink></div>
            <div><NavLink to="/Notfound">Development Tutorial</NavLink></div>
            <div><NavLink to="/Notfound">How to - Blog</NavLink></div>
            <div><NavLink to="/Notfound">Youtube Playlist</NavLink></div>
          </div>
          <div className="Links">
            <h4>Link</h4>
            <div><NavLink to="/Notfound">Free eBooks</NavLink></div>
            <div><NavLink to="/Notfound">Development Tutorial</NavLink></div>
            <div><NavLink to="/Notfound">How to - Blog</NavLink></div>
            <div><NavLink to="/Notfound">Youtube Playlist</NavLink></div>
          </div>
        </div>
        <div className="rights-social-media">
          <div className="element">
            <img src={element3} alt=""/>
          </div>
          <div className="container">
            <h6>
              © 2023 Crito - Consulting Company Inc. All Rights Reserved.
            </h6>
            <div className="socialmedia-bar-bottom">
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
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer