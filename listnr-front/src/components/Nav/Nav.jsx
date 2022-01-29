import React from 'react';
import '../Nav/Nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {

  return <nav className='nav'>
      <div className='nav-title-container'>

      <a href="/" className='.nav-title' >LiSTNr</a>
      </div>
    <div className='nav-search-container'>
    <input className='nav-search'type="text" placeholder="Search.."/>
      </div>

      
      <div className='nav-user-greet-area'>
      <h4 className='nav-user-greet'>Hello, Listnr!</h4>
      </div>

      <div className='nav-login'>
          <h3 className='nav-login-link'>Login Link here</h3>
      </div>
     
  
  </nav>
};

export default Nav;
