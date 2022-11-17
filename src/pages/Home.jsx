import React from 'react'
import { Helmet } from 'react-helmet'
import { ServicesArray } from '../constants'
// components
import Header from '../components/Header/Header'
import Service from '../components/Service/Service'
import Solution from '../components/Solution/Solution'
import Footer from '../components/Footer/Footer'


const Home = () => {
    const filteredServices = ServicesArray.slice(0, 3)
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <Header />
            <Service ServicesArray={filteredServices} />
            <Solution />
            <Footer />
        </>
    )
}

export default Home