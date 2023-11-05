import React from 'react';
import './Landing.css';
import content from '../assets/content.png';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const Landing = () => {
  return (
    <div>
<Navbar />

<div class="containerr">
  <div className="left-wing">
 
  <header className='header'>
    <div>Welcome to Our Website</div>
  </header>
  <div>
    <span>
    <div className="custom-text">
  Elevate your online presence by harnessing<br />the power of 
  social media with our expert<br />
   marketing strategies and
  captivating<br /> blog and high-quality article content.
</div> 
     
    </span>
   <div className='divv'>
      <Link to='/register' className='buttonn'>CLICK TO GET STARTED</Link>
   </div>
      

    
  </div>
  </div>
  <div className="right-wing">

<img src={content} alt='preview' className='con' />



<div class="vertical-lin"></div>


  </div>
</div>

    </div>
  )
}


export default Landing

