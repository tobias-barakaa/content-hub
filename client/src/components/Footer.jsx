import React from 'react';
import "./Footer.css";
import Companies from './Companies';

const Footer = () => {
  return (
    <div>
<div>
    <Companies />
</div>
<div className='footer'>

<footer>
  <div class="footer-content">
    <div class="footer-section">
      <h4>Explore More</h4>
      <ul>
        <li><a href="#industry-insights">Industry Insights</a></li>
        <li><a href="#tips-for-success">Tips for Success</a></li>
        <li><a href="#updates-and-trends">Updates and Trends</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h4>About the Author</h4>
      <p>John Doe is a seasoned content creator and digital strategist passionate about helping others succeed in the online realm. Connect with John on <a href="https://twitter.com/johndoe" target="_blank">Twitter</a> and <a href="https://linkedin.com/in/johndoe" target="_blank">LinkedIn</a>.</p>
    </div>

    <div class="footer-section">
      <h4>Connect With Us</h4>
      <ul class="social-links">
        <li><a href="https://twitter.com/yourwebsite" target="_blank"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://facebook.com/yourwebsite" target="_blank"><i class="fab fa-facebook"></i></a></li>
        <li><a href="https://instagram.com/yourwebsite" target="_blank"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>
  </div>

  <p class="copyright">© 2023 Your Website Name. All rights reserved.</p>
</footer>
    
     </div>
    </div>
  )
}

export default Footer;
