import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userDashboardContext } from '../pages/DashboardLayout';
import { FaCaretDown, FaUserCircle } from 'react-icons/fa';
import "./LogoutContainer.css"


const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
const { user, logoutUser } = userDashboardContext;


    
    return (
 <>
    <button
      type="button"
      className='logout' 
      onClick={() => setShowLogout(!showLogout)}
      >
        {user?.avatar ? (
        <img src={user.avatar} alt='avatar' className='img' /> 
        ) : (
        <FaUserCircle />

        )
        }
        {user?.name}
        <FaCaretDown />
    </button>
    <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
      <button type='button' className='dropdown-btn' onClick={logoutUser}>
        Logout
        </button>
    </div>
     
     
 
    </>
  
  )
}

export default LogoutContainer
