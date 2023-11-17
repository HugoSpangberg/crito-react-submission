import React from 'react'
import { NavLink } from 'react-router-dom'



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
    <NavLink className={getButtonStyle()} to={url}>{title} <i className="fa-light fa-arrow-up-right"></i></NavLink>
  )
}

export default Buttons