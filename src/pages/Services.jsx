import React, { useState } from 'react'
import { ServicesArray } from '../constants'
import { Helmet } from 'react-helmet'

// components
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Service from '../components/Service/Service'
import Pagination from '../components/Pagination/Pagination'


const Services = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [servicesPerPage] = useState(3);


    // get current services

    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = ServicesArray.slice(indexOfFirstService, indexOfLastService);

    // change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Services</title>
            </Helmet>
            <Navbar />
            <Service
                ServicesArray={currentServices}
            />
            <Pagination
                servicesPerPage={servicesPerPage}
                totalServices={ServicesArray.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <Footer />
        </>
    )
}

export default Services