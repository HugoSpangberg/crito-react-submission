import React from 'react'
import ClientOne from '../assets/images/client1.png'
import ClientTwo from '../assets/images/client2.png'
import ClientThree from '../assets/images/client3.png'



const TestimonialSection = () => {
  return (
    <section className="testimonial">
      <div className="container">
          <div className="section-title">
            <p>Testimonial</p>
            <h2>What Our Client Says</h2>
          </div>
          <div className="clients">
            <div className="clients-parent">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Laudantium libero, ad dignissimos velit 
                qui, dolorum obcaecati cum saepe nesciunt 
                nemo eligendi numquam voluptate"</p>
                <div className="client-child">
                  <img src={ClientOne} alt=""/>
                  <div className="text-child">
                    <h4>Cassandra Warren</h4>
                    <p>Business Manager, Dorfus</p>
                  </div>
                </div>
            </div>
            <div className="clients-parent">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Laudantium libero, ad dignissimos velit 
                qui, dolorum obcaecati cum saepe nesciunt 
                nemo eligendi numquam voluptate"</p>
                <div className="client-child">
                  <img src={ClientTwo} alt=""/>
                  <div className="text-child">
                    <h4>Amanda Tulling</h4>
                    <p>Senior Developer, Square</p>
                  </div>
                </div>
            </div>
            <div className="clients-parent">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Laudantium libero, ad dignissimos velit 
                qui, dolorum obcaecati cum saepe nesciunt 
                nemo eligendi numquam voluptate"</p>
                <div className="client-child">
                  <img src={ClientThree} alt=""/>
                  <div className="text-child">
                    <h4>Jack McDogglas</h4>
                    <p>Key Account Manager, Gobona</p>
                  </div>
                </div>
            </div>
          </div>
        <div className="all-reviews">
          <button className="btn-black">All Reviews <i className="fa-light fa-arrow-up-right"></i></button>
        </div>
      </div>
  </section>
  )
}

export default TestimonialSection