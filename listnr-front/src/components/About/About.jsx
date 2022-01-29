import React from 'react';
import Layout from '../Layout/Layout';

export default function About() {
  return <Layout>
  <div className='about'>
      <div className='about-img'>
          <img className='about-img' src='url.com' alt='img of me'/>
          <div className='about-paragraph'>
              <h4 className='about-paragraph-text'>This app was created to blah blah.</h4>
          </div>
    <div className='about-me-links'>
        <h2>Github Link</h2>
        <h2>Linkedin Link</h2>
    </div>

      </div>
  </div>;
  </Layout>
}
