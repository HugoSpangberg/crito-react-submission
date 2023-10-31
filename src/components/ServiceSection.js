import React from 'react'
import element3 from '../assets/images/Element3.svg'
import PrintTitleAndText from './generics/PrintTitleAndText'
import PrintSectionTitle from './generics/PrintSectionTitle'
import Buttons from './generics/Buttons'



const ServiceSection = () => {
  return (
    <section className="service">
    <div className="container">
    <PrintSectionTitle section="Our Services" title="We Provide The Best Service For Consulting"/>

      <div className="container diff-service">

        <PrintTitleAndText title="Business Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url=""/>       
        <PrintTitleAndText title="Startup Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url=""/>
        <PrintTitleAndText title="Financial Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url=""/>
        <PrintTitleAndText title="Risk Management" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url=""/>

      </div>
      <div className="btn-move">
        <Buttons type='transparent' title='Browse Services'/>
      </div>
    </div>
    <img src={element3} alt=""/>
  </section>
  )
}

export default ServiceSection