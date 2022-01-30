import "./App.css";
import { useState, useEffect } from "react";
import { getMusicians } from "./services";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Review from "./components/Review/Review";
import Submit from "./components/Submit/Submit";
import Home from "./components/Home/Home";



function App() {
  const [musicians, setMusicians] = useState([]);
  

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
        <Route path={`/detail/:id`} element={<Detail musicians={musicians} setMusicians={setMusicians} />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviewform" element={<Review />} />
        <Route path="/submitmusic" element={<Submit />} />
        <Route path="/" element={<Home musicians={musicians} setMusicians={setMusicians} />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
