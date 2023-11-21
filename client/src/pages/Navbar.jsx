import React from 'react'
import "./Navbar.css";
import Landing from './Landing';
const Navbar = () => {

  return (
    <>
    <div>

{/* <nav className="navbar">
  <h4 className="content-hub">Ox gang</h4>
  <div className="navbar-right">
    <li className='dropdown'>
      <a>SERVICES</a>
    <div className="dropdown-content">
      <a href="#">Content Writing</a>
      <a href="#">Content Editing</a>
      <a href="#">Content Strategy</a>
    </div>
    </li>
    <span className="vertical-line"></span>
    <a href="#">BLOG</a>
    <span className="vertical-line"></span>
    <li class="dropdown">
      <a href="#">ORDER CONTENT</a>
      <div class="dropdown-content">
        <a href="#">Option 1</a>
        <a href="#">Option 2</a>
        <a href="#">Option 3</a>
      </div>
    </li>
    <span className="vertical-line"></span>
       <li className="get-started">Get Started</li>
  </div>
      </nav> */}

<div class="navbar">
  <div class="navbar-logo">
    Logo
  </div>
  <ul class="navbar-items">
    <li><a href="#">Use Cases</a></li>
    <li><a href="#">Contact Us</a></li>
    <li><a href="#">Documentation</a></li>
    <li class="navbar-dropdown">
      <a href="#">More</a>
      <div class="navbar-dropdown-content">
        <a href="#">Manage media</a>
        <a href="#">Edit media</a>
        <a href="#">Connect media</a>
      </div>
    </li>
    <li><a href="#">Sign In</a></li>
    <li><button class="get-started">Get Started</button></li>
  </ul>
</div>

      
    </div>
    

    </>
  )
}

export default Navbar;


