import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">PokeMon Times</a>
        <BrowserRouter>
          <ul className="right">
              <li><Link exact to="/">Home</Link></li>
              <li><Link exact to="/about">About</Link></li>
              <li><Link exact to="/contact">Contact</Link></li>
          </ul>
        </BrowserRouter>
      </div>
    </nav>
  )
}

export default Navbar
