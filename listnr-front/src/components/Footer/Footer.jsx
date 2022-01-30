import React from 'react';
import '../Footer/Footer.css'

import { Link } from 'react-router-dom'
export default function Footer() {
  return <div className='footer'>
      <Link to='/about'>
          <h4 className='footer-about-link'>About</h4></Link>
      <h3 className='footer-affil'>Affiliates Link</h3>
  </div>;
}
