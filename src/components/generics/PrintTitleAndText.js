import React from 'react'

const PrintTitleAndText = ({title, text}) => {
  return (
    <div className="card1">
    <div className="content">
      <hr/>
      <h3>{title}</h3>
      <h6>{text}</h6>
        <div className="btn-flex">
          <div className="btn-transparent"><i className="fa-regular fa-arrow-right"></i></div>
        </div>
    </div>
  </div>
  )
}

export default PrintTitleAndText