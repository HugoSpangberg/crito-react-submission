import React from 'react'
import chooseUs from '../assets/images/choose-us.png'
import PrintChooseUs from './generics/PrintChooseUs'
import PrintSectionTitle from './generics/PrintSectionTitle'

const ChooseUsSection = () => {
  return (
    <section className="choose-us">
    <div className="container">
      <div className="section-title">
        <PrintSectionTitle section="Why Choose Us" title="Why We Are The Best Business Consulting Agency"/>
        <div className="strategies">
          <PrintChooseUs title="Process Excellence" text="Lorem, ipsum dolor sit amet consectetur" icon="fa-light fa-thumbs-up" />
          <PrintChooseUs title="Strategic Planning" text="Lorem, ipsum dolor sit amet consectetur" icon="fa-light fa-hexagon-check" />
          <PrintChooseUs title="Experience Design" text="Lorem, ipsum dolor sit amet consectetur" icon="fa-light fa-pen-nib" />
          <PrintChooseUs title="Artificial Inteligence" text="Lorem, ipsum dolor sit amet consectetur" icon="fa-light fa-head-side-gear" />
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