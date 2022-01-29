import React from 'react';
import Layout from '../Layout/Layout';

function Submit() {
  return <Layout>
  <div>
    <form className='form-container'>
        <div className='form-title-container'>
        <h1 className='form-title'>Submit a Song for Review</h1>
        </div>
        <div className='form-input-container'>
        <input className='form-input-title' type='text' placeholder='Song Title'/>
        <input className='form-input-url' type='url' placeholder='Url to song'/>
        <h3 className='form-upload-title'>Or... upload a file</h3>
        <input className='form-input-upload' type='file' placeholder='Upload File'/>
        </div>
    </form>
  </div>
  </Layout>
}

export default Submit;
