import React, { useState, useEffect } from 'react';
import './TimeFrame.css';

const TimeFrame = ({formData, setFormData}) => {
  

  return (
    <div className='duration'>
      <label htmlFor="time-frame">Time Frame:</label>
      <select
        id="duration"
        name='duration'
        value={formData.duration}
        onChange={(e) => setFormData({...formData, duration: e.target.value})}
      >
        {[1, 2, 3, 4, 5, 6, '1 week'].map((value) => (
          <option key={value} value={typeof value === 'number' ? `${value} days` : value}>
            {typeof value === 'number' ? `${value} days` : value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeFrame;
