import React from 'react'
import { Link } from 'react-router-dom'

const PrintProject = ({image, text}) => {
  return (
    <>
          <article className="project-parent">
            <div className="project-child">
              <img src={image} alt=""/>
            <h3>{text}</h3>
            </div>
            <div className="link">
              <Link to="">Read More <i className="fa-light fa-arrow-up-right"></i></Link>
            </div>
          </article>
    </>
  )
}

export default PrintProject