import React, { useEffect  , useState} from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router';
import { getMusician, getSong } from '../../services';
import '../Detail/Detail.css'
import Delete from '../Delete/Delete.jsx'





export default function Detail() {
    const [musician, setMusician] = useState({})
    const [song, setSong] = useState({})
    

  const params = useParams();

  useEffect(() => {
    const getEachOne = async () => {
      const res = await getMusician(params.musician_id);
      setMusician(res);
     
    };
    getEachOne();
  }, [params.id]);
  
  
  useEffect(() => {
      const getEachSong = async () => {
          const res = await getSong(params.song_id);
          setSong(res)
          

      }
      getEachSong();
  },[params.id])

  

  return( <Layout>
  <div className='detail'>
  <div className='detail-card'>
      <div className='detail-title'>
      <h1>{musician.name}</h1>
      </div>
      <div className='detail-image'>
      <img className='detail-user-image' src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="user-img"/>
      </div>
      <div className='detail-bio-career'>
        <h3 className='detail-bio'>{musician.bio}</h3>
        <h3 className='detail-career'>{musician.career}</h3>
        </div>
      </div>

    <div className='detail-music'>
        <h1>LiSTNr's Sounds.</h1>
        <div className='detail-user-songs'>
            <div className='div-song-details'>
            <img className='detail-song-img' src={song.image} alt='music pic' />
            <h2 className='detail-song-title'>{song.title}</h2>
            <h3 className='detail-song-audio'><a href={song.audio} >{song.audio}</a></h3>
            </div>
            <Link to={`/edit-song/${params.song_id}`} ><button className='delete-btn'>Edit</button></Link>
            <Delete />

            <div className='detail-song-reviews'>
                <Link className='detail-review-link' to="/reviewform" >Leave A Review</Link>
               
                
                <h5 className='detail-song-review-check'>Marked off Review Form Answer</h5>
                <p className='detail-song-review'>Review goes here</p>
            </div>
            
        </div>

        
        </div>
    


  </div>
  </Layout>
  )
}
