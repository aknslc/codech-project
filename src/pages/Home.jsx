import React from 'react'

// components
import Header from '../components/Header/Header'
import Services from '../components/Services/Services'
import Solution from '../components/Solution/Solution'
import Footer from '../components/Footer/Footer'


const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <Solution/>
            <Footer/>
        </>
    )
}

export default Home