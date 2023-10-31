import React from 'react'
import icon1 from '../assets/images/Icon1.svg'
import icon2 from '../assets/images/Icon2.svg'
import icon3 from '../assets/images/Icon3.svg'
import icon4 from '../assets/images/Icon4.svg'
import PrintSectionTitle from './generics/PrintSectionTitle'
import PrintFeatures from './generics/PrintFeatures'
import Buttons from './generics/Buttons'



const FeatureSection = () => {
  return (
    <>
      <section className="features">
        <div className="container">
          <div className="features-left section-title">
          <PrintSectionTitle section="Features" title="Our Accounting is trusted by thousand of companies"/>

            <Buttons type='yellow' title='Learn More'/>
          </div>
          <div className="features-right">
            <PrintFeatures title="Business Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." image={icon1}/>
            <PrintFeatures title="Startup Business" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." image={icon2}/>
            <PrintFeatures title="Financial Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." image={icon3}/>
            <PrintFeatures title="Risk Management" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." image={icon4}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeatureSection