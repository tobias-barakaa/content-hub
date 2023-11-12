import React from 'react';
import './SmallSidebar.css';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import { userDashboardContext } from '../pages/DashboardLayout';


const SmallSidebar = () => {
  const data = userDashboardContext();
  return (
    <div>
     <aside>
       <NavLinks />
                  
        </aside>
    </div>
  )
}

export default SmallSidebar
