import React from 'react'
import element from '../assets/images/Element.svg'
import { NavLink } from 'react-router-dom'

const ShowcaseContactSection = () => {
  return (
    <section className="showcase">
    <img className="background-lines" src={element} alt=""/>
    <div className="container">
      <div className="content">
        <div className="content-text">
          <NavLink to="/"><p>Home</p></NavLink>
          <NavLink to="/Contacts"><p>Contact</p></NavLink>
        </div>
        <h1>Let’s Connect</h1>
      </div>
    </div>
  </section>
  )
}

export default ShowcaseContactSection