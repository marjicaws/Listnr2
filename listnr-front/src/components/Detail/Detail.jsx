import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom'

export default function Detail() {
  return <Layout>
  <div className='detail'>
      <div className='detail-title'>
      <h1>This is the Detail Page, This will be the user profile page too.</h1>
      </div>
      <div className='detail-image'>
      <img src = "url.com" alt="user-img"/>
      </div>
      <div className='detail-bio'>
        <h3 className='detail-bio'>Bio goes here</h3>
        <h3 className='detail-career'>user career info</h3>

      </div>

    <div className='detail-music'>
        <h1>Music Upload Shows here.</h1>
        <div className='detail-user-songs'>
            <img className='detail-song-img' src='url.com' alt='song image' />
            <h3 className='detail-song-title'>song title</h3>
            <h3 className='detail-song-audio'>song audio</h3>

            <div className='detail-song-reviews'>
                <Link className='detail-review-link' to="/reviewform" >Leave A Review</Link>
                <h3 className='detail-song-review-title'>Review Title</h3>
                <h6 className='detail-song-review-user'>Reviewing User's name</h6>
                <h5 className='detail-song-review-check'>Marked off Review Form Answer</h5>
                <p className='detail-song-review'>Review goes here</p>
            </div>
            
        </div>

        
        </div>
    


  </div>
  </Layout>
}
