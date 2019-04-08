import React from 'react'

import { withRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

const Navbar = (props) => {
  // console.log(props);
  // setTimeout(() =>{
  //   props.history.push('/about')
  // }, 2000)
  return(
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">PokeMon Times</a>
        <BrowserRouter>
          <ul className="right">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
          </ul>
        </BrowserRouter>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
