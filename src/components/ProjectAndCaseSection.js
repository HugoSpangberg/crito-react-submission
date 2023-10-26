import React from 'react'
import imageOne from '../assets/images/Image-3.png'
import imageTwo from '../assets/images/Image-5.png'
import imageThree from '../assets/images/Image-4.png'
import imagefour from '../assets/images/Image-6.png'



const ProjectAndCaseSection = () => {
  return (
    <section className="project-and-case">
      <div className="container">
        <div className="section-title">
          <p>Project & Case Studies</p>
          <h2>Let’s Looks Our Global Projects</h2>
        </div>
        <div className="project-and-cases">
          <article className="project-parent">
            <div className="project-child">
              <img src={imageOne} alt=""/>
            <h3>Grow your business</h3>
            </div>
            <div className="link">
              <a href="#">Read More <i className="fa-light fa-arrow-up-right"></i></a>
            </div>
          </article>
          <article className="project-parent">
            <div className="project-child">
              <img src={imageTwo} alt=""/>
              <h3>Why your client needs a responsive website</h3>
            </div>
            <div className="link">
              <a href="#">Read More <i className="fa-light fa-arrow-up-right"></i></a>
            </div>
          </article>
          <article className="project-parent">
            <div className="project-child">
              <img src={imageThree} alt=""/>
              <h3>Educate your employees to get better results</h3>
            </div>
            <div className="link">
              <a href="#">Read More <i className="fa-light fa-arrow-up-right"></i></a>
            </div>
          </article>
          <article className="project-parent">
            <div className="project-child">
              <img src={imagefour} alt=""/>
              <h3>Business Insights is a important piece of your business</h3>
            </div>
            <div className="link">
              <a href="#">Read More <i className="fa-light fa-arrow-up-right"></i></a>
            </div>
          </article>
        </div>
        <div className="all-recent">
          <button className="btn-black">All Recent Projects <i className="fa-light fa-arrow-up-right"></i></button>
        </div>
      </div>
  </section>
  )
}

export default ProjectAndCaseSection