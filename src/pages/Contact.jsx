import React from 'react'
import { Helmet } from 'react-helmet'


// components
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import ContactCard from '../components/ContactCard/ContactCard'
const Contact = () => {
    const title = "Contact";
    return (
        <>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
            </Helmet>
            <Navbar />
            <Banner title={title} />
            <ContactCard/>
            <Footer />
        </>
    )
}

export default Contact