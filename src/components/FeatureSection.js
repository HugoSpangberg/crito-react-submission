import React from 'react'
import icon1 from '../assets/images/Icon1.svg'
import icon2 from '../assets/images/Icon2.svg'
import icon3 from '../assets/images/Icon3.svg'
import icon4 from '../assets/images/Icon4.svg'


const FeatureSection = () => {
  return (
    <>
      <section className="features">
        <div className="container">
          <div className="features-left section-title">
            <p>Features</p>
            <h2>Our Accounting is
              trusted by thousand
              of companies</h2>
            <button>Learn More<i className="fa-light fa-arrow-up-right"></i></button>
          </div>
          <div className="features-right">
            <div className="features-right-child">
              <img src={icon1} alt=""/>
              <h4>Business Advice</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="features-right-child">
              <img src={icon2} alt=""/>
              <h4>Startup Business</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="features-right-child">
              <img src={icon3} alt=""/>
              <h4>Financial Advice</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="features-right-child">
              <img src={icon4}alt=""/>
              <h4>Risk Management</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeatureSection