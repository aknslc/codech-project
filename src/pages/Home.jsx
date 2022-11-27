import React from 'react'
// components
import Header from '../components/Header/Header'
import Service from '../components/Service/Service'
import Solution from '../components/Solution/Solution'
import Footer from '../components/Footer/Footer'
import News from '../components/News/News'
import Clients from '../components/Clients/Clients'


const Home = () => {
    
    return (
        <>
            <Header />
            <Service />
            <Solution />
            <News />
            <Clients/>
            <Footer />
        </>
    )
}

export default Home