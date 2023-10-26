import React from 'react'

const ContactInfoSection = () => {
  return (
    <section class="contact-info">
    <div class="container">
      <div class="contact-card">
        <a href="https://maps.app.goo.gl/wX6Ene3Z18Sfc3NE7" target="_blank" class="contact-card-parent">
          <div class="icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div class="contact-card-child">
            <h3>Visit us</h3>
            <p>Sveavägen 31 <br/>
              111 34 STOCKHOLM</p>
          </div>
        </a>
        <div class="contact-card-parent">
          <div class="icon">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div class="contact-card-child">
            <h3>Call us</h3>
            <a href="tel:+46812147050">+46 (8) 121 470 50</a>
            <a href="tel:+46812147051">+46 (8) 121 470 51</a>
          </div>
        </div>
        <div class="contact-card-parent">
          <div class="icon">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div class="contact-card-child">
            <h3>Email us</h3>
            <a href="mailto:info@crito.com">info@crito.com</a>
            <a href="mailto:support@crito.com">support@crito.com</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactInfoSection