import React from 'react'

const PrintTeamMember = ({image, name, title }) => {
  return (
    <>
          <div>
            <img src={image} alt=""/>
            <h4>{name}</h4>
            <p>{title}</p>
          </div>
    </>
  )
}

export default PrintTeamMember