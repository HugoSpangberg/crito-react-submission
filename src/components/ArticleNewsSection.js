import React from 'react'
import ArticleOne from '../assets/images/article1.png'
import ArticleTwo from '../assets/images/article2.png'
import ArticleThree from '../assets/images/article3.png'


const ArticleNewsSection = () => {
  return (
    <section className="articlenews">
      <div className="container">
        <div className="articles-title">
          <div className="section-title">
            <p>Article & News</p>
            <h2>Get Every Single Articles & News</h2>
          </div>
          <div className="button">
          <button className="btn-transparent" href="articles.html">Browse Articles<i className="fa-light fa-arrow-up-right"></i></button>
          </div>
        </div>
        <div className="article">
          <a href="articleNews.html">
            <div className="article-section">
              <div className="image-date">
                <div className="date">
                  <h2>25</h2>
                  <h4>Mar</h4>
                </div>
                <img src={ArticleOne} alt=""/>
              </div>
              <h6>Business</h6>
              <h3>How To Use Digitalization 
                In The Classroom</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
          </a>
          <a href="articlenews.html">
            <div className="article-section">
              <div className="image-date">
                <div className="date">
                  <h2>17</h2>
                  <h4>Mar</h4>
                </div>
                <img src={ArticleTwo} alt=""/>
              </div>
              <h6>Business</h6>
              <h3>How To Implement Chat GPT
                In Your Projects</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
          </a>
          <a href="articlenews.html">
            <div className="article-section">
              <div className="image-date">
                <div className="date">
                  <h2>13</h2>
                  <h4>Mar</h4>
                </div>
                <img src={ArticleThree} alt=""/>
              </div>
              <h6>Business</h6>
              <h3>The Guide To Support 
                Modern CSS Design</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
          </a>
        </div>
        <div className="dots-parent">
          <a href=""><div className="dots"></div></a>
          <a href=""><div id="dots2" className="dots"></div></a>
          <a href=""><div className="dots"></div></a>
          <a href=""><div className="dots"></div></a>
          <a href=""><div className="dots"></div></a>
        </div>
      </div>
    </section>
  )
}

export default ArticleNewsSection