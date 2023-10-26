import React from 'react'
import element from '../assets/images/Element.svg'
import manWithTablet from '../assets/images/man-with-tablet.svg'

const ShowcaseSection = () => {
  return (
    <>
      <section className="showcase">
        <img className="background-lines" src={element} alt="s curved lines"/>
        <div className="container">
          <div className="content">
            <h1>We provide The Best business solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <a className="btn-yellow" href="consulting.html">Get Consulting<i className="fa-light fa-arrow-up-right"></i></a>
            <a className="btn-transparent" href="service.html">Learn More<i className="fa-light fa-arrow-up-right"></i></a>
          </div>
          <img src={manWithTablet} alt="showcase img of a man"/>
        </div>
      </section>
    </>
  )
}

export default ShowcaseSection