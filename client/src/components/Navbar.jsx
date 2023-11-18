import React from "react";
import { FaAlignLeft } from "react-icons/fa";
import { userDashboardContext } from "../pages/DashboardLayout";
import LogoutContainer from "./LogoutContainer";
import "./Navbar.css";


const Navbar = () => {
  const { toggleSidebar, user, logoutUser } = userDashboardContext();
  return (
    <>
      <div className="nav-center">
 <div className="btn-container">
  <LogoutContainer />
 </div>
        </div>
      
    </>
  );
};

export default Navbar;
