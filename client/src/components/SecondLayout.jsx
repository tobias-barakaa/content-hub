import React from 'react';
import './SecondLayout.css';
import second from '../assets/second.png';
import fourth from '../assets/fourth.png';

const SecondLayout = () => {
  return (
    <div>
 <div className="landinglayout">
  <div className="flex-container">

  <div className="second-right">
      <div className="left-1">
        
        <img src={second} className='cloudina' alt="image" />
      </div>
    </div>

    <div className="second-left">
      <div className="left-2">
        <h1>Article and Blog Writing</h1>
        <p>
          High-quality blog posts, informative articles,<br /> SEO-optimized content,
          engaging storytelling,<br /> and industry-specific <br />expertise are essential
          ingredients for <br />creating a successful online presence.{" "}
        </p>
        <button className="explore">Explore More</button>
      </div>
    </div>

   
  </div>


  <div className="flex-container">

<div className="second-right">
    <div className="left-1">
      
      <img src={fourth} className='cloudina' alt="image" />
    </div>
  </div>

  <div className="second-left">
    <div className="left-2">
      <h1>Article and Blog Writing</h1>
      <p>
        High-quality blog posts, informative articles,<br /> SEO-optimized content,
        engaging storytelling,<br /> and industry-specific <br />expertise are essential
        ingredients for <br />creating a successful online presence.{" "}
      </p>
      <button className="explore">Explore More</button>
    </div>
  </div>

 
</div>
</div>
    </div>
  )
}

export default SecondLayout
