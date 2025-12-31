import React from 'react'
import  '../styles/NavBar.css'

import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      
          <Link to="/"> Home </Link>
          <Link to="/Branches"> Branches </Link>
          <Link to="/Events"> Events </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>

          
      
    </div>
  )
}

export default NavBar;