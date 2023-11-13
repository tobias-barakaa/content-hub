import React, { useState } from 'react'
import FormInput from './FormInput'
import './OSignupTest.css';

const OSignupTest = () => {
  const [timeFrame, setTimeFrame] = useState('');
  return (
    <div className='duration'>
     
        <label htmlFor="time-frame">Time Frame:</label>
        <select id="duration">
  <option
 
value="1 day">1 day</option>

  
<option
 
value="2 days">2 days</option>

  
<option
 
value="3 days">3 days</option>

  
<option
 
value="4 days">4 days</option>

  
<option
 
value="5 days">5 days</option>

  
<option
 
value="6 days">6 days</option>

  
<option
 
value="1 week">1 week</option>

</select>



    </div>
  )
}

export default OSignupTest
