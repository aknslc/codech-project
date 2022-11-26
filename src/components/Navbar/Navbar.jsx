import React from 'react'
import logo from '../../assets/images/logo.png'
import { navLinks } from '../../constants/index'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {



  return (

    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className='logo' src={logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {navLinks.map(nav => (
              <li
                className="nav-item"
                key={nav.id}
              >
                <NavLink className="nav-link"
                  to={`/${nav.id !== 'home' ? nav.id : "" }`}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>


  )
}

export default Navbar