import React, { createContext, useContext, useState } from "react";
import { BigSidebar, SmallSidebar, Navbar } from "../components";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import "./DashboardLayout.css";
import customFetch from "../utils/customFetch";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardContext = createContext();

const DashboardLayout = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate();


const [showDropdown, setShowDropdown] = useState(false);



const navigateToProfile = () => {
  
  navigate('/dashboard/profile');
};
  const { user } = useLoaderData();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/logout");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  

  return (
    <>


<div className="dropdown-container">
  <h2 className="container">Ox-Gang</h2>
  <div className="nav-bar" />
  <div className="horizontal-line"></div>
  <div className="dashboard">
    <div className="nav-center">
      {/* Your existing content */}
    </div>
    <div className="profile-wrapper">
      <div type="button" className="profile-button" onClick={toggleDropdown}>
        {user?.avatar ? (
          <img src={user.avatar} alt="avatar" className="image" />
        ) : (
          <FaUserCircle />
        )}
        {user?.name}
        <FaCaretDown />
      </div>
      {showDropdown && (
        <div className="dropdown">
          <div className="dropdown-item" onClick={logoutUser}>
            Logout
          </div>
          <div className="dropdown-item" onClick={navigateToProfile}>
            Profile
          </div>
        </div>
      )}
    </div>
  </div>
</div>

    <DashboardContext.Provider
      value={{ 
        user,
         toggleSidebar, 
          }}
    >
      {/* <div className='container nav-center'>
      
       <h3 className="ox-gang">Ox gang</h3>

        <input type="text" placeholder="search article" />
        
        <button className='logout'
        onClick={logoutUser}
      >
        Logout
      </button>

</div> */}

     
   

    
     
       
        <main className="dashboard">
          <SmallSidebar />
          <div className="bigsidebar">
            <BigSidebar />
          </div>
          <div>
            <div className="">
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
     
    </DashboardContext.Provider>
    </>
  );
};
export const userDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
