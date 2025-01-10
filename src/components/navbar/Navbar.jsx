import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* logoo */}
      <div className='nav_logo'>
        <img src={logo} alt="Logo" />
      </div>
      {/* links */}
      <div className="nav_links">
        <ul>
          <li><a href="/findflat">Find Flats</a></li>
          <li><a href="/signup">Find Flatmates</a></li>
          <li><a href="/postflat">Post Flat</a></li>
        <li><a href="/aboutus">About Us</a></li>
         <li><a href="/FAQ">FAQs</a></li>
        </ul>
      </div>
      {/* auth */}
      <div className="nav_auth">
        <div className="auth_button"><a href='/signup'>Signup</a>|<a href='/login'>Login</a></div>
      </div>
      </nav>
  )
}

export default Navbar