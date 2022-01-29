import './App.css';
import { useState , useEffect} from 'react';
import { grabMusic } from './services';


function App() {
  const [music, setMusic] = useState([]);
  
  useEffect(() => {
    const getAllMusic = async () => {
      
      const res = await grabMusic();
      setMusic(res.listnr)
      console.log(res.listnr)
    }
    getAllMusic();
  })


  return (
    
    <div className="App">

  
  
    </div>
  );
}

export default App;
