import "./App.css";
import { useState, useEffect } from "react";
import { getMusician, getMusicians } from "./services";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Review from "./components/Review/Review";
import Submit from "./components/Submit/Submit";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import EditSubmit from "./components/EditSubmit/EditSubmit";



function App() {
  const [musicians, setMusicians] = useState([]);
  const [musician, setMusician ] = useState([])

  
  



  useEffect(() => {
    const getAllMusicians = async () => {
      const res = await getMusicians();
      setMusicians(res);
      console.log(res);
    };
    getAllMusicians();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/song-detail/:song_id/musician/:musician_id" element={<Detail musicians={musicians} setMusicians={setMusicians} />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviewform" element={<Review />} />
        <Route path="/submitmusic" element={<Submit musicians={musicians}/>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit-song/:id" element={<EditSubmit musicians={musicians} />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
