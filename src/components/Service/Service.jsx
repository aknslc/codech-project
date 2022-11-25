import React from 'react'
import { useServices } from '../../context/ServicesContext'
import './service.css'
import { Link } from 'react-router-dom'

const Service = () => {

    const { currentServices } = useServices();

    return (
        <section id='services'>
            <div className="container">
                <div className="services_content">
                    <h2 className='section_title'>Our Services</h2>

                    <div className="row">
                        {currentServices.map(service => (
                            <div key={service.id} className="service_item col-lg-4 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">{service.content}</p>
                                        <div className="link_wrapper">
                                            <Link to={"/#!"} className='custom_button'>
                                                <span className='d-block'>For More</span>
                                                <div className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service