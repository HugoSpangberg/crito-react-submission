import React, { useState } from 'react'

export const MassageSection = () => {
  const [name, setName] = useState ('')
  const [email, setEmail] = useState ('')
  const [message, setMessage] = useState ('')
  const [buttonDisabled, setButtonDisabled] = useState (true)
  const [massageSent, setMessageSent] = useState (false)

  const buttonChange = () => {
    if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {  // om name, email eller message INTE (!==) är lika med en tom sträng('').Så hoppar den in i Else. Så blir det sant.
      setButtonDisabled(false)
      
    } else {
      setButtonDisabled(true)
      setMessageSent('')
    }
  }

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
    switch (result.status) {
      case 200:

        setName('')
        setEmail('')
        setMessage('')
        setButtonDisabled(true)
        setMessageSent('Message received')
        break;
      case 400:
        console.log('något gick fel')
        break;
    }
    
  }


  return (
    <section className="massage">
    <div className="container">
      <div className="headline">
        <h1>Leave us a message 
          for any information.</h1>
      </div>
      <form onSubmit={handlesubmit} noValidate>
        <input type="text" placeholder="Name*" value={name} onChange={(e) => {setName(e.target.value); buttonChange()}}/>
        <input type="email" placeholder="Email*" value={email} onChange={(e) => {setEmail(e.target.value); buttonChange()}}/>
        <textarea placeholder="Your Massage*" value={message} onChange={(e) => {setMessage(e.target.value); buttonChange()}}></textarea>
        <button type="submit" className={`btn-yellow ${buttonDisabled ? 'disabled' : ''}` } disabled={buttonDisabled}>Send Message<i className="fa-light fa-arrow-up-right"></i></button>
        <p>{massageSent}</p>
      </form>
    </div>
  </section>
  )
}
