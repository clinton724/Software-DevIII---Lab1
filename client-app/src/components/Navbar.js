import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar () {
  const navStyle = { color: 'white' }

  return (
    <nav>
      <ul className='nav-links'>
        <Link to='/' style={navStyle}>
          <li>Home</li>
        </Link>
        <Link to='/signup' style={navStyle}>
          <li>signup</li>
        </Link>
        <Link to='/login' style={navStyle}>
          <li>Login</li>
        </Link>
        <Link to='/createGroup' style={navStyle}>
          <li>Create group</li>
        </Link>
        <Link to='/logout' style={navStyle}>
          <li>logout</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
