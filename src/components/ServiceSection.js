import React from 'react'
import element3 from '../assets/images/Element3.svg'
import PrintTitleAndText from './generics/PrintTitleAndText'

const ServiceSection = () => {
  return (
    <section className="service">
    <div className="container">
      <div className="section-title">
        <p>Our Services</p>
        <h2>We Provide The Best Service For Consulting</h2>
      </div>
      <div className="container diff-service">

        <PrintTitleAndText title="Business Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url=""/>       
        <PrintTitleAndText title="Startup Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url=""/>
        <PrintTitleAndText title="Financial Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url=""/>
        <PrintTitleAndText title="Risk Management" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url=""/>

      </div>
      <div className="btn-move">
        <a className="btn-transparent" href="service.html">Browse Services<i className="fa-light fa-arrow-up-right"></i></a>
      </div>
    </div>
    <img src={element3} alt=""/>
  </section>
  )
}

export default ServiceSection