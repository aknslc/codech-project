import React from 'react'

// components
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import Posts from '../components/Posts/Posts'

const Blogs = () => {
    const title = "Blogs";

    return (
        <>
            <Navbar />
            <Banner title={title} />
            <Posts/>
            <Footer />
        </>
    )
}

export default Blogs