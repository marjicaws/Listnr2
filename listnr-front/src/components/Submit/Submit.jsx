import { useState } from "react";
import { createSongPost } from "../../services";
import Layout from "../Layout/Layout";
import { useNavigate } from 'react-router-dom'

export default function Submit({ musicians }) {
  const [audio, setAudio] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [musicianId, setMusicianId] = useState(null);

  let navigate = useNavigate();

  const handleChange = (e) => {
    const {  selectedIndex, childNodes } = e.target;

    const id = Number(childNodes[selectedIndex].id);
    setMusicianId(id)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSubmit = {
      audio,
      title,
      image,
      listnr: musicianId,
    };
    await createSongPost(newSubmit);
    navigate("/")
  };

  return (
    <Layout>
      <div>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-title-container">
            <h1 className="form-title">Submit a Song for Review</h1>
          </div>
          <div className="form-input-container">
            <input
              className="form-input-title"
              value={title}
              type="text"
              placeholder="Song Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="form-input-image"
              value={image}
              type="text"
              placeholder="Artwork"
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              className="form-input-url"
              value={audio}
              type="text"
              placeholder="Url to song"
              onChange={(e) => setAudio(e.target.value)}
            />
            <h3 className="form-upload-title">Or... upload a file</h3>

            <select onChange={handleChange}>
              {musicians.map((musician) => (
                <option id={musician.id} value={musician.name}>
                  {musician.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
}
