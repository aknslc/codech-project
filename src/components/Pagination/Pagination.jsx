import React from 'react'
import './pagination.css'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { Link } from 'react-router-dom';
import { useServices } from '../../context/ServicesContext';

const Pagination = () => {
    const { 
        currentPage, 
        setCurrentPage, 
        servicesPerPage,
        paginate ,
        totalServices
    } = useServices();

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalServices / servicesPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <div className='container'>

            <ul className="pagination justify-content-center">
                <li className={`${currentPage === 1 ? 'page-item disabled px-4' : 'page-item px-4 '}`}>
                    <Link to="#!" className='page-link' onClick={() => setCurrentPage(currentPage - 1)}>
                        <IoIosArrowBack />
                    </Link>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item  px-1">
                        <Link onClick={(e) => {
                            e.preventDefault()
                            paginate(number)
                        }} to="!#" className='page-link  px-4'>
                            {number}
                        </Link>
                    </li>
                ))}
                <li className={`${currentPage === pageNumbers.length ? 'page-item disabled px-4' : 'page-item px-4'}`}>
                    <Link to="#!" className='page-link' onClick={() => setCurrentPage(currentPage + 1)}>
                        <IoIosArrowForward />
                    </Link>
                </li>

            </ul>

        </div>
    )
}

export default Pagination