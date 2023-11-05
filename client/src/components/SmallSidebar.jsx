import React from 'react';
import './SmallSidebar.css';
import { Link } from 'react-router-dom';

const SmallSidebar = () => {
  return (
    <div>
     <aside class="small-sidebar">
        <Link to='/dashboard/profile' >
            Profile
        </Link> <br />
        <Link to='/dashboard/admin' >
            Admin
        </Link> <br />
        <Link to='/dashboard/profile' >
            Profile
        </Link>
             
        </aside>
    </div>
  )
}

export default SmallSidebar
