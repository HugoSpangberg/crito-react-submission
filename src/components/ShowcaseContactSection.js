import React from 'react'
import element from '../assets/images/Element.svg'

const ShowcaseContactSection = () => {
  return (
    <section className="showcase">
    <img className="background-lines" src={element} alt=""/>
    <div className="container">
      <div className="content">
        <div className="content-text">
          <a href="index.html"><p>Home</p></a>
          <a href="contact.html"><p>Contact</p></a>
        </div>
        <h1>Let’s Connect</h1>
      </div>
    </div>
  </section>
  )
}

export default ShowcaseContactSection