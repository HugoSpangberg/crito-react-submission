import React from 'react'
import sponsor1 from '../assets/images/8.svg'
import sponsor2 from '../assets/images/Logo-5.svg'
import sponsor3 from '../assets/images/6.svg'
import sponsor4 from '../assets/images/9.svg'
import sponsor5 from '../assets/images/10.svg'

function imageList () {
  const imagePaths = [
    sponsor1,sponsor2,sponsor3,sponsor4,sponsor5
  ];

  return imagePaths.map ((path, index) => (
    <img key={index} src={path} alt={`image ${index + 1}`}/>
  ));
}

const SponsorSection = () => {
  return (
    <>
      <section className="sponsor">
        <div className="container">
          {imageList()}
        </div>
      </section>
    </>
  )
}

export default SponsorSection


