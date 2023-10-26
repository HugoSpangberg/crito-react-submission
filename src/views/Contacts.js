import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ShowcaseContactSection from '../components/ShowcaseContactSection'
import ContactInfoSection from '../components/ContactInfoSection'
import { MassageSection } from '../components/MassageSection'
import GoogleMapsSection from '../components/GoogleMapsSection'

const Contacts = () => {
  return (
    <>
    <div className='wrapper-grid'>
      <Header />  
      <ShowcaseContactSection />
      <ContactInfoSection />
      <MassageSection />
      <GoogleMapsSection />
      <Footer />  

    </div>

    </>
  )
}

export default Contacts