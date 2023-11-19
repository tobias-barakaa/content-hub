 import React from 'react';
import './Landing.css';
import content from '../assets/tobs.png';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import LandingLayout from '../components/LandingLayout';

const Landing = () => {
  return (
    <>
      <Navbar />

       
      <div class="container-class">
  <div className='left' >
  <span>
      <div className='expand-online-presence'>
        Expand your online presence
      </div>
      <div>
        with our expert social media strategies,
      </div>
      <div>
        captivating blog content, and high-quality articles.
      </div>
    </span>
    <div>
      <Link to='/register' class='buttonn'>CLICK TO GET STARTED</Link>
    </div>
  </div>
  </div>

<div className='landinglayout'>
  <LandingLayout />
</div>

    
    </>
  );
}

export default Landing;
