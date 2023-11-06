import React from 'react';
import './SmallSidebar.css';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import { userDashboardContext } from '../pages/DashboardLayout';


const SmallSidebar = () => {
  const data = userDashboardContext();
  console.log(data);
  return (
    <div>
     <aside class="">
       <NavLinks className="" />
                  
        </aside>
    </div>
  )
}

export default SmallSidebar
