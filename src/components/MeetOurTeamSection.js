import React from 'react'
import personOne from '../assets/images/person1.png'
import personTwo from '../assets/images/person2.png'
import personThree from '../assets/images/person3.png'
import personFour from '../assets/images/person4.png'



const MeetOurTeamSection = () => {
  return (
    <section className="meet-our-team">
      <div className="container">
        <div className="team-member">
          <div className="section-title">
            <p>Meet Our Team</p>
            <h2>Experience Team Members</h2>
          </div>
          <a className="btn-yellow" href="#">Browse Team<i className="fa-light fa-arrow-up-right"></i></a>
        </div>
        <div className="team-member-pic">
          <div>
            <img src={personOne} alt=""/>
            <h4>Kristine Palmer</h4>
            <p>Chef Operation Officer</p>
          </div>
          <div>
            <img src={personTwo} alt=""/>
            <h4>Mark Aubri</h4>
            <p>Senior Consultant</p>
          </div>
          <div>
            <img src={personThree} alt=""/>
            <h4>Kimberly Hansen</h4>
            <p>Senior Consultant</p>
          </div>
          <div>
            <img src={personFour} alt=""/>
            <h4>Justin Willoman</h4>
            <p>Senior Tech Consultant</p>
          </div>
        </div>
        <div className="dots-parent">
          <a href=""><div className="dots"></div></a>
          <a href=""><div id="dots2" className="dots"></div></a>
          <a href=""><div className="dots"></div></a>
          <a href=""><div className="dots"></div></a>
          <a href=""><div className="dots"></div></a>
        </div>
      </div>
    </section>
  )
}

export default MeetOurTeamSection