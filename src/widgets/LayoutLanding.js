import Footer from '../components/Footer'
import React from 'react'
import Navigation from '../components/Navigation'

const LayoutLanding = (props) => {
  return (
    <>
      <Navigation/>
      <div className='container px-10 mx-auto lg:px- '>
        {props.children}
        </div>

        <Footer/>
      
    </>
  )
}

export default LayoutLanding
