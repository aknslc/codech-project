import React from 'react'
import { Helmet } from 'react-helmet'

// components
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Service from '../components/Service/Service'
import Pagination from '../components/Pagination/Pagination'


const Services = () => {

    

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Services</title>
            </Helmet>
            <Navbar />
            <Service/>
            <Pagination />
            <Footer />
        </>
    )
}

export default Services