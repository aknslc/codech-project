import React from 'react'
import './banner.css'
const Banner = ({title}) => {
  return (
    <section className='banner'>
        <h1 className='banner_title'>{title}</h1>
    </section>
  )
}

export default Banner