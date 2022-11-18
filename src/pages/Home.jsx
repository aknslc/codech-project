import React from 'react'
import { Helmet } from 'react-helmet'
import { services } from '../constants'
// components
import Header from '../components/Header/Header'
import Service from '../components/Service/Service'
import Solution from '../components/Solution/Solution'
import Footer from '../components/Footer/Footer'
import News from '../components/News/News'
import Clients from '../components/Clients/Clients'


const Home = () => {
    const filteredServices = services.slice(0, 3)
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <Header />
            <Service services={filteredServices} />
            <Solution />
            <News />
            <Clients />
            <Footer />
        </>
    )
}

export default Home