import React from 'react'
import tobby from '../assets/tobby.png'
import formimage from '../assets/form-image.png'
import com from '../assets/companies/echologoblue.png'
import zelis from '../assets/companies/zelisline.png'
import media from '../assets/companies/mediamasses.png'




import "./Review.css";
const Review = () => {
  return (
    <div className='review container'>
      {/* <div class="card">
  <img src={tobby} className="image" />
    <h7 className="elem-review">
    I recently had the pleasure of exploring this content hub,
     and I must say, the user interface is nothing short of impressive.
     The design is clean, sleek, and incredibly intuitive. Navigating through
     the different sections feels like a breeze, and I appreciate how 
     everything is organized for easy access.


    </h7>
  
</div> */}
<div className='display'>
<div class="product-card">
    <div class="product-image">
      <img src={zelis} alt="Product Image" />
      <strong><h5 className='namee'>Tobby baraka,</h5></strong>

    </div>
    <div class="product-details">
      <h7 class="product-title">
      I recently had the pleasure of exploring this content hub,
     and I must say, the user interface is nothing short of impressive.
     The design is clean, sleek, and incredibly 
      </h7>
      
    </div>
  </div>


  <div class="product-car">
    <div class="product-image">
      <img src={com} alt="Product Image" />
      <strong><h5 className='namee'>Tobby baraka,</h5></strong>

    </div>
    <div class="product-details">
      <h7 class="product-title">
      I recently had the pleasure of exploring this content hub,
     and I must say, the user interface is nothing short of impressive.
     The design is clean, sleek, and 
 <br />
     I recently had the pleasure of exploring this content hub,
     and I must say, the user interface is nothing short of impressive.
     The design is clean, sleek, and 
      </h7>
      
    </div>
  </div>




  <div class="product-card">
    <div class="product-image">
      <img src={tobby} alt="Product Image" />
      <strong><h5 className='namee'>Tobby baraka,</h5></strong>

    </div>
    <div class="product-details">
      <h7 class="product-title">
      I recently had the pleasure of exploring this content hub,
     and I must say, the user interface is nothing short of impressive.
     The design is clean, sleek, and incredibly 
      </h7>
      
    </div>
  </div>

</div>










<div className='display'>
<div class="product-cad">
    <div class="product-image">
      <img src={formimage} alt="Product Image" />
      <strong><h5 className='namee'>Tobby baraka,</h5></strong>

    </div>
    <div class="product-details">
      <h7 class="product-title">
      I recently had the pleasure of exploring this content hub,
     and I must say, the user interface is nothing short of impressive.
     The design is clean, sleek, and incredibly 
      </h7>
      
    </div>
  </div>


  <div class="product-ca">
    <div class="product-image">
      <img src={com} alt="Product Image" />
      <strong><h5 className='namee'>Tobby baraka,</h5></strong>

    </div>
    <div class="product-details">
      <h7 class="product-title">
      I recently had the pleasure of exploring this content hub,
     and I must say, the user interface is nothing short of impressive.
     The design is clean, sleek, and 
 <br />
     I recently had the pleasure of exploring this content hub,
     and
      </h7>
      
    </div>
  </div>




  <div class="product-cad">
    <div class="product-image">
      <img src={zelis} alt="Product Image" />
      <strong><h5 className='namee'>Tobby baraka,</h5></strong>

    </div>
    <div class="product-details">
      <h7 class="product-title">
      I recently had the pleasure of exploring this content hub,
     and I must say, the user interface is nothing short of impressive.
     The design is clean, sleek, and incredibly 
      </h7>
      
    </div>
  </div>

</div>

   </div>
  )
}

export default Review
