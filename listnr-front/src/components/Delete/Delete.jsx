
import React from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import {  deleteSongPost } from '../../services/index';

export default function Delete() {

    const params = useParams()
    const navigate = useNavigate()

    // const deleteSong = async () => {
    //   const url = `http://localhost:8000/songs/${musician.id}`
    //   await axios.delete(url)
    // }

    const handleDelete = () => {
        deleteSongPost(params.song_id)
        navigate('/')
    }

  return (<div className='delete-me'>
<button className='delete-button'onClick={handleDelete}>Delete</button>
  </div>);
}
