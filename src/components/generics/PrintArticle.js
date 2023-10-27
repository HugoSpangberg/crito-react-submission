import React from 'react'

const PrintArticle = ({date, month, image, title, text, description}) => {
  return (
    <a href="articleNews.html">
    <div className="article-section">
      <div className="image-date">
        <div className="date">
          <h2>{date}</h2>
          <h4>{month}</h4>
        </div>
        <img src={image} alt=""/>
      </div>
      <h6>{title}</h6>
      <h3>{text}</h3>
      <p>{description}</p>
    </div>
  </a>
  )
}

export default PrintArticle