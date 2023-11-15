import React from 'react';
import './StatItem.css'

const StatItem = ({count, title, icon, color, bcg}) => {
  return (
    <>
    
    <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>

      
    </header>
    <h5 className='title' >{title}</h5>
    </>

  )
}

export default StatItem
