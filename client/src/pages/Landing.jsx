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

       <aside className='aside'>

       
      <div class="container-class">
      <div className='left'>
  <div className='text-container'>
    <p className='expand'>
      <span className='expand-text'>
        Expand your <br /> online presence
      </span>
    </p>
  </div>
  <div className='social'>
    <span className='implement'>Implementing</span> expert social media strategies,
    creating captivating blog content, and producing <br />
    high-quality articles to attract an audience,
    captivating blog content, and high-quality articles. <br />
    captivating blog content, and high-quality articles.
  </div>
  <div>
    <Link to='/register' className='buttonn'>CLICK TO GET STARTED</Link>
  </div>
</div>
  </div>
  </aside>

<div className='landinglayout'>
  <LandingLayout />
</div>

    
    </>
  );
}

export default Landing;
