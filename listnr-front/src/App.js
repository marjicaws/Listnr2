import './App.css';
import { useState , useEffect} from 'react';
import { getMusicians } from './services';
import { Routes, Route} from 'react-router-dom'
import Detail from './components/Detail/Detail';
import About from './components/About/About'
import Review from './components/Review/Review';
import Submit from './components/Submit/Submit';
import Home from './components/Home/Home';


function App() {
  const [musicians, setMusicians] = useState([]);
  
  useEffect(() => {
    const getAllMusicians = async () => {
      
      const res = await getMusicians();
      setMusicians(res.data)
      console.log(res)
    }
    getAllMusicians();
  }, [])


  return (
    
    <div className="App">

<Routes>
  <Route path="/detail" element={<Detail />} />
  <Route path="/about" element={<About />} />
  <Route path="/reviewform" element={<Review />} />
  <Route path="/submitmusic" element={<Submit />} />
  <Route path='/' element={<Home />}/>
</Routes>
  
  
    </div>
  );
}

export default App;
