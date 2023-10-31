import React from 'react'

const PrintFeatures = ({title, text, image}) => {
  return (
    <>
      <div className="features-right-child">
        <img src={image} alt=""/>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </>
  )
}

export default PrintFeatures