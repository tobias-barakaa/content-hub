import React from 'react'
import { FaAlignLeft } from 'react-icons/fa'
import "./Navbar.css";
import { userDashboardContext } from '../pages/DashboardLayout';

const Navbar = () => {
  const {toggleSidebar} = userDashboardContext();
  return (

<div className="navbarr">
          

    
    <div className='nav-center'>
      <button type='button' className='toggle-btn'
      onClick={toggleSidebar}
      >
        <FaAlignLeft />
      </button>
      
    </div>
    <div className="navbar-searchh">
            <input type="text" placeholder='search article' />
        </div>
    <div className='btn-container'>toggle/logout</div>

    </div>
  )
}

export default Navbar
