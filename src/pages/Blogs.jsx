import React from 'react'
import { Helmet } from 'react-helmet'

// components
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import Posts from '../components/Posts/Posts'

const Blogs = () => {
    const title = "Blogs";

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blogs</title>
            </Helmet>
            <Navbar />
            <Banner title={title} />
            <Posts/>
            <Footer />
        </>
    )
}

export default Blogs