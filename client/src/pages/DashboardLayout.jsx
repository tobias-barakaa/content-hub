import React, { createContext, useContext, useState } from 'react'
import { BigSidebar, Navbar, SmallSidebar } from '../components'
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import "./DashboardLayout.css";
import customFetch from '../utils/customFetch';


export const loader = async() => {
  try {
    const {data} = await customFetch.get('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
}

const DashboardContext = createContext();

const DashboardLayout = () => {
  const navigate = useNavigate();
  const {user} = useLoaderData();
   const [showSidebar, setShowSidebar] = useState(false);
  // const [isDarkTheme, setIsDarkTheme] = useState(false);


  // const toggleDarkTheme = () => {
  //   // console.log('toggle dark theme');
  // }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const logoutUser = async () => {
   navigate('/');
   await customFetch.get('/logout');
  }

  return (
    <DashboardContext.Provider
    value={{user, showSidebar, toggleSidebar, logoutUser}}
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
          <Outlet context={{user}}/>
          </div>
        </div>
      </main>
    </div>
    </DashboardContext.Provider>
  )
}
export const userDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout
