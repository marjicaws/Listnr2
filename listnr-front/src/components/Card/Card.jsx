
import { Link } from 'react-router-dom';



export default function Card({musician},{song}) {
console.log(musician);



    
  return (<div className='main-container'>
      <div className='card-container'>
      <p>{musician.name}</p>
      


          <Link to='/detail/:id'>
              <div className='img-container'>
            <img src={song.image} alt='song-img' />
            </div>
          </Link>
          <div className='title-container'>
              <h4 className='card-title'>{song.title}</h4>
          </div>
          <div className='audio-playback-link-container'>
            <h5>{song.audio}</h5>
          </div>
      </div>
  </div>
  )
}
