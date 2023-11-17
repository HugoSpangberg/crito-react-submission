import React from 'react'

const PrintReview = ({image, name, title}) => {
  return (
    <>
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
                  <img src={image} alt=""/>
                  <div className="text-child">
                    <h4>{name}</h4>
                    <p>{title}</p>
                  </div>
                </div>
            </div>
    </>
  )
}

export default PrintReview