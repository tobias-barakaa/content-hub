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
      <div className='expand'>
        Expand your <br /> online presence
      </div>
      <div className='social'>
      <span className='implement'>Implementing</span> expert social media strategies,
      creating captivating blog content, and producing <br />
      high-quality articles to attract audience,
        captivating blog content, and high-quality articles. <br />
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
