import searchIcon from "../assets/magnifying-glass.svg";
import homeIcon from "../assets/house.svg";
import movieIcon from "../assets/film-slate.svg";
import monitorIcon from "../assets/monitor.svg";
import plusIcon from "../assets/plus.svg";
import trendupIcon from "../assets/trend-up.svg";
import aadTitle from "../assets/hun.jpg";
import churuli from "../assets/1.jpg"
import pulimurugan from"../assets/black.jpg"
import biju from"../assets/bleach.jpg"
import suresh from "../assets/jojo.jpg"
import putturumees from"../assets/dra.jpg"

import'./home.css';

function Home() {
  return (
   <div className="netflix">
    <div className="sidebar">
     <img src={searchIcon} alt="searchIcon" />
     <img src={homeIcon} alt="homeIcon" />
     <img src={movieIcon} alt="movieIcon" />
     <img src={monitorIcon} alt="monitorIcon" />
     <img src={plusIcon} alt="plusIcon" />
    <img src={trendupIcon} alt="trendupIcon" />
    </div>
    <div className="home-main">
      <div className="hero">
          <img src={aadTitle} alt="" />
          <p>Rating : 6/10</p>
          <p>2M Streams</p>
          <div className="hero-button">
            <button className="playbutton">Play</button>
            <button className="trailerbutton">Watch Trailer</button>
          </div>
      </div>
      <div className="movies">
      <h1> New this week</h1>
      <div className="list">
        <img src={churuli} alt="" />
        <img src={biju} alt="" />
        <img src={pulimurugan} alt="" />
        <img src={suresh} alt="" />
        <img src={putturumees} alt="" />
      </div>
    </div>
    </div>
    
  </div>
  ) 
}

export default Home