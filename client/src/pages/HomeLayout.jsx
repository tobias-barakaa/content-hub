import React from 'react'
import { Outlet } from 'react-router-dom';
import "./HomeLayout.css";

const HomeLayout = () => {
  return (
    <div>
     
        
      <Outlet />
    </div>
  )
}

export default HomeLayout
