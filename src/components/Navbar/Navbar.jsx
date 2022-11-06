import React from 'react'
import logo from '../../assets/images/logo.svg'
import {navLinks} from '../../constants/index'
import './navbar.css'

const Navbar = () => {
  return (

    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" />
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
                <a className="nav-link" href="/">{nav.title}</a>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>


  )
}

export default Navbar