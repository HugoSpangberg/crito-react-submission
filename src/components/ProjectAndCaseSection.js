import React from 'react'
import imageOne from '../assets/images/Image-3.png'
import imageTwo from '../assets/images/Image-5.png'
import imageThree from '../assets/images/Image-4.png'
import imagefour from '../assets/images/Image-6.png'
import PrintSectionTitle from './generics/PrintSectionTitle'
import PrintProject from './generics/PrintProject'
import Buttons from './generics/Buttons'



const ProjectAndCaseSection = () => {
  return (
    <section className="project-and-case">
      <div className="container">
        <PrintSectionTitle section="Project & Case Studies" title="Let’s Looks Our Global Projects"/>
        <div className="project-and-cases">
          <PrintProject image={imageOne} text='Grow your business'/>
          <PrintProject image={imageTwo} text='Why your client needs a responsive website'/>
          <PrintProject image={imageThree} text='Educate your employees to get better results'/>
          <PrintProject image={imagefour} text='Business Insights is a important piece of your business'/>

        </div>
        <div className="all-recent">
          <Buttons title='All Recent Projects'/>
        </div>
      </div>
  </section>
  )
}

export default ProjectAndCaseSection