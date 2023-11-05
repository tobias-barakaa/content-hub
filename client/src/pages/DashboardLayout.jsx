import React from 'react'
import { BigSidebar, Navbar, SmallSidebar } from '../components'
import { Outlet } from 'react-router-dom';
import "./DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div>
      <div> 

      <nav className="navbarr">
            <div className="navbar-searchh">
            <input type="text" placeholder='search article' />
        </div>




    </nav>
      </div>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          
          <div className='dashboard__content'> 
          <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
