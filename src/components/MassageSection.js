import React from 'react'

export const MassageSection = () => {
  return (
    <section class="massage">
    <div class="container">
      <div class="headline">
        <h1>Leave us a message 
          for any information.</h1>
      </div>
      <form>
        <input type="text" placeholder="Name*"/>
        <input type="email" placeholder="Email*"/>
        <textarea placeholder="Your Massage*"></textarea>
      </form>
      <button class="btn-yellow">Send Message<i class="fa-light fa-arrow-up-right"></i></button>
    </div>
  </section>
  )
}
