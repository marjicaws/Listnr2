import React, { useEffect  , useState} from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router';
import { getMusician, getReviews, getSong } from '../../services';
import '../Detail/Detail.css'
import Delete from '../Delete/Delete.jsx'
import EditSubmit from '../EditSubmit/EditSubmit';




export default function Detail() {
    const [musician, setMusician] = useState({})
    const [song, setSong] = useState({})
    const [review, setReview] = useState({})

  const params = useParams();

  useEffect(() => {
    const getEachOne = async () => {
      const res = await getMusician(params.id);
      setMusician(res);
      console.log(res);
    };
    getEachOne();
  }, [params.id]);
  console.log(musician);
  
  useEffect(() => {
      const getEachSong = async () => {
          const res = await getSong(params.id);
          setSong(res)
          console.log(res)

      }
      getEachSong();
  },[params.id])

  useEffect(() => {
      const getEachReview = async () => {
          const res = await getReviews()
          setReview(res)
          console.log(res)

      }
      getEachReview()
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
        <h1>Music Upload Shows here.</h1>
        <div className='detail-user-songs'>
            <div className='div-song-details'>
            <img className='detail-song-img' src={song.image} alt='song image' />
            <h3 className='detail-song-title'>{song.title}</h3>
            <h3 className='detail-song-audio'>{song.audio}</h3>
            </div>
            <Link to={`/detail/edit/${song.id}`} ><button className='delete-btn'>Edit</button></Link>
            <Delete />

            <div className='detail-song-reviews'>
                <Link className='detail-review-link' to="/reviewform" >Leave A Review</Link>
               
                <h3 className='detail-song-review-title'>{review.title}</h3>
                <h6 className='detail-song-review-user'>{review.review}</h6>
                <h5 className='detail-song-review-check'>Marked off Review Form Answer</h5>
                <p className='detail-song-review'>Review goes here</p>
            </div>
            
        </div>

        
        </div>
    


  </div>
  </Layout>
  )
}
