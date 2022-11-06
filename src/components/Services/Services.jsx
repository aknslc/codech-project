import React from 'react'
import './services.css'
import { HomeServices } from '../../constants'
const Services = () => {
    return (
        <section id='services'>
            <div className="container">
                <div className="services_content">
                    <h2 className='section_title'>Our Services</h2>

                    <div className="row">
                        {HomeServices.map(service => (
                            <div key={service.id} className="service_item col-lg-4 col-md-6 col-sm-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">{service.title}</h5>
                                        <p class="card-text">{service.content}</p>
                                        <a className='custom_button' href="/">For More</a>
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

export default Services