import React from 'react'
import ArticleOne from '../assets/images/article1.png'
import ArticleTwo from '../assets/images/article2.png'
import ArticleThree from '../assets/images/article3.png'
import PrintArticle from './generics/PrintArticle'
import { Link } from 'react-router-dom'
import PrintSectionTitle from './generics/PrintSectionTitle'


const ArticleNewsSection = () => {
  return (
    <section className="articlenews">
      <div className="container">
        <div className="articles-title">
          <div className="section-title">
            <PrintSectionTitle section="Article & News" title="Get Every Single Articles & News"/>
          </div>
          <div className="button">
          <Link to="/News"><button className="btn-transparent">Browse Articles<i className="fa-light fa-arrow-up-right"></i></button></Link>
          </div>
        </div>
        <div className="article">
          <PrintArticle month="Mars" date="25" title="Business" text="How To Use Digitalization In The Classroom" image={ArticleOne} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>
          <PrintArticle month="Mars" date="17" title="Business" text="How To Implement Chat GPT In Your Projects" image={ArticleTwo} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>
          <PrintArticle month="Mars" date="13" title="Business" text="The Guide To Support Modern CSS Design" image={ArticleThree} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>
          
        </div>
        <div className="dots-parent">
          <a href=""><div className="dots"></div></a>
          <a href=""><div id="dots2" className="dots"></div></a>
          <a href=""><div className="dots"></div></a>
          <a href=""><div className="dots"></div></a>
        </div>
      </div>
    </section>
  )
}

export default ArticleNewsSection