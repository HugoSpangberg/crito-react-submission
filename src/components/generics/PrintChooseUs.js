import React from 'react'

const PrintChooseUs = ({title, text, icon}) => {
  return (
    <>
      <div className="strategies-parent">
        <i className={icon}></i>
        <div className="strategies-child">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default PrintChooseUs