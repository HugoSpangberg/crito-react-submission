import React from 'react'
import personOne from '../assets/images/person1.png'
import personTwo from '../assets/images/person2.png'
import personThree from '../assets/images/person3.png'
import personFour from '../assets/images/person4.png'
import PrintSectionTitle from './generics/PrintSectionTitle'
import { NavLink } from 'react-router-dom'
import PrintTeamMember from './generics/PrintTeamMember'



const MeetOurTeamSection = () => {
  return (
    <section className="meet-our-team">
      <div className="container">
        <div className="team-member">
          <div className="section-title">
            <PrintSectionTitle section="Meet Our Team" title="Experience Team Members"/>
          </div>
          <NavLink className="btn-yellow" href="#">Browse Team<i className="fa-light fa-arrow-up-right"></i></NavLink>
        </div>
        <div className="team-member-pic">
          <div>
            <PrintTeamMember image={personOne} name='Kristine Palmer' title='Chef Operation Officer'/>
          </div>
          <div>
          <PrintTeamMember image={personTwo} name='Mark Aubri' title='Senior Consultant'/>
          </div>
          <div>
          <PrintTeamMember image={personThree} name='Kimberly Hansen' title='Senior Consultant'/>
          </div>
          <div>
          <PrintTeamMember image={personFour} name='Justin Willoman<' title='Senior Tech Consultant'/>
          </div>
        </div>
        <div className="dots-parent">
          <NavLink to=""><div className="dots"></div></NavLink>
          <NavLink to=""><div id="dots2" className="dots"></div></NavLink>
          <NavLink to=""><div className="dots"></div></NavLink>
          <NavLink to=""><div className="dots"></div></NavLink>
          <NavLink to=""><div className="dots"></div></NavLink>
        </div>
      </div>
    </section>
  )
}

export default MeetOurTeamSection