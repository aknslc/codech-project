import React from 'react'

import './contactCard.css'
import { FiFacebook, FiTwitter,FiInstagram } from 'react-icons/fi'

import logo from '../../assets/images/logo.png'

const ContactCard = () => {
    return (

        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className='contact_card col-lg-7'>
                        <h6>Contact Form</h6>
                        <p>
                            Subscribe to our newsletter and we will send the latest innovations and news to your e-mail address.
                            Get notified instantly.
                        </p>

                        <form action="#">
                            <div className="row mt-5">
                                <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                                    <input type="text" placeholder='Name' name='name' required />

                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                                    <input type="text" placeholder='Surname' name='surname' required />

                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                                    <input type="email" placeholder='Email Adress' name='email' required />
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                                    <input type="text" placeholder='Subject' name='subject' required />
                                </div>
                                <div className="col-lg-12 mb-5">
                                    <textarea name="message" placeholder='Your Message' cols="30" rows="10" />
                                </div>

                                <button className='custom_button' type='submit'>SUBMIT</button>
                            </div>


                        </form>

                    </div>
                    <div className="address-card col-lg-5">
                        <div className="address-card-item">

                            <img src={logo} alt="" />


                        </div>
                        <div className="address-card-item address">
                            <h3>Adress</h3>
                            <p>
                                Lorem Ipsum Mah Batı Sokak No: 2 Kağıthane/İstanbul
                            </p>
                        </div>
                        <div className="address-card-item phone">
                            <h3>Phone Number</h3>
                            <p>
                                +90 (212) 709 70 26
                            </p>
                        </div>
                        <div className="address-card-item email">
                            <h3>Email Adress</h3>
                            <p>
                                aknselc1112@gmail.com
                            </p>
                        </div>
                        <div className="address-card-item social-media">
                            <h3>Social Media</h3>
                            <div className="social-media-icons">
                                <FiFacebook className='icon' />
                                <FiTwitter className='icon' />
                                <FiInstagram className='icon' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactCard