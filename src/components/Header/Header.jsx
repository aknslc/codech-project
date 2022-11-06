import React from 'react'
import './header.css'

// components
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'


const Header = () => {
    return (
        <header>
            <Navbar />
            <Hero />
        </header>
    )
}

export default Header