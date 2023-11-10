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

   
    <div className='container'>
    <div className="navbar-searchh">
        <input type="text" placeholder="search article" />
      </div>
    <div class="divline"></div>

    <div class="horizontal-line"></div>

      <div> 

      <Navbar />
      </div>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          
          <div className=''> 
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
