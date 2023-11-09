import React from 'react';
import './LandingLayout.css';

const LandingLayout = () => {
  return (
    <>
    <div className='conn'>
      <p className='topic'>
        Content and Marketing <br />Services Topics
      </p>
      
      <div className='cardd'>
        <div className='ull'>
        <h3>Article and Blog Writing</h3>

        </div>
        <div className='list-ul'>
          <p>

          </p>
          High-quality blog posts<br/>
    Informative articles<br />
    SEO-optimized content<br />
    Engaging storytelling <br />
    Industry-specific expertise
        </div>
      </div>
      <div className='cardd'>
      <div className='ull'>
        <h3>Website Marketing</h3>

        </div>
        <div className='list-ul'>
        Digital marketing strategies
SEO optimization
Content marketing
Social media management
Online advertising
        </div>
      </div>


    </div>



 

    </>
  );
}

export default LandingLayout;
