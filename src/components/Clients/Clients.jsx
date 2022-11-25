import React from 'react'
import './clients.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { clients } from '../../constants';

const Clients = () => {
    const settings = {
        dots: false,
        infinite: true,
        focusOnSelect: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section id='clients'>
            <div className="container">
                <h2 className='section_title'>Clients</h2>


                <Slider {...settings}>

                    {clients.map(client => (
                        <div key={client.id} className='client_item'>
                            <img src={client.img} alt="" />
                        </div>
                    ))}

                </Slider>

            </div>
        </section>
    )
}

export default Clients