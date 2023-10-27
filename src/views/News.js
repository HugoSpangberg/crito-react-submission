import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PrintArticle from '../components/generics/PrintArticle'
import ArticleOne from '../assets/images/article1.png'
import ArticleTwo from '../assets/images/article2.png'
import ArticleThree from '../assets/images/article3.png'

const News = () => {
  return (
    <>
    <div className='wrapper-grid'>
    <Header />
    <section className="articlenews">
      <div className="container">

        <div className="article">
          <PrintArticle month="Mars" date="25" title="Business" text="How To Use Digitalization In The Classroom" image={ArticleOne} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>
          <PrintArticle month="Mars" date="17" title="Business" text="How To Implement Chat GPT In Your Projects" image={ArticleTwo} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>
          <PrintArticle month="Mars" date="13" title="Business" text="The Guide To Support Modern CSS Design" image={ArticleThree} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>
          <PrintArticle month="Mars" date="25" title="Business" text="How To Use Digitalization In The Classroom" image={ArticleOne} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>
          <PrintArticle month="Mars" date="17" title="Business" text="How To Implement Chat GPT In Your Projects" image={ArticleTwo} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>
          <PrintArticle month="Mars" date="13" title="Business" text="The Guide To Support Modern CSS Design" image={ArticleThree} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>
          
        </div>
      </div>
    </section>

    <Footer />

    </div>

    
    </>
  )
}

export default News