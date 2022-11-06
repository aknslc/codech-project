import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <section id='hero'>
      <div className="container">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h2 className='hero_title'>Company Name</h2>
          <p className='hero_description'>
            You are looking to the future with company
          </p>
          <a className='custom_button' href="/">For More</a>
        </div>
      </div>
    </section>
  )
}

export default Hero