import React from 'react'
import {Link} from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <div id='nav'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Register">Register</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <h2>Book App</h2>
    </div>
  )
}

export default Navbar