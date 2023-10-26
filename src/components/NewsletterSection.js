import React from 'react'
import elementTwo from '../assets/images/Element2.svg'

const NewsletterSection = () => {
  return (
    <section className="newsletter">
    <img className="background-lines-right" src={elementTwo} alt=""/>
    <div className="container">
      <h2>Get News Updates By Signup</h2>
      <form>
        <input type="text" placeholder="username@domain.com"/>
        <button className="btn-yellow">Subscribe <i className="fa-light fa-arrow-up-right"></i></button>
      </form>
    </div>
  </section>
  )
}

export default NewsletterSection