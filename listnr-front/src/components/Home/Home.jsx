import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "../Home/Home.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMusicians, getSongs } from "../../services";

export default function Home() {
  const [musicians, setMusicans] = useState([]);
  const [songs , setSongs] = useState([])

  useEffect(() => {
    const grabMusicians = async () => {
      const res = await getMusicians();
      setMusicans(res);
      console.log(res);
    };
    grabMusicians();
  }, []);

  useEffect(() =>{
      const grabSongs = async () => {
          const res = await getSongs();
          setSongs(res);
          console.log(res)

      }
      grabSongs();
  }, [])
  return (
    <Layout>
      <div className="home-container">
        <div className="home-nav-container">
          <Link className="home-submit-link" to="/submitmusic">
            Submit your own music
          </Link>
          <a className="dummy-link" href="/">
            Fan Favorites
          </a>

          <a className="dummy-link" href="/">
            Recents
          </a>
          <a className="dummy-link" href="/">
            Your Page
          </a>
        </div>

        <div className="banner-img-container">
          <img src="url.com" alt="banner" />
        </div>
        <div className="home-card-container">
          <h1></h1>
          {songs?.map((song) => {
              return (
                  <div>
                      <p>{song.title}</p>
                      <p>{song.image}</p>
                      <p>{song.audio}</p>

                       </div>
              )
          })}

          {musicians?.map((musician) => {
            return (
              <div>
                <p>{musician.name}</p>
                
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
