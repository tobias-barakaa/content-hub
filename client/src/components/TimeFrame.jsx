import React, { useState, useEffect } from 'react';
import './TimeFrame.css';

const TimeFrame = () => {
  const [selectedDuration, setSelectedDuration] = useState(
    localStorage.getItem('selectedDuration') || ''
  );

  useEffect(() => {
    
    return () => {
      localStorage.setItem('selectedDuration', selectedDuration);
    };
  }, [selectedDuration]);

  return (
    <div className='duration'>
      <label htmlFor="time-frame">Time Frame:</label>
      <select
        id="duration"
        name='duration'
        value={selectedDuration}
        onChange={(e) => setSelectedDuration(e.target.value)}
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
