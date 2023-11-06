import React, { useState } from 'react'

export const MassageSection = () => {
  const [name, setName] = useState ('')
  const [email, setEmail] = useState ('')
  const [message, setMessage] = useState ('')

  const handlesubmit = async (e) => {
    e.preventDefault()
    const sendMessage = {name, email, message}
    const json = JSON.stringify(sendMessage)

    const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
      method: 'post',
      headers: {
        'content-type' : 'application/json'
      },
      body: json
      
    })
  }
  

  return (
    <section className="massage">
    <div className="container">
      <div className="headline">
        <h1>Leave us a message 
          for any information.</h1>
      </div>
      <form onSubmit={handlesubmit} noValidate>
        <input type="text" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <textarea placeholder="Your Massage*" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit" className="btn-yellow">Send Message<i className="fa-light fa-arrow-up-right"></i></button>
      </form>
    </div>
  </section>
  )
}
