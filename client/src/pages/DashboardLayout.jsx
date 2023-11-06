import React, { createContext, useContext, useState } from 'react'
import { BigSidebar, Navbar, SmallSidebar } from '../components'
import { Outlet } from 'react-router-dom';
import "./DashboardLayout.css";

const DashboardContext = createContext();

const DashboardLayout = () => {

  ////////////
  const user = {name: "tobby"}
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);


  const toggleDarkTheme = () => {
    console.log('toggle dark theme');
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const logoutUser = async () => {
    console.log('logout user ')
  }

  return (
    <DashboardContext.Provider
    value={{user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser}}
    >

   
    <div>
      <div> 

      <Navbar />
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
    </DashboardContext.Provider>
  )
}
export const userDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout
