import React from 'react'
import ceoImg from '../assets/images/Image-ceo.png'

const AboutCompanySection = () => {
  return (
    <section className="about-company">
      <div className="container">
        <div className="ceo-pic">
          <img src={ceoImg} alt=""/>
          <div className="founder">
            <h4>Samantha Brown, <span>Founder</span></h4>
            <h6>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</h6>
          </div>
        </div>
        <div className="section-title">
          <p>About Company</p>
          <h2>We Are Business Consulting & Credit Repair Experts</h2>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam officiis quas assumenda esse obcaecati? 
            Ex esse error voluptates iure vel totam eos. 
            <br/>Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci 
            accusantium libero provident voluptate amet.
          </h6>
        <div className="buttons-flex">
            <div className="buttons">
              <button className="btn-black">Learn More <i className="fa-light fa-arrow-up-right"></i></button>
            </div>
            <div className="buttons">
              <button className="btn-transparent"><i className="fa-sharp fa-solid fa-play"></i></button>
              <p>Intro Video</p>
            </div>
        </div>
        </div>
      </div>

    </section>
  )
}

export default AboutCompanySection