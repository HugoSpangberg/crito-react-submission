import React, { useState } from 'react'

export const MassageSection = () => {
  const [name, setName] = useState ('')
  const [nameError, setNameError] = useState (false)
  const [email, setEmail] = useState ('')
  const [emailError, setEmailError] = useState (false)
  const [message, setMessage] = useState ('')
  const [messageError, setMessageError] = useState (false)
  const [messageSent, setMessageSent] = useState ('')
  const [errorMessage, setErrorMessage] = useState ('')

  const handleChange = (e) => {
    setMessageSent('')
    setErrorMessage('')


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
        setMessageError(validateLength(e.target.value, 10))


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
          setNameError(validateLength(element.value, 2))

          break;
        case 'email':
          setEmail(element.value)
          setEmailError(validateLength(element.value, 3))
          break;
        case 'message':
          setMessage(element.value)
          setMessageError(validateLength(element.value, 10))
          break;
      }
    }
    if(!nameError && !emailError && !messageError){
      const result = await fetch ('https://win23-assignment.azurewebsites.net/api/contactform',{
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          name, email, message
        })
      })
      switch (result.status) {
        case 200:
          console.log(result)
          setMessageSent('Send')
          setName('')
          setEmail('')
          setMessage('')
          break;
        case 400:
          
          setErrorMessage('Please fill in all the required fields.')
          break
      }      
    }
  }

  return (
    <section className="massage">
    <div className="container">
      <div className="headline">
        <h1>Leave us a message 
          for any information.</h1>
      </div>
      <form onSubmit={handleSubmit} noValidate>

        <input className={` ${nameError ? 'error-bar' : ''}`} type="text" name='name'  placeholder={'Name*'} value={name} onChange={(e) => handleChange(e)}/>
        <label className={` ${nameError ? 'error-message' : ''}`}>{` ${nameError ? 'Please provide your name. It cannot be empty.' : ''}`}</label>
        <input className={` ${emailError ? 'error-bar' : ''}`} type="email" name='email'  placeholder={'Email*'} value={email} onChange={(e) => handleChange(e)}/>
        <label className={` ${emailError ? 'error-message' : ''}`}>{` ${emailError ? 'Please enter a valid email address with at least 3 characters.' : ''}`}</label>
        <textarea className={` ${messageError ? 'error-bar' : ''}`} type='textarea' name='message' placeholder="Your Massage*" value={message} onChange={(e) => handleChange(e)}></textarea>
        <label className={` ${messageError ? 'error-message' : ''}`}>{` ${messageError ? 'Please write a message with at least 10 characters.' : ''}`}</label>
        <button type="submit" className={`btn-yellow` }>Send Message<i className="fa-light fa-arrow-up-right"></i></button>
        <div className={`${errorMessage ? 'error-message-middle' : ''}${messageSent ? 'message-sent' : ''}`}>
          <p>{errorMessage}<i className={` ${errorMessage ? 'fa-solid fa-triangle-exclamation' : ''}`}></i></p>
          <i className={`${messageSent ? 'fa-sharp fa-solid fa-circle-check' : ''}`}></i>
        </div>
      </form>
    </div>
  </section>
  )
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
  

  //--------ny-----------
    // const handleChange = (e) => {

  //   switch (e.target.name) {
  //     case 'name':
  //       setName(e.target.value)
  //       setNameError(validateLength(e.target.value, 2))


  //       break;
  //     case 'email':
  //       setEmail(e.target.value)
  //       setEmailError(validateLength(e.target.value, 3))

  //       break;
  //     case 'message':
  //       setMessage(e.target.value)
  //       break;
  //   }
  // }

  // const validateLength = (value, minLength = 1) => {
  //   if (value.length < minLength)
  //     return true
  //   return false
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()




  //   for(let element of e.target) {
  //     switch (element.name) {
  //       case 'name':
  //         setName(element.value)

  //         setNameError(validateLength(element.value, 2))

  //         break;
  //       case 'email':
  //         setEmail(element.value)

  //         setEmailError(validateLength(element.value, 3))

  //         break;
  //       case 'message':
  //         setMessage(element.value)

  //         break;
  //     }
  //   }
  //   if (!nameError && !emailError) {

  //       const sendMessage = { name, email, message }
  //       const json = JSON.stringify(sendMessage)

  //       const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
  //       method: 'post',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //       body: json,
  //   })
  //   if (result.status === 200)
  //       setMessageSent('skickades')
  //     else
  //     setErrorMessage('nu gick det fel')
  //   }
  // }
