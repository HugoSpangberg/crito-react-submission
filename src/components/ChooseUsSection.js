import React from 'react'
import chooseUs from '../assets/images/choose-us.png'

const ChooseUsSection = () => {
  return (
    <section className="choose-us">
    <div className="container">
      <div className="section-title">
        <p>Why Choose Us</p>
        <h2>Why We Are The Best Business Consulting Agency</h2>
        <div className="strategies">
          <div className="strategies-parent">
            <i className="fa-light fa-thumbs-up"></i>
            <div className="strategies-child">
              <h4>Process Excellence</h4>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="strategies-parent">
            <i className="fa-light fa-hexagon-check"></i>
            <div className="strategies-child">
              <h4>Strategic Planning</h4>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="strategies-parent">
            <i className="fa-light fa-pen-nib"></i>
            <div className="strategies-child">
              <h4>Experience Design</h4>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="strategies-parent">
            <i className="fa-light fa-head-side-gear"></i>
            <div className="strategies-child">
              <h4>Artificial Inteligence</h4>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="background">
        <img src={chooseUs} alt="two woman with tablet"/>
      </div>
    </div>
    <div className="background-parent"></div>
  </section>
  )
}

export default ChooseUsSection