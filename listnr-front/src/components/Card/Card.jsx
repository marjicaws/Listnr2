
import { Link } from 'react-router-dom';



export default function Card({musician}) {
console.log(musician);


    
  return (<div className='main-container'>
      <div className='card-container'>
      <p>{musician.name}</p>


          <Link to='/detail/:id'>
              <div className='img-container'>
            <img src='url.com' alt='song-img' />
            </div>
          </Link>
          <div className='title-container'>
              <h4 className='card-title'></h4>
          </div>
          <div className='audio-playback-link-container'>
            <h5>Audio plays from here.</h5>
          </div>
      </div>
  </div>
  )
}
