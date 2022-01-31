import React from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import {  deleteSongPost } from '../../services/index';

export default function Delete() {

    const params = useParams()
    const navigate = useNavigate()

    const handleDelete = () => {
        deleteSongPost(params.id)
        navigate('/')
    }

  return (<div className='delete-me'>
<button className='delete-button'onClick={handleDelete}>Delete</button>
  </div>);
}
