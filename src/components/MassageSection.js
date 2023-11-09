import React, { useState } from 'react'

export const MassageSection = () => {
  const [name, setName] = useState ('')
  const [nameError, setNameError] = useState (false)
  const [email, setEmail] = useState ('')
  const [emailError, setEmailError] = useState (false)
  const [message, setMessage] = useState ('')
  const [buttonDisabled, setButtonDisabled] = useState ('')
  const [messageSent, setMessageSent] = useState ('')
  const [errorMessage, setErrorMessage] = useState ('')

  const handleChange = (e) => {

    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        setNameError(validateLength(e.target.value, 2))

        break;
      case 'email':
        setEmail(e.target.value)
        setEmailError(validateLength(e.target.value, 3))
        break;
      case 'message':
        setMessage(e.target.value)
        break;
    }
  }

  const validateLength = (value, minLength = 1) => {
    if (value.length < minLength)
      return true
    return false
  }

  const handleSubmit = async (e) => {
    e.preventDefault()



    for(let element of e.target) {
      switch (element.name) {
        case 'name':
          setName(element.value)
          setName('')
          setNameError(validateLength(element.value, 2))

          break;
        case 'email':
          setEmail(element.value)
          setEmail('')
          setEmailError(validateLength(element.value, 3))

          break;
        case 'message':
          setMessage(element.value)
          break;
      }
    }
    if (!nameError && !emailError) {

        const sendMessage = { name, email, message }
        const json = JSON.stringify(sendMessage)

        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: json,
    })
    if (result.status === 200)
        alert('lyckades skicka iväg')
      else
      setErrorMessage('nu gick det fel')
    }
  }

  // const buttonChange = () => {
  //   if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {  // om name, email eller message INTE (!==) är lika med en tom sträng('').Så hoppar den in i Else. Så blir det sant.
  //     setButtonDisabled(false)
      
  //   } else {
  //     setButtonDisabled(true)
  //     setMessageSent('')
  //   }
  // }

  // const handleChange = (e) => {
  //   const { type, value } = e.target

  //   switch (type) {
  //     case 'text':
  //       setName(value)
  //       setNameError(validateLength(value, 2))
  //       break;
  //     case 'email':
  //       setEmail(value)
  //       setEmailError(validateLength(value, 3))
  //       break;
  //     case 'text':
  //       setMessage(value)
  //       break;
  //   }

  //   buttonChange()
  // }

  // const validateLength = (value, minLength=1) => {
  //   if (value.length < minLength)
  //     return true
  //   return false
  // } 


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Kontrollera validering för name och email innan du skickar
  //   if (nameError || emailError) {
  //     // Set state för att visa felmeddelanden om det behövs
  //     setNameError(validateLength(name, 2));
  //     setEmailError(validateLength(email, 3));
  //     return;
  //   }

  //   // ... Din kod för att skicka meddelandet

  //   const sendMessage = { name, email, message };
  //   const json = JSON.stringify(sendMessage);

  //   const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
  //     method: 'post',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: json,
  //   });


  //   switch (result.status) {
  //     case 200:
  //       setName('');
  //       setEmail('');
  //       setMessage('');
  //       setMessageSent('Message received');
  //       break;
  //     case 400:
  //       setNameError(true);
  //       setEmailError(true);
  //       console.log('funkar det???????')
  //       break;
  //   }
  // };
  return (
    <section className="massage">
    <div className="container">
      <div className="headline">
        <h1>Leave us a message 
          for any information.</h1>
      </div>
      <form onSubmit={handleSubmit} noValidate>

        <input type="text" name='name' className={`${nameError ? 'error' : ''}`} placeholder={` ${nameError ? "Oops! Please check the name you entered and make sure it's correct." : 'Name*'}`} value={name} onChange={(e) => handleChange(e)}/>

        <input type="email" name='email' className={`${emailError ? 'error' : ''}`} placeholder={` ${emailError ? "Oops! Please check the email address you entered and make sure it's correct." : 'Email*'}`} value={email} onChange={(e) => handleChange(e)}/>
        <textarea type='textarea' name='message' placeholder="Your Massage*" value={message} onChange={(e) => handleChange(e)}></textarea>
        <p>{errorMessage}</p>
        <button type="submit" className={`btn-yellow` }>Send Message<i className="fa-light fa-arrow-up-right"></i></button>
        <p>{messageSent}</p>
      </form>
    </div>
  </section>
  )
}
