import React from 'react';
import '../Nav/Nav.css'
import { Link } from 'react-router-dom';

const Nav = (props) => {

  return( <nav className='nav'>
      <div className='nav-title-container'>

      <Link to='/'> <h1 className='nav-title'>LiSTNr</h1></Link>
      </div>
    <div className='nav-search-container'>
    <input className='nav-search'type="text" placeholder="Search.."/>
      </div>

      
      <div className='nav-user-greet-area'>
      <h4 className='nav-user-greet'>Hello, Listnr!</h4>
      </div>

      <div className='nav-login'>
          
          <Link to='/login'>Login</Link>
      </div>
     
  
  </nav>
  )
};

export default Nav;
