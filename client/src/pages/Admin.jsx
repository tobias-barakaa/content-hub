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
    <div>
      <h2>Admin page</h2>
      <StatItem title='current users' count={users} 
      color='#e9b949 ' 
      icon={<FaSuitcaseRolling />}
      />

    <StatItem title='Total Articles' 
    count={articles} 
      color='#e9b949 ' 
      icon={<FaSuitcaseRolling />}
      />
      {/* Render the rest of your component */}
    </div>
  );
};

export default Admin;
