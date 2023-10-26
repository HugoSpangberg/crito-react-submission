import React from 'react'
import logoCrito from '../assets/images/Logo.svg'
import element3 from '../assets/images/Element3.png'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="logo">
            <div className="space">
              <a href="index.html"><img src={logoCrito} alt="crito-logo"/></a>
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</h6>
            </div> 
          </div>
          <div className="Links">
            <h4>Company</h4>
            <div><a href="#">About</a></div>
            <div><a href="#">Features</a></div>
            <div><a href="#">Works</a></div>
            <div><a href="#">Career</a></div> 
          </div>
          <div className="Links">
            <h4>Help</h4>
            <div><a href="#">Customer Support</a></div>
            <div><a href="#">Delivery Details</a></div>
            <div><a href="#">Terms & Conditions</a></div>
            <div><a href="#">Privacy Policy</a></div>
          </div>
          <div className="Links">
            <h4>Resources</h4>
            <div><a href="#">Free eBooks</a></div>
            <div><a href="#">Development Tutorial</a></div>
            <div><a href="#">How to - Blog</a></div>
            <div><a href="#">Youtube Playlist</a></div>
          </div>
          <div className="Links">
            <h4>Link</h4>
            <div><a href="#">Free eBooks</a></div>
            <div><a href="#">Development Tutorial</a></div>
            <div><a href="#">How to - Blog</a></div>
            <div><a href="#">Youtube Playlist</a></div>
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
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer