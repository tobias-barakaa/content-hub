import React, { useState } from 'react'
import FormInput from './FormInput'
import './TimeFrame.css';

const TimeFrame = () => {
  const [timeFrame, setTimeFrame] = useState('');
  return (
    <div className='duration'>
     
        <label htmlFor="time-frame">Time Frame:</label>
        <select id="duration">
  {[1, 2, 3, 4, 5, 6, "1 week"].map((value) => (
    <option key={value} value={typeof value === 'number' ? `${value} days` : value}>
      {typeof value === 'number' ? `${value} days` : value}
    </option>
  ))}
</select>



    </div>
  )
}

export default TimeFrame;
