import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "../Home/Home.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMusicians, getSongs } from "../../services";

export default function Home() {
  ////////////////////////////////////////States////////////////////////////

  const [musicians, setMusicans] = useState([]);
  const [songs, setSongs] = useState([]);

  ////////////////////////////////////////////////////

  useEffect(() => {
    const grabMusicians = async () => {
      const res = await getMusicians();
      setMusicans(res);
    };
    grabMusicians();
  }, []);

  useEffect(() => {
    const grabSongs = async () => {
      const res = await getSongs();
      setSongs(res);
      console.log(res);
    };
    grabSongs();
  }, []);

  ///////////////////////////////////////////////////

  return (
    <Layout>
      <div className="home-container">
        <div className="home-nav-container">
          <div className="home-nav">
            <img
              className="home-container-img"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            />

            <div className="dummy-links">
              <ul className="dummy-links">
                <li>
                  <Link className="home-submit-link" to="/submitmusic">
                    <h2> Submit your own music</h2>
                  </Link>
                </li>
                <li>
                  <a className="dummy-link1" href="/">
                    <h2 className="home-link"> Fan Favorites</h2>
                  </a>
                </li>
                <li>
                  <a className="dummy-link2" href="/">
                    <h2 className="home-link">Recents</h2>
                  </a>
                </li>
                <li>
                  <a className="dummy-link3" href="/">
                    <h2 className="home-submit-link">Your Page</h2>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="banner-img-container">
          <img
            className="banner-img"
            src="https://fdn.gsmarena.com/imgroot/news/21/08/spotify-testing-plus-subscription/popup/-x1052/gsmarena_001.jpg"
            alt="banner"
          />
        </div>
        <div>
          {musicians?.map((musician) => {
            return (
              <div>
                {musician.songs?.map((song) => {
                  //   if (song?.title === musician.songs[0]) {
                  return (
                    <>
                      <Link to={`song-detail/${song.id}/musician/${musician.id}`}>
                        <h1 className="home-card-name">{musician.name}</h1>
                      </Link>
                      <div className="home-card-container">
                        <h2 className="home-card-title">{song.title}</h2>
                        <img className="home-card-image" src={song.image} />
                        <Link
                          to={`song-detail/${song.id}/musician/${musician.id}`}
                          className="home-card-audio"
                        >
                          {song.audio}
                        </Link>
                      </div>
                    </>
                  );
                  //   }
                })}
                {/* {songs?.map((song) => {
            return (
                <div className="home-card-detail">

                    <h3 className="home-card-title">{song.title}</h3>
                    <img className="home-card-image" src={song.image}/>
                    <p className="home-card-audio">{song.audio}</p>

                    </div>
            )
          })} */}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
