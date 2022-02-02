import React from 'react';
import Layout from '../Layout/Layout';
import '../About/About.css'

export default function About() {
  return <Layout>
  <div className='about'>
      <div className='about-img'>
          <img className='about-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDy8wRGCISt_nNtfAcg2dq1z0JngCo5mjdKhlNFnPSwizgQEXzhpuJacdXXFw_Lxiyog&usqp=CAU' alt='img of me'/>
          <div className='about-paragraph'>
              <h4 className='about-paragraph-text'>This app was created to allow musicians, artists, and fellow lovers of music all across the board a place to submit their personal work for review. Peer
              reviewed work often leads to better sounding music, and awesome long term relationships. On my website one will be able to post songs, recieve reviews, and comment on other's work.</h4>
          </div>
    <div className='about-me-links'>
       <label> <h2 className='about-paragraph-text' >My Github:</h2></label>
        
       <label><h2 className='about-paragraph-text'>My Linkedin:</h2></label>

    </div>

      </div>
  </div>
  </Layout>
}
