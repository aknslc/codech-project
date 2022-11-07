import React from 'react'
import './footer.css'

// logo
import logo from "../../assets/images/logo.svg"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_content d-flex justify-content-between align-items-center">
                    <div className="footer_item footer_block_address">
                        <a className='footer_logo' href="/">
                            <img src={logo} alt="" />
                        </a>
                        <p className="address">
                            Emniyetevleri Mah Batı Sokak
                            <br />
                             No: 2 Kağıthane/İstanbul
                        </p>

                        <p className="phone">
                            +90 (212) 909 80 56
                        </p>

                        <p className='mail'>
                            info@rubiklabs.com
                        </p>
                    </div>
                    <div className="footer_item">
                        <h3 className="footer_item_title">
                            Platforms
                        </h3>

                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                    </div>
                    <div className="footer_item">
                        <h3 className="footer_item_title">
                            About Us
                        </h3>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                    </div>
                    <div className="footer_item">
                        <h3 className="footer_item_title">
                            About Us
                        </h3>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                    </div>
                    <div className="footer_item">
                        <h3 className="footer_item_title">
                        Platforms
                        </h3>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                        <a className='footer_item_link' href="/">Who Are We</a>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer