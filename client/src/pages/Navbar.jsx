import React from 'react'

const Navbar = () => {
  return (
    <div>

<nav className="navbar">
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




      </nav>
      
    </div>
  )
}

export default Navbar
