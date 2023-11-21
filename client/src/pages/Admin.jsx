import React from 'react';
import "./Admin.css";
import { redirect, useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import StatItem from './StatItem';
import { FaSuitcaseRolling } from 'react-icons/fa';

export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    // Display an alert and redirect to the dashboard
    alert("You can't access this page");
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const { users, articles } = useLoaderData();

  return (
    <>
      <h2>Admin page</h2>
    <div className='everything'>

      <StatItem title='current users' count={users} 
      icon={<FaSuitcaseRolling className='icons' />}
      
      />

    <StatItem title='Total Articles'
    className='stat-item'
    count={articles} 
      icon={<FaSuitcaseRolling />}
      />
      
    </div>
    </>
  );
};

export default Admin;
