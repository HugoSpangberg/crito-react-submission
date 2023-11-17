import React from 'react'
import ClientOne from '../assets/images/client1.png'
import ClientTwo from '../assets/images/client2.png'
import ClientThree from '../assets/images/client3.png'
import PrintSectionTitle from './generics/PrintSectionTitle'
import PrintReview from './generics/PrintReview'



const TestimonialSection = () => {
  return (
    <section className="testimonial">
      <div className="container">
          <PrintSectionTitle section="Testimonial" title="What Our Client Says"/>
          <div className="clients">
            <PrintReview image={ClientOne} name='Cassandra Warren' title='Business Manager, Dorfus'/>
            <PrintReview image={ClientTwo} name='Amanda Tulling' title='Senior Developer, Square'/>
            <PrintReview image={ClientThree} name='Jack McDogglas' title='Key Account Manager, Gobona'/>
          </div>
        <div className="all-reviews">
          <button className="btn-black">All Reviews <i className="fa-light fa-arrow-up-right"></i></button>
        </div>
      </div>
  </section>
  )
}

export default TestimonialSection