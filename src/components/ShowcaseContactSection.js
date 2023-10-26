import React from 'react'
import element from '../assets/images/Element.svg'

const ShowcaseContactSection = () => {
  return (
    <section class="showcase">
    <img class="background-lines" src={element} alt=""/>
    <div class="container">
      <div class="content">
        <div class="content-text">
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