import React from 'react'



const Buttons = ({type, url, title}) => {
  
  const getButtonStyle = () => {
    switch(type) {
      case 'transparent':
        return 'btn-transparent'
      case 'yellow':
        return 'btn-yellow'
      default:
        return 'btn-black'
    }

  }
  
  
  
  return (
    <a className={getButtonStyle()} href={url}>{title} <i className="fa-light fa-arrow-up-right"></i></a>
  )
}

export default Buttons