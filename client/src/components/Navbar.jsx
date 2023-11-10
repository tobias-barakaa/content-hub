import React from "react";
import { FaAlignLeft } from "react-icons/fa";
import "./Navbar.css";
import { userDashboardContext } from "../pages/DashboardLayout";


const Navbar = () => {
  const { toggleSidebar, user, logoutUser } = userDashboardContext();
  return (
    <div className="navbarr">
      <div className="nav-center">
        {/* <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button> */}
        <h6 className="ox-gang">Ox gang</h6>
      </div>
     
      <div
        className="btn-container"
        onClick={logoutUser}
      >
        toggle/logout
      </div>
    </div>
  );
};

export default Navbar;
