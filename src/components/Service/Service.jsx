import React from 'react'
import './service.css'

const Service = ( {ServicesArray}) => {

    
    return (
        <section id='services'>
            <div className="container">
                <div className="services_content">
                    <h2 className='section_title'>Our Services</h2>

                    <div className="row">
                    {ServicesArray.map(service => (
                            <div key={service.id} className="service_item col-lg-4 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">{service.content}</p>
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

export default Service