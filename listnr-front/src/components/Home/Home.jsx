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
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const grabMusicians = async () => {
    const res = await getMusicians();
    setMusicans(res);
    console.log(res);
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
        {musicians?.map((musician) => {
            return (
                <div>
                <h1>{musician.name}</h1>
                {songs?.map((song) => {
                    if (song.title === musician.songs[0]) {
                        return(
                            <div>
                            <h3 className="home-card-title">{song.title}</h3>
                            <img className="home-card-image" src={song.image}/>
                            <p className="home-card-audio">{song.audio}</p>
                            </div>
                        )
                    }
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
