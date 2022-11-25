import React from 'react'

// components
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Service from '../components/Service/Service'
import Pagination from '../components/Pagination/Pagination'


const Services = () => {
    return (
        <>
            
            <Navbar />
            <Service/>
            <Pagination />
            <Footer />
        </>
    )
}

export default Services