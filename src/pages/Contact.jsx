import React from 'react'


// components
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import ContactCard from '../components/ContactCard/ContactCard'

const Contact = () => {
    const title = "Contact";
    return (
        <>
            <Navbar />
            <Banner title={title} />
            <ContactCard/>
            <Footer />
        </>
    )
}

export default Contact