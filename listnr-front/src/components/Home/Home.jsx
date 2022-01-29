import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import '../Home/Home.css'

function Home() {
  return <Layout>
  <div className='home-container'>
  <div className='home-nav-container'>
 <Link className='home-submit-link' to='/submitmusic'>Submit your own music</Link>
 <a className='dummy-link' href='/' >Fan Favorites</a>
 <a className='dummy-link' href='/' >Recents</a>
 <a className='dummy-link' href='/'>Your Page</a>

  </div>

 

  <div className='banner-img-container'>
      
      <img src='url.com' alt='banner'/>
  </div>
<div className='home-card-container'>
<h1>Cards of Music Uploads or Urls</h1>
  <Card />
  </div>
  </div>
  
  </Layout>
}

export default Home;
