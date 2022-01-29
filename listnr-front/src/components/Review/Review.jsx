import React from 'react';
import Layout from '../Layout/Layout';

export default function Review() {
  return <Layout>
  <div className='review'>
<div className='review-form'>
    <div className='review-form-title'>
    <h1 className='review-title'>Review Form</h1>
    </div>
    <div className='review-form-inputs'>
    <input className='review-inputs-title' type='text' placeholder='Review Title'/>
    <input className='review-inputs-checkbox' type='checkbox' name='Mixing Error'/>Mix Error
    <input className='review-inputs-checkbox' type='checkbox' name='Mixing Error'/>Recording Error
    <input className='review-inputs-checkbox' type='checkbox' name='Mixing Error'/>Writing Feedback
    <textarea className='review-inputs-text' type='text' placeholder='Review'/>
    </div>

    
</div>
  </div>;
  </Layout>
}
