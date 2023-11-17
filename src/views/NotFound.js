import React from 'react'
import Footer from '../components/Footer'
import Buttons from '../components/generics/Buttons'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className='wrapper-grid'>
        <Header/>
            <main className='not-found container'>
            <h1>404 Page Not Found</h1>
            <p>This site is currently under construction. Please check back later for updates.</p>
            <i class="fa-sharp fa-solid fa-gear rotating"></i>
            <Buttons type='yellow' title='Back to homepage' url='/'/>
            </main>
        <Footer /> 
      </div>
    </>

  )
}

export default NotFound